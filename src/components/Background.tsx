"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: "primary" | "light" | "dark" | "white";
  angle: number;
  amplitude: number;
  frequency: number;
}

interface ParticleConfig {
  count: number;
  baseSpeed: number;
  glowRadius: number;
  trailLength: number;
  waveAmplitude: number;
  waveFrequency: number;
  fadeOpacity: number;
  colorDistribution: {
    primary: number;
    light: number;
    dark: number;
    white: number;
  };
}

const CONFIG = {
  subtle: {
    count: 60,
    baseSpeed: 0.1,
    glowRadius: 1.5,
    trailLength: 2,
    waveAmplitude: 0.3,
    waveFrequency: 0.003,
    fadeOpacity: 0.03,
    colorDistribution: {
      primary: 0.4,
      light: 0.3,
      dark: 0.2,
      white: 0.1,
    },
  },
  liquid: {
    count: 150,
    baseSpeed: 0.3,
    glowRadius: 3,
    trailLength: 5,
    waveAmplitude: 2,
    waveFrequency: 0.02,
    fadeOpacity: 0.1,
    colorDistribution: {
      primary: 0.35,
      light: 0.35,
      dark: 0.2,
      white: 0.1,
    },
  },
};

// Fixed color values with consistent opacity
const COLORS = {
  primary: "rgba(56, 189, 248, 0.4)", // #38BDF8
  light: "rgba(103, 232, 249, 0.4)", // #67E8F9
  dark: "rgba(34, 211, 238, 0.4)", // #22D3EE
  white: "rgba(255, 255, 255, 0.4)",
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);
  const lastScrollTime = useRef<number>(0);
  const [isLiquidMode, setIsLiquidMode] = useState(false);
  const [showValveButton, setShowValveButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith("/docs");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsLiquidMode(params.get("liquid") === "true");

    const checkMobile = () => {
      setShowValveButton(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "l") {
        toggleLiquidMode();
      }
    };

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 16) return;
      lastScrollTime.current = now;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLiquidMode = () => {
    setIsLiquidMode((prev) => {
      const newMode = !prev;
      const newParams = new URLSearchParams(window.location.search);
      if (newMode) {
        newParams.set("liquid", "true");
      } else {
        newParams.delete("liquid");
      }
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${newParams.toString()}`,
      );
      return newMode;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const config: ParticleConfig = isLiquidMode ? CONFIG.liquid : CONFIG.subtle;

    const getRandomColor = (): "primary" | "light" | "dark" | "white" => {
      const rand = Math.random();
      const { colorDistribution } = config;
      if (rand < colorDistribution.primary) return "primary";
      if (rand < colorDistribution.primary + colorDistribution.light)
        return "light";
      if (
        rand <
        colorDistribution.primary +
          colorDistribution.light +
          colorDistribution.dark
      )
        return "dark";
      return "white";
    };

    const createParticle = (): Particle => {
      const size = Math.random() * 2 + 1;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * config.baseSpeed,
        speedY: (Math.random() - 0.5) * config.baseSpeed,
        opacity: Math.random() * 0.5 + 0.1,
        color: getRandomColor(),
        angle: Math.random() * Math.PI * 2,
        amplitude: Math.random() * config.waveAmplitude + 0.5,
        frequency: Math.random() * config.waveFrequency + 0.005,
      };
    };

    const initParticles = () => {
      particlesRef.current = Array.from(
        { length: config.count },
        createParticle,
      );
    };

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;

      const scrollOpacity = Math.max(0, Math.pow(1 - scrollProgress * 1.5, 2));
      const particleOpacity = particle.opacity * scrollOpacity;

      if (particleOpacity < 0.01) return;

      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.size * scrollOpacity,
        0,
        Math.PI * 2,
      );

      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * config.glowRadius * scrollOpacity,
      );

      const baseColor = COLORS[particle.color];
      const colorValues = baseColor.match(/[\d.]+/g) || [
        "255",
        "255",
        "255",
        "0.4",
      ];

      gradient.addColorStop(0, baseColor);
      gradient.addColorStop(
        0.3,
        `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, 0.3)`,
      );
      gradient.addColorStop(
        0.7,
        `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, 0.1)`,
      );
      gradient.addColorStop(
        1,
        `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, 0)`,
      );

      ctx.fillStyle = gradient;
      ctx.fill();

      if (isLiquidMode && particle.color !== "white" && scrollOpacity > 0.3) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(
          particle.x - particle.speedX * config.trailLength * scrollOpacity,
          particle.y - particle.speedY * config.trailLength * scrollOpacity,
        );
        ctx.strokeStyle = `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, 0.1)`;
        ctx.lineWidth = particle.size * 0.5 * scrollOpacity;
        ctx.stroke();
      }
    };

    const updateParticle = (particle: Particle) => {
      const speedMultiplier = Math.max(0.3, 1 - scrollProgress);

      particle.angle += particle.frequency * speedMultiplier;
      const waveOffset =
        Math.sin(particle.angle) * particle.amplitude * speedMultiplier;

      particle.x += particle.speedX * speedMultiplier;
      particle.y += (particle.speedY + waveOffset) * speedMultiplier;
      particle.y +=
        Math.sin(timeRef.current * 0.001 + particle.x * 0.01) *
        0.2 *
        speedMultiplier;

      if (particle.x < -50) particle.x = canvas.width + 50;
      if (particle.x > canvas.width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = canvas.height + 50;
      if (particle.y > canvas.height + 50) particle.y = -50;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgb(15, 23, 42)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 1;

      particlesRef.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLiquidMode, scrollProgress]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {!isDocsPage && showValveButton && (
        <button
          onClick={toggleLiquidMode}
          className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group"
          aria-label="Toggle liquid mode"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform duration-500 ${isLiquidMode ? "rotate-180" : ""}`}
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              className="fill-neutral-400 group-hover:fill-primary transition-colors"
            />
            <path
              d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              className="fill-neutral-400 group-hover:fill-primary transition-colors"
            />
            <path
              d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              className="fill-neutral-400 group-hover:fill-primary transition-colors"
            />
          </svg>
        </button>
      )}
      {!isDocsPage && !showValveButton && (
        <div className="fixed bottom-4 right-4 z-50 text-xs text-neutral-400">
          Press Alt + L to toggle liquid mode
        </div>
      )}
    </>
  );
}

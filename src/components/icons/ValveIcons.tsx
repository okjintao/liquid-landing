"use client";

interface IconProps {
  className?: string;
}

export const BurnIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base glow */}
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
      fill="currentColor"
      className="text-cyan-200 opacity-10"
      style={{ filter: "blur(4px)" }}
    />

    {/* Main flame shape */}
    <path
      d="M12 3C9.24 3 7 5.24 7 8c0 1.9.95 3.57 2.4 4.6V14c0 .28.22.5.5.5h4.2c.28 0 .5-.22.5-.5v-1.4C16.05 11.57 17 9.9 17 8c0-2.76-2.24-5-5-5z"
      fill="currentColor"
      className="text-cyan-300"
    />

    {/* Inner flame */}
    <path
      d="M12 4C10.34 4 9 5.34 9 7c0 1.2.6 2.26 1.52 2.91V11c0 .17.13.3.3.3h2.36c.17 0 .3-.13.3-.3V9.91C14.4 9.26 15 8.2 15 7c0-1.66-1.34-3-3-3z"
      fill="currentColor"
      className="text-cyan-200"
    />

    {/* Flame tips */}
    <path
      d="M12 2L10 5L12 7L14 5L12 2z"
      fill="currentColor"
      className="text-cyan-300"
    />

    {/* Abstract flame elements */}
    <path
      d="M8 6C8 6 9 7 10 6C11 5 12 6 12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="text-cyan-200"
    />
    <path
      d="M14 6C14 6 15 7 16 6C17 5 18 6 18 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="text-cyan-200"
    />

    {/* Dynamic glow effect */}
    <path
      d="M12 3C9.24 3 7 5.24 7 8c0 1.9.95 3.57 2.4 4.6V14c0 .28.22.5.5.5h4.2c.28 0 .5-.22.5-.5v-1.4C16.05 11.57 17 9.9 17 8c0-2.76-2.24-5-5-5z"
      fill="currentColor"
      className="text-cyan-200 opacity-20"
      style={{ filter: "blur(2px)" }}
    />

    {/* Abstract lines */}
    <path
      d="M7 8L9 10M15 8L17 10"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className="text-cyan-300 opacity-50"
    />
    <path
      d="M8 11L10 13M14 11L16 13"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      className="text-cyan-300 opacity-50"
    />
  </svg>
);

export const CommissionIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-cyan-300"
    />
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-cyan-200 opacity-50"
      style={{ filter: "blur(2px)" }}
    />
  </svg>
);

export const RewardIcon = ({ className = "w-8 h-8" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
      fill="currentColor"
      className="text-cyan-300"
    />
    <path
      d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
      fill="currentColor"
      className="text-cyan-200 opacity-50"
      style={{ filter: "blur(2px)" }}
    />
  </svg>
);

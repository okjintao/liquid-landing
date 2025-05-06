import { twMerge } from 'tailwind-merge';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  glow = false,
  icon,
  iconOnly = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  const iconClasses = icon ? 'btn-icon' : '';
  const iconOnlyClasses = iconOnly ? 'btn-icon-only' : '';
  const glowClasses = glow ? 'btn-glow' : '';

  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    iconClasses,
    iconOnlyClasses,
    glowClasses,
    className
  );

  return (
    <button className={classes} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {!iconOnly && <span>{children}</span>}
    </button>
  );
}

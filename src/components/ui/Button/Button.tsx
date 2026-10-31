import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

/**
 * Reusable Centralized Button Component
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  disabled = false,
  icon = null,
  onClick,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'border border-[var(--border-brand)] text-[var(--text-brand)] bg-transparent hover:bg-[var(--bg-subtle)]',
    link: 'btn-link',
  };

  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn ${variantClasses[variant] || 'btn-primary'} ${sizeClasses[size] || ''} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex ms-2">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;

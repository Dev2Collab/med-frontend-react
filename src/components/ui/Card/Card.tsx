import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'overlay' | 'gray';
}

/**
 * Reusable Card component
 */
export function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'card',
    overlay: 'overlay-card',
    gray: 'gray-card',
  };

  return (
    <div
      onClick={onClick}
      className={`${variantClasses[variant] || 'card'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

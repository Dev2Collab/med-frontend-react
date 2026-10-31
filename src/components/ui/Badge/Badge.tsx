import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'accent' | 'gold' | 'success' | 'gray';
}

/**
 * Badge Component
 */
export function Badge({
  children,
  variant = 'primary',
  className = '',
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: 'bg-[var(--color-primary-50)] text-[var(--color-brand)] border border-[var(--color-primary-100)]',
    accent: 'bg-[var(--color-teal-50)] text-[var(--color-accent)] border border-[var(--color-teal-100)]',
    gold: 'bg-amber-50 text-amber-700 border border-amber-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    gray: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
        variantStyles[variant] || variantStyles.primary
      } ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;

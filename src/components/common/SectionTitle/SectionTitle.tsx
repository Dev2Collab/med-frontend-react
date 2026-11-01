export interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'right' | 'left';
  className?: string;
}

/**
 * SectionTitle Component
 */
export function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    right: 'text-right items-start',
    left: 'text-left items-end',
  };

  return (
    <div className={`flex flex-col mb-12 max-w-2xl ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <span className="btn-gold text-xs px-4 py-1.5 rounded-full mb-3 inline-block font-bold">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-black text-[var(--primary-color)] mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;

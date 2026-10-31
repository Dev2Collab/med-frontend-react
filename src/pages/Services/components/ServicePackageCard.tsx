import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { ROUTES } from '../../../constants/navigation';

export interface ServicePackage {
  id: string;
  badge?: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  price: string;
  priceLabel?: string;
  icon: React.ReactNode;
}

export interface ServicePackageCardProps {
  pkg: ServicePackage;
}

export function ServicePackageCard({ pkg }: ServicePackageCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-8 border border-border-default shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-right relative group">
      <div>
        {/* Top Header: Badge & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand flex items-center justify-center text-xl group-hover:bg-brand group-hover:text-white transition-colors duration-300">
            {pkg.icon}
          </div>

          {pkg.badge && (
            <span className="text-[11px] font-bold text-brand bg-brand-subtle border border-primary-100 px-3 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-heading mb-2 group-hover:text-brand transition-colors">
          {pkg.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-body leading-relaxed mb-6">
          {pkg.description}
        </p>

        {/* Feature List */}
        <div className="space-y-2.5 mb-8">
          {pkg.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-body">
              <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] shrink-0 font-bold">
                <FaCheck />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing and Action */}
      <div className="pt-5 border-t border-border-default flex items-center justify-between">
        <div>
          <span className="text-[11px] text-muted block">
            {pkg.priceLabel || 'سعر الكشف'}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-brand">
              {pkg.price}
            </span>
            <span className="text-xs font-bold text-muted">ج.م</span>
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          className="!bg-brand-dark hover:!bg-brand !text-white font-bold rounded-xl px-6 py-2.5 text-xs shadow-xs"
          onClick={() =>
            navigate(
              `${ROUTES.APPOINTMENTS}?department=${encodeURIComponent(pkg.category)}`
            )
          }
        >
          احجز الآن
        </Button>
      </div>
    </div>
  );
}

export default ServicePackageCard;

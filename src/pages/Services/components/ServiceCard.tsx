import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { ROUTES } from '../../../constants/navigation';
import { Service } from '../../../types';

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="p-8 border border-[var(--border-gold)] rounded-3xl bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-20 h-20 rounded-2xl bg-[var(--gold-light)] border border-[var(--border-gold)] p-3 flex items-center justify-center">
            <img
              src={service.iconImage}
              alt={service.title}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/default.png';
              }}
            />
          </div>
          <Badge variant="gold">{service.category}</Badge>
        </div>

        <h3 className="text-2xl font-black text-[var(--primary-color)] mb-3">
          {service.title}
        </h3>
        <p className="text-sm font-semibold text-[var(--primary-text)] mb-3">
          {service.subtitle}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature bullets */}
        <div className="space-y-2 mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                <FaCheck className="text-[10px]" />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-100">
        <Button
          variant="primary"
          size="md"
          className="w-full"
          onClick={() =>
            navigate(
              `${ROUTES.APPOINTMENTS}?department=${encodeURIComponent(service.category)}`
            )
          }
        >
          طلب حجز في هذا القسم
        </Button>
      </div>
    </Card>
  );
}

export default ServiceCard;

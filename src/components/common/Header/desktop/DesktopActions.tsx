import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../constants/navigation';
import { Button } from '../../../ui/Button';

// Desktop CTA button - visible on medium screens and up
export function DesktopActions() {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center gap-3">
      <Button
        variant="primary"
        size="md"
        className="!bg-brand hover:!bg-brand-hover !text-white font-bold rounded-xl shadow-xs text-sm py-2.5 px-5 cursor-pointer"
        onClick={() => navigate(ROUTES.APPOINTMENTS)}
      >
        احجز موعدك
      </Button>
    </div>
  );
}

export default DesktopActions;


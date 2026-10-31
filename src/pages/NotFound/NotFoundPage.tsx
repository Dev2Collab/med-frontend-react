import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ROUTES } from '../../constants/navigation';
import { usePageTitle } from '../../hooks/usePageTitle';

export function NotFoundPage() {
  usePageTitle('الصفحة غير موجودة');
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-white text-center">
      <div className="container mx-auto px-4 max-w-lg space-y-6">
        <img
          src="/images/error.png"
          alt="صفحة غير موجودة"
          className="w-48 h-48 mx-auto object-contain"
        />
        <h1 className="text-4xl font-black text-[var(--primary-color)]">
          عذراً، الصفحة غير موجودة
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          يبدو أن الرابط الذي حاولت الوصول إليه قد تم نقله أو تغييره، أو ربما كتبت العنوان بشكل غير دقيق.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button variant="primary" size="md" onClick={() => navigate(ROUTES.HOME)}>
            العودة إلى الصفحة الرئيسية
          </Button>
          <Button variant="outline" size="md" onClick={() => navigate(ROUTES.CONTACT)}>
            مركز المساعدة
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

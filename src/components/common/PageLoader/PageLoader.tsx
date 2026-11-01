import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative w-16 h-16 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full rounded-full border-4 border-primary-100 border-t-brand"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-brand-subtle flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-brand animate-ping" />
          </div>
        </div>
      </div>
      <p className="text-muted text-xs font-bold tracking-wide">
        جاري تحميل الصفحة...
      </p>
    </div>
  );
}

export default PageLoader;


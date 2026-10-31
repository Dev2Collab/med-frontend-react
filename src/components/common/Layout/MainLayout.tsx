import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useScrollTop } from '../../../hooks/useScrollTop';

export function MainLayout() {
  useScrollTop();

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd] text-[#1a3c34]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

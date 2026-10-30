import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.10),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#f5f7fb_100%)] text-slate-800">
      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-1 flex-col px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <Outlet />
      </main>
    </div>
  )
}

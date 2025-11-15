import { Outlet } from 'react-router';
import Navbar from '../components/layout-components/Navbar';
import Footer from '../components/layout-components/Footer';

const RootLayout = () => (
  <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default RootLayout;

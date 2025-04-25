
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BannerAd from './ads/BannerAd';
import PounderAd from './ads/PounderAd';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <BannerAd />
      <main className="flex-1">
        {children}
      </main>
      <PounderAd />
      <Footer />
    </div>
  );
};

export default Layout;

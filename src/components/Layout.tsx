
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BannerAd from './ads/BannerAd';
import PounderAd from './ads/PounderAd';
import SocialBarAd from './ads/SocialBarAd';
import NativeBannerAd from './ads/NativeBannerAd';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <BannerAd />
      <SocialBarAd />
      <main className="flex-1">
        {children}
        <NativeBannerAd />
      </main>
      <PounderAd />
      <Footer />
    </div>
  );
};

export default Layout;


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdPlaceholder from './AdPlaceholder';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AdPlaceholder />
      <main className="flex-1">
        {children}
      </main>
      <AdPlaceholder />
      <Footer />
    </div>
  );
};

export default Layout;

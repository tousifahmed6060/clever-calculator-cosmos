
import React, { useEffect } from 'react';

const NativeBannerAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26477430.profitableratecpm.com/7bcbe28c9592aac71c42217bad2226e2/invoke.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div id="container-7bcbe28c9592aac71c42217bad2226e2"></div>
    </div>
  );
};

export default NativeBannerAd;


import React, { useEffect } from 'react';

declare global {
  interface Window {
    atOptions: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

const BannerAd = () => {
  useEffect(() => {
    // Configure ad options
    window.atOptions = {
      'key': 'c4c30c45e2606bbcb61906e55ad36b65',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Create and append the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/c4c30c45e2606bbcb61906e55ad36b65/invoke.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div id="banner-ad-container"></div>
    </div>
  );
};

export default BannerAd;

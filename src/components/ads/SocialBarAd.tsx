
import React, { useEffect } from 'react';

const SocialBarAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl26478495.profitableratecpm.com/dc/e7/bb/dce7bba1b51517088ad0a082249a4f8e.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div id="social-bar-container"></div>
    </div>
  );
};

export default SocialBarAd;

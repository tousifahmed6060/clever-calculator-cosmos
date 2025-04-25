
import React, { useEffect } from 'react';

const PounderAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl26477602.profitableratecpm.com/4e/39/85/4e3985002d17cebb6ec40f9498c47170.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div id="pounder-ad-container"></div>
    </div>
  );
};

export default PounderAd;

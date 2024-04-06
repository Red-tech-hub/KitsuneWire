import React from 'react';

const Footer = () => {
 return (
    <footer className="bg-zinc-800 text-white p-4 mt-20 sticky top-[100vh]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xs lg:text-base font-bold">Kitsune Wire</h2>
          </div>
          <div>
            <p className="text-xs lg:text-sm">&copy; 2024 Kitsune Wire. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
 );
};

export default Footer;

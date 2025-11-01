
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 text-center py-8">
      <div className="container mx-auto px-4">
        <p className="text-2xl font-['Playfair_Display'] mb-4">Forever Yours</p>
        <div className="flex justify-center space-x-6 mb-4">
          {/* Replace # with your actual social media links */}
          <a href="https://www.instagram.com/yajasjohrii/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Our Anniversary. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

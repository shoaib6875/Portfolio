import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Shoaib Akhtar</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference. 
            Always learning, always building, always improving.
          </p>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © 2025 Shoaib Akhtar. Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
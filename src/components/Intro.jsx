import React from 'react';

const Intro = ({ isDarkMode }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <div className="mb-8 fade-in">
        <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-white/30 floating pulse-glow">
          <span className="text-4xl">👨‍💻</span>
        </div>
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Hi, I'm <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Shoaib Akhtar</span>
        </h1>
        <div className={`text-xl md:text-2xl mb-8 h-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <span id="typing-text" className="typing-animation"></span>
        </div>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-200' : 'text-black'} opacity-40 backdrop-blur-md ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/70'} p-4 rounded-lg`}>
          B.Tech IT student at MSIT Delhi, skilled in MERN, AI, and DevOps. Open to global remote opportunities to build and collaborate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
import React from 'react';
const Navbar = React.forwardRef(({ isMobileMenuOpen, setIsMobileMenuOpen, isDarkMode, setIsDarkMode }, ref) => {
  return (
    <nav ref={ref} className={`fixed top-0 w-full z-50 ${isDarkMode ? 'bg-rose-950 text-white' : 'bg-emerald-200 text-gray-800'} shadow-md`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-transparent text-inherit">
          <span className={`${isDarkMode ? 'text-white' : 'text-gray-800'} bg-transparent text-inherit`}>Shoaib Akhtar</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#skills" className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Skills</a>
          <a href="#experience" className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Experience</a>
          <a href="#education" className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Education</a>
          <a href="#projects" className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Projects</a>
          <a href="#blogs" className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Blogs</a>
          <a href="#contact" className={`hover:text-purple-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact</a>
        </div>
        <div className="flex items-center">
          <div className="md:flex hidden items-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`ml-2 rounded-full ${isDarkMode ? 'bg-gray-400' : 'bg-gray-700'} hover:bg-opacity-80 transition-colors border-none`}
            >
              <img src={isDarkMode ? `${import.meta.env.BASE_URL}mode1.png` : `${import.meta.env.BASE_URL}mode.png`} alt="Theme Toggle" className="w-8 h-8 rounded-full object-cover border-none" />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`rounded-full ${isDarkMode ? 'bg-gray-400' : 'bg-gray-700'} hover:bg-opacity-80 transition-colors border-none`}
            >
              <img src={isDarkMode ? `${import.meta.env.BASE_URL}mode1.png` : `${import.meta.env.BASE_URL}mode.png`} alt="Theme Toggle" className="w-8 h-8 rounded-full object-cover border-none" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden transition-max-height duration-300 ease-in-out`} style={{ maxHeight: isMobileMenuOpen ? '300px' : '0' }}>
          <div className="pt-2">
            <a href="#skills" className={`block px-6 py-2 hover:bg-gray-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800'}`}>Skills</a>
            <a href="#experience" className={`block px-6 py-2 hover:bg-gray-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800'}`}>Experience</a>
            <a href="#education" className={`block px-6 py-2 hover:bg-gray-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800'}`}>Education</a>
            <a href="#projects" className={`block px-6 py-2 hover:bg-gray-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800'}`}>Projects</a>
            <a href="#blogs" className={`block px-6 py-2 hover:bg-gray-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800'}`}>Blogs</a>
            <a href="#contact" className={`block px-6 py-2 hover:bg-gray-200 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800'}`}>Contact</a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-full text-left px-6 py-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-opacity-80 transition-colors`}
            >
              {/* <img src={isDarkMode ? '/mode1.png' : '/mode.png'} alt="Theme Toggle" className={`w-12 h-12 ${isDarkMode ? 'scale-150' : ''} inline-block`} /> */}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
});

export default Navbar;
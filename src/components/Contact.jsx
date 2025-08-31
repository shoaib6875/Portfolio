import React from 'react';

const Contact = ({ isDarkMode }) => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Let's discuss your next project</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="fade-in">
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Email</p>
                <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>shoaibakhtar14082002@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Phone</p>
                <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 9650184650</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Location</p>
                <p className={`text-gray-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/shoaib-akhtar-a8a07b220/" className="w-10 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
                <span className="text-sm">💼</span>
              </a>
              <a href="https://github.com/shoaib" className="w-10 h-10 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
                <span className="text-sm">🐙</span>
              </a>
            </div>
          </div>
        </div>
        <div className="fade-in">
          <form className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} font-semibold mb-2`}>Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} font-semibold mb-2`}>Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
            </div>
            <div className="mb-6">
              <label className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} font-semibold mb-2`}>Subject</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Project Discussion" />
            </div>
            <div className="mb-6">
              <label className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} font-semibold mb-2`}>Message</label>
              <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Send Message
            </button>
            <p>Note: This is a demo mail form. Backend is not deployed, so messages won't be sent.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';

const Education = ({ isDarkMode }) => {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-20 fade-in">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Education Journey</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>My academic achievements</p>
      </div>
      <div className="relative">
        <div className="education-stairs">
          <div className="education-step step-1 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="step-content bg-gradient-to-br from-blue-50 to-indigo-100 px-8 py-5 rounded-2xl shadow-lg card-hover floating-1 ml-[10px]">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>B.Tech in Information Technology</h3>
              <p className={`text-lg text-blue-600 font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Maharaja Surajmal Institute of Technology, Delhi</p>
              <p className={`text-gray-500 mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2024 - 2027 (ongoing)</p>
              <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Pursuing a B.Tech with a focus on core subjects like programming, daya structure, mathematics, dbms ,web development and AI.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Object oriented programming</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Applied Mathematics</span>
                <span className="bg-purple-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Data stucture</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Java programming</span>
              </div>
            </div>
          </div>
          <div className="education-step step-2 fade-in relative" style={{ animationDelay: '0.4s' }}>
            <div className="step-content bg-gradient-to-br from-purple-50 to-violet-100 px-8 py-5 rounded-2xl shadow-lg card-hover floating-2 ml-[10px]">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Diploma in Computer Engineering</h3>
              <p className={`text-lg text-purple-600 font-semibold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Jamia Millia Islamia</p>
              <p className={`text-gray-500 mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>December 2020 - December 2023</p>
              <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Completed with a focus on software development, database management, and computer networking, laying a strong foundation for my B.Tech studies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Software Development</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Database Management</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Networking</span>
              </div>
            </div>
          </div>
        </div>
        <div className="education-connecting-line hidden md:block absolute left-1/2 transform -translate-x-1/2" style={{ top: '20px', height: '520px', width: '4px', background: 'linear-gradient(to bottom, #667eea, #764ba2)', borderRadius: '2px', zIndex: 0, boxShadow: '0 0 10px rgba(102, 126, 234, 0.3)' }}>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2" style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '12px solid #667eea', filter: 'drop-shadow(0 0 3px rgba(102, 126, 234, 0.4))' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
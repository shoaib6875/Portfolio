import React from 'react';

const Experience = ({ isDarkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Work Experience</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>My professional journey</p>
      </div>
      <div className="space-y-8">
        <div className="card-hover bg-white p-8 rounded-2xl shadow-lg fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Intern - DevOps</h3>
              <p className={`text-lg text-blue-600 font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Finkeda, Noida (Onsite)</p>
            </div>
            <div className={`text-gray-500 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>June 2025 - August 2025</div>
          </div>
          <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Worked on AWS services including EC2, Lambda, CI/CD pipelines, and AWS RDS. Gained hands-on experience in cloud deployment, automation, and database management during this internship.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CI/CD</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">DevOps</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">AWS RDS</span>
          </div>
        </div>
        <div className="card-hover bg-white p-8 rounded-2xl shadow-lg fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Freelance Web Developer</h3>
              <p className={`text-lg text-blue-600 font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Self-Employed</p>
            </div>
            <div className={`text-gray-500 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Feb 2024 - Oct 2024</div>
          </div>
          <p className={`text-gray-600 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Developed responsive websites for clients using the MERN stack, JavaScript, and Tailwind CSS, focusing on user-friendly designs and efficient backend solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">MERN</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
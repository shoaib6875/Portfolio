import React from 'react';

const Skills = ({ isDarkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Technical Skills</h2>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Technologies I work with</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card-hover bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl fade-in">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Frontend & Full Stack</h3>
          <div className="space-y-3">
            <div className="skill-item" data-skill="85">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>React.js</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-blue-600 h-2 rounded-full" data-width="60"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="80">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>MERN Stack</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-blue-600 h-2 rounded-full" data-width="40"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="80">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tailwind CSS</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-blue-600 h-2 rounded-full" data-width="70"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-hover bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl fade-in">
          <div className="text-3xl mb-4">⚙️</div>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Backend & DevOps</h3>
          <div className="space-y-3">
            <div className="skill-item" data-skill="80">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Node.js</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-green-600 h-2 rounded-full" data-width="60"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="75">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>MongoDB</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-green-600 h-2 rounded-full" data-width="75"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="80">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>AWS</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-green-600 h-2 rounded-full" data-width="20"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="75">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>DevOps/CI-CD</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-green-600 h-2 rounded-full" data-width="25"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-hover bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl fade-in">
          <div className="text-3xl mb-4">🛠️</div>
          <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-800' : 'text-gray-800'}`}>Programming & Tools</h3>
          <div className="space-y-3">
            <div className="skill-item" data-skill="85">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>JavaScript</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-purple-600 h-2 rounded-full" data-width="50"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="80">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Python</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-purple-600 h-2 rounded-full" data-width="30"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="75">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Java</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-purple-600 h-2 rounded-full" data-width="30"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="80">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Data Structures</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-purple-600 h-2 rounded-full" data-width="40"></div>
              </div>
            </div>
            <div className="skill-item" data-skill="85">
              <div className="flex justify-between mb-1">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Git/GitHub</span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="skill-bar bg-purple-600 h-2 rounded-full" data-width="75"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
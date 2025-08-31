import React from 'react';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600">Some of my recent work</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden fade-in">
          <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">E-Commerce Platform</h3>
            <p className="text-gray-600 mb-4">
              Full-stack e-commerce solution with React frontend and Node.js backend. 
              Features include user authentication, payment integration, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MongoDB</span>
            </div>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Live Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden fade-in">
          <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-6xl">📱</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Task Management App</h3>
            <p className="text-gray-600 mb-4">
              Collaborative task management application with real-time updates, 
              drag-and-drop functionality, and team collaboration features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Vue.js</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Express</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Socket.io</span>
            </div>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Live Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden fade-in">
          <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <span className="text-6xl">📊</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Interactive data visualization dashboard with real-time charts, 
              filtering capabilities, and export functionality for business insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">D3.js</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Python</span>
            </div>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Live Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
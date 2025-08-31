import React from 'react';

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Blogs</h2>
        <p className="text-xl text-gray-600">Sharing knowledge and insights</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="card-hover bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl fade-in">
          <div className="text-3xl mb-4">⚛️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">React Performance Optimization</h3>
          <p className="text-gray-600 mb-4">
            Learn advanced techniques to optimize React applications for better performance and user experience.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">July 15, 2025</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
          </div>
        </article>

        <article className="card-hover bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl fade-in">
          <div className="text-3xl mb-4">🐳</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Docker for Developers</h3>
          <p className="text-gray-600 mb-4">
            A comprehensive guide to containerizing applications and streamlining development workflows.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Aug 10, 2025</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
          </div>
        </article>

        <article className="card-hover bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl fade-in">
          <div className="text-3xl mb-4">☁️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">AWS Best Practices</h3>
          <p className="text-gray-600 mb-4">
            Essential AWS services and best practices for building scalable and secure cloud applications.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Aug 13, 2025</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
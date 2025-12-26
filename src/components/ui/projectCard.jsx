import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-gray-600">
      <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
        <div className="text-8xl">{project.icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-700 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all">
          Ver Proyecto
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

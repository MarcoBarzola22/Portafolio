import React from 'react';
import ProjectCard from '../ui/projectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Proyectos</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Algunos de los proyectos en los que he trabajado
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

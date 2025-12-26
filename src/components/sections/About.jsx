import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Acerca de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mí</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-3xl backdrop-blur">
            <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-9xl">👨‍💻</div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">{personalInfo.fullName}</h3>
            <p className="text-gray-300 leading-relaxed">
              {personalInfo.description}
            </p>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Educación</h4>
              <p className="text-gray-300">{personalInfo.education.institution}</p>
              <p className="text-gray-400 text-sm">{personalInfo.education.degree}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Experiencia</h4>
              <p className="text-gray-300">{personalInfo.experience.position}</p>
              <p className="text-gray-400 text-sm">{personalInfo.experience.description}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Habilidades Técnicas</h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

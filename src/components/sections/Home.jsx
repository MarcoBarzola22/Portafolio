import React from 'react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="text-8xl">🧑‍💻</div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{personalInfo.name}</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
          {personalInfo.title}<span className="text-blue-400">|</span>
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          {personalInfo.description}
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary">Contactar</Button>
          <Button variant="secondary">Descargar CV</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;

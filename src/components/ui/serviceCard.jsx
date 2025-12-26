import React from 'react';
import { Code, Brain, Layers } from 'lucide-react';

const iconMap = {
  code: Code,
  brain: Brain,
  layers: Layers
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];

  return (
    <div className="bg-white text-black rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
      <div className="mb-4 text-blue-600">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;

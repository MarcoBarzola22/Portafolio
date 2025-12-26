import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Servicios</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Lo que puedo hacer por ti
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="gradient">+ Contrátame</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;


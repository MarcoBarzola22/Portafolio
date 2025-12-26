import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="fixed bottom-6 right-6 flex space-x-4 z-40">
      <a 
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <Github className="w-5 h-5" />
      </a>
      <a 
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a 
        href={SOCIAL_LINKS.email}
        className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
      >
        <Mail className="w-5 h-5" />
      </a>
    </footer>
  );
};

export default Footer;
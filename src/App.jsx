import React, { useState } from 'react';
import { useLoading } from './hooks/useLoading';
import { SECTIONS } from './utils/constants';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Loading from './components/Loading';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';

const App = () => {
  const loading = useLoading();
  const [activeSection, setActiveSection] = useState(SECTIONS.HOME);

  if (loading) {
    return <Loading />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case SECTIONS.HOME:
        return <Home />;
      case SECTIONS.ABOUT:
        return <About />;
      case SECTIONS.PROJECTS:
        return <Projects />;
      case SECTIONS.SERVICES:
        return <Services />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;
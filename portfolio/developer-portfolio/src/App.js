import React, { useState } from 'react';
import Header from './components/Header';     // Default export
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
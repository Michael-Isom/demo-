
import React from 'react';

const Header = ({ currentSection, handleSectionChange }) => {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => handleSectionChange('about')}
              className={currentSection === 'about' ? 'active' : ''}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handleSectionChange('portfolio')}
              className={currentSection === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleSectionChange('contact')}
              className={currentSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handleSectionChange('resume')}
              className={currentSection === 'resume' ? 'active' : ''}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
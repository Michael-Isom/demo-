
import React from 'react';

const Portfolio = () => {
  
  const projects = [
    {
      title: 'Project One',
      image: 'path-to-image-1.jpg', 
      deployedLink: 'https://deployed-app-link-1.com',
      githubLink: 'https://github.com/your-profile/project-1',
    },
    {
      title: 'Project Two',
      image: 'path-to-image-2.jpg',
      deployedLink: 'https://deployed-app-link-2.com',
      githubLink: 'https://github.com/your-profile/project-2',
    },
    {
      title: 'Project Three',
      image: 'path-to-image-3.jpg',
      deployedLink: 'https://deployed-app-link-3.com',
      githubLink: 'https://github.com/your-profile/project-3',
    },
    {
      title: 'Project Four',
      image: 'path-to-image-4.jpg',
      deployedLink: 'https://deployed-app-link-4.com',
      githubLink: 'https://github.com/your-profile/project-4',
    },
    {
      title: 'Project Five',
      image: 'path-to-image-5.jpg',
      deployedLink: 'https://deployed-app-link-5.com',
      githubLink: 'https://github.com/your-profile/project-5',
    },
    {
      title: 'Project Six',
      image: 'path-to-image-6.jpg',
      deployedLink: 'https://deployed-app-link-6.com',
      githubLink: 'https://github.com/your-profile/project-6',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={`Screenshot of ${project.title}`} />
            <h3>{project.title}</h3>
            <p>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed Application
              </a>{' '}
              |{' '}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
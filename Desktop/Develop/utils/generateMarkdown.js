// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  let badge;

  switch (license.toLowerCase()) {
    case 'mit':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'gpl-3.0':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'apache-2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'mpl-2.0':
      badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      break;
    case 'bsd-2-clause':
      badge = '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
      break;
    case 'bsd-3-clause':
      badge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
      break;
    default:
      badge = '';
  }

  return badge;
}
console.log(renderLicenseBadge('MIT')); 
console.log(renderLicenseBadge('gpl-3.0')); 
console.log(renderLicenseBadge('')); 


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    let licenseLink;
  
    switch (license.toLowerCase()) {
      case 'mit':
        licenseLink = 'https://opensource.org/licenses/MIT';
        break;
      case 'gpl-3.0':
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
        break;
      case 'apache-2.0':
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'mpl-2.0':
        licenseLink = 'https://opensource.org/licenses/MPL-2.0';
        break;
      case 'bsd-2-clause':
        licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
        break;
      case 'bsd-3-clause':
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
      default:
        licenseLink = '';
    }
  
    return licenseLink;
  }
  
 
  console.log(renderLicenseLink('MIT')); 
  console.log(renderLicenseLink('gpl-3.0')); 
  console.log(renderLicenseLink('')); 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


function renderLicenseSection(license) {
  if (!license) return '';
  const badges = {
    'mit': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'gpl-3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'apache-2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'mpl-2.0': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    'bsd-2-clause': '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)',
    'bsd-3-clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };
  return badges[license.toLowerCase()] || '';
}

function renderLicenseLink(license) {
  if (!license) return '';
  const links = {
    'mit': 'https://opensource.org/licenses/MIT',
    'gpl-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'mpl-2.0': 'https://opensource.org/licenses/MPL-2.0',
    'bsd-2-clause': 'https://opensource.org/licenses/BSD-2-Clause',
    'bsd-3-clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return links[license.toLowerCase()] || '';
}

function renderLicenseSection(license) {
  if (!license) return '';

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const licenseText = license.toUpperCase() + ' License';

  if (!badge && !link) return ''; // 

  return `
## License

This project is licensed under the ${licenseText}.

${badge}


`;
}


console.log(renderLicenseSection('MIT'));
console.log(renderLicenseSection(''));



function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;

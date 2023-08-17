import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Musicale App',
      link: 'https://musicale-app-f8a5312a774d.herokuapp.com/',
      image: 'musicale.png',
      alt: 'Musicale App'
    },
    {
      title: 'Activity Roulette',
      link: 'https://sarroyo551.github.io/Activity-Roulette/',
      image: 'ARproject.png',
      alt: 'Activity Roulette'
    },
    {
      title: 'Horiseon',
      link: 'https://sarroyo551.github.io/urban-octo-telegram/',
      image: 'horiseon.png',
      alt: 'Horiseon Website'
    }
  ]
  return (
    <div className='content'>
      <h1>Portfolio</h1>
      <div id='projectsContainer'> 
        {projects.map((project) => <Project project={project}/>)}
      </div>
    </div>
    
  )
}

export default Portfolio
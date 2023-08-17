import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Musicale App',
      link: 'https://musicale.herokuapp.com/',
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
  // const arrayProjects = projects.map((project) => <li>{project}</li>)
  return (
    <div className='content'>
      <h1>Portfolio</h1>
      {/* <Project project={projects[0]}/> */}
      {/* <Project project={arrayProjects}/> */}
      <div>
        {projects.map((project) => <Project project={project}/>)}
      </div>
      {/* //use map in react to render array of items */}
    </div>
    
  )
}

export default Portfolio
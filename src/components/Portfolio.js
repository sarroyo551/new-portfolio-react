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
    //add other projects here
  ]
  return (
    <div className='content'>
      <h1>Portfolio</h1>
      <Project project={projects[0]}/>
      {/* //use map in react to render array of items */}
    </div>
    
  )
}

export default Portfolio
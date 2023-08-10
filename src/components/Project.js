import React from 'react'

function Project(props) {
  return (
      <div class="project">
                <p>{props.project.title}</p>
                <a href={props.project.link}target="_blank">
                <img className='projectImage' src={`${process.env.PUBLIC_URL}/images/${props.project.image}`} alt={props.project.alt}/>
            </a>
      </div>
  )
}

export default Project
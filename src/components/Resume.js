import React from 'react'
import resumeImg from './resume.png'

function Resume() {
  const resumeImg = require('./resume.png')
  return (
    <div>
      <h1>Resume</h1>
      <img src={resumeImg}>
      </img>
    </div>
  )
}

export default Resume
import React from 'react'

function Contact() {
  return (
    <div className='content'>
      <h1>Contact</h1>
         <form>
            <div className='inputContainer'>
                <label for='name'>Name</label>
                <input type='text' name='name' id='name'/>
            </div>
            <div className='inputContainer'>
              <label for='email'>Email</label>
              <input type='email' name='email' id='email'/>
            </div>
            <div className='inputContainer'>
              <label for='message'>Message</label>
              <textarea name='message' id='message' rows='5' cols='30'/>
            </div>
         </form>
    </div>
  )
}

export default Contact
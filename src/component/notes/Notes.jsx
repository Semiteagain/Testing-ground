import React from 'react'
import "./notes.css"

const Notes = (props) => {
  return (
    <div className="container__note">
<div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content} </p>
        <button >Delete</button>
        </div>
    </div>
    
  )
}

export default Notes
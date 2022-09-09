import React from 'react'
import "./notes.css"

const Notes = (props) => {

  const handleClick = () => {
    props.onDelete(props.id);
  }
  return (
    <div className="container__note">
<div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content} </p>
        <button onClick={handleClick}>Delete</button>
        </div>
    </div>
    
  )
}

export default Notes
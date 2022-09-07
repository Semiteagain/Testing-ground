import React from 'react'
import { useState } from 'react'
import "./createNotes.css"

const CreateNotes = () => {
    const [item, setItem] =useState({
        title: "",
        content: ""
    })
  return (
   
        <form action="">
            <input type="text" placeholder='title'/>
            <textarea placeholder='content...'></textarea>
            <button>Add</button>
        </form>
        
  )
}

export default CreateNotes;
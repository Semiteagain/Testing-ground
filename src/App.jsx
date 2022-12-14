import React from "react";
import { useState } from "react";
import CreateNotes from "./component/createnotes/CreateNotes";
import Nav from "./component/nav/Nav";
import Notes from "./component/notes/Notes";
import "./index.css";

const App = () => {
  const [note, setNote] = useState([]);

  const submitItem = (item) =>{
     setNote(prevNotes=>{
      return [
        ...prevNotes, item
      ]
     })
  }


  const deleteNote = (id) => {
    setNote(prevNotes =>{
      return prevNotes.filter((newNote, index)=>{
        return index !== id
      })
    })

  }
  return (
    <div>
      <Nav />
      <CreateNotes
      onAdd={submitItem} />
      {note.map((items, index) =>{
        return <Notes 
        key={index}
        id={index}
        title={items.title}
        content={items.content}
        onDelete={deleteNote} />
      })}
    
 
    </div>
  );
};

export default App;

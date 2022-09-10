import React from "react";
import { useState } from "react";
import "./createNotes.css";

const CreateNotes = (props) => {
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setItem(prevItem =>{
        return {
            ...prevItem,
            [name] : value
        }
    })
  }

  const handleAdd = (event) =>{
  props.onAdd(item);
   event.preventDefault();
  }

  return (

    <form className="container form__container">
      <input
        onChange={handleChange}
        type="text"
        placeholder="title"
        name="title"
        value={item.title}
      />
      <textarea
        onChange={handleChange}
        placeholder="content..."
        name="content"
        value={item.content}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
};

export default CreateNotes;

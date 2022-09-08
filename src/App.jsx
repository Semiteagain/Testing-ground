import React from "react";
import CreateNotes from "./component/createnotes/CreateNotes";
import Nav from "./component/nav/Nav";
import Notes from "./component/notes/Notes";
import "./index.css";

const App = () => {
  return (
    <div>
      <Nav />
      <CreateNotes />
      <Notes
      title="This is the title"
      content="This is the content" />
    </div>
  );
};

export default App;

import React from "react";
import CreateNotes from "./component/createnotes/CreateNotes";
import Nav from "./component/nav/Nav";
import "./index.css";

const App = () => {
  return (
    <div>
      <Nav />
      <CreateNotes />
    </div>
  );
};

export default App;

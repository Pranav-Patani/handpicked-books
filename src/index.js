import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
//-----------------------------------------
//-----------------------------------------

function App() {
  return (<div className="App">
    <h1>Handpicked Books</h1>
  </div>
  )
}

//-------------------
//-------------------
root.render(<App />);

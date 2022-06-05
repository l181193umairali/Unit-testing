// import "./App.css";
import React from "react";
import Button from './Components/button/button'
import Button2 from './Components/button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button label="click"/>
      <Button2>label ="save it"</Button2>
       {/* for shallow rendering */}
      <span className="heading">Title</span>
      </header>
    </div>
  );
}


export default App;
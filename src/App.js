import * as React from "react";
import "./App.css";
import HooksDemo from './HooksDemo';
import EventDemo from './EventDemo';



function App() {
  return (
    <div className="App">
      <h3>
        <p>hello React source code~</p>
      </h3>
      <span>Joy Guan </span>
      {/* <h3>Hooks Demo</h3> */}
      {/* <HooksDemo /> */}
      <EventDemo />
    </div>
  );
}



export default App;

import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function Button(props) {
  function OnClicked(event) {
    console.log("Button clicked");
  }
  return <button onClick={props.onClick}>{props.children}</button>;
}

// function Application(props) {
//   return (
//     <main>
//       <Button onClick={(event) => console.log("Button Clicked from Application")}>Submit</Button>
//     </main>
//   );
// }

// function Application(props) {
//   const [count, setCount] = useState(0)
//   return (
//     <main>
//       <Button onClick={(event) => {
//         console.log("Button Clicked from Application");
//         setCount(count+1) }}>Increment</Button>
//       <h1> This button was clicked {count} times</h1>
//     </main>
//   );
// }

// function Application(props) {
//   const [name, setName] = useState("")
//   return (
//     <main>
//       <input
//       value ={name}
//       onChange={(event)=> setName(event.target.value)}
//       placeholder="Please enter you name"
//         />
//       <h1>Hello, {name}</h1>
//     </main>
//   );
// }

// function Application(props) {
//   const [name, setName] = useState("")
//   if(name) {
//     return (
//       <main>
//         <input
//         value ={name}
//         onChange={(event)=> setName(event.target.value)}
//         placeholder="Please enter you name"
//           />
//         <h1>Hello, {name}.</h1>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <input
//       value ={name}
//       onChange={(event)=> setName(event.target.value)}
//       placeholder="Please enter you name"
//         />
//     </main>
//   );

// }

function Application(props) {
  const [name, setName] = useState("");

  function reset() {
    setName("");
  }

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please enter your name"
      />
      {name && (
        <Fragment>
          <h1>Hello, {name}.</h1>
          <Button onClick={reset}>Reset</Button>
        </Fragment>
      )}
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));

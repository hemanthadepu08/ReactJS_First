import "./styles.css";
import React from "react"

//With JSX
function App(){
return(<React.Fragment>
  <h1>Reactjs</h1>
  <h1>JAVA</h1>
  </React.Fragment>
)
}
export default App

// //without JSX CODE
// export default function App() {
//   return( React.createElement(React.Fragment, null, React.createElement("h1", {
//     id: "name"
//   }, "hemath"), 
//   React.createElement("h2", null, "Reactjs"),
//   React.createElement("h2", null, "Java")
//   )
  
//   )
   
// }
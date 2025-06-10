import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import store from "./Store/Store"
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

// import React, { Component } from "react";
// import ReactDOM from "react-dom/client"

// // class user1 extends Component {
// //   render() {
// //     console.log(this.props)
// //     return (
// //       <div>
// //         <p>
// //           Name : Aravind, age : 23
// //         </p>
// //       </div>
// //     )
// //   }
// // }


// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {count : 12}
//   }

//   increment = () => {
//     console.log(this.state.count);
//     this.state.count += 1;
//     console.log(this.state.count);
//     root.render(<Counter />)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count is : {this.state.count} </h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter />)


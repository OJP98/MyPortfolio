import React from "react"
import ReactDOM from "react-dom"
import './main.scss'
import Navbar from "./Navbar/Navbar";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
           <div>
               <Navbar />
               <h1>Hola mundo!</h1>
           </div>
        )
    }

};

ReactDOM.render(<App />, document.querySelector("#root"));
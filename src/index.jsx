import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro'
import AboutMe from './Screens/AboutMe'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentHeight: window.innerHeight,
        }
    }

    updateSize() {
        this.setState({ currentHeight: window.innerHeight })
    }

    render() {
        return (
           <div>
                <Navbar />
                <div className="content">
                <Intro currentHeight={this.state.currentHeight}/>
                <AboutMe />
               </div>
           </div>
        )
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateSize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize.bind(this));
    }

};

ReactDOM.render(<App />, document.querySelector('#root'))
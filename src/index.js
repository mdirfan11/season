import './seasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {lat : null, errorMsg: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (error) => this.setState({errorMsg: error.message})
        );
    }

    render() {

        if (this.state.lat && !this.state.errorMsg) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        } 
        if (!this.state.lat && this.state.errorMsg) {
            return <div className="season-display"><h1 style={{color:'red'}}>OOPHS! unable to detect your location</h1></div>;
        }
       
        return <Spinner message="Please accept location request" />
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));
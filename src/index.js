// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';

// Create a react component
class App extends React.Component {
    state = { lat: null, errorMessage: null };

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <Spinner message={this.state.errorMessage} />
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    };

    render() {
        return (
            <div className="container">
                <Clock />
                {this.renderContent()}
            </div>
        );
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
}

// Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));

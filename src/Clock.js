import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() };

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    render() {
        return (
            <div className="time">
                Time: {this.state.time}
            </div>
        );
    };
}

export default Clock;
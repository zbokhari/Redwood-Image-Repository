import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home_bg">
                <div>
                    <h1>Redwood Image Repository</h1>
                    <h5> Instructions: Select a file type from the navigation bar above to begin.</h5>
                </div>
            </div>
        );
    }
}
export default Home;
import React from 'react';
import App from './App';
import '../App.css';
// const Bootstrap = require('bootstrap');
import {Link} from 'react-router';

class FrontPage extends React.Component {
    render () {
        return (
            <div>
                <ul className="ul-links list-inline list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {this.props.children}

            </div>
        )
    }
}

export class Home extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}

export class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This is the about page</p>
            </div>
        )
    }
}

export default FrontPage;
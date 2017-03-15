import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Home, About} from './components/FrontPage';
import FrontPage from './components/FrontPage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={FrontPage}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.getElementById('root'))

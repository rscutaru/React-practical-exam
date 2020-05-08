import React from 'react';
import './App.css';
import Home from './pages/Home';
import People from './pages/People';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};

    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/people' component={People} />
                </Switch>
            </div>
        )
    }
}

export default App;

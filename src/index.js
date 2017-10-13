import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';
// import Map from './components/Map2';

class App extends Component {

    render() {
        return (
            <div>
                <Map/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
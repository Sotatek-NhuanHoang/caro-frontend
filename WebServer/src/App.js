import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from 'caro-store';
import Router from './Router';

// Reset css
import 'normalize.css';

// Spectre css framework
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-exp.min.css';
import 'spectre.css/dist/spectre-icons.min.css';

// Noty library
// import 'noty/lib/noty.css';


// Caro style
import 'caro-styles/index.scss';


class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <Router />
                </PersistGate>
            </Provider>
        );
    }
}


export default App;

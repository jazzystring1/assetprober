import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

export default function App() {

    return (
        <AppRouter/ >
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
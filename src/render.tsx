import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app';
import {State} from "./redux/state";

export const renderTree = (state: State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App {...state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

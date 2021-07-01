import './index.css';
import {State, store} from './redux/state';
import ReactDOM from "react-dom";
import React from "react";
import {App} from "./app";

const renderTree = (state: State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App {...state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(renderTree)


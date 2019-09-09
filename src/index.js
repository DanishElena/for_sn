import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";

let rerender =(state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>, document.getElementById('root'));

}
rerender(store.getState());



store.subscribe( () => {
    let state = store.getState();
    rerender(state);
});
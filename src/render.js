import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPostText} from "./redux/state";

// addPost('samurai')

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>

  </React.StrictMode>,
  document.getElementById('root')
);

};






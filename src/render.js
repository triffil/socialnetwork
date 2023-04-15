import React from "react";
import App from "./App";
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
}
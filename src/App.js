import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={ () => <Dialogs dialogData={props.state.messagesPage.dialogData} messagesData={props.state.messagesPage.messagesData}/>}/>
                    <Route path={'/profile'}
                           render={ () => <Profile profilePage={props.state.profilePage.postData}
                                                   newPostText={props.state.profilePage.newPostText}
                                                   addPost={props.addPost}
                                                   updateNewPostText={props.updateNewPostText}
                           />
                           }/>
                    <Route path={'/news'}
                           render={ () => <News/>}/>
                    <Route path={'/music'}
                           render={ () => <Music/>}/>
                    <Route path={'/settings'}
                           render={ () => <Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;

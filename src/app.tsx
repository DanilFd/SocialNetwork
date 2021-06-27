import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/header/header";
import {Navbar} from "./components/navbar/navbar";
import {BrowserRouter} from 'react-router-dom';
import "./app.css"
import {Routes} from './routes';
import {MessagesData, PostsData, UsersData} from "./types/posts";
import {State} from './redux/state';


export function App(props: State) {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="row container m-lg-auto">
                    <div className="col-2">
                        <Navbar/>
                    </div>
                    <div style={{background: "#332F2C"}} className=" col-10">
                        <Routes profilePostData={props.profilePostsData} message={props.messagesData}
                                users={props.usersData}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

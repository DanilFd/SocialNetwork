import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/header/header";
import {Navbar} from "./components/navbar/navbar";
import {BrowserRouter} from 'react-router-dom';
import "./app.css"
import {Routes} from './routes';
import {State, store} from './redux/state';


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
                        <Routes dispatch={store.dispatch.bind(store)} profilePostData={props.profilePostsData}
                                dialogsPage={props.dialogsPage}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

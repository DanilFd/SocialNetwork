import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Dialogs} from "./components/dialogs/dialogs";
import {Profile} from "./components/profile/profile";
import {MessagesData, PostsData, UsersData} from "./types/posts";
import {ProfilePostData} from "./redux/state";


type Props = {
    profilePostData: ProfilePostData
    users: UsersData[]
    message: MessagesData[]
}

export const Routes = (props: Props) => {
    return (
        <Switch>
            <Route exact path="/messages" render={() => <Dialogs users={props.users} message={props.message}/>}/>
            <Route exact path="/profile" render={() => <Profile profilePostData={props.profilePostData}/>}/>
            {/*<Route exact path="/news" component={Dialogs}/>*/}
            {/*<Route exact path="/music" component={Dialogs}/>*/}
            {/*<Route exact path="/settings" component={Dialogs}/>*/}
            <Route path="/" component={() => <Redirect to={'/profile'}/>}/>
        </Switch>
    );
}

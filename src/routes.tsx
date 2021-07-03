import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Dialogs} from './components/dialogs/dialogs';
import {Profile} from './components/profile/profile';


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/messages" component={Dialogs}/>
            <Route exact path="/profile" component={Profile}/>
            {/*<Route exact path="/news" component={Dialogs}/>*/}
            {/*<Route exact path="/music" component={Dialogs}/>*/}
            {/*<Route exact path="/settings" component={Dialogs}/>*/}
            <Route path="/" component={() => <Redirect to={'/profile'}/>}/>
        </Switch>
    );
}

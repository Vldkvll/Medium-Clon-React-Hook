import { Switch, Route } from 'react-router-dom';
import Article from '../Component/Article/Article';
import GlobalFeed from '../Component/GlobalFeed/GlobalFeed';
import React from 'react';
import Authentication from '../Component/Authentcation/Authentication';

 const Router = () => {

    return (
        <Switch>
            <Route 
            path='/'
            component={GlobalFeed}
            exact
            />
            <Route 
            path='/articles/:slug'
            component={Article}
            />
            <Route 
            path='/login'
            component={Authentication}
            />
            <Route 
            path='/register'
            component={Authentication}
            />
        </Switch>
    )
}

export default Router;
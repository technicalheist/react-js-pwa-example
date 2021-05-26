import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
export default class AppRoute extends Component{

    beforeLoginRoutes(){
        return (
            <React.Fragment>
                <Route exact path='/' component={Home} />
            </React.Fragment>
        );
    }

    afterLoginRoutes(){
        return (
            <React.Fragment>
                <Route exact path='/' component={Dashboard} />
            </React.Fragment>
        );
    }

    render() {
        let user_id  = localStorage.getItem('user_id');
        if(user_id === null)
        {
            return (
                  <Switch>
                      {this.beforeLoginRoutes()}
                  </Switch>  
            )
        }

        return (
            <div>
                <Switch>
                    {this.afterLoginRoutes()}
                </Switch>
            </div>
        )
    }
}

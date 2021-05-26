import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './template/Header';
import Footer from './template/Footer';
import Approute from './AppRoute';
export default class Common extends Component {
    render() {
    let user_id  = localStorage.getItem('user_id');
      if(user_id === null)
      {
        //   Before Login Templates
          return (
            <React.Fragment>
            <Router>
            <Header/>
            <Approute/>
            <Footer/>
            </Router>
            </React.Fragment>
          )
      }

        //After Login Templates 
        return (
            <React.Fragment>
              <Router>
              <Header/>
                    <Approute/>
              <Footer/>
              </Router>
            </React.Fragment>
        )

    }
}

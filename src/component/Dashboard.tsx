import React, { Component } from 'react'

export default class Dashboard extends Component<any,any> {

    constructor(props:any)
    {
        super(props);
        this.state = {
            name : localStorage.getItem('displayName'),
            providerId : localStorage.getItem('providerId'),
            user_id : localStorage.getItem('user_id'),
            email : localStorage.getItem('email'),
            photoURL : localStorage.getItem('photoURL'),
        }
    }
   

    render() {
        return (
            <React.Fragment>
                  <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                <br />
                <div className="row center">
                    <img alt="profile" src={this.state.photoURL}  width="250px" height="auto"/>
                </div>
                <h1 className="header center orange-text">Welcome dear {this.state.name}</h1>
                <div className="row center">
                <h5 className="header col s12 light">
                    Your  email is <b>{this.state.email}</b> and user_id is <b>{this.state.user_id}</b> 
                </h5>
                </div>
               
                <br /><br />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

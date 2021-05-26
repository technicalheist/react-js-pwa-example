import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { auth, provider } from './firebaseConfig';
export default class Home extends Component<any,any> {

    constructor(props:any) {
        super(props);
        this.state = {
            user: {},
            isLoggedIn: false,
            error: null,
            success: null,
            loading_msg : null
        }
    }

    // onClickButton() {
    //     this.setState({
    //         loading_msg : 'Please wait ..'
    //     });
    //     try{
    //         auth.signInWithPopup(provider)
    //         .then((result) => {
    //             console.log(result);
    //             console.log('I am onClickButton');
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    //     }
    //     catch(err){
    //         console.error(err.message);
    //     }
        
    // }

    // componentDidMount() {
    //     this.checkUserAuth();
    // }

    // checkUserAuth() {
    //     auth.onAuthStateChanged(userAuth => {
    //         if (userAuth != null) {
    //             let data: any = {
    //                 name: userAuth.displayName,
    //                 email: userAuth.email,
    //                 status: 'active',
    //                 providerId: userAuth.providerId,
    //                 photoURL: userAuth.photoURL,
    //                 uid: userAuth.uid
    //             }
    //         }
    //     });
    // }

    onClickButton(){
        
    }

    render() {
        return (
            <React.Fragment>
                
                <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                <br /><br />
                <h1 className="header center orange-text">React JS PWA App</h1>
                <div className="row center">
                <h5 className="header col s12 light">A Simple react js pwa app with google authentication. It isbased on Material Design</h5>
                </div>
                <div className="row center">
                <button onClick={() => this.onClickButton()}  id="download-button" className="btn-large waves-effect waves-light orange">Get Started</button>
                </div>
                <br /><br />
                </div>
            </div>

            </React.Fragment>
        )
    }
}

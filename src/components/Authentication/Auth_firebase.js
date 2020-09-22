import React, { useState, useEffect } from 'react'
import fire from '../../Firebase/fire';
import Login from '../Login/Login';
import { Navbar, Carousel, Description, Sunday_header, Sunday_holder, Wednesday_header, Wednesday_holder, Sidedrawer, Backdrop, Footer, ScrollArrow, About, Followup, WelcomeHead, Quotes} from '../index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Auth_firebase = ( {navdrawerOpen, drawerToggleClose, drawerToggleOpen}) => {
    const [user, setUser] = useState('');
    const [acctName, setAcctName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user)
            } else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

    let backdrops;

    if(navdrawerOpen){
        backdrops = <Backdrop drawerToggleClose ={drawerToggleClose} />
      }

    return (
        <div>
            {user? (
                <div>
                    <Navbar drawerToggleOpen={drawerToggleOpen} handleLogout={handleLogout} />
                    <Sidedrawer show={navdrawerOpen} />
                    {backdrops}
                        <React.Fragment>
                            <Carousel />
                            <WelcomeHead acctName={acctName} />
                            <Description acctName={acctName}  />
                            <Sunday_header />
                            <Sunday_holder />
                            <Wednesday_header />
                            <Wednesday_holder />
                            <Followup />
                            <Quotes />
                            <About />
                            <ScrollArrow />
                            <Footer />
                        </React.Fragment>
                </div>
            ):(
                <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError} 
                passwordError={passwordError}
                acctName={acctName}
                setAcctName={setAcctName}
            />
            )}   
        </div>
    )
}

export default Auth_firebase

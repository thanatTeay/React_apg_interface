import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import firebaseConfig from '../config'
import { Alert } from 'react-st-modal'


const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, cPassword, display_Name } = e.target.elements;

        try {
            if (password.value === cPassword.value) {
                firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value).then(cred => {
                    cred.user.updateProfile({
                        displayName: display_Name.value
                        
                    })
                    //console.log(Date())
                    const db = firebaseConfig.firestore(); 
                    
                    db.collection('user').doc(cred.user.uid).set({
                        uID: cred.user.uid,
                        displayName: display_Name.value, 
                        answerFirstQuestion: false,
                        answerSecordQuestion: false,
                        createdID: Date(),
                        isOnline: false,
                        isP1team: false,
                        isP2team: false,
                        countSendMessage : 0,
                        countP1cheerBtn: 0,
                        countP2cheerBtn: 0,
                        countP1jeerBtn: 0,
                        countP2jeerBtn: 0,
                        countP1win: 0,
                        countP2win: 0,
                        
                        
                    })
                    db.collection('leaderboard').doc(cred.user.uid).set({
                        uID: cred.user.uid,
                        displayName: display_Name.value, 
                        answerFirstQuestion: false,
                        answerSecordQuestion: false,
                        createdID: Date(),
                        isOnline: false,
                        isP1team: false,
                        isP2team: false,
                        countSendMessage : 0,
                        countP1cheerBtn: 0,
                        countP2cheerBtn: 0,
                        countP1jeerBtn: 0,
                        countP2jeerBtn: 0,
                        countP1win: 0,
                        countP2win: 0,
                        
                    })
                    
                    cred.user.sendEmailVerification();
                    if (cred.user.emailVerified) {

                    }
                    else {
                       
                        Alert('Please verify your email', 'Verification');
                    
                        //alert("Please verify your email");
                        setCurrentUser(true);
                    }
                    //console.log(cred.user)

                }).catch(error => {
                    var errorMessage = error.message;
                    Alert(errorMessage, 'Error!');
                })
                //firebaseConfig.auth().updateProfile(display_Name);
                //firebaseConfig.firestore().collection('user').doc()

            }
            else {
                Alert('Password confirmation does not match Password!!!!', 'Error!');
                //alert("Password confirmation doesn't match Password!!!!");
            }

        } catch (error) {
            var errorMessage = error.message;

            alert(errorMessage);
        }
    }

    if (currentUser) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo">
                            <h2><span className="fa fa-android"></span></h2>
                        </span>

                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Register</h2>
                            </div>
                            <div className="row">
                                <form id="register_form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <input type="text" name="email" id="email" className="form__input" placeholder="Email"
                                            required />

                                    </div>
                                    <div className="row">
                                        <input type="password" name="password" id="password" className="form__input"
                                            placeholder="Password" required />

                                    </div>
                                    <div className="row">
                                        <input type="password" name="cPassword" id="cPassword" className="form__input"
                                            placeholder="Confirm Password" required />

                                    </div>
                                    <div className="row">
                                        <input type="text" name="display_Name" id="display_Name" className="form__input"
                                            placeholder="Display Name" required />

                                    </div>

                                    <div className="row">
                                        <button className="btnlogin btn-success" type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p>Login? <Link to="/login" >Login Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
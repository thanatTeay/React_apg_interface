import React, { useContext, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from './auth'
import firebaseConfig from '../config'
import { Alert } from 'react-st-modal'


const LogIn = () => {
    const [verified, checkVerify] = useState(false);
    const [answerQuestion, checkAnswerQuestion] = useState(false);
    const [checkUser, setcheckUser] = useState(true);
    const db = firebaseConfig.firestore();
    const [count, setCount] = useState([]);
    let answer;
    let countP1team = 0;
    let countP2team = 0;
    //checkVerify(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value).then(cred => {
                if (cred.user.emailVerified) {
                    checkVerify(true);
                    db.collection('user').doc(cred.user.uid).get().then(data => {
                        //console.log(data.data().answerFirstQuestion)
                        checkAnswerQuestion(data.data().answerFirstQuestion);
                        answer = data.data().answerFirstQuestion;
                        //console.log("zxczxczxc "+doc.data())
                    }).then(() => {
                        console.log(answer)
                        if (answer) {
                            db.collection('user').doc(cred.user.uid).update({
                                isOnline: true
                            }).then(() => {

                                db.collection('user').get().then(data => {
                                    const items = [];
                                    data.forEach(doc => {
                                        items.push(doc.data())
                                        //console.log("zxczxczxc "+doc.data())
                                    });
                                    console.log(items)
                                    items.map(data => {
                                        if (data.isOnline) {
                                            //console.log(data.isP1team)
                                            //console.log(data.isP2team)
                                            if (data.isP1team === true) {
                                                countP1team++;
                                                setcheckUser(countP1team)
                                                // console.log("p1 " + checkUser)
                                            }
                                            if (data.isP2team === true) {
                                                countP2team++;
                                                setcheckUser(countP2team)
                                                //console.log("p2 " + checkUser)
                                            }
                                        }

                                    })
                                    ConditionToMain();
                                    setCount(items);
                                })
                            })
                        }
                        else {
                            window.location.href = "/submit"
                        }
                    })
                } else {
                    //CustomDialog(<CustomDialogContent />, {title: 'Custom Dialog',showCloseIcon: true,})
                    Alert("Please verify your email", 'Verification');
                    //alert("Please verify your email");
                    checkVerify(false);
                }



                //console.log(cred.user)
            }).catch(error => {
                var errorMessage = error.message;
                Alert(errorMessage, 'Error!');
                //alert(errorMessage);
            })


        } catch (error) {
            Alert(error, 'Error!');
            //alert(error);
        }
    }



    function ConditionToMain() {

        db.collection('countuser').doc('onweb').update({

            p1team: countP1team,
            p2team: countP2team

        })

        if (countP1team - countP2team > 2) {
            //alert("Welcome to Player 2 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")
            window.location.href = "/MainP2"
        }
        else if (countP2team - countP1team > 2) {
            //alert("Welcome to Player 1 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")
            window.location.href = "/MainP1"
        }
        else {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
            }
            let random = getRandomInt(0, 2)

            //alert(random)
            if (random === 0) {
               // Alert("Welcome to Player 1 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")


                window.location.href = "/MainP1"

            }
            else {
                //alert("asdasda 1")
                //Alert("Welcome to Player 2 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")

                window.location.href = "/MainP2"

            }
        }

       



    }




    const { currentUser } = useContext(AuthContext);
    //alert(verified);
    if (currentUser && verified) {

        //console.log(currentUser.displayName)
        //alert(verified);
        //checkVerify(false);
        //getCurrentUserOnWeb();
        //getCurrentUserOnWeb();
        //alert(random)
        /*return (


            <Redirect to="/checkRandom" />

        )*/

    }

    return (


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
                            <h2>Log In</h2>
                        </div>
                        <div className="row">
                            <form id="login-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <input type="text" name="email" id="email" className="form__input" placeholder="Email"
                                        required />
                                </div>
                                <div className="row">

                                    <input type="password" name="password" id="password" className="form__input"
                                        placeholder="Password" required />
                                </div>

                                <div className="row">
                                    <button className="btnlogin btn-success" type="submit">Login</button>
                                </div>

                            </form>
                        </div>

                        <div className="row">
                            <p>Don't have an account? <Link to="/signup" >Register Here</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}


export default LogIn;
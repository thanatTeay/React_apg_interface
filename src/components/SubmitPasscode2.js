import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './auth'
import firebaseConfig from '../config'
import { Alert, Confirm } from 'react-st-modal'



const SubmitPasscode2 = () => {
    const { currentUser } = useContext(AuthContext);
    const db = firebaseConfig.firestore();
    const [checkUser, setcheckUser] = useState(true);
    const [count, setCount] = useState([]);
    const [keepPasscode, setPasscode] = useState(null);
    let countP1team = 0;
    let countP2team = 0;

    function ConditionToMain() {
        if (countP1team - countP2team > 2) {
            //Alert("Welcome to Player 2 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")
            window.location.href = "/MainP2"
        }
        else if (countP2team - countP1team > 2) {
            // Alert("Welcome to Player 1 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")
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
                //Alert("Welcome to Player 1 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")


                window.location.href = "/MainP1"

            }
            else {
                //alert("asdasda 1")
                //Alert("Welcome to Player 2 team, now there are "+countP1team+" players on a team of 1 player and there are "+countP2team+" players on a 2 player team.")

                window.location.href = "/MainP2"

            }
        }
        db.collection('countuser').doc('onweb').update({

            p1team: countP1team,
            p2team: countP2team

        })



    }






    const handleSubmit = (e) => {
        e.preventDefault();
        const { passcode } = e.target.elements;
        db.collection('passcode').doc(currentUser.uid).get().then(data => {
            console.log(passcode.value)

            setPasscode(passcode.value);
            if (passcode.value === data.data().passcode2) {
                db.collection('user').doc(currentUser.uid).update({
                    passcode2: passcode.value,
                    submitData2: Date(),


                }).then(() => {
                    db.collection('user').doc(currentUser.uid).get().then(data => {
                        const date1 = new Date(data.data().submitData).getTime();
                        const date2 = new Date(data.data().submitData2).getTime();
                        function getDifferenceInMinutes(date1, date2) {
                            const diffInMs = Math.abs(date2 - date1);
                            return diffInMs / (1000 * 60);
                        }

                        let diff = getDifferenceInMinutes(date1, date2)
                        console.log(diff)
                        if (diff <= 10) {
                            db.collection('user').doc(currentUser.uid).update({
                                passcode2: passcode.value,
                                answerSecordQuestion: true,



                            }).then(() => {

                                db.collection('user').doc(currentUser.uid).update({
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


                            })
                        }
                        else {
                            db.collection('user').doc(currentUser.uid).update({
                                passcode2: "",
                                answerFirstQuestion: false,
                                answerSecordQuestion: false,
                                passcode1: "",


                            }).then(async () => {
                                const result = await Alert('You have been taking the questionnaire for too long. Please complete the first questionnaire and the second questionnaire again.',
                                    'Error');


                                // Сonfirmation confirmed
                                //console.log("asdasdasdasd")

                            }).then(() => {
                                db.collection('passcode').doc(currentUser.uid).update({
                                    passcode2: "",
                                    passcode1: "",
                                }).then(() => {
                                    firebaseConfig.auth().signOut()
                                    //window.location.href = "/login"
                                })

                            })
                        }

                    })


                })
                //console.log(data.data().passcode1)
            } else {
                Alert("Wrong passcode!!!!!!", 'Error')
            }

        })
    }





    useEffect(() => {
        if (currentUser) {

            Alert("Please do the second questionnaire on this link: https://jp.surveymonkey.com/r/RQQ7D6B. After that, please copy passcode from questionnaire and submit on this page", 'Please do the second questionnaire');
            //alert(errorMessage);

        }


    }, [])

    if (!currentUser) {

        //console.log(currentUser.displayName)
        //alert(verified);
        //checkVerify(false);
        //getCurrentUserOnWeb();
        //getCurrentUserOnWeb();
        //alert(random)
        return (


            <Redirect to="/login" />

        )

    }

    function ForgotPasscode() {
        //console.log("asdasdasd")
        db.collection('passcode').doc(currentUser.uid).get().then(data => {
            //console.log(data.passcode1)
            if (data.data().passcode2) {
                Alert(data.data().passcode2, 'Your passcode')
            }
            else {
                Alert("Please do a questionnaire!!!!!", 'Error')
            }







        }).catch(error => {

            Alert("Please do a questionnaire!!!!!", 'Error')
        })

    }





    return (

        <div className="container-fluid">
            <div className="row main-content text-center ">
                <div className="col-md-12 col-xs-12 col-sm-12 ">
                    <div className="container-fluid">
                        <div className="row">
                            <h2>Submit your passcode</h2>
                        </div>
                        <div className="row">
                            <form id="login-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <input type="text" name="passcode" id="passcode" className="form__input" placeholder="Press your passcode here"
                                        required />
                                </div>

                                <div className="row">
                                    <button className="btnlogin btn-success" type="submit">Submit</button>
                                </div>
                                <div className="row">
                                    <p>Please do the second questionnaire on this link: <a href="https://jp.surveymonkey.com/r/RQQ7D6B">Click Here</a></p>
                                    <p>After that, please copy passcode from questionnaire and submit on this page</p>

                                </div>

                            </form>

                        </div>
                        <div className="row">

                            <p> <button className="btn btn-outline-dark" onClick={ForgotPasscode}>Forgot a passcode</button></p>
                        </div>
                    </div>


                </div>


            </div>

        </div >



    )
}

export default SubmitPasscode2;
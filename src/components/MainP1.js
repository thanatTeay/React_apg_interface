import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './auth'
import firebaseConfig from '../config'
import Nav from './Nav'
import Twitch from './Twitch'
import BtnP1 from './BtnP1'
import { Alert, Confirm } from 'react-st-modal'
import IdleTimerContainer from './IdleTimer'


const MainP1 = () => {

    //const db = firebaseConfig.firestore();
    //let countUser=0;
    const { currentUser } = useContext(AuthContext);
    //let checkUser = false;
    const db = firebaseConfig.firestore();
    const [checkUser, setcheckUser] = useState(true);
    const [isRunning, setIsRunning] = useState(true);
    const [seconds, setSeconds] = useState(0);


    let checkTotalUser;
    const [count, setCount] = useState([])
    function getCurrentUserOnWeb() {
        //console.log("czxczxczxc")
        db.collection('countuser').doc('onweb').onSnapshot(doc => {
            const item = [];
            item.push(doc.data())
            setCount(item);
            checkTotalUser = doc.data().p1team
            //alert(count)
            //alert(doc.data().p1team)
        })

    }

    function checkAnswered() {
        db.collection('user').doc(currentUser.uid).get().then(data => {
            const checkanswer1 = data.data().answerFirstQuestion
            if (!checkanswer1) {
                db.collection('user').doc(currentUser.uid).update({

                    isOnline: false,
                    isP1team: false,
                    isP2team: false,

                }).then(() => {
                    firebaseConfig.auth().signOut()
                }).catch(error => {
                    var errorMessage = error.message;
                    alert(errorMessage, 'Error!');
                    //alert(errorMessage);
                })
            }
            else {
                getCurrentUserOnWeb();
                Alert("Welcome to Player 1 team!!!!!", 'Welcome')
            }
        })

    }







    useEffect(() => {
        //console.log(count)
        //console.log("asdasdasdasd")
        if (currentUser) {
            //setcheckUser(true);
            checkAnswered();
        }
        window.onbeforeunload = confirmExit;

        function confirmExit() {
            db.collection('user').doc(currentUser.uid).update({

                isOnline: false,
                isP1team: false,
                isP2team: false,

            }).catch(error => {
                var errorMessage = error.message;
                alert(errorMessage, 'Error!');
                //alert(errorMessage);
            })
        }
    }, [])

    useEffect(() => {
        if (isRunning) {
            //alert("re")
            const id = window.setInterval(() => {
                db.collection('user').doc(currentUser.uid).get().then(data => {
                    const checkanswer1 = data.data().answerFirstQuestion
                    const checkanswer2 = data.data().answerSecordQuestion
                    setSeconds(seconds => seconds + 1)
                    if (checkanswer1 && checkanswer2) {
                        setIsRunning(isRunning => false)
                        console.log(checkanswer1, checkanswer2)
                        //console.log("isRunning:"+isRunning)
                    }
                    else {


                        setIsRunning(isRunning => false)
                        window.location.href = "/submit2"
                        // Сonfirmation confirmed


                        //Alert("Please do the second questionnaire on this link:" + " https://www.surveymonkey.com/r/6KHX3TK.", 'Please do a questionnaire');
                        //window.location.href = "/submit2"
                    }

                    //console.log("isRunning:"+isRunning)
                })

            }, 360000)
            //console.log("isRunning:"+isRunning)
            return () => window.clearInterval(id);
        }

    }, [isRunning])


    if (!currentUser) {

        //setcheckUser(true);
        return <Redirect to="/login" />;
    }

    if (currentUser && checkUser) {
        db.collection('user').doc(currentUser.uid).update({
            isOnline: true,
            isP2team: false,
            isP1team: true

        })
        //setcheckLogout(false)
        setcheckUser(false);
        //alert("logout")

    }

    return (
        <div>
            <Nav />
            <Twitch />
            <BtnP1 />
            <IdleTimerContainer></IdleTimerContainer>



        </div>

    )

}

export default MainP1;
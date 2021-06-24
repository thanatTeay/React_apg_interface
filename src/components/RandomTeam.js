import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './auth'
import firebaseConfig from '../config'
import { Alert } from 'react-st-modal'

function RandomTeam() {

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



}

export default RandomTeam;
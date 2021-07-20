import React, { useContext } from 'react'
import { AuthContext } from './auth'
import firebaseConfig from '../config'

// for player 1 team
const BtnP1 = () =>{
    const { currentUser } = useContext(AuthContext);
    let countMessage = 0;
    let countP1cheer = 0;
    let countP2jeer = 0;
    const db = firebaseConfig.firestore();

    const tmi = require('tmi.js');
    const client = new tmi.Client({
        options: { debug: true, messagesLogLevel: "info" },
        connection: {
            reconnect: true,
            secure: true
        },
        identity: {
            username: 'ligoligo12',
            password: 'oauth:cgodb25scz9qnky8srrwtejmmddhmb'
        },
        channels: ['ligoligo12']
    });
    client.connect().catch(console.error);


    const handleP1 = () => {
        db.collection('user').doc(currentUser.uid).get().then(data => {
            countMessage = data.data().countSendMessage
            countP1cheer = data.data().countP1cheerBtn
            countP2jeer = data.data().countP2jeerBtn
            //console.log(data.data().countSendMessage)
            //alert(countMessage)
        }).then(() => {
            client.say(`#ligoligo12`, `@${currentUser.displayName}, p1+`);
            countP1cheer++;
            countMessage++;
            db.collection('user').doc(currentUser.uid).update({

                countSendMessage: countMessage,
                countP1cheerBtn: countP1cheer


            })
        })
    }
    const handleP2 = () => {
        db.collection('user').doc(currentUser.uid).get().then(data => {
            countMessage = data.data().countSendMessage
            countP1cheer = data.data().countP1cheerBtn
            countP2jeer = data.data().countP2jeerBtn
            //console.log(data.data().countSendMessage)
            //alert(countMessage)
        }).then(() => {
            client.say(`#ligoligo12`, `@${currentUser.displayName}, p2-`);
            countP2jeer++;
            countMessage++;
            db.collection('user').doc(currentUser.uid).update({

                countSendMessage: countMessage,
                countP2jeerBtn: countP2jeer

            })
        })
    }

    return(
        <div className="containerIF2">
                <div className="row row-cols-2">
                    <button className="btn btn-success" onClick={handleP1}>P1+</button>
                    <button className="btn btn-danger" onClick={handleP2}>P2-</button>
                </div>

            </div>
    )

}

export default BtnP1;
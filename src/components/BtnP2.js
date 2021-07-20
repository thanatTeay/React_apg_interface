import React, { useContext } from 'react'
import { AuthContext } from './auth'
import firebaseConfig from '../config'


const BtnP2 = () =>{
    const { currentUser } = useContext(AuthContext);
    let countMessage = 0;
    let countP1jeer = 0;
    let countP2cheer = 0;
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
            countP1jeer = data.data().countP1jeerBtn
            countP2cheer = data.data().countP2cheerBtn
            //console.log(data.data().countSendMessage)
            //alert(countMessage)
        }).then(() => {
            client.say(`#ligoligo12`, `@${currentUser.displayName}, p1-`);
            countP1jeer++
            countMessage++
            db.collection('user').doc(currentUser.uid).update({

                countSendMessage: countMessage,
                countP1jeerBtn: countP1jeer,

            })
        })
    }
    const handleP2 = () => {
        db.collection('user').doc(currentUser.uid).get().then(data => {
            countMessage = data.data().countSendMessage
            countP1jeer = data.data().countP1jeerBtn
            countP2cheer = data.data().countP2cheerBtn
            //console.log(data.data().countSendMessage)
            //alert(countMessage)
        }).then(() => {
            client.say(`#ligoligo12`, `@${currentUser.displayName}, p2+`);
            countP2cheer++
            countMessage++
            db.collection('user').doc(currentUser.uid).update({

                countSendMessage: countMessage,
                countP2cheerBtn: countP2cheer

            })
        })
    }

    return(
        <div className="containerIF2">
                <div className="row row-cols-2">
                    <button className="btn btn-success" onClick={handleP2}>P2+</button>
                    <button className="btn btn-danger" onClick={handleP1}>P1-</button>
                </div>

            </div>
    )

}

export default BtnP2;
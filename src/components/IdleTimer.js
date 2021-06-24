import React, {useRef,useContext} from 'react'
import IdelTimer from 'react-idle-timer'
import firebaseConfig from '../config'
import { AuthContext } from './auth'


function IdleTimerContainer(){
    const { currentUser } = useContext(AuthContext);
    const db = firebaseConfig.firestore();
    const idleTimerRef = useRef(null)
    const onIdle = () =>{
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
    return(
        <div>
            <IdelTimer ref={idleTimerRef} timeout = {180 * 1000} onIdle={onIdle}></IdelTimer>
        </div>
    )
}

export default IdleTimerContainer
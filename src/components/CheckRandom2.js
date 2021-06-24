import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './auth'
import firebaseConfig from '../config'
import { Alert } from 'react-st-modal'

const initPasscode = () => {
    var generator = require('generate-password');
    var password = generator.generate({
        length: 10,
        numbers: true
    })
    return password
}

const CheckRandom2 = () => {



    const [passcode, setPasscode] = useState(initPasscode)
    const { currentUser } = useContext(AuthContext);
    const db = firebaseConfig.firestore();


    const onSubmit = () => {

        if(currentUser)
        {
            db.collection('passcode').doc(currentUser.uid).update({
                passcode2: passcode
    
            }).then(()=>{
                window.location.href = '/submit2'
            })
        }
        else if(!currentUser)
        {
            db.collection('passcode').doc("notuser").update({
                passcode2: passcode
    
            }).then(()=>{
                Alert("Please login .......",'Error')
                window.location.href = '/login'
            })
        }
        console.log(currentUser)
        /*db.collection('passcode').doc('setPasscode').set({
            passcode1: [passcode]

        }).then(()=>{
            //window.location.href = '/login'
        })

        //window.location.href = '/login'*/


    }


    useEffect(() => {


    }, [])

    return (

        <div className="container-fluid">
            <div className="row main-content text-center ">
                <div className="col-md-12 col-xs-12 col-sm-12 ">
                    <div className="container-fluid">
                        <div className="row"><h1>PASSCODE: {passcode}</h1></div>
                        <div className="row"><h2>Copy this passcode and back to submit page</h2></div>



                        <button className="btnlogin btn-success" onClick={onSubmit}>Back to submit</button>
                    </div>


                </div>


            </div>

        </div >



    )
}

export default CheckRandom2;
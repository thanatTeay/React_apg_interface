(this["webpackJsonpapg-interface"]=this["webpackJsonpapg-interface"]||[]).push([[0],{150:function(e,t,c){},157:function(e,t){},184:function(e,t){},186:function(e,t){},197:function(e,t){},199:function(e,t){},226:function(e,t){},228:function(e,t){},229:function(e,t){},234:function(e,t){},236:function(e,t){},255:function(e,t){},267:function(e,t){},270:function(e,t){},273:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(39),o=c.n(a),i=(c(150),c(24)),r=c(10),l=c(7),u=c(139),d=(c(151),c(274),u.a.initializeApp({apiKey:"AIzaSyCO6BpMApQvqzEGUpBUmwJPR3rwGsPG3Jw",authDomain:"apg-interface.firebaseapp.com",projectId:"apg-interface",storageBucket:"apg-interface.appspot.com",messagingSenderId:"1068638183389",appId:"1:1068638183389:web:55e4fa3d6319b4766d6034",measurementId:"G-QYXLE81GN1"})),j=c(2),b=s.a.createContext(),h=function(e){var t=e.children,c=Object(n.useState)(!0),s=Object(l.a)(c,2),a=s[0],o=s[1],i=Object(n.useState)(null),r=Object(l.a)(i,2),u=r[0],h=r[1];return Object(n.useEffect)((function(){d.auth().onAuthStateChanged((function(e){h(e),o(!1)}))}),[]),a?Object(j.jsx)("p",{children:"Loading....."}):Object(j.jsx)(b.Provider,{value:{currentUser:u},children:t})},m=c(26),O=c.n(m),f=c(55),p=c(9),x=function(){var e=Object(n.useContext)(b).currentUser,t=d.firestore(),c=Object(n.useState)([]),s=Object(l.a)(c,2),a=s[0],o=s[1];function i(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-12 mx-auto text-center mb-0 ",children:Object(j.jsxs)("div",{className:"responsive-iframe",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h6",{className:"col col-2",children:"Name"}),Object(j.jsx)("h6",{className:"col",children:"Cheer Player 1"}),Object(j.jsx)("h6",{className:"col",children:"Jeer Player 1"}),Object(j.jsx)("h6",{className:"col",children:"Cheer Player 2"}),Object(j.jsx)("h6",{className:"col",children:"Jeer Player 2"}),Object(j.jsx)("h6",{className:"col",children:"Winner Player 1 team"}),Object(j.jsx)("h6",{className:"col",children:"Winner Player 2 team"}),Object(j.jsx)("h6",{className:"col",children:"Total"})]}),a.map((function(e){return Object(j.jsxs)("div",{className:"row row-col-2",children:[Object(j.jsx)("p",{className:"col col-2",children:e.displayName}),Object(j.jsx)("p",{className:"col",children:e.countP1cheerBtn}),Object(j.jsx)("p",{className:"col",children:e.countP1jeerBtn}),Object(j.jsx)("p",{className:"col",children:e.countP2cheerBtn}),Object(j.jsx)("p",{className:"col",children:e.countP2jeerBtn}),Object(j.jsx)("p",{className:"col",children:e.countP1win}),Object(j.jsx)("p",{className:"col",children:e.countP2win}),Object(j.jsx)("p",{className:"col",children:e.countSendMessage})]},e.displayName)}))]})})})})})}return Object(n.useEffect)((function(){t.collection("user").orderBy("countSendMessage","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),o(t)}))}),[]),Object(j.jsx)("div",{className:"thead-dark",children:Object(j.jsx)("div",{className:"row row-cols-2",children:Object(j.jsxs)("div",{className:"col-lg-12 mx-auto text-center mb-0 mt-3 ",children:[Object(j.jsx)("label",{className:"col-md-2",children:"Display Name:"}),Object(j.jsx)("span",{className:"col-md-4",id:"display-name",children:e.displayName}),Object(j.jsx)("label",{className:"col-md-2",children:Object(j.jsx)("button",{className:"btn btn-outline-info",onClick:function(){return console.log(e.uid),void t.collection("user").doc(e.uid).update({isOnline:!1,isP1team:!1,isP2team:!1}).then((function(){d.auth().signOut()})).catch((function(e){var t=e.message;alert(t,"Error!")}))},children:"Sign out"})}),Object(j.jsx)("button",{className:"btn btn-outline-info",onClick:Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(Object(j.jsx)(i,{}),{title:"Leaderboard",showCloseIcon:!0});case 2:e.sent;case 3:case"end":return e.stop()}}),e)}))),children:"Leaderboard"})]})})})},g=c(140),v=function(){Object(n.useContext)(b).currentUser;return Object(j.jsx)("div",{className:"containerIF2",children:Object(j.jsx)("div",{className:"row row-cols-sm-1",children:Object(j.jsx)("div",{className:"col-lg-12 mx-auto text-start mb-0 ",children:Object(j.jsx)("div",{className:"containerIF",children:Object(j.jsx)(g.a,{channel:"ligoligo12",id:"ligoligo12",theme:"dark",width:"100%",height:"100%",onVideoPause:function(){return console.log(":(")}})})})})})},w=function(){var e=Object(n.useContext)(b).currentUser,t=0,s=0,a=0,o=d.firestore(),i=new(c(85).Client)({options:{debug:!0,messagesLogLevel:"info"},connection:{reconnect:!0,secure:!0},identity:{username:"ligoligo12",password:"oauth:2adeuj6p5ui8ujtxmqwkf55sk5janf"},channels:["ligoligo12"]});i.connect().catch(console.error);return Object(j.jsx)("div",{className:"containerIF2",children:Object(j.jsxs)("div",{className:"row row-cols-2",children:[Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){o.collection("user").doc(e.uid).get().then((function(e){t=e.data().countSendMessage,s=e.data().countP1cheerBtn,a=e.data().countP2jeerBtn})).then((function(){i.say("#ligoligo12","@".concat(e.displayName,", p1+")),s++,t++,o.collection("user").doc(e.uid).update({countSendMessage:t,countP1cheerBtn:s})}))},children:"P1+"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){o.collection("user").doc(e.uid).get().then((function(e){t=e.data().countSendMessage,s=e.data().countP1cheerBtn,a=e.data().countP2jeerBtn})).then((function(){i.say("#ligoligo12","@".concat(e.displayName,", p2-")),a++,t++,o.collection("user").doc(e.uid).update({countSendMessage:t,countP2jeerBtn:a})}))},children:"P2-"})]})})},N=c(141);var P=function(){var e=Object(n.useContext)(b).currentUser,t=d.firestore(),c=Object(n.useRef)(null);return Object(j.jsx)("div",{children:Object(j.jsx)(N.a,{ref:c,timeout:18e4,onIdle:function(){t.collection("user").doc(e.uid).update({isOnline:!1,isP1team:!1,isP2team:!1}).then((function(){d.auth().signOut()})).catch((function(e){var t=e.message;alert(t,"Error!")}))}})})},y=function(){var e=Object(n.useContext)(b).currentUser,t=d.firestore(),c=Object(n.useState)(!0),s=Object(l.a)(c,2),a=s[0],o=s[1],i=Object(n.useState)(!0),u=Object(l.a)(i,2),h=u[0],m=u[1],O=Object(n.useState)(0),f=Object(l.a)(O,2),g=(f[0],f[1]),N=Object(n.useState)([]),y=Object(l.a)(N,2),S=(y[0],y[1]);function E(){t.collection("user").doc(e.uid).get().then((function(c){c.data().answerFirstQuestion?(t.collection("countuser").doc("onweb").onSnapshot((function(e){var t=[];t.push(e.data()),S(t),e.data().p1team})),Object(p.a)("Welcome to Player 1 team!!!!!","Welcome")):t.collection("user").doc(e.uid).update({isOnline:!1,isP1team:!1,isP2team:!1}).then((function(){d.auth().signOut()})).catch((function(e){var t=e.message;alert(t,"Error!")}))}))}return Object(n.useEffect)((function(){e&&E(),window.onbeforeunload=function(){t.collection("user").doc(e.uid).update({isOnline:!1,isP1team:!1,isP2team:!1}).catch((function(e){var t=e.message;alert(t,"Error!")}))}}),[]),Object(n.useEffect)((function(){if(h){var c=window.setInterval((function(){t.collection("user").doc(e.uid).get().then((function(e){var t=e.data().answerFirstQuestion,c=e.data().answerSecordQuestion;g((function(e){return e+1})),t&&c?(m((function(e){return!1})),console.log(t,c)):(m((function(e){return!1})),window.location.href="/submit2")}))}),36e4);return function(){return window.clearInterval(c)}}}),[h]),e?(e&&a&&(t.collection("user").doc(e.uid).update({isOnline:!0,isP2team:!1,isP1team:!0}),o(!1)),Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{}),Object(j.jsx)(v,{}),Object(j.jsx)(w,{}),Object(j.jsx)(P,{})]})):Object(j.jsx)(r.a,{to:"/login"})},S=function(){var e=Object(n.useContext)(b).currentUser,t=0,s=0,a=0,o=d.firestore(),i=new(c(85).Client)({options:{debug:!0,messagesLogLevel:"info"},connection:{reconnect:!0,secure:!0},identity:{username:"ligoligo12",password:"oauth:2adeuj6p5ui8ujtxmqwkf55sk5janf"},channels:["ligoligo12"]});i.connect().catch(console.error);return Object(j.jsx)("div",{className:"containerIF2",children:Object(j.jsxs)("div",{className:"row row-cols-2",children:[Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){o.collection("user").doc(e.uid).get().then((function(e){t=e.data().countSendMessage,s=e.data().countP1jeerBtn,a=e.data().countP2cheerBtn})).then((function(){i.say("#ligoligo12","@".concat(e.displayName,", p2+")),a++,t++,o.collection("user").doc(e.uid).update({countSendMessage:t,countP2cheerBtn:a})}))},children:"P2+"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){o.collection("user").doc(e.uid).get().then((function(e){t=e.data().countSendMessage,s=e.data().countP1jeerBtn,a=e.data().countP2cheerBtn})).then((function(){i.say("#ligoligo12","@".concat(e.displayName,", p1-")),s++,t++,o.collection("user").doc(e.uid).update({countSendMessage:t,countP1jeerBtn:s})}))},children:"P1-"})]})})},E=function(){var e=Object(n.useContext)(b).currentUser,t=Object(n.useState)(0),c=Object(l.a)(t,2),s=(c[0],c[1],d.firestore()),a=Object(n.useState)(!0),o=Object(l.a)(a,2),i=o[0],u=o[1],h=Object(n.useState)(!0),m=Object(l.a)(h,2),O=m[0],f=m[1],g=Object(n.useState)(0),w=Object(l.a)(g,2),N=(w[0],w[1]),y=Object(n.useState)([]),E=Object(l.a)(y,2),M=(E[0],E[1]);function C(){s.collection("user").doc(e.uid).get().then((function(t){t.data().answerFirstQuestion?(s.collection("countuser").doc("onweb").onSnapshot((function(e){var t=[];t.push(e.data()),M(t)})),Object(p.a)("Welcome to Player 2 team!!!!!","Welcome")):s.collection("user").doc(e.uid).update({isOnline:!1,isP1team:!1,isP2team:!1}).then((function(){d.auth().signOut()})).catch((function(e){var t=e.message;alert(t,"Error!")}))}))}return Object(n.useEffect)((function(){e&&C(),window.onbeforeunload=function(){s.collection("user").doc(e.uid).update({isOnline:!1,isP1team:!1,isP2team:!1}).catch((function(e){var t=e.message;alert(t,"Error!")}))}}),[]),Object(n.useEffect)((function(){if(O){var t=window.setInterval((function(){s.collection("user").doc(e.uid).get().then((function(e){var t=e.data().answerFirstQuestion,c=e.data().answerSecordQuestion;N((function(e){return e+1})),t&&c?(f((function(e){return!1})),console.log(t,c)):(f((function(e){return!1})),window.location.href="/submit2")}))}),36e4);return function(){return window.clearInterval(t)}}}),[O]),e?(e&&i&&(s.collection("user").doc(e.uid).update({isOnline:!0,isP2team:!0,isP1team:!1}),u(!1)),Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{}),Object(j.jsx)(v,{}),Object(j.jsx)(S,{}),Object(j.jsx)(P,{})]})):Object(j.jsx)(r.a,{to:"/login"})},M=function(){var e,t=Object(n.useState)(!1),c=Object(l.a)(t,2),s=(c[0],c[1]),a=Object(n.useState)(!1),o=Object(l.a)(a,2),r=(o[0],o[1]),u=Object(n.useState)(!0),h=Object(l.a)(u,2),m=(h[0],h[1]),O=d.firestore(),f=Object(n.useState)([]),x=Object(l.a)(f,2),g=(x[0],x[1]),v=0,w=0;Object(n.useContext)(b).currentUser;return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row main-content bg-success text-center",children:[Object(j.jsx)("div",{className:"col-md-4 text-center company__info",children:Object(j.jsx)("span",{className:"company__logo",children:Object(j.jsx)("h2",{children:Object(j.jsx)("span",{className:"fa fa-android"})})})}),Object(j.jsx)("div",{className:"col-md-8 col-xs-12 col-sm-12 login_form ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{children:"Log In"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("form",{id:"login-form",onSubmit:function(t){t.preventDefault();var c=t.target.elements,n=c.email,a=c.password;try{d.auth().signInWithEmailAndPassword(n.value,a.value).then((function(t){t.user.emailVerified?(s(!0),O.collection("user").doc(t.user.uid).get().then((function(t){r(t.data().answerFirstQuestion),e=t.data().answerFirstQuestion})).then((function(){console.log(e),e?O.collection("user").doc(t.user.uid).update({isOnline:!0}).then((function(){O.collection("user").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),console.log(t),t.map((function(e){e.isOnline&&(!0===e.isP1team&&(v++,m(v)),!0===e.isP2team&&(w++,m(w)))})),function(){if(v-w>2)window.location.href="/MainP2";else if(w-v>2)window.location.href="/MainP1";else{var e=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}(0,2);window.location.href=0===e?"/MainP1":"/MainP2"}O.collection("countuser").doc("onweb").update({p1team:v,p2team:w})}(),g(t)}))})):window.location.href="/submit"}))):(Object(p.a)("Please verify your email","Verification"),s(!1))})).catch((function(e){var t=e.message;Object(p.a)(t,"Error!")}))}catch(o){Object(p.a)(o,"Error!")}},children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"text",name:"email",id:"email",className:"form__input",placeholder:"Email",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"password",name:"password",id:"password",className:"form__input",placeholder:"Password",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{className:"btnlogin btn-success",type:"submit",children:"Login"})})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("p",{children:["Don't have an account? ",Object(j.jsx)(i.b,{to:"/signup",children:"Register Here"})]})})]})})]})})},C=function(){return c(89).generate({length:10,numbers:!0})},k=function(){var e=Object(n.useState)(C),t=Object(l.a)(e,2),c=t[0],s=(t[1],Object(n.useContext)(b).currentUser),a=d.firestore();return Object(n.useEffect)((function(){}),[]),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row main-content text-center ",children:Object(j.jsx)("div",{className:"col-md-12 col-xs-12 col-sm-12 ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("h1",{children:["PASSCODE: ",c]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{children:"Copy this passcode and back to submit page"})}),Object(j.jsx)("button",{className:"btnlogin btn-success",onClick:function(){s?a.collection("passcode").doc(s.uid).set({passcode1:c}).then((function(){window.location.href="/submit"})):s||a.collection("passcode").doc("notuser").set({passcode1:c}).then((function(){Object(p.a)("Please login .......","Error"),window.location.href="/login"})),console.log(s)},children:"Back to submit"})]})})})})},B=function(){return c(89).generate({length:10,numbers:!0})},_=function(){var e=Object(n.useState)(B),t=Object(l.a)(e,2),c=t[0],s=(t[1],Object(n.useContext)(b).currentUser),a=d.firestore();return Object(n.useEffect)((function(){}),[]),Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row main-content text-center ",children:Object(j.jsx)("div",{className:"col-md-12 col-xs-12 col-sm-12 ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("h1",{children:["PASSCODE: ",c]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{children:"Copy this passcode and back to submit page"})}),Object(j.jsx)("button",{className:"btnlogin btn-success",onClick:function(){s?a.collection("passcode").doc(s.uid).update({passcode2:c}).then((function(){window.location.href="/submit2"})):s||a.collection("passcode").doc("notuser").update({passcode2:c}).then((function(){Object(p.a)("Please login .......","Error"),window.location.href="/login"})),console.log(s)},children:"Back to submit"})]})})})})},q=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1];return c?Object(j.jsx)(r.a,{to:"/login"}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"row main-content bg-success text-center",children:[Object(j.jsx)("div",{className:"col-md-4 text-center company__info",children:Object(j.jsx)("span",{className:"company__logo",children:Object(j.jsx)("h2",{children:Object(j.jsx)("span",{className:"fa fa-android"})})})}),Object(j.jsx)("div",{className:"col-md-8 col-xs-12 col-sm-12 login_form ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{children:"Register"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("form",{id:"register_form",onSubmit:function(e){e.preventDefault();var t=e.target.elements,c=t.email,n=t.password,a=t.cPassword,o=t.display_Name;try{n.value===a.value?d.auth().createUserWithEmailAndPassword(c.value,n.value).then((function(e){e.user.updateProfile({displayName:o.value});var t=d.firestore();t.collection("user").doc(e.user.uid).set({uID:e.user.uid,displayName:o.value,answerFirstQuestion:!1,answerSecordQuestion:!1,createdID:Date(),isOnline:!1,isP1team:!1,isP2team:!1,countSendMessage:0,countP1cheerBtn:0,countP2cheerBtn:0,countP1jeerBtn:0,countP2jeerBtn:0,countP1win:0,countP2win:0}),t.collection("leaderboard").doc(e.user.uid).set({uID:e.user.uid,displayName:o.value,answerFirstQuestion:!1,answerSecordQuestion:!1,createdID:Date(),isOnline:!1,isP1team:!1,isP2team:!1,countSendMessage:0,countP1cheerBtn:0,countP2cheerBtn:0,countP1jeerBtn:0,countP2jeerBtn:0,countP1win:0,countP2win:0}),e.user.sendEmailVerification(),e.user.emailVerified||(Object(p.a)("Please verify your email","Verification"),s(!0))})).catch((function(e){var t=e.message;Object(p.a)(t,"Error!")})):Object(p.a)("Password confirmation does not match Password!!!!","Error!")}catch(r){var i=r.message;alert(i)}},children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"text",name:"email",id:"email",className:"form__input",placeholder:"Email",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"password",name:"password",id:"password",className:"form__input",placeholder:"Password",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"password",name:"cPassword",id:"cPassword",className:"form__input",placeholder:"Confirm Password",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"text",name:"display_Name",id:"display_Name",className:"form__input",placeholder:"Display Name",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{className:"btnlogin btn-success",type:"submit",children:"Register"})})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("p",{children:["Login? ",Object(j.jsx)(i.b,{to:"/login",children:"Login Here"})]})})]})})]})})})},D=function(){var e=Object(n.useContext)(b).currentUser,t=d.firestore(),c=Object(n.useState)(!0),s=Object(l.a)(c,2),a=(s[0],s[1]),o=Object(n.useState)([]),i=Object(l.a)(o,2),u=(i[0],i[1]),h=Object(n.useState)(null),m=Object(l.a)(h,2),O=(m[0],m[1]),f=0,x=0;if(Object(n.useEffect)((function(){e&&Object(p.a)("Please do the first questionnaire on this link: https://jp.surveymonkey.com/r/RQ2MFYR. After that, please copy passcode from questionnaire and submit on this page","Please do a questionnaire")}),[]),!e)return Object(j.jsx)(r.a,{to:"/login"});return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row main-content text-center ",children:Object(j.jsx)("div",{className:"col-md-12 col-xs-12 col-sm-12 ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{children:"Submit your passcode"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("form",{id:"login-form",onSubmit:function(c){c.preventDefault();var n=c.target.elements.passcode;t.collection("passcode").doc(e.uid).get().then((function(c){console.log(n.value),O(n.value),n.value===c.data().passcode1?t.collection("user").doc(e.uid).update({passcode1:n.value,submitData:Date(),answerFirstQuestion:!0}).then((function(){t.collection("user").doc(e.uid).update({isOnline:!0}).then((function(){t.collection("user").get().then((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),console.log(c),c.map((function(e){e.isOnline&&(!0===e.isP1team&&(f++,a(f)),!0===e.isP2team&&(x++,a(x)))})),function(){if(f-x>2)window.location.href="/MainP2";else if(x-f>2)window.location.href="/MainP1";else{var e=(c=0,n=2,c=Math.ceil(c),n=Math.floor(n),Math.floor(Math.random()*(n-c)+c));window.location.href=0===e?"/MainP1":"/MainP2"}var c,n;t.collection("countuser").doc("onweb").update({p1team:f,p2team:x})}(),u(c)}))}))})):Object(p.a)("Wrong passcode!!!!!!","Error")}))},children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"text",name:"passcode",id:"passcode",className:"form__input",placeholder:"Press your passcode here",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{className:"btnlogin btn-success",type:"submit",children:"Submit"})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("p",{children:["Please do a questionnaire on this link: ",Object(j.jsx)("a",{href:"https://jp.surveymonkey.com/r/RQ2MFYR",children:"Click Here"})]}),Object(j.jsx)("p",{children:"After that, please copy passcode from questionnaire and submit on this page"})]})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){console.log("asdasdasd"),t.collection("passcode").doc(e.uid).get().then((function(e){Object(p.a)(e.data().passcode1,"Your passcode")})).catch((function(e){Object(p.a)("Please do a questionnaire!!!!!","Error")}))},children:"Forgot a passcode"})]})})]})})})})},Q=function(){var e=Object(n.useContext)(b).currentUser,t=d.firestore(),c=Object(n.useState)(!0),s=Object(l.a)(c,2),a=(s[0],s[1]),o=Object(n.useState)([]),i=Object(l.a)(o,2),u=(i[0],i[1]),h=Object(n.useState)(null),m=Object(l.a)(h,2),x=(m[0],m[1]),g=0,v=0;if(Object(n.useEffect)((function(){e&&Object(p.a)("Please do the second questionnaire on this link: https://jp.surveymonkey.com/r/RQQ7D6B. After that, please copy passcode from questionnaire and submit on this page","Please do the second questionnaire")}),[]),!e)return Object(j.jsx)(r.a,{to:"/login"});return Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row main-content text-center ",children:Object(j.jsx)("div",{className:"col-md-12 col-xs-12 col-sm-12 ",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{children:"Submit your passcode"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("form",{id:"login-form",onSubmit:function(c){c.preventDefault();var n=c.target.elements.passcode;t.collection("passcode").doc(e.uid).get().then((function(c){console.log(n.value),x(n.value),n.value===c.data().passcode2?t.collection("user").doc(e.uid).update({passcode2:n.value,submitData2:Date()}).then((function(){t.collection("user").doc(e.uid).get().then((function(c){var s=function(e,t){return Math.abs(t-e)/6e4}(new Date(c.data().submitData).getTime(),new Date(c.data().submitData2).getTime());console.log(s),s<=10?t.collection("user").doc(e.uid).update({passcode2:n.value,answerSecordQuestion:!0}).then((function(){t.collection("user").doc(e.uid).update({isOnline:!0}).then((function(){t.collection("user").get().then((function(e){var c=[];e.forEach((function(e){c.push(e.data())})),console.log(c),c.map((function(e){e.isOnline&&(!0===e.isP1team&&(g++,a(g)),!0===e.isP2team&&(v++,a(v)))})),function(){if(g-v>2)window.location.href="/MainP2";else if(v-g>2)window.location.href="/MainP1";else{var e=(c=0,n=2,c=Math.ceil(c),n=Math.floor(n),Math.floor(Math.random()*(n-c)+c));window.location.href=0===e?"/MainP1":"/MainP2"}var c,n;t.collection("countuser").doc("onweb").update({p1team:g,p2team:v})}(),u(c)}))}))})):t.collection("user").doc(e.uid).update({passcode2:"",answerFirstQuestion:!1,answerSecordQuestion:!1,passcode1:""}).then(Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)("You have been taking the questionnaire for too long. Please complete the first questionnaire and the second questionnaire again.","Error");case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).then((function(){t.collection("passcode").doc(e.uid).update({passcode2:"",passcode1:""}).then((function(){d.auth().signOut()}))}))}))})):Object(p.a)("Wrong passcode!!!!!!","Error")}))},children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("input",{type:"text",name:"passcode",id:"passcode",className:"form__input",placeholder:"Press your passcode here",required:!0})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{className:"btnlogin btn-success",type:"submit",children:"Submit"})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("p",{children:["Please do the second questionnaire on this link: ",Object(j.jsx)("a",{href:"https://jp.surveymonkey.com/r/RQQ7D6B",children:"Click Here"})]}),Object(j.jsx)("p",{children:"After that, please copy passcode from questionnaire and submit on this page"})]})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){t.collection("passcode").doc(e.uid).get().then((function(e){e.data().passcode2?Object(p.a)(e.data().passcode2,"Your passcode"):Object(p.a)("Please do a questionnaire!!!!!","Error")})).catch((function(e){Object(p.a)("Please do a questionnaire!!!!!","Error")}))},children:"Forgot a passcode"})]})})]})})})})};var F=function(){return Object(j.jsx)(h,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",component:M}),Object(j.jsx)(r.b,{path:"/login",component:M}),Object(j.jsx)(r.b,{path:"/signup",component:q}),Object(j.jsx)(r.b,{path:"/mainP1",component:y}),Object(j.jsx)(r.b,{path:"/mainP2",component:E}),Object(j.jsx)(r.b,{path:"/passcode",component:k}),Object(j.jsx)(r.b,{path:"/passcode2",component:_}),Object(j.jsx)(r.b,{path:"/submit",component:D}),Object(j.jsx)(r.b,{path:"/submit2",component:Q})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,275)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),I()},86:function(e,t){}},[[273,1,2]]]);
//# sourceMappingURL=main.d9579771.chunk.js.map
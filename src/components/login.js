import React from "react";
import { UserContext } from "./createcontext";
import Card from "./card";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const ctx = React.useContext(UserContext);   

  const firebaseConfig = {
    apiKey: "AIzaSyAzgqUWMGJpv_KWfWhhlEbNsCi-eaC3PRk",
    authDomain: "gregory-shaw-banking-app.firebaseapp.com",
    projectId: "gregory-shaw-banking-app",
    storageBucket: "gregory-shaw-banking-app.appspot.com",
    messagingSenderId: "637460095620",
    appId: "1:637460095620:web:a5c6e0a44d952468d218d1"
  };
//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
firebase.initializeApp(firebaseConfig);
    
  return (
    <Card
      bgcolor="secondary"
      header="LOGIN"
      status={status}
      //text={ctx.user[0].email}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 

function LoginForm(props){
  const [email, setEmail]     = React.useState('');
  const [password, setPassword]     = React.useState('');
  //const [err, setErr]     = React.useState('');
  //const ctx = React.useContext(UserContext);
 

//   const firebaseConfig = {
//     apiKey: "AIzaSyAzgqUWMGJpv_KWfWhhlEbNsCi-eaC3PRk",
//     authDomain: "gregory-shaw-banking-app.firebaseapp.com",
//     projectId: "gregory-shaw-banking-app",
//     storageBucket: "gregory-shaw-banking-app.appspot.com",
//     messagingSenderId: "637460095620",
//     appId: "1:637460095620:web:a5c6e0a44d952468d218d1"
//   };
// //!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// firebase.initializeApp(firebaseConfig);

const handleLogin = (e) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
  var user = userCredential.user;
    console.log('Google user ' + user.email)
    ctx.users[0].email = user.email
    console.log('Context user ' + ctx.users[0].email)
    props.setShow(false);
    props.setStatus('');
    })
    .catch((e) => {
      console.log(e.message)
      //setErr(e.message)
      props.setStatus("Error: " + e.message)
      setEmail('')
      setPassword('')
    });
  }

  //Google Login
  const handleGoogle = (e) => {
    console.log("google clicked");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(`You are logged in using the following email: ${user.email}`);
        props.setShow(false);
      })
      .catch((e) => {
        console.log(e.message)
        //setErr(e.message)
        props.setStatus("Error: " + e.message)
        setEmail('')
        setPassword('')
      });
  };

return (
    // <Card
    //   bgcolor="secondary"
    //   header="Login"
    //   body={
<>
   <h1 id="loggedInStatus">You are not yet logged in</h1>
   Email address<br/>
   <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/><br></br>
   Password<br/>
   <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/><br></br>
   <button className="btn btn-light" onClick={handleLogin}>Login</button><br/>
   {/* <button className="btn btn-light" onClick={handleSignUp}>SignUp</button> */}
   {/* <button className="btn btn-light" onClick={handleLogout}>Logout</button> */}
   <button className="btn btn-light" onClick={handleGoogle}>Google Login</button>
   <br></br>
   <br></br>
   {/* <p>{err ? 'ERROR: ' + err : ''}</p> */}
</>

)}

function LoginMsg(props){

  const handleLogout = (e) => {
    firebase.auth().signOut().then(() => {
      props.setShow(true)
      ctx.users[0].email = ''
      console.log('Context user ' + ctx.users[0].email)
    }).catch((e) => {
      console.log(e.message)
      //setErr(e.message)
      props.setStatus("Error: " + e.message)
    });
  }

  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={handleLogout}
      // onClick={() => props.setShow(true)}
      >
        Log Out
    </button>
  </>);
}

}
export default Login;



//   const handleSignUp = (e) => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     var user = userCredential.user;
//     console.log(user.email)
//     props.setShow(false);
//   })
//   .catch((error) => {
//     console.log(e.message)
//     //setErr(e.message)
//     props.setStatus("Error: " + e.message)
//     setEmail('')
//     setPassword('')
//   });
// }

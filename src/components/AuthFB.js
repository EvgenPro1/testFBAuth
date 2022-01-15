import React, {useState} from 'react';
import FacebookLogin from "react-facebook-login";

const AuthFb = () => {
    //we use state for this component because our app doesn't need to know anything about functionality of this component
    const [auth, setAuth] = useState({authStatus:false, name:''})
    const responseFacebook = response => {
        if (response.name) { //if our users already login we will know it...
            setAuth(() => ({authStatus: true, name: response.name}))
        }
    }
// ...and won't show button for login but show just greetings
    return auth.authStatus ? <div className='fbGreetings'> hello {auth.name}</div> :
        <FacebookLogin
        appId="1701100586887951"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}/>
}

export default AuthFb;

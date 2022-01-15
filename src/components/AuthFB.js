import React, {useEffect, useState} from 'react';
import FacebookLogin from "react-facebook-login";

const AuthFb = () => {
    const [auth, setAuth] = useState({authStatus:false, name:''})
    const responseFacebook = response => {
        if (response.name) {
            setAuth(() => ({authStatus: true, name: response.name}))
        }
    }

    return !auth.authStatus ? <div className='fbGreetings'> hello {auth.name}</div> :
        <FacebookLogin
        appId="1701100586887951"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}/>
}

export default AuthFb;

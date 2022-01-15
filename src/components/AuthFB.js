import React, {useEffect, useState} from 'react';
import FacebookLogin from "react-facebook-login";

const AuthFb = () => {
    const [auth, setAuth] = useState(false)
    const responseFacebook = response => response.name

    useEffect(()=>{
        if (responseFacebook) {
            setAuth(true)
        } else  setAuth(false)
    }, [])

    return !auth ? <FacebookLogin
        appId="1701100586887951"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}/> : <div> hello {responseFacebook}</div>
}

export default AuthFb;

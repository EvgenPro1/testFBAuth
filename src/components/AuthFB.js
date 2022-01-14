import React from 'react';
import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
    console.log(response);
}
const componentClicked = (data) => {
    console.warn(data)
}

const AuthFb = () => <FacebookLogin
            appId="1701100586887951"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />

export default AuthFb;

import React, {useState} from "react";
import"./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen(){

    const [signIn,setSignIn] = useState(false);

    return(

    <div className="LoginScreen">
        <div className="loginScreen_background">
            <img
                 src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                 alt=""
                 className="loginScreen_logo"/>
        </div>
        <button
            onClick={()=>setSignIn(true)}
            className="loginScreen_button">
            Sign In
        </button>
        <div className="loginScreen_gradient" />
        <div className="loginScreen_body">
            { signIn ?(
                <SignUpScreen/>
            ):(
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email"
                                   placeholder="Email Address"/>
                            <button
                                onClick={()=>setSignIn(true)}
                                className="loginScreen_getStarted">
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
            )}

        </div>

    </div>
    )
}

export default LoginScreen;
import LoginButton from "./Input";
import GoogleIcon from "../images/googleicon.png";
import AppleIcon from "../images/apple.svg";
import Heading from "./Heading";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

function LoginBox() {
    
    async function createUser() {
        try
          {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider)
          }
          catch(e) {
              console.log("Error:", e)
          }
      }

    function popUp() {
        const POPUP = document.getElementById("pop_top");
        POPUP.style.display = "block";
}

    return (
        <>
            <LoginButton rightimgsrc={GoogleIcon} divclass="google_login_button_container" leftimgclass="display_none_img" rightimgclass="login_input_img" text="Sign up with Google" onclick={createUser}/>
            <LoginButton leftimgsrc={AppleIcon} divclass="login_button_container" leftimgclass="apple_input_img" rightimgclass="display_none_img" text="Sign up with Apple" onclick={popUp}/>
            <div className="or_borders">
            <div className="or_border_left"></div>
            <Heading classname="L_B_T" text="or"/>
            <div className="or_border_right"></div>
            </div>
            <LoginButton divclass="login_button_container blue" text="Sign up with phone or email" onclick={popUp}/>
            <p className="para">By signing up, you agree to the <span>Terms of Services</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span> </p>
            <Heading classname="g_s_h_a " text="Already have an account?" />
            <LoginButton divclass="login_button_container font" leftimgclass="display_none_img" rightimgclass="display_none_img" text="Sign in" />
        </>
    )

} 

export default LoginBox;
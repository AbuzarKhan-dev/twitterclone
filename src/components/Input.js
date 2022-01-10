import Heading from "./Heading";
import Image from "./Image";


function LoginButton({ divclass, leftimgsrc, rightimgsrc, text, leftalt, rightalt, leftimgclass, rightimgclass, onclick }) {
    return (
        <div className={divclass} onClick={onclick}>
          <div className="login_button_container_wrapper">
              <div className="login_button_container_content">
              <Image img={leftimgsrc} alt={leftalt} classname={leftimgclass}/>
              <Heading  classname="g_s_h" text={text}/> 
              <Image img={rightimgsrc} alt={rightalt} classname={rightimgclass}/>
              </div>
              </div>  
        </div>
    )
}

export default LoginButton;
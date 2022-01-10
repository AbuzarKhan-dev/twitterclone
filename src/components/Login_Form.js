import React from "react";
import Icon from "../images/twitter-icon.svg";
import Image from "./Image";
import Heading from "./Heading";
import LoginBox from "./LoginButton";

function LoginFrom() {
  return (
    <div className="login_container_content">
      <Image
        img={Icon}
        alt="twitter-icon"
        classname="twitter_form_icon"
        imagedivclass="icon_div"
      />
      <Heading text="Happening now" classname="from_main_heading" />
      <Heading
        text="Join Twitter today"
        textend="."
        classname="from_second_heading"
      />
      <LoginBox />
    </div>
  );
}

export default LoginFrom;

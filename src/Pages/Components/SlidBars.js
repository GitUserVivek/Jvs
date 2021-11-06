import "../../Css/Slide.css";
import Linkedin from "../../assets/linkedin.png";
import Insta from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Email from "../../assets/email.png";
import { useState, useEffect } from "react";

export default function SlideBars() {

    const [WebProg, setWebProg] = useState("10px");
    const [ReactJsProg, setReactJsProg] = useState("10px");
    const [JavaProg, setJavaProg] = useState("10px");
    const [FlutterProg, setFlutterProg] = useState("10px");
    const [GitProg, setGitProg] = useState("10px");

    useEffect(() => {
        var i = 10;
        var web = setInterval(() => {
            if (i <= 200) setWebProg(i + "px");
            if (i <= 150) setReactJsProg(i + "px")
            if (i <= 80) setJavaProg(i + "px")
            if (i <= 130) setFlutterProg(i + "px")
            if (i <= 100) setGitProg(i + "px")
            // 
            if (i === 200) clearInterval(web)
            i = i + 2;
        }, 15);
        return () => { clearInterval(web) }
    }, []);

    const Progress = (props) => {
        return <div className="com"> {props.subname ? props.subname : props.name}    :  <div style={{ width: props.Progress }} className={props.name}></div> </div>
    }
    const Social = ({ media, classname, link }) => {
        return <> <a href={link} target="blank" ><img className={classname} src={media} alt="img" ></img> </a> </>
    }
    return <div className="Bars">
        <i>" Exploaring.. : " </i>
        <Progress Progress={WebProg} name="Web" subname="Web Dev" />
        <Progress Progress={ReactJsProg} name="ReactJs" />
        <Progress Progress={JavaProg} name="Java   " />
        <Progress Progress={FlutterProg} name="Flutter" />
        <Progress Progress={GitProg} name="Git    " />
        <div className="Social">
            <Social classname=" Linkedin " link="https://www.linkedin.com/in/vivek-jagtap-21353b216/" media={Linkedin} />
            <Social classname=" Email " link="mailto:jagtapvs9832@gmail.com" media={Email} />
            <Social classname=" Insta " link="https://www.instagram.com/another._.coder._/" media={Insta} />
            <Social classname=" Whatsapp " link="https://api.whatsapp.com/send/?phone=917066649832&text=hello" media={Whatsapp} />
            <Social classname=" Facebook " link="https://www.facebook.com/vivek.raje.127" media={Facebook} />
        </div>
    </div>

}
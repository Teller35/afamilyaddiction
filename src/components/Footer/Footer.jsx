import React from "react";
import { SiFacebook } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

const Footer = () => {
    return (
        <>
        <section className="DiscStyle">
            <div className="DiscStyle">
            <p>Disclaimer:</p> We hope that you will find this website helpful as a resource concerning addiction and family support.
            We welcome your comments and feedback on what has been helpful as well as ideas for improving. However, the information
            provided is not meant as a substitute for professional therapy or treatment. Although, we do believe sharing your story can
            be helpful in many ways and have worked hard to provide that space. We work hard to provide up to date information and
            resources, we cannot guarantee accuracy. Viewing this website or sending contact does not guarantee a relationship or constitute
            a therapeutic encounter. We believe through our own experience that therapy and community support can be incredibly helpful in
            addiction recovery and grief work. We do not endorse, guarantee, warrant or assume responsibility for the accuracy or reliability
            of any information offered by third party websites linked through the site. We do not collect, store or sell any information. 
            </div>
        </section>
        <footer>
            <div className="footerArea">
                <div className="developerStyle">
                <a href="https://www.facebook.com/profile.php?id=61555341645555"
              target="_blank"
              rel="noreferrer" className="FaceBook">
                    <SiFacebook size={30}/>                </a>
                <a href="https://www.tiktok.com/@a.family.addictio"
              target="_blank"
              rel="noreferrer" className="TikTok">
                    <SiTiktok size={30}/>
                </a>
                <a href="https://www.youtube.com/channel/UCJiwmnVGP51YjCcDOit_enQ"
              target="_blank"
              rel="noreferrer" className="YouTube">
                    <SiYoutube size={30}/>
                </a>
            </div>
            </div>
            <div className="footerArea">  
                &copy;2023 by A Family Addiction
            </div>
        </footer>
        </>
    );
};

export default Footer;
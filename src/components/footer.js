import React from 'react';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <>
            <div id="footer" class="footer">
                <div class="footer-sub">
                        <div class="footer_data">
                            <div class="footer_made_by">
                                <p>Made with 🤍</p>
                            </div>
                            <div class="linkedin_footer">
                                <p>Connect with us on <span><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></span> :</p>
                                <p id="vishal_profile"><a href="https://www.linkedin.com/in/vishal345" target="_default">Vishal Sharma</a></p>
                                <p id="priya_profile"><a href="https://www.linkedin.com/in/priya-jain-90066bb3" target="_default">Priya Jain</a>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//main container min-height:640px
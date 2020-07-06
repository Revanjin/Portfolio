import React from "react";
import titleSection from "../components/TitleSection";

export default function Contact() {
    return (
        <div className="size">
            {titleSection(
                "C O N T A C T",
                "FEEL FREE TO LEAVE A MESSAGE",
                "contact-icon",
                "bg-contact"
            )}
            <section className="base-container--reverse bg-contact">
                <div className="pages-border"></div>
                <div className="pages-content">
                    <div className="pages-content__headline">Contact me?</div>
                    <div className="pages-content__sub-headline">
                        If you wish to contact me
                    </div>
                    <div>
                        Hit me up on my Instagram{" "}
                        <span
                            onClick={openInsta}
                            role="img"
                            aria-label="camera"
                            class="contact-social-media"
                        >
                            📸
                        </span>
                    </div>
                    <div>
                        ...or feel free to click on this{" "}
                        <span
                            onClick={mailMe}
                            class="contact-social-media"
                            role="img"
                            aria-label="envelope"
                        >
                            ✉️
                        </span>{" "}
                        to mail me personally
                    </div>
                    <div>All Icons used are from flaticon.com/Freepik</div>
                </div>
            </section>
        </div>
    );
}

var openInsta = () => {
    window.open("https://www.instagram.com/revanjin", "_blank");
};

var mailMe = () => {
    window.location.href = "mailto:alex.tanachai@hotmail.de";
};

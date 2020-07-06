import React from "react";
import titleSection from "../components/TitleSection";

export default function Hobby() {
    return (
        <div className="size">
            {titleSection(
                "H O B B I E S",
                "WHAT ELSE BESIDE CODING?",
                "hobby-icon",
                "bg-hobby"
            )}
            <section className="base-container--reverse bg-hobby">
                <div className="pages-border"></div>
                <div className="pages-content">
                    <div className="pages-content__headline hobby-navi-padding">
                        Where do we start off?
                    </div>
                    <div className="pages-content__sub-headline">
                        Cooking - is one of my main hobbies. <br />I spend a lot
                        of time creating new recipes at home.
                    </div>
                    <div className="pages-content__sub-headline">
                        I spend a lot of time with our dog.
                    </div>
                    <div className="pages-content__sub-headline">
                        We got him from the forever loving and caring{" "}
                        <a
                            href="https://www.sftmorocco.org/"
                            class="hobby-link"
                        >
                            SFT Animal Sanctuary
                        </a>{" "}
                        in Morroco.
                        <br /> Make sure to check them out!
                    </div>
                    <div>
                        Cosplay - is the best way to express a passion for a
                        fictional world or character.
                    </div>
                    <div>
                        Like many others in the Development Business I am a gamer.
                    </div>
                </div>
            </section>
        </div>
    );
}

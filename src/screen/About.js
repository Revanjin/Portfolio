import React from "react";
import titleSection from "../components/TitleSection";

export default function About() {
    return (
        <div className="size">
            {titleSection(
                "T A N A C H A I",
                "FULL HEARTED - AMAZED BY FRONTEND TECH",
                "about-icon",
                "bg-home"
            )}
            <section className="base-container--reverse bg-home">
                <div className="pages-border"></div>
                <div className="pages-content">
                    <div className="pages-content__headline">
                        Hello everyone ಠ‿↼
                    </div>
                    <div className="pages-content__sub-headline">
                        I'm Tana - Front End Developer from Wuppertal, Germany
                    </div>
                    <div>
                        I've spent some time working with Front End Frameworks
                    </div>
                    <div>
                        I claimed a license as a training supervisor also known
                        as "Ausbilderschein"
                    </div>
                    <div>
                        Currently working on a project for a public charity
                        {"<link coming soon>"}
                    </div>
                </div>
            </section>
        </div>
    );
}

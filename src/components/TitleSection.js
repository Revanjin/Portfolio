import React from "react";

export default function titleSection(...args) {
    const [headline, subheadline, icon, background] = args;
    
    return (
        <section className={"base-container " + background}>
            <div className={icon}></div>
            <div className="pages-border"></div>
            <div className="pages-banner">
                <div className="pages-banner__headline">
                    <span>{headline}</span>
                </div>
                <div className="pages-banner__sub-headline">
                    <span>{subheadline}</span>
                </div>
            </div>
        </section>
    );
}

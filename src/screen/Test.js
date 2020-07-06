import React from "react";

export default function Test() {
    
    setTimeout(window.location.href = "http://www.w3schools.com", 2000);
    return (
        <div className="size">
            <section className="base-container--reverse bg-contact">
                <div className="pages-border"></div>
                <div className="pages-content">
                    <div className="pages-content__headline">TEST</div>
                    <div className="pages-content__sub-headline">
                        TEST
                    </div>
                </div>
            </section>
        </div>
    );
}
import React from "react";

export default function BMLModal() {

    setTimeout(() => {
        var bmlmodal = document.getElementById("bmlmodal");
        bmlmodal.style.transform = "translateY(-100%)";
    }, 20000)

    return (
        <div id="bmlmodal" className="bmlmodal">
            <div className="bmlmodal__headline">Black Lives Matter.</div>
            <a className="bmlmodal__link" href="https://eji.org/">
                Support the Equal Justice Initiative.
            </a>
        </div>
    );
}

import React from "react";

export default function Modal() {
    return (
        <div id="modal" className="modal">
            <div className="modal-container">
                <div className="modal-headline">
                    <div>You are about to leave this site!</div>
                    <div>Are you okay with it?</div>
                </div>

                <div className="modal-redirect">
                    <a href="http://github.com/Revanjin/">go onto github</a>
                    <div className="modal-redirect--close" onClick={closeModal}>Stay a bit longer</div>
                </div>
            </div>
        </div>
    );
}

var closeModal = () => {
    document.getElementById("modal").style.display = "none";
};

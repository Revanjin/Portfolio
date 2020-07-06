import React from "react";

export default function WrongBrowser() {
    return (
        <>
            <style>
                {`
                @import url('../dist/fonts/PressStart2P.ttf');
                html,
                body {
                    margin: 0;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                body {
                    overflow-y: hidden;
                    padding-top: 300px;
                    background-color: rgb(1, 2, 172);
                    font-family: "Press Start 2P", cursive;
                    color: white;
                }

                .IEcontainer {
                    width: 100%;
                    height: 100%;
                }

                .IEmsg {
                    padding-left: 100px;
                    padding-right: 100px;
                }

                .IEp {
                    text-align: left;
                }

                .IEcontinue {
                    text-align: center;
                }

                .IEhighlight {
                    color: rgb(1, 2, 172);
                    background-color: rgb(172, 173, 168);
                    padding: 3px;
                    text-align: center;
                    width: 300px;
                }

                .IEblink {
                    animation: blink 1s steps(2, start) infinite;
                }

                @keyframes blink {
                    to {
                        visibility: hidden;
                    }
                }`}
            </style>
            <div class="IEcontainer" align="center">
                <div class="IEmsg" align="center">
                    <p class="IEhighlight">Internet Explorer</p>
                    <p class="IEp">
                        A fatal exception due to IE has occured. The current
                        webpage will be <span class="IEblink">terminated</span>.{" "}
                    </p>
                    <p class="IEp">
                        {" "}
                        * Press any key to be redirected to google chromes
                        website to download a better browser.{" "}
                    </p>
                    <p class="IEp">
                        {" "}
                        * Click with your mouse to be redirected to the mozilla
                        firefox website to download a better browser.{" "}
                    </p>
                    <br />
                    <p class="IEcontinue">
                        {" "}
                        Press any key or click with your mouse to continue{" "}
                        <span class="IEblink">_</span>{" "}
                    </p>
                </div>
            </div>
        </>
    );
}

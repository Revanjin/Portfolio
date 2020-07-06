import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screen/About";
import Contact from "../screen/Contact";
import Skills from "../screen/Skills";
import Hobby from "../screen/Hobby";
import Test from "../screen/Test";

export default function SwitchRouter() {
    return (
        <Switch>
            <Route path="/test">
                <Test />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/hobby">
                <Hobby />
            </Route>
            <Route path="/">
                <About />
            </Route>
        </Switch>
    );
}

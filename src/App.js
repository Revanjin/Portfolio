import React from "react";
import { HashRouter } from "react-router-dom";
import SwitchRouter from "./router/Router";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import BLMModal from "./components/BLMModal";
import "./dist/css/main.css";

export default function App() {
    return (
        <HashRouter>
            <Modal></Modal>
            <BLMModal></BLMModal>
            <Navigation></Navigation>
            <SwitchRouter></SwitchRouter>
        </HashRouter>
    );
}

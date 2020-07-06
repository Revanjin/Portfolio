import React from "react";
import { Link } from "react-router-dom";

const navigationItems = [
    {
        name: "About Me",
        path: "/",
        component: "About",
    },
    {
        name: "Hobbies",
        path: "/hobby",
        component: "Hobby",
    },
    {
        name: "Contact",
        path: "/contact",
        component: "Contact",
    },
    {
        name: "Skills",
        path: "/skills",
        component: "Skills",
    },
];

var toggleBurgerMenu = () => {
    var navIcon = document.getElementById("nav-icon");
    var navBar = document.getElementById("nav-bar");
    navIcon.classList.toggle("burger-menu--open");
    navBar.classList.toggle("navigation--mobile__navigation--open");
};

var navigation = navigationItems.map((navElement, index) => {
    return (
        <div className="navigation__item" key={index}>
            <div className="navigation-block"></div>
            <Link to={navElement.path}>{navElement.name}</Link>
        </div>
    );
});

var mobileNavigation = () => {
    return (
        <div className="navigation--mobile">
            <div id="nav-icon" onClick={toggleBurgerMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="nav-bar" className="navigation--mobile__navigation">
                {navigationItems.map((element, index) => {
                    return (
                        <li
                            key={index}
                            className="navigation--mobile__list--item"
                        >
                            <Link
                                onClick={toggleBurgerMenu}
                                to={element.path}
                                className="navigation--mobile__link"
                            >
                                {element.name}
                            </Link>
                        </li>
                    );
                })}
                <li className="navigation--mobile__list--item">
                    <Link
                        to="#"
                        onClick={openModal}
                        className="navigation--mobile__link"
                    >
                        Github
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default function Navigation() {
    return (
        <div className="navigation">
            {mobileNavigation()}
            {navigation}
            <div className="navigation__item">
                <div className="navigation-block"></div>
                <Link to="#" onClick={openModal}>
                    Github
                </Link>
            </div>
        </div>
    );
}

var openModal = () => {
    var modal = document.getElementById("modal");
    modal.style.display = "flex";

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};

import React from "react";
import titleSection from "../components/TitleSection";

const skillSet = [
    {
        skillName: "html / (s)css",
        skillLevel: 5,
    },
    {
        skillName: "Javascript",
        skillLevel: 5,
    },
    {
        skillName: "React",
        skillLevel: 5,
    },
    {
        skillName: "Angular / Vue",
        skillLevel: 3,
    },
    {
        skillName: "C# / DotNet",
        skillLevel: 2,
    },
    {
        skillName: "Kentico",
        skillLevel: 3,
    },
    {
        skillName: "React Native",
        skillLevel: 4,
    },
    {
        skillName: "Expo",
        skillLevel: 4,
    },
    {
        skillName: "Flutter",
        skillLevel: 3,
    },
];

export default function Skills() {
    return (
        <div className="size">
            {titleSection(
                "S K I L L S",
                "JUST A SMALL OVERVIEW",
                "skills-icon",
                "bg-skill"
            )}
            <section className="base-container--reverse bg-skill">
                <div className="pages-border"></div>
                <div className="skills__container">
                    <div className="pages-content__headline">Main Skillset</div>
                    {createSkillSet()}
                </div>
            </section>
        </div>
    );
}

const createSkillSet = () => {
    return skillSet.map((s, index) => {
        if (s.skillLevel === 2) {
            return (
                <div className="skills__level" key={index}>
                    <kbd className="skills-technologies">{s.skillName}</kbd>
                    <span className="skills__level--bad"></span>
                    <span className="skills__level--medium"></span>
                </div>
            );
        } else if (s.skillLevel === 3) {
            return (
                <div className="skills__level" key={index}>
                    <kbd className="skills-technologies">{s.skillName}</kbd>
                    <span className="skills__level--bad"></span>
                    <span className="skills__level--medium"></span>
                    <span className="skills__level--good"></span>
                </div>
            );
        } else if (s.skillLevel === 4) {
            return (
                <div className="skills__level" key={index}>
                    <kbd className="skills-technologies">{s.skillName}</kbd>
                    <span className="skills__level--bad"></span>
                    <span className="skills__level--medium"></span>
                    <span className="skills__level--good"></span>
                    <span className="skills__level--very-good"></span>
                </div>
            );
        } else if (s.skillLevel === 5) {
            return (
                <div className="skills__level" key={index}>
                    <kbd className="skills-technologies">{s.skillName}</kbd>
                    <span className="skills__level--bad"></span>
                    <span className="skills__level--medium"></span>
                    <span className="skills__level--good"></span>
                    <span className="skills__level--very-good"></span>
                    <span className="skills__level--very-good"></span>
                </div>
            );
        }
    });
};

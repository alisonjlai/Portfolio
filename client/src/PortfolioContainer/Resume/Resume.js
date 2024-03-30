import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        // console.log(props);
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? <div className="heading-date">{props.fromDate + " - " + props.toDate}</div> : <div></div>}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                    <div>
                        <a href={props.link} style={{ color: "#003c63" }}>
                            {props.link ? "(GitHub Link)" : ""}
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Education", logoSrc: "education.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Work Experience", logoSrc: "work-history.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React.js", ratingPercentage: 85 },
        { skill: "Node.js", ratingPercentage: 80 },
        { skill: "C++", ratingPercentage: 90 },
        { skill: "Java", ratingPercentage: 85 },
        { skill: "C#", ratingPercentage: 75 },
        { skill: "MongoDB", ratingPercentage: 70 },
        { skill: "Postgres", ratingPercentage: 70 },
        { skill: "mySQL", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
            title: "Temperature Monitoring System",
            duration: { fromDate: "Jan. 2024", toDate: "Apr. 2024" },
            description: "Integrated Amazon DynamoDB database and AWS hosting; developed Python AWS Lambda functions for scalable API endpoints; created a dashboard in JavaScript and React for real-time temperature and air quality data, interactive graphs, and dataset downloads.",
            subHeading: "Built with AWS, DynamoDB, JavaScript, React.js, Node.js",
            link: "https://github.com/lai-jy/ProjectHotSauce",
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "Feb. 2024", toDate: "Mar. 2024" },
            description: "A responsive personal portfolio website to showcase my skills and background.",
            subHeading: "Built with React.js, Bootstrap, RxJS, Node.js",
            link: "https://github.com/lai-jy/portfolio-website",
        },
        {
            title: "Gesture Based Music Notation System",
            duration: { fromDate: "Nov. 2023", toDate: "Dec. 2023" },
            description: "A web-based application powered by OpenAI to generate personalized stories with illustrations for children of age 5-10",
            subHeading: "Built with React JS, OpenAI API",
            link: "https://github.com/mereluo/TeachMe",
        },
        {
            title: "Gomoku Game",
            duration: { fromDate: "Nov. 2023", toDate: "Dec. 2023" },
            description: "Created an intuitive music notation editor with gesture recognition for user-friendly score creation and real-time editing, adhering to Object Oriented Design principles.",
            subHeading: "https://github.com/lai-jy/music-notation-system",
            link: "https://github.com/lai-jy/gomoku",
        },
    ];

    const resumeDetails = [
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading key={index} heading={projectsDetails.title} subHeading={projectsDetails.subHeading} description={projectsDetails.description} fromDate={projectsDetails.duration.fromDate} toDate={projectsDetails.duration.toDate} link={projectsDetails.link} />
            ))}
        </div>,

        /* EDUCATION */
        <div className="resume-screen-container" key="education" id="education">
            <ResumeHeading heading={"Northeastern University - Seattle"} subHeading={"MS in Computer Science"} fromDate={"2023"} toDate={"2026"} description={"GPA: 4.0/4.0"} />
            <ResumeHeading heading={"Middlebury Institute of International Studies at Monterey"} subHeading={"MA in Localization Project Management and Translation"} fromDate={"2020"} toDate={"2023"} description={"GPA: 3.9/4.0"} />
            {/* <ResumeHeading heading={"University of Washington-Seattle"} subHeading={"Master in Measurement and Statistics"} fromDate={"2019"} toDate={"2022"} description={"GPA: 3.9/4.0"} /> */}
        </div>,

        /* PROGRAMMING SKILLS */
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
                    </div>
                </div>
            ))}
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading heading={"Graduate Research Assistant"} subHeading={"Middlebury Institute of International Studies"} fromDate={"2022"} toDate={"2023"} />
                <div className="experience-description">
                    <span className="resume-description-text">- Compiled datasets totaling 19,000+ segments from BBCs Series subtitles for domain specific training, boosting
model accuracy and consistency. </span>
                    <br />
                    <span className="resume-description-text">- Enhanced translation and interpretation model via systematic clean up and alignment of text data, leveraging
tools like SDL Trados and Olifant for process optimization.</span>
                    <br />
                    <span className="resume-description-text">- Conducted training with Microsoft Custom Translator and SYSTRAN, raised BLEU score (evaluation of
machine translated text) by 3.09.</span>
                </div>
            </div>
            <div className="experience-container">
                <ResumeHeading heading={"Program Manager"} subHeading={"Wonderful Sky Financial Group Limited, Hong Kong"} fromDate={"2021"} toDate={"2021"} />
                <div className="experience-description">
                    <span className="resume-description-text">- Managed translation projects keeping to both time and budget set up and monitored production schedule. </span>
                    <br />
                    <span className="resume-description-text">- Delivered high quality machine translated/post edited texts and updated term bases for system consistency.</span>
                    <br />
                    <span className="resume-description-text">- Collabrated with tech teams and clients, fostering communication between all parties. </span>
                </div>
            </div>
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 600;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="B" />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div style={carousalOffsetStyle.style} className="resume-details-carousal">
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    // useEffect(() => {
    //     return () => {
    //         /* UNSUBSCRIBE THE SUBSCRIPTIONS */
    //         fadeInSubscription.unsubscribe();
    //     };
    // }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container " id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Background and Projects"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
}
export default Resume;
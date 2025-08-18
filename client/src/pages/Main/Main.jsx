import './Main.css';
import thumbnail from "../../images/thumnail.png";
import CardDev from '../../components/CardDev/CardDev';

const cardDevs = [
    {
        name: "GoLang",
        type: "BackEnd",
        desc: "Fast, efficient, and compiled programming language.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
        url: "https://golang.org",
        color: "#00ADD8"
    },
    {
        name: "React",
        type: "FrontEnd",
        desc: "Declarative, component-based UI library for building web apps.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        url: "https://react.dev/",
        color: "#61DAFB"
    },
    {
        name: "Bootstrap",
        type: "Framework",
        desc: "Popular CSS framework for responsive design and components.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        url: "https://getbootstrap.com/",
        color: "#7952B3"
    },
];

const Main = () => {
    return (
        <div className='main-page'>
            <div className="container main-container">
                <div className="row main-detail align-items-center">
                    <div className="col-md-6 col-12">
                        <h1 className="main-title">Go - Task: Notes and Schedule</h1>
                        <p className="main-desc">
                            Effectively manage tasks and notes with <b>Go-Task</b>.  
                            Easily add, edit, and delete tasks in a simple interface.
                        </p>
                        <div className="main-buttons">
                            <button className="button button-start">Get Started</button>
                            <button className="button button-contact">Contact</button>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
                        <img src={thumbnail} alt="App Thumbnail" className="main-thumbnail" />
                    </div>
                </div>

                <hr className="divider" />

                <div className="main-engine">
                    <h2 className="main-engine__title">Development Technologies</h2>
                    <div className="engine-grid">
                        {cardDevs.map((card, idx) => (
                            <CardDev key={idx} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

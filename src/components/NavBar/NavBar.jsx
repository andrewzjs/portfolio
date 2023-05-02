import './NavBar.css'
import { Link } from 'react-scroll';

export default function() {
    return (
        <header>
            <nav>
                <ul className='links'>
                    <li id="name-nav"> andrewsantos.ca </li>
                    <li id="home-nav">
                        <Link class="link" to="home" smooth={true} duration={800} offset={-220}>
                        <i className="fa fa-home nav-icon" aria-hidden="true" /> 
                        home 
                        </Link>
                    </li>
                    <li id="project-nav">
                        <Link to="projects" smooth={true} duration={800} offset={-100}>
                        <i class="fas fa-project-diagram" /> 
                        Projects
                        </Link>
                    </li>
                    <li id="resume-nav">
                        <a href="https://drive.google.com/u/0/uc?id=1XL0bPZBlmFd6PvZkO6TGWa0oCz8UWAYr&export=download" smooth={true} duration={800} style={{textDecoration: "none", color: "white"}}>
                        <i class="fa-solid fa-file" />
                        Resume
                        </a>
                    </li>
                    <li id="contact-nav">
                        <Link to="contact" smooth={true} duration={800}>
                        <i class="fa-solid fa-address-book" />
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
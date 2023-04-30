import './NavBar.css'
import { Link } from 'react-scroll';

export default function() {
    return (
        <header>
            <nav>
                <ul className='links'>
                    <li id="name-nav"> andrewsantos.ca </li>
                    <li id="home-nav">
                        <Link to="home" smooth={true} duration={1000}>
                        <i className="fa fa-home nav-icon" aria-hidden="true" /> 
                        home 
                        </Link>
                    </li>
                    <li id="project-nav">
                        <Link to="projects" smooth={true} duration={1000}>
                        <i class="fas fa-project-diagram" /> 
                        Projects
                        </Link>
                    </li>
                    <li id="resume-nav">
                        <Link to="resume" smooth={true} duration={1000}>
                        <i class="fa-solid fa-file" />
                        Resume
                        </Link>
                    </li>
                    <li id="contact-nav">
                        <Link to="contacts" smooth={true} duration={1000}>
                        <i class="fa-solid fa-address-book" />
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
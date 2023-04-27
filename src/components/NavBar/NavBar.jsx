import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

export default function() {
    return (
        <header>
            <nav>
                <ul className='links'>
                    <li id="name-nav"> andrewzjs.ca </li>
                    <li><i className="fa fa-home nav-icon" aria-hidden="true" /> Home </li>
                    <li><i class="fas fa-project-diagram"></i> Projects </li>
                    <li><i class="fa-solid fa-file"></i> Resume </li>
                    <li id="contact-nav"><i class="fa-solid fa-address-book"></i> Contact </li>
                </ul>
            </nav>
        </header>
    )
}
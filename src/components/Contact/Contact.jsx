import './Contact.css'
import { Link } from 'react-scroll';

export default function Contact(){
    return(
        <section id="contact">
            <h1>Connect with me</h1>
            <br></br>
            <p>Send me a message - I'd love to receive your thoughts and feedback!</p>
            <div class="icons-container">
                <a href="https://www.linkedin.com/in/andrew-santos-7a7866262" target="_blank"><i class="fa-brands fa-linkedin" style={{paddingRight: "4rem"}}></i></a>
                <a href="https://github.com/andrewzjs" target="_blank"><i class="fa-brands fa-github" style={{paddingRight: "4rem"}}></i></a>
                <a href="https://instagram.com/andrew.jsph?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <Link class="intro3 animated" to="home" smooth={true} duration={800} offset={-100}>
                    <i class="fa-solid fa-angle-up" id ="home-up" style={{fontSize: "260%"}}></i>
            </Link>
            <p>Scroll to Top</p>
        </section>
    )
}
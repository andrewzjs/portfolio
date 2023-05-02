import './HomePage.css'
import pic from '../../images/pic.jfif'
import { Link } from 'react-scroll';

export default function HomePage(){
    return (
        <section id="home">
            <div class = "profile-container">
                <p class="intro1 animated">Hi there! I'm <span style={{fontSize: "110%", fontWeight: "bold", color: "aquamarine"}}>Andrew</span></p>
                <p class="intro2 animated">I'm a full-stack software developer. </p>
                    <img class="intro1 animated" src={pic} id ="pic"/>
                <br></br><br></br>
                <p class="intro3 animated">See my
                    <Link to="projects" smooth={true} duration={800} offset={-100} style={{marginLeft: ".5rem", fontWeight: "bold", color: "aquamarine"}}>
                     projects
                    </Link> <span style={{marginRight: "1rem"}}>below</span>  | 
                    <Link to="contact" smooth={true} duration={800} style={{marginLeft: "1.5rem", fontWeight: "bold", color: "aquamarine"}}>
                        Connect
                    </Link>  with me 
                </p>
                <Link class="intro3 animated" to="projects" smooth={true} duration={800} offset={-100}>
                    <i class="fa-solid fa-angle-down" id ="home-down" style={{fontSize: "260%"}}></i>
                </Link>
            </div>
        </section>
    )
}
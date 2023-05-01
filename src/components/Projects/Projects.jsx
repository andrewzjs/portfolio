import './Projects.css'
import project4 from '../../images/poke-clicker-pic.PNG'
import project3 from '../../images/audiofy-pic.PNG'
import project2 from '../../images/eeveepedia-pic.PNG'
import project1 from '../../images/nonobananas-pic.jpg'


export default function Projects() {
    return(
        <section id="projects">
            <h1>Projects </h1>
            <div class = "projects-container">
                <div class = "project-tile animated">
                    <img class = "project-preview" src={project4} />
                    <h2>PokeClicker    <a href="https://github.com/andrewzjs/poke-clicker" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        </a>
                    <a href="https://poke-clicker.herokuapp.com/" target="_blank">
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </a></h2>
                    <p>PokéClicker is a Pokemon-themed app where players can catch and collect Pokemon to build their ultimate team. Users can see detailed information about their own Pokemon as well as other users' Pokemon, and access their Pokedex to see all the pokemon they have successfully captured to date.</p>
                    <p>Developers: Andrew Santos and Michael Lucky</p>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li><i class="fa-brands fa-react"></i>React</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li><i class="fa-brands fa-node-js"></i>Node</li>
                        <li><i class="fa-solid fa-gamepad"></i>PokeAPI</li>
                    </ul>
                </div>
                <div class = "project-tile animated">
                    <img  class = "project-preview" src={project3} />
                    <h2>Audiofy <a href="https://github.com/derrickhua/unit-3-project" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        </a>
                    <a href="https://audiofyapp.herokuapp.com/" target="_blank">
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </a></h2>
                    <p>Audiofy is a music listening app designed so that listeners can enjoy their favourite music. Through the apps’s interface, users can maintain their own collection of music, listen, like/dislike songs, and add them to playlists.</p>
                    <p>Developers: Andrew Santos, Derrick Hua, Lara Livera, and Aggrey Ellis</p>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li><i class="fa-brands fa-python"></i>Python</li>
                        <li>Django</li>
                        <li>PostgresQL</li>
                        <li>Bootstrap</li>
                        <li>AWS</li>
                        <li>Bit.io</li>
                 
                    </ul>
                </div>
                <div class = "project-tile animated">
                    <img  class = "project-preview" src={project2} />
                    <h2>EeveePedia <a href="https://github.com/andrewzjs/eeveepedia" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://eeveepedia.herokuapp.com/" target="_blank">
                        <a><i class="fa-solid fa-up-right-from-square"></i></a>
                    </a></h2>
                    <p>EeveePedia is a web application where users can create their own Pokedex entries. Unlike a traditional Pokedex, users can add, update, and delete their own Pokedex entries as they see fit.</p>
                    <h3>Tech Stack</h3>
                    <ul>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li><i class="fa-brands fa-node-js"></i>Node</li>
                        <li><i class="fa-brands fa-square-js"></i>JavaScript</li>
                        <li><i class="fa-solid fa-gamepad"></i>PokeAPI</li>
                    </ul>
                </div>
                <div class = "project-tile animated">
                    <img  class = "project-preview" src={project1} />
                    <h2>No No Bananas <a href="https://github.com/andrewzjs/personal-projects/tree/main/no-no-bananas" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://github.com/derrickhua/unit-3-project" target="_blank">
                        <a href="https://andrewzjs.github.io/personal-projects/no-no-bananas/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </a></h2>
                    <p>No No Bananas is based on a slot machine game, but with a little twist. Matching fruits will give points, with the exception of the Rotten Banana, which will give -20 points.</p>
                    <h3>Tech Stack</h3>
                    <ul style = {{marginRight: "3rem"}}>
                        <li><i class="fa-brands fa-square-js"></i>JavaScript</li>
                        <li><i class="fa-brands fa-html5"></i>HTML</li>
                        <li><i class="fa-brands fa-css3-alt"></i>CSS</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
import './HomePage.css'
import pic from '../../images/pic.jfif'

export default function HomePage(){
    return (
        <>
        <section id="home">
            <h1>hi</h1>
            <p> I'm Andrew</p>
            <p>I'm a full-stack developer </p>
            <img src={pic} id ="pic"/>
        </section>
        </>
    )
}
import React from "react";
import './Portfolio.css'
import main from './main.jpg'
const About = () =>{
    
    return(
        <>
       <section class="about">
		<div class="main">
			<img src={main} alt="Profile"/>
			<div class="about-text">
				<h2>About Me</h2>
				<h5>Developer <span>& Designer</span></h5>
				<p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
				<button type="button">Let's Talk</button>
			</div>
		</div>
	</section>
        </>
    )
}
export default About;
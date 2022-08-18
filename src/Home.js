import React from 'react'
import './Portfolio.css'
const Home = () => {
  return (
    <>
      <div class="content">
			<h4>Hello, my name is</h4>
			<h1>Muhammad Sharjeel <span>Aijaz</span></h1>
			<h3>I'am a Web Developer.</h3>
			<div class="newslatter">
				<form>
					<input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
					<input type="submit" name="submit" value="Lets Start"/>
				</form>
			</div>
      </div>
	  <footer>
		{/* <p>Muhammad Sharjeel Aijaz</p>
		<p>For more Web Development Work please contact me</p> */}
		<div class="social">
			<a href="https://www.facebook.com/sharjeel.aijaz"><i class="fab fa-facebook-f"></i></a>
			<a href="https://www.instagram.com/sharjeel.empire/"><i class="fab fa-instagram"></i></a>
			<a href="twitter.com"><i class="fab fa-twitter"></i></a>
		</div>
		<div class="credits">
      CopyRight By
      <a class="credits-link" href="#" target="_blank">
        <svg class="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        Muhammad Sharjeel
      </a>
    </div>
	</footer>
    </>
  )
}

export default Home
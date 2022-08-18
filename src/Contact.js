// import './contact.css'
const Contact = () =>{
  return(
      <>
      <>
      <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +923003766753</div>
          <div class="app-contact">Email Id : Sharjeelaijaz50@gmail.com</div>
          <div class="social">
			<a href="https://www.facebook.com/sharjeel.aijaz"><i class="fab fa-facebook-f"></i></a>
			<a href="https://www.instagram.com/sharjeel.empire/"><i class="fab fa-instagram"></i></a>
			<a href="https://www.twitter.com/sharjeel.aijaz"><i class="fab fa-twitter"></i></a>
		</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" value="Muhammad Sharjeel Aijaz" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" />
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
            
          </div>
        </div>
      </div>
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
  </div>
</div>

      <div class="contact-me">
		<p>Let Me Get You A Beautiful Website.</p>
		<a class="button-two" href="#">Hire Me</a>
	</div>
      </>
      </>
  )
}
export default Contact;
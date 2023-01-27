import logo from '../imgs/blastlogo1.svg'


function About(){
    return(
        <>
        
        {/************* NAVBAR **********************/}

    <div class="navbar">
      <div class="logo">
      <a href="/home"><img src={logo} class="img"/></a>
      </div>
    
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/tour">Tour</a></li>
        <li><a href="https://linktr.ee/TheBlastMonkeys" target="_blank">Listen</a></li>
        <li><a href="https://linktr.ee/TheBlastMonkeys" target="_blank">Merch</a></li>
      </ul>
    </div>

     {/************* FOOTER **********************/}

   
     <div class="footer">
        <div class="copyright">Copyright © 2023 The Blast Monkeys - All Rights Reserved</div>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="https://linktr.ee/TheBlastMonkeys">Our Music</a></li>

        </ul>
      </div>

    </>
    )
}

export default About
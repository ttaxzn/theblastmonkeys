import React from "react";
import logo from '../imgs/blastlogo1.svg'
import {Helmet} from 'react-helmet';
import './Home.css'

function Home() {
  return (
    <>

    {/************* NAVBAR **********************/}

    <div class="navbar">
      <div class="logo">
      <a href="/home"><img src={logo} class="img" alt="logo"/></a>
      </div>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/tour">Tour</a></li>
        {/*eslint-disable-next-line*/}
        <li><a href="https://linktr.ee/TheBlastMonkeys" target="_blank">Listen</a></li>
        {/*eslint-disable-next-line*/}
        <li><a href="https://linktr.ee/TheBlastMonkeys" target="_blank">Merch</a></li>
      </ul>
    </div>


      {/************* YOUTUBE VIDEO **********************/}

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ner3c1OVGZ8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>


      {/************* SPOTIFY WIDGET **********************/}
    <div class="mobile">
      <iframe title="spotify"
        style={{borderRadius:"12", width:"80%", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft: "10%"}}
        src="https://open.spotify.com/embed/artist/2jN1t3YxArcbP4Ys6LKt34?utm_source=generator"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>

      <div class="desktop">
      <iframe title="spotify1"
        style={{borderRadius:"12", width:"40%", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft: "30%"}}
        src="https://open.spotify.com/embed/artist/2jN1t3YxArcbP4Ys6LKt34?utm_source=generator"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>

      {/************* BANDSINTOWN WIDGET **********************/}

    <Helmet>
      <script
        charset="utf-8"
        src="https://widget.bandsintown.com/main.min.js"
      ></script>
      </Helmet>
      <div class="tourdates1">
      {/*eslint-disable-next-line*/}
      <a
        class="bit-widget-initializer"
        data-artist-name="the blast monkeys"
        data-display-local-dates="true"
        data-div-id="tourdates"
        data-display-past-dates="false"
        data-auto-style="false"
        data-text-color="#000000"
        data-link-color="#eedc00"
        data-background-color="rgba(0,0,0,0)"
        data-display-track-button="false"
        data-display-limit="10"
        data-widget-width="50%"
        data-display-start-time="true"
        data-link-text-color="#FFFFFF"
        data-display-lineup="false"
        data-display-play-my-city="false"
        data-display-logo="false"
        data-separator-color="rgba(255, 255, 255, 0.5)"
      ></a>
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
  );
}

export default Home;

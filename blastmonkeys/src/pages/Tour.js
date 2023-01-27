import React from "react";
import { Helmet } from "react-helmet";
import "./Tour.css";
import logo from "../imgs/blastlogo1.svg";
function Tour() {
  return (
    <>
      {/************* NAVBAR **********************/}

      <div class="navbar">
        <div class="logo">
          <a href="/home">
            <img src={logo} class="img" alt="logo" />
          </a>
        </div>

        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tour">Tour</a>
          </li>
          <li>
            {/*eslint-disable-next-line*/}
            <a href="https://linktr.ee/TheBlastMonkeys" target="_blank">
              Listen
            </a>
          </li>
          <li>
            {/*eslint-disable-next-line*/}
            <a href="https://linktr.ee/TheBlastMonkeys" target="_blank">
              Merch
            </a>
          </li>
        </ul>
      </div>

      <h1 class="tourtitle">UPCOMING SHOWS</h1>
      {/************* BANDSINTOWN WIDGET **********************/}

      <Helmet>
        <script
          charset="utf-8"
          src="https://widget.bandsintown.com/main.min.js"
        ></script>
      </Helmet>
      <div class="tourdates">
        {/*eslint-disable-next-line*/}
        <a
          class="bit-widget-initializer"
          data-artist-name="the blast monkeys"
          data-display-local-dates="true"
          data-display-past-dates="false"
          data-auto-style="false"
          data-text-color="#000000"
          data-link-color="#eedc00"
          data-background-color="rgba(0,0,0,0)"
          data-display-track-button="false"
          data-display-limit="10"
          data-widget-width="100%"
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
        <div class="copyright">
          Copyright © 2023 The Blast Monkeys - All Rights Reserved
        </div>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="https://linktr.ee/TheBlastMonkeys">Our Music</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tour;

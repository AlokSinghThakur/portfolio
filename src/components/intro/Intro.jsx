import React from 'react'
import "./intro.scss";
import { init } from 'ityped'
import { useEffect,useRef } from 'react';
import Typewriter from 'typewriter-effect';


export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {

   
  //   // init(textRef.current, {
  //   //   showCursor: true,
  //   //   backDelay: 1500,
  //   //   backSpeed:60,
  //   //   strings: ["Developer", "Designer", "Content Creator"],
  //   // });
  // }, []);

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm    </h2>
          <h1>Alok Singh Thakur</h1>
          <h3>Explorer_<span>
              <Typewriter
                options={{
                           strings: [' _Software Developer', ' _Reader',' _Photographer'],
                           autoStart: true,
                           loop: true,
                          }}
                        /></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src="assets/down.png"></img>
        </a>
      </div>
    </div>
  )
}

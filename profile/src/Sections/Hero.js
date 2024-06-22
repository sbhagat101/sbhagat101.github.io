import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from "typewriter-effect"
import profile_pic from "../Assets/profile_pic.JPG"
import '../CSS/hero.css'

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--wrapper">
          <div className="hero--section--content--box">
            <div className="hero--section--content">
              <h1>Hi, I'm Shiv</h1>
              <h1 className="hero--section--title">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Software Engineer",
                      "Programmer",
                      "Basketball enthusiast",
                      "Cars enthusiast"
                    ],
                    autoStart:true,
                    loop: true,
                    pauseFor: 2000,
                  }}
                />
              </h1>
              <p className="hero--section--description">I'm a graduate from California State University - Fullerton with a passion for Computer Science,
                Currently, I’m a software Engineer building software and scripts for Flight Software simulation test bed in C++ and Python for an Observation Satellite @
                <a href="https://www.rtx.com/" target="_blank" rel="noreferrer">Raytheon</a>.
              </p>
            </div>
          </div>
          <div className="hero--section--img">
            <img src={profile_pic} alt="hero section" />
          </div>
        </div>
      </section>
    );
}
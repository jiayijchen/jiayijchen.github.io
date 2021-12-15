import React from 'react';
import Selfie from '../media/chen_square.png';
import Footer from './Footer.js';

export default function AboutMe() {
  return (
    <div className="container text-center landing">
      <div className="row">
        <div className="col-8 offset-2">
          <img className="border border-secondary w-50 mt-4 rounded-circle" src={Selfie} alt="Jacob Chen" />
        </div>
      </div>
      <div className="row">
        <h3>
          <div className="d-inline-block pt-3 font2">About Me</div>
        </h3>
      </div>
      <div className="row">
        <div className="col-8 col-sm-6 offset-2 offset-sm-3 text-start font2 pb-5">
          <p className="text-center">
            Hi, my name is Jacob Chen.
          </p>
          <hr className="mx-auto" style={{ width:"30vw" }} />
          <p className="justify">
            &emsp; I am a '19 University of Kentucky graduate with a degree in Computer Science.
            Although I grew up with a love for computers, after graduation I found myself working in
            education, and for the past two years, I have been working as a teacher at The Lexington School.
            After enduring the pandemic, I decided that teaching wasn't for me and applied for the Awesome Inc
            Full-Stack Web Developer Bootcamp. This webpage showcases my achievements and struggles while attending
            the bootcamp. Please enjoy and reach out if you have any questions!
          </p>
          {/* <p className="text-center">
            I'll put more text here at some point.
          </p> */}
        </div>
      </div>
      <Footer />
    </div>

  )
}

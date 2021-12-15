import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center landing bg-light">
      <div className="col-12 glow display-1 font1 ps-3 ps-sm-5" style={{ fontSize: "5vw" }}>hi, my name is</div>

      <div className="col-12 glow font1 ps-3 ps-sm-5" style={{ fontSize: "5vw" }}>jacob chen.</div>
      <div className="col-12 font2 display-2 text-secondary ps-3 ps-sm-5 mb-5 pb-5" style={{ fontSize: "3vw" }}>i'm an aspiring full-stack web developer.</div>
      <div className="col-12 font2 text-secondary mt-5 pt-5 mb-5 pb-5 text-center" style={{ fontSize: "2vw" }}>Checkout what I've made <a href="/portfolio">here</a>.</div>

      
    </div>
  )
}

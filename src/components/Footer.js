import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed-bottom text-center">
      {/* <hr className="mb-0 mx-auto w-50" /> */}
      <div className="bg-light shadow-lg">
        <a href="https://github.com/jiayijchen" target="_blank" rel="noreferrer"><i className="bi-github bi-custom-icon text-dark px-3" /></a>
        <a href="https://www.instagram.com/jacobchen0/" target="_blank" rel="noreferrer"><i className="bi-instagram bi-custom-icon text-dark px-3" /></a>
        <a href="https://www.linkedin.com/in/jiayijchen/" target="_blank" rel="noreferrer"><i className="bi-linkedin bi-custom-icon text-dark px-3" /></a>
      </div>
    </footer >
  )
}

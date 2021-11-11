import React from 'react';
import Selfie from '../chen_square.jpg';

export default function AboutMe() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <img className="border border-secondary mt-4 rounded-circle" src={Selfie} alt="Jacob Chen" />
                </div>
            </div>
            <div className="row">
                <h3>
                    <div className="d-inline-block pt-3" style={{ fontFamily: "Permanent Marker" }}>About</div>
                    <div className="d-inline pt-3 ps-2 strokeme" style={{ fontFamily: "Permanent Marker" }}>Me</div>
                </h3>
            </div>
            <div className="row">
                <div className="col-8 offset-2 text-start" style={{ fontFamily: "Varela Round" }}>
                    <p className="text-center">
                        Hello, my name is Jacob Chen.
                    </p>
                    <p className="justify">
                        &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices, libero eu maximus lobortis, nisi neque porta orci, consectetur semper tortor elit non mauris. Integer vel urna aliquet, interdum turpis at, porta ante. Aenean tempus purus sit amet tellus convallis, vel vulputate neque facilisis. Maecenas in metus at sapien hendrerit accumsan. Donec euismod rutrum dui interdum ultrices. Fusce eget lacus in augue finibus lobortis. Sed consectetur purus nec ultricies fermentum. Sed ipsum metus, euismod at convallis vel, tincidunt nec urna. Nam vitae egestas sapien, id pulvinar justo. Praesent egestas ut augue sit amet vestibulum. Curabitur eget hendrerit velit.
                        In et faucibus neque. Praesent suscipit faucibus luctus. Duis luctus metus eget justo elementum, et tempus orci gravida. Integer sit amet tempus augue. Sed aliquam accumsan urna, sed scelerisque tortor commodo eu. Nulla tempor est ac felis euismod laoreet. Cras ante justo, feugiat sed lacinia non, posuere vitae orci. Morbi tellus nisi, fringilla sed sagittis ut, luctus at ligula.
                    </p>
                </div>
            </div>
        </div>

    )
}

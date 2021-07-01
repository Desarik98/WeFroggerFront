import React from 'react';
import '../assets/styles/components/Register.scss';
import frog from "../assets/Images/Frog.png";

const Register = () => (
    <section className="userInteraction">
        <div className="register">
            <div className="formContainer">
                <form className="form">
                    <input type="text" className="input" placeholder="Username"/>
                    <a className="redirect" href="public/frogger.html">
                        <button type="button" className="playButton">Play!</button>
                    </a>
                    <div className="bottomForm">
                        <button type="button" className="createButton">Create</button>
                        <button type="button" className="joinButton">Join</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="frogImage">
            <img className="frog_img" src={frog} alt="Frog"/>
        </div>
    </section>
);

export default Register;
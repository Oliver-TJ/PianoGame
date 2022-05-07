import React from "react";
import {HomeButton} from "../components/GlobalComponents";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                Hello user, welcome to my PianoGame
            </p>
            <p2>
                Please click on one of the options below to begin:
            </p2>
            <div>
                <HomeButton href="./SignIn" className="home-button">
                    Sign In
                </HomeButton>
            </div>
            <div>
                <HomeButton href="./SignUp" className="home-button">
                    Sign Up
                </HomeButton>
            </div>
            <div>
                <HomeButton href="./PianoGame" className="home-button">
                    Play
                </HomeButton>
            </div>
        </div>
    )
}

export default Home;
import React from "react";
import "./Home.css";
import { HomeButton } from "../components/GlobalComponents";

function Home() {
    return ( // function rendering Home page
             // displays three buttons which take you to each area
        <div>
            <h1>Home Page</h1>
            <p>
                Hello user, welcome to my PianoGame
            </p>
            <p>
                Please click on one of the options below to begin:
            </p>
            <div className="home-box">
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
        </div>
    )

}

export default Home;
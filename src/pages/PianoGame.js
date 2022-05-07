import React, { useState } from 'react';
import { Piano } from "../components/Piano";
import './PianoGame.css';
import { CButton } from "../components/GlobalComponents";

function PianoGame() {



    return (
        <div>
            <PianosGame/>
        </div>
    )
}

class PianosGame extends React.Component {
    state = { isPressed: 'false'};


    handleClick = () => {
        this.setState({
            isPressed: 'true',
        });
    }

    render () {
        const Menu = () => {
            return (
                <div className="menu-box">
                    <div className="box">
                        <CButton className="btn-close" onClick={this.handleClick}>Play</CButton>
                        WELCOME TO THE PIANO GAME
                    </div>
                </div>
            );
        }

        if (this.state.isPressed === 'true') {
            return (
                <div>
                    <div className="time-counter" >{this.state.time}</div>
                    <header className="Piano">
                        <Piano />
                    </header>
                </div>
            );
        } else {
            return (
                <div>
                    <Menu />
                    <header className="Piano">
                        <Piano />
                    </header>
                </div>
            );
        }

    }
}

export default PianoGame;

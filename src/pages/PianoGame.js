import React from 'react';
import { Piano } from "../components/Piano";
import './PianoGame.css';
import { CButton } from "../components/GlobalComponents";
import styled from "styled-components";
import {NOTE_TO_XVAL, ODE_TO_JOY} from "../components/constants";
import _ from "lodash";


function PianoGame() {

    return (
        <div>
            <PianosGame/>
        </div>
    )
}




class NoteAnimations extends React.Component {
    render () {
        const playNotes = _.map(ODE_TO_JOY, (index) => {
            const Noted = styled.div`
                top: 130px;
                position: fixed;
                height: 60px;
                width: 50px;
                background-color: orange;
                z-index: 1;
                border: 2px solid black;
                opacity: 0;
                &:active {
                  opacity: 100%;
                  transition: 2s top;
                  top: 700px;
                }
            `;
            return (
                <Noted style={{left: NOTE_TO_XVAL[index]}}/>
            );
        });

        return (
                <div>
                    {playNotes}
                </div>
        )
    }
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
                        <div>
                            <p>PIANO GAME</p>
                            <p>Hit the notes falling from the top of the screen using your keyboard!</p>
                        </div>

                    </div>
                </div>
            );
        }

        if (this.state.isPressed === 'true') {
            return (
                <div>
                    <header  className="Piano">
                        <Piano />
                        <NoteAnimations/>
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

import React from 'react';
import {Piano} from "../components/Piano";
import './PianoGame.css';

function PianoGame() {
    return (
        <div className="PianoGame">
            <header className="Piano-header">
                <Piano />
            </header>
        </div>
    );
}

export default PianoGame;

import React from "react";
import _ from 'lodash'; // format = _.map( collection, iteratee )

import { Key } from "./Key";
import './Piano.css'
import {VALID_KEYS, NOTES, KEY_TO_NOTE} from "../global/constants";

class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    }

    componentDidMount = () => {
        document.getElementById("piano").addEventListener("mouseover", this.handleMouseOver);
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener("mousedown", this.handleMouseDown);
    }

    handleMouseOver = (event) => {
        const highlightedKey = document.getElementById("piano");
        highlightedKey.style.color = "red";
    }

    handleMouseDown = (event) => {
        if (event.repeat) {
            return;
        }
        const key = event.key;
        const updatedPressedKey = [this.state.pressedKeys];
        if (VALID_KEYS.includes(key) && !updatedPressedKey.includes(key)) {
            updatedPressedKey.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKey,
        })
        this.playNote(KEY_TO_NOTE[key]);

    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 0)
            }));
        }
    }

    handleKeyDown = (event) => {
        if (event.repeat) { // if the key is being held down
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
                />
            )
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio
                    id = {note}
                    key= {index}
                    src= {`../notes/${note}.mp3`}
                />
            );
        });


        return (
            <div>
                <div
                    className="piano"
                    id="piano"
                >
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </div>
        )
    }
}

export { Piano };
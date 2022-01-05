import React from "react";
import _ from 'lodash'; // format = _.map( collection, iteratee )
import { Key } from "./Key";
import './Piano.css'
import { VALID_KEYS, NOTES, KEY_TO_NOTE } from "../global/constants";

class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note) => {
        try {
            if (!_.isEmpty(note)) {
                const noteAudio = new Audio(document.getElementById(note).src);
                console.log(noteAudio);
                noteAudio.play();
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    pauseNote = (note) => {
        if(_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.pause();
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 0)
            }));
        }
        this.pauseNote(event.key);
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
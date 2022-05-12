import React from "react";
import './Key.css';
import { NOTE_TO_KEY } from "./constants";
import _ from 'lodash';

class Key extends React.Component {

    render() {
        let keyClassName = "key";

        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
        if (noteIsFlat) {
            keyClassName += " flat";
        }
        if (keyIsPressed) {
            keyClassName += " pressed";
        }
        return (
            <div >
                <div>
                    <div className="border-lines" />
                </div>
                <div>
                    <div className={keyClassName} />
                </div>
            </div>
        )

    }

    noteIsFlat = (note) => {
        return note.length > 2;
    }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note])
    }

}

export { Key };
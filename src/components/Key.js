import React from "react";
import './Key.css';
import { NOTE_TO_KEY } from "../global/constants";
import _ from 'lodash';

class Key extends React.Component {
    noteIsFlat = (note) => {
        return note.length > 2;
    }

    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note])
    }

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

        let key;
        if (noteIsFlat) {
            key = (
                <div className={keyClassName}/>
            );
        } else {
            key = (
                <div className={keyClassName}>
                    <div className="key-text" />
                </div>
            );
        }
        return key;
    }
}

export { Key };
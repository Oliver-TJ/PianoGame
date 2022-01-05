const NOTES =  ['A0', 'Bb0', 'B0', 'C0',
                'Db0', 'D0', 'Eb0', 'E0',
                'F0', 'Gb0', 'G0', 'Ab0',
                'A1', 'Bb1', 'B1', 'C1',
                'Db1', 'D1', 'Eb1', 'E1',
                'F1', 'Gb1', 'G1', 'Ab1',
                'A2', 'Bb2', 'B2', 'C2',
                'Db2', 'D2', 'Eb2', 'E2',
                'F2', 'Gb2', 'G2', 'Ab2',
                'A3', 'Bb3', 'B3', 'C3',
                'Db3', 'D3', 'Eb3', 'E3',
                'F3', 'Gb3', 'G3', 'Ab3',
                'A4', 'Bb4', 'B4', 'C4',
                'Db4', 'D4', 'Eb4', 'E4',
                'F4', 'Gb4', 'G4', 'Ab4',
                'A5', 'Bb5', 'B5', 'C5',
                'Db5', 'D5', 'Eb5', 'E5',
                'F5', 'Gb5', 'G5', 'Ab5',
                'A6', 'Bb6', 'B6', 'C6',
                'Db6', 'D6', 'Eb6', 'E6',
                'F6', 'Gb6', 'G6', 'Ab6',
                'A7', 'Bb7', 'B7', 'C7', ];

const ALL_NOTES =  ['C3', 'Db3', 'D3', 'Eb3',
                'E3', 'F3', 'Gb3', 'G3',
                'Ab3', 'A3', 'Bb3', 'B3', 'A4'];

const VALID_KEYS = ['a', 'w', 's', 'd',
                    'r', 'f', 't', 'g',
                    'h', 'u', 'j', 'i', 'k'];

const KEY_TO_NOTE = {
    a: 'A3',
    w: 'Bb3',
    s: 'B3',
    d: 'C3',
    r: 'Db3',
    f: 'D3',
    t: 'Eb3',
    g: 'E3',
    h: 'F3',
    u: 'Gb3',
    j: 'G3',
    i: 'Ab3',
    k: 'A4',
};


const NOTE_TO_KEY = {
    A3   : 'a',
    Bb3  : 'w',
    B3   : 's',
    C3   : 'd',
    Db3  : 'r',
    D3   : 'f',
    Eb3  : 't',
    E3   : 'g',
    F3   : 'h',
    Gb3  : 'u',
    G3   : 'j',
    Ab3  : 'i',
    A4  : 'k'
};




export { NOTE_TO_KEY, KEY_TO_NOTE, VALID_KEYS, NOTES, ALL_NOTES };

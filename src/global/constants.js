const ALL_NOTES =  ['C0', 'Db0', 'D0', 'Eb0',
                    'E0', 'F0', 'Gb0', 'G0',
                    'Ab0', 'A0', 'Bb0', 'B0',
                    'C1', 'Db1', 'D1', 'Eb1',
                    'E1', 'F1', 'Gb1', 'G1',
                    'Ab1', 'A1', 'Bb1', 'B1',
                    'C2', 'Db2', 'D2', 'Eb2',
                    'E2', 'F2', 'Gb2', 'G2',
                    'Ab2', 'A2', 'Bb2', 'B2',
                    'C3', 'Db3', 'D3', 'Eb3',
                    'E3', 'F3', 'Gb3', 'G3',
                    'Ab3', 'A3', 'Bb3', 'B3',
                    'C4', 'Db4', 'D4', 'Eb4',
                    'E4', 'F4', 'Gb4', 'G4',
                    'Ab4', 'A4', 'Bb4', 'B4',
                    'C5', 'Db5', 'D5', 'Eb5',
                    'E5', 'F5', 'Gb5', 'G5',
                    'Ab5', 'A5', 'Bb5', 'B5',
                    'C6', 'Db6', 'D6', 'Eb6',
                    'E6', 'F6', 'Gb6', 'G6',
                    'Ab6', 'A6', 'Bb6', 'B6',
                    'C7', 'Db7', 'D7', 'Eb7',
                    'E7', 'F7', 'Gb7', 'G7',
                    'Ab7', 'A7', 'Bb7', 'B7',];

const NOTES =  ['C3', 'Db3', 'D3', 'Eb3',
                'E3', 'F3', 'Gb3', 'G3',
                'Ab3', 'A3', 'Bb3', 'B3',];

const VALID_KEYS = ['z', 's', 'x', 'd',
                    'c', 'v', 'g', 'b',
                    'h', 'n', 'j', 'm'];

const KEY_TO_NOTE = {
    z: 'C3',
    s: 'Db3',
    x: 'D3',
    d: 'Eb3',
    c: 'E3',
    v: 'F3',
    g: 'Gb3',
    b: 'G3',
    h: 'Ab3',
    n: 'A3',
    j: 'Bb3',
    m: 'B3',
};


const NOTE_TO_KEY = {
    C3   : 'z',
    Db3  : 's',
    D3   : 'x',
    Eb3  : 'd',
    E3   : 'c',
    F3   : 'v',
    Gb3  : 'g',
    G3   : 'b',
    Ab3  : 'h',
    A3   : 'n',
    Bb3  : 'j',
    B3   : 'm',
};




export { NOTE_TO_KEY, KEY_TO_NOTE, VALID_KEYS, NOTES, ALL_NOTES };

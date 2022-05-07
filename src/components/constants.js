// Array containing the range of notes available
const NOTES =  ['C3', 'Db3', 'D3', 'Eb3',
                'E3', 'F3', 'Gb3', 'G3',
                'Ab3', 'A3', 'Bb3', 'B3', 'C4'];

// array containing all of the valid keys you can press on the keyboard
const VALID_KEYS = ['a', 'w', 's', 'e',
                    'd', 'f', 't', 'g',
                    'y', 'h', 'u', 'j', 'k'];

const ODE_TO_JOY = [['E3', '1'], ['E3', '1'], ['F3', '1'], ['G3', '1'],
                    ['G3', '1'], ['F3', '1'], ['E3', '1'], ['D3', '1'],
                    ['C3', '1'], ['C3', '1'], ['D3', '1'], ['E3', '1'],
                    ['E3', '1'], ['D3', '1'], ['D3', '2'], ]

// Dictionary to map the keys to notes
const KEY_TO_NOTE = {
    a: 'C3',
    w: 'Db3',
    s: 'D3',
    e: 'Eb3',
    d: 'E3',
    f: 'F3',
    t: 'Gb3',
    g: 'G3',
    y: 'Ab3',
    h: 'A3',
    u: 'Bb3',
    j: 'B3',
    k: 'C4',
};

// Dictionary to map the notes to the key
const NOTE_TO_KEY = {
    C3   : 'a',
    Db3  : 'w',
    D3   : 's',
    Eb3  : 'e',
    E3   : 'd',
    F3   : 'f',
    Gb3  : 't',
    G3   : 'g',
    Ab3  : 'y',
    A3   : 'h',
    Bb3  : 'u',
    B3   : 'j',
    C4   : 'k'
};




export { NOTE_TO_KEY, KEY_TO_NOTE, VALID_KEYS, NOTES, ODE_TO_JOY};

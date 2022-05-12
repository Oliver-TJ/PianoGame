// Array containing the range of notes available
export const NOTES =  ['C3', 'Db3', 'D3', 'Eb3',
                'E3', 'F3', 'Gb3', 'G3',
                'Ab3', 'A3', 'Bb3', 'B3', 'C4'];

// array containing all of the valid keys you can press on the keyboard
 export const VALID_KEYS = ['a', 'w', 's', 'e',
                            'd', 'f', 't', 'g',
                            'y', 'h', 'u', 'j', 'k'];


// notes from the beginning of 'Ode to Joy'
export const ODE_TO_JOY = ['C3',  'D3',
                           'E3', 'F3',  'G3',
                           'A3',  'B3', 'C4'];


// sets the position of the falling notes
export const NOTE_TO_XVAL = {
    C3   : '423px',
    D3   : '478px',
    E3   : '533px',
    F3   : '588px',
    G3   : '643px',
    A3   : '698px',
    B3   : '753px',
    C4   : '808px'
};

// Dictionary to map the keys to notes
export const KEY_TO_NOTE = {
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
export const NOTE_TO_KEY = {
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


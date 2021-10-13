const NOTES =  ['c', 'df', 'd', 'ef',
                'e', 'f', 'gf', 'g',
                'af', 'a', 'bf', 'b'];

const VALID_KEYS = ['z', 's', 'x', 'd',
                    'c', 'v', 'g', 'b',
                    'h', 'n', 'j', 'm'];

const KEY_TO_NOTE = {
    z: 'c',
    s: 'df',
    x: 'd',
    d: 'ef',
    c: 'e',
    v: 'f',
    g: 'gf',
    b: 'g',
    h: 'af',
    n: 'a',
    j: 'bf',
    m: 'b',
};


const NOTE_TO_KEY = {
    c   : 'z',
    df  : 's',
    d   : 'x',
    ef  : 'd',
    e   : 'c',
    f   : 'v',
    gf  : 'g',
    g   : 'b',
    af  : 'h',
    a   : 'n',
    bf  : 'j',
    b   : 'm',
};




export { NOTE_TO_KEY, KEY_TO_NOTE, VALID_KEYS, NOTES };

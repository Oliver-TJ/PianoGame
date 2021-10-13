const NOTES =  ['c1', 'df1', 'd1', 'ef1',
                'e1', 'f1', 'gf1', 'g1',
                'af1', 'a1', 'bf1', 'b1',
                'c2', 'df2', 'd2', 'ef2',
                'e2', 'f2', 'gf2', 'g2',
                'af2', 'a2', 'bf2', 'b2'];

const VALID_KEYS = ['z', 's', 'x', 'd',
                    'c', 'v', 'g', 'b',
                    'h', 'n', 'j', 'm'];

const KEY_TO_NOTE = {
    z: 'c1',
    s: 'df1',
    x: 'd1',
    d: 'ef1',
    c: 'e1',
    v: 'f1',
    g: 'gf1',
    b: 'g1',
    h: 'af1',
    n: 'a1',
    j: 'bf1',
    m: 'b1'
}


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

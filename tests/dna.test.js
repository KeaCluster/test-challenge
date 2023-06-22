const removeCano = require('../dna');

test('new string with any non-canonical DNA base values removed',()=>{
    expect(removeCano('CTAGRSU')).toBe('CTAG');
});

test('(lower case) should be removed from the string',()=>{
    expect(removeCano('CACTGacg')).toBe('CACTG');
});

test('If the DNA string is empty, just return an empty string',()=>{
    expect(removeCano('')).toBe('');
});
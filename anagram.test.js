const isAnagram = require('./anagram');

test('is anagram function exist', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('cinema is anagram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('Dormitory is anagram of dirty room', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('Hello is not an anagram of Aloho', () => {
    expect(isAnagram('Hello', 'Aloho')).toBeFalsy();
});
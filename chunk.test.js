const chunkedArr = require('./chunk');

test('chunk arr function exist', () => {
    expect(chunkedArr).toBeDefined();
});

test('chunk an array of 10 values with the length  of 2', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2
    const arrayChunk = chunkedArr(numbers, len)
    expect(arrayChunk).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
});

test('chunk an array of 3 values with the length  of 1', () => {
    const numbers = [1,2,3];
    const len = 1
    const arrayChunk = chunkedArr(numbers, len)
    expect(arrayChunk).toEqual([[1], [2], [3]]);
});
const functions = require('./functions');
// toBe => for primitive type
test('Adds 2 + 2 to equal to 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to not equal to 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// check for truthy & falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement trats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    // null is a falsy value
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual => for reference type
test('User Should be hannah object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Hanna', lastName: 'Naderi'});
});

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['hana', "alis", "Admin"]
    expect(usernames).toContain("Admin");
});

// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
});

// Async Await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1)
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
});
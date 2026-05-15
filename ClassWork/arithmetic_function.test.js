/*test */

const { add, subtract } = require('./arithmetic_function');



test("test addition of two positive numbers", ()=> {

    let first_number = 82;
    let second_number = 18;

    let actual = add(first_number, second_number);
    let expected = 100;
    
    expect(actual).toBe(expected)
})


test("test addition of one negative numbers returns correct numbers", ()=> {

    let first_number = 82;
    let second_number = -18;

    let actual = add(first_number, second_number);
    let expected = 64;
    
    expect(actual).toBe(expected)
})

test("test addition of two negative numbers returns correct numbers", ()=> {

    let first_number = -10;
    let second_number = -5;

    let actual = add(first_number, second_number);
    let expected = -15;
    
    expect(actual).toBe(expected)
})


test("test subtraction of two positive numbers returns correct numbers", ()=> {

    let first_number = 10;
    let second_number = 5;

    let actual = subtract(first_number, second_number);
    let expected = 5;
    expect(actual).toBe(expected)
})

test("test subtraction of two negative  numbers returns correct numbers", ()=> {

    let first_number = -10;
    let second_number = -5;

    let actual = subtract(first_number, second_number);
    let expected = -5;
    expect(actual).toBe(expected)
})

test("test subtraction of one positive numbers returns correct numbers", ()=> {

    let first_number = 10;
    let second_number = 5;

    let actual = subtract(first_number, second_number);
    let expected = 5;
    expect(actual).toBe(expected)
})

test


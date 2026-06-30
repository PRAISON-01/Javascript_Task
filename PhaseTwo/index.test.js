const { calculate } = require("./function");
let {add, subtract} = calculate();

test("that i can add two numbers ", ()=> {

    const actual = add(2,3);
    expect(actual).toEqual(5);

})

// test("that i can multiply two numbers", ()=> {

//     const actual = multiply(2, 3);
//     expect(6).toEqual(actual);
// })

test("that add from the object works", ()=> {
    let actual = add(3, 6);
    expect(actual).toEqual(9)
})
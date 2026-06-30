


const { stack } = require("./../Stack/Stack.js")
let { isEmpty, push, pop, clear, peek, size, values} = stack();

test("test that new stack is empty ", ()=> {
    expect(isEmpty()).toBe(true)
})

test("test that push new stack is empty is false", ()=> {

    push("Krymzn");
    expect(isEmpty()).toBe(false);
})

test("test that push and pop, pop returns element", ()=> {
  
    push("Krymzn")
    expect(pop()).toEqual("Krymzn")
})

test("test that pop empty stack returns undefined", ()=> {
    clear()
    expect(pop()).toEqual(undefined);
} )


test("test that peek() returns empty returns undefined", ()=> {
    clear()
    expect(peek()).toEqual(undefined)
})

test("test that count() of empty stack returns undefined", ()=> {
    clear()
    expect(size()).toEqual(0)

})


test("test that push twice count returns 2", ()=> {
    clear()
    push("Praise")
    push("Krymzn")
    expect(size()).toEqual(2)
})


test("test that push twice returns a list of the elemnets in the list ", ()=> {
    clear()
    push("Praise")
    push("Krymzn")
    expect(values()).toEqual(["Praise", "Krymzn"])
})

// const Stack = require("./../Data_Structures/Stack")

// test("Test that newStack is empty", ()=> {

//     const  newStack = new Stack()
//     expect(newStack.isEmpty()).toBe(true)
// })

// test("Test that push element in stack. Is empty reurns True", ()=> {
//     const newStack = new Stack()
//     newStack.push("Uncle Bob")
//     expect(newStack.isEmpty()).toBe(false)
// })

// test("Test that pop() newStack throws error", ()=> {
//     const newStack = new Stack()
//     expect(newStack.pop()).toBe(null);
// })


// test("Test that push and pop returns element ", ()=> {
//     const newStack = new Stack();
//     newStack.push("Uncle Bob");
//     expect(newStack.pop()).toEqual("Uncle Bob");
// })


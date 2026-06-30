const { queue } = require("./../Queue/Queue.js")
let { isEmpty, enqueue, dequeue, clear, rear, front, size, values } = queue();

test("Test that queue is empty ", ()=> {

    expect(isEmpty()).toEqual(true);

})

test("Test that enqueue element queue isEmpty() returns flase", ()=> {
    clear()
    enqueue("Uncle bob")
    expect(isEmpty()).toEqual(false)
})

test("Test that enqueue(element)  and dequeue() returns the element",()=> {
    clear()
    enqueue("Krymzn")
    expect(dequeue()).toEqual("Krymzn")
})


test("test that enqueue twice and dequeue once", ()=> {
    clear()
    enqueue("Krymzn")
    enqueue("Praise")
    expect(dequeue()).toEqual("Krymzn");
})

test("Test that rear() returns the element at at the rear ", ()=> {
    clear()
    enqueue("Praise")
    enqueue("Krymzn")
    expect(rear()).toEqual("Krymzn");

})

test("Test that front() returns the element front", ()=> {
    clear()
    enqueue("Praise")
    enqueue("Krymzn")
    expect(front()).toEqual("Praise")
})

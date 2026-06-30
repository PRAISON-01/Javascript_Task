const {set} = require('./../Set/Set.js');
let {isEmpty, add, remove, clear, has, size, values} = set();

test("Test that set is empty ", ()=> {

    expect(isEmpty()).toEqual(true);

})

test("Test that add(element)  and has(element) returns true",()=> {
    clear()
    add("Krymzn")
    expect(isEmpty()).toEqual(false);
})   

test("Test that add(element)  and remove(element) returns false",()=> {
    clear()
    add("Krymzn")
    
    expect(remove("Krymzn")).toEqual("Krymzn")
})

test("Test that add(element)  twice has(value) returns true",()=> {
    clear()
    add("Krymzn")
    add("Praises")
    
    expect(has("Krymzn")).toEqual(true)
})

test("Test that add(element)  and size() returns 2",()=> {
    clear()
    add("Krymzn")
    add("Praises")
    expect(size()).toEqual(2)
})

test("Test that add(element)  and values() returns the element",()=> {
    clear()
    add("Krymzn")
    add("Praise")
    expect(values()).toEqual(["Krymzn", "Praise"])
})          

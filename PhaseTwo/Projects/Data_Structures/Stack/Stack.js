
function stack() {
    const checkEmpty = true;
    elements = []
    count = 0;

    function isEmpty() {
        return count == 0;
    }

    function push(element) {
        elements[count++]= element;
    }


    function pop() {
        // if(count = 0) return null;
        return elements[--count]
    }

    function clear() {
        count = 0;
    }

    function peek() {
        return elements[count - 1]
    }

    function size() {
        return count;
    }

    function values() {
        return elements;
    }

    
    return{
        isEmpty,
        push,
        pop,
        clear,
        peek,
        size,
        values,
    }
}

module.exports = {stack}

// class Stack{
//     elements = []
    
//     count = 0;

//     isEmpty() {
//         return count == 0
//     }

//     push(element) {
//         this.elements[this.count++] = element
//     }

//     pop() {
//         return this.elements[this.count] 
//     }

//     peek() {
//         return this.elements[this.elements.length];
//     }

// }

// module.exports = Stack

function queue() {
    const checkEmpty = true;
    elements = []
    count = 0;

    function isEmpty() {
        return count == 0;
    }

    function enqueue(element) {
        elements[count++]= element;
    }


    function dequeue() {
        // if(count = 0) return null;
        return firstElementRemove()
    }

    function firstElementRemove() {
        let firstElement = elements[0]
        for(let count = 0 ; count < size - 1; count++) {
            elements[count] = elements[count + 1];
        }

        elements[count - 1] = null;
        size--;
        return firstElement;
    
    }

    function clear() {
        count = 0;
    }

    function rear() {
        return elements[count - 1]
    }

    function front() {
        return elements[0]
    }

    function size() {
        return count;
    }

    function values() {
        return elements;
    }

    
    return{
        isEmpty,
        enqueue,
        dequeue,
        clear,
        rear,
        front,
        size,
        values,
    }
}

module.exports = {queue}
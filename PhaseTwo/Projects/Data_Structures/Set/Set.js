

function set() {
    const checkEmpty = true;
    elements = []
    count = 0;

    function isEmpty() {
        return count == 0;
    }

    function add(element) {
        elements[count++]= element;
    }


    function remove(value) {
    
        for(let index = 0; index < count; index++) {
            if(elements[index] == value) {
                elements[index] = elements[count - 1]
                elements[count - 1] = null;
                count--;
                return value;
            }
        }
    }

    function clear() {
        count = 0;
    }

    function has(value) {
        for(let index = 0; index < count; i++) {
            if(elements[index] === value) {
                return true;
            }
        }
        return false;
    }

    function size() {
        return count;
    }

    function values() {
        return elements;
    }

    
    return{
        isEmpty,
        add,
        remove,
        clear,
        has,
        size,
        values,
    }
}

module.exports = {set}
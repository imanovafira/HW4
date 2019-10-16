const ArrayList = function() {
    let size = 0;
    let array = [];

    this.clear = () =>{
    } 

    this.init = arr =>{
    }

    this.getSize = () => size;

    this.toString = () =>{
        return '[]'
    }

    this.init= arr => {
        this.clear();
        if(Array.isArray(arr)){
            for(let i = 0; i < arr.length; i++){
            array [i] = arr[i];
            size++
            } 
        }
    }

    this.clear = () => {

    };

    this.getSize = () => size;

    this.getString = () => {
        let result = '';

        result += '[';
        for(let i=0; i< array.length; i++){
            result+= array[i];
            if(i < array.length - 1){
                result+=', ';
            }
        } result += ']';
    }   
    
    this.push = value => {
        if(Array.isArray(value)){
    for(let i = 0; i < value.length; i++){
        array[i] = value[i];
                 size++;
       }
       }
    }

    this.pop = value => {
        if(Array.isArray(value)){
            let last = value.length -1;
            value.length = last;
        }
        return value.length;
    }
    this.unshift = value => {
        if(value===undefined) return undefined;
        tempArr = [value];

        if(Array.isArray(value)){
            for(let i = 0; i < array.length ; i++){
                tempArr[i + 1] = array[i];
                size++;
                
                return tempArr.length;
            }
        }
    }

    this.shift = value => {
        if(Array.isArray(value)){
            let first = value[0];
            let tempArr = [];
            for(let i = 1; i < value.length; i++){
                tempArr[i - 1] = value[i];
            }
            return first;  
        }
    }
}

function Node(x) {
    this.value = x;
    this.next = null;
};

function LinkedList() {
    let root = null;
    let size = 0;

    this.clear = () => {
        root = null;
        size = 0;
    }

    this.unshift = value => {
        const uzel = new Node(value);

        uzel.next = root;
        root = uzel;
        size++;
    }

    this.getSize = () => size;

    this.toString = () => {
        let result = '';
        let currentNode = root;

        result += '[';

        while(currentNode.next) {
            result += currentNode.value;
            if(currentNode.next){
                result += ', ';
            }
            currentNode = currentNode.next;
        }
        result += ']';

        return result;
    }
    
    this.init = arr => {
        this.clear();

        for(let i = arr.length-1; i >= 0; i--){
            const node = new Node(arr[i]);
            node.next = root;
            root = node;
            size++;
        }
    }
}

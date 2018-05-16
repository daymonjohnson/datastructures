class LinkedList{
    constructor(){
        this.head = null;
    }
    unshift(item)
    {
        //add the new item to the start of my linkedlist
        
        let node = new Node(item, this.head);
        node.previous = this.head;
        this.head = node;
    }
    shift(){
        //opposite of unshift, removes first item
        let el2= this.head.next;
        console.log('this is our second element ${el2}')
        console.log(el2.next);
        this.head= el2;
    }
    removeAll(item){
        //Removes all instances of item from the list
        
    }
    removeAt(index){
        //Removes item at a particular index
        let node = this.head;
        let previous= null
        for(let i=0; i<=index;i++){
            if(i===index-1){
                previous= node;
            }
            else if(i===index){
                if(node.next!==null){
                let newNext= node.next;
                prev.next= newNext;
                }
            }
            else{
                let newNext= null;
                previous.next= newNext;
            }
            node = this.getNextNode(node);
        }
    }
    getNextNode(node){
        let n= node.next;
        return n;
    }
    print(){
        //This will print each node in my linked list
        let node = this.head;

        while(node){
            console.log(node.value);
            node = node.next;
        }
    }
    

}

class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
        this.previous = null;
    }
}

let list = new LinkedList();

list.unshift("heeey");
list.unshift(1234);
list.unshift("slim shady");
list.unshift(true);
list.unshift("slim shady");
list.unshift("slim shady");
list.shift();
list.shift();
list.removeAt(2);
list.removeAt(4);
list.removeAt(4);

//list.print();

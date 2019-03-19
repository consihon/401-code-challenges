const node = require('./node.js');
class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }
    enque(value){
        let newNode = new Node(value);
        if (!this.front){
            this.front = newNode;
            this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    deque(){
        let node = this.front;
        this.front = node.next;
        if (this.front===null)this.rear=null;
        return node;
    }

    peek(){
        return this.front.value;
    }
}
module.exports={Queue};
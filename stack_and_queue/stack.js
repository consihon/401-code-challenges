'use-strict';
const node = require('./node.js');
class Stack{
    constructor(){
        this.top=null;
    }
    push(value){
        let newNode = new Node(value);
        if (!this.top){
            this.top=newNode;
        }else{
            newNode.next=this.top;
            this.top=newNode;
        }
    }

    pop() {
        if (this.top) {
            let node = this.top;
            this.top = node.next;
            return node;
        }
    }

    peek(){
        return this.top.value;
    }
}
module.exports = {Stack};
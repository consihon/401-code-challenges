'use strict';
let Queue = require('../stack_and_queue/queue');

module.exports.Tree = class{
    constructor(){
        this.root=null;
    }


    //this insertion method always ensures that we will have a tree that is in attempt to keep itself balanced.
    insert(val){
        if (this.root===null ){
            this.root=val;
        }else {
            let q = new Queue;
            q.enqueue(this.root);
            while (q.peek){
                if(!q.peek.value.left){
                    q.peek.value.left=val;
                    break;
                }else{
                    q.enqueue(q.peek.value.left)
                }
                if(!q.peek.right){
                    q.peek.right=val;
                    break;
                }else{
                    q.enqueue(q.peek.value.right)
                }
            }
        }
    }
    breadthFirst(){
        let returns=[];
        let qew = new Queue;
        if(this.root){
        qew.enqueue(this.root);
        while(qew.peek()){
            returns.push(qew.peek.value.value);
            if(qew.peek().value.left){
                qew.enqueue(qew.peek().value.left);
                if(qew.peek().value.value.right){
                    qew.enqueue(qew.peek().value.right);
                }
            }
            qew.pop();
        }
        return(returns.join(" "));
    };
    }
};
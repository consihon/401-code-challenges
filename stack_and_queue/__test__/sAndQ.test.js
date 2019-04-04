'use strict';
const stack = require ('./../stack.js');
const queue = require ('../queue.js');
const node = require ('../node.js');
const faker = require ('faker');

describe ('stacks',()=>{
    it ('can create an empty stack', ()=>{
        let stack = new stack.Stack();
        expect(stack.top).toEqual(null);
    });
    xit ('can push a new node on to the stack', ()=>{
        let stack = new Stack();
        stack.push(7);
        expect(stack.top.value).toEqual(7);
    });
    xit ('can multiple new nodes on to the stack', ()=>{
        let stack = new stack.Stack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        expect(stack.top.value).toEqual(9);
    });
   xit ('can peek at the top value of the stack',()=>{
        let stack = new stack.Stack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        expect(stack.peek()).toEqual(9);
    });
    xit('can pop a value off of the stack', ()=>{
        let stack = new stack.Stack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        expect(stack.pop().value).toEqual(9);
    })
    xit('can pop off all nodes from the stack', ()=>{
        let stack = new stack.Stack();
        stack.push(6);
        stack.push(8);
        stack.push(9);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toEqual(null);
    })



});

'use-strict';
let merge= require ('../linkedMerge');
let linked= require('../../six/lib/linked-list');
let node = require('../../six/lib/node');
const faker = require('faker');


describe('linked Merge Function',()=>{
    it('can merge 2 linked lists.',()=>{
    let testEnv= newlinkedList(7);
    let merged = merge.linkedMerge(testEnv.l1,testEnv.l2);
    expect(areSame(testEnv.array,merged)).toBeTruthy();
    });
    it('can take in linked lists of varying lengths',()=>{
        let testEnv=newStaggered();
        let l1 = testEnv.l1;
        let l2 = testEnv.l2;
        let merged = merge.linkedMerge(l1, l2);
        expect(areSame(testEnv.array,merged)).toBeTruthy();
    });
});

function newStaggered(){
    let arr =[];
    let l1 = new linked.LinkedList();
    let l2 = new linked.LinkedList();
    for (let i = 0; i < 10; i++) {
        let rand = faker.random.number();
        arr.push(rand);
        if (i % 2 === 0 && i < length / 2) {
            l1.append(rand)
        } else {
            l2.append(rand);
        }
    }
    return {array:arr, l1:l1, l2:l2};
};

function newlinkedList(length){
    let arr =[];
    let l1 = new linked.LinkedList();
    let l2 = new linked.LinkedList();
    for (let i = 0; i < length; i++){
        let rand = faker.random.number();
        arr.push(rand);
        (i%2===0) ? l1.append(rand) : l2.append(rand);
    }
    return {array:arr, l1:l1, l2:l2};
}

function areSame(array,linkedList){
    let strLL='';
    let strArr=array.toString();
    let current = linkedList.head;
    while (current.next){
        strLL+=current.value+',';
        current=current.next;
    }
    strLL+=current.value;
    return (strLL===strArr)
}
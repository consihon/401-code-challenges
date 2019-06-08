'use-strict';
let linked= require('../seven/lib/linked-list');
let node = require('../seven/lib/node');
const faker = require('faker');


module.exports.linkedMerge=function(l1,l2){
    let c1=l1.head;
    let c2=l2.head;
    let merge = new linked.LinkedList();
    while (c1||c2){
        if (c1){
            merge.append(c1.value);
            c1=c1.next;
        }
        if (c2){
            merge.append(c2.value);
            c2=c2.next;
        }
    }
    return merge;
};

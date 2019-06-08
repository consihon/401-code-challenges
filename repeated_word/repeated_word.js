'use-strict';
let map = require('../hashTable/hashTable.js');

module.exports.wordCount= function(string){
    if (!string){
        return null;
    }
    let arr = string.toString().split(' ');
    let hash = new map.HashTable(500);
    let greatest = '';
    arr.forEach(word=>{
        word=word.toLowerCase();
        while(word.charAt(word.length-1)===','){
            word=word.substring(0,word.length-1);
        }
        while(word.charAt(word.length-1)==='.'){
            word=word.substring(0,word.length-1);
        }
        while(word.charAt(word.length-1)==='-'){
            word=word.substring(0,word.length-1);
        }
        if (hash.contains(word)){
            hash.add(word,(hash.get(word)+1));
            greatest = hash.get(word) > hash.get(greatest)||0 ?  word : greatest ;
        }else{
            hash.add(word,1);
            greatest = hash.get(word) > hash.get(greatest)||0 ?  word : greatest ;
        }
    });
    let counts= hash.arr.map(ele=>{
       if (ele.key){
           return `${ele.key} ${ele.value}`
       }
    });
    console.log(counts);
    return greatest;
};
'use strict';
const repeat= require('../repeated_word.js');

describe('Repeated Words ',()=>{
    let str= "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
    it('can identify the word with the highest occurrence in a string',()=>{
        expect(repeat.wordCount(str)).toEqual('the');
    });
    it ('handles an empty string.',()=>{
        expect(repeat.wordCount('')).toBeNull();
    });
    it ('handles a non string',()=>{
        expect(repeat.wordCount(29)).toEqual('29');
    });
});

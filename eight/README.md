# Code Challenge #8: Linked Merge

##Challenge Summary
the challenge given was to merge 2 linked lists alternating between nodes of each linked list

## Challenge Description
Given 2 linked lists, return a new linked list that is a composite of the two.
ex:
1>2>3>null , a>b>c>null would return: 1>a>2>b>3>c>null


## Approach & Efficiency
My approach to this challenge was to use a while loop and a set of references for iteration of either linked list, since 
the problem wants a new linked list to be returned, the space complexity becomes O(n) where n is the number of total 
elements in both linked lists, and the time complexity is also O(n) where n is the total number of nodes in both linked lists,
since i need to touch every element in each linked list.

## Solution
https://drive.google.com/open?id=1XjwRO3NcWjbLS8McUlr-d7qPAbEb_Xtq
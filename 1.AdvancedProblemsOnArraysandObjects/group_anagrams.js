/**
 * @param {string[]} strs
 * @return {string[][]}
 * https://leetcode.com/problems/group-anagrams/
 */
var groupAnagrams = function(strs) {
    // Time: O(NKlogK) // K -> mac string length
    // Space: O(NK)
    let mp = {};
    for(let i = 0; i < strs.length; i++) {
        /*
        * 1. Go to a string
        * 2. Sort the string
        * 3. Store in the mapping
        */
        let currString = strs[i]; // strings are immutable
        let sortedString = currString.split("").sort().join("");
        if(mp[sortedString]) {
            // if the permutation is already in the map
            mp[sortedString].push(currString); // we can add curr string to the same group
        } else {
            // if the permutation is not in the map
            mp[sortedString] = [currString]; // created a new group
        }
    }
    return Object.values(mp);
};

/*
* To sort a string we first need to store all the chars in an array
* as arrasy are mutable we can sort the array
* join the char of sorted array into a string
*/

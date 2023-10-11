// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]

const anagrams=(strs)=>{
    const anagrams=new Map()

    for(let str of strs)
    {
        const sort=str.split('').sort().join('');
        if(!anagrams.has(sort)){
            anagrams.set(sort,[]);
        }
        anagrams.get(sort).push(str);
    }
    return Array.from(anagrams.values());

};

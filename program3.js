// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false
// —------------------------------------------------------------

const word=(str,arr)=>{
   
    for(let i=0;i<arr.length;i++)
    {
        for(let j=1;j<str.length;j++)
        {
            if(str.substring(0,j)==arr[i])
            {
                break;
            }
            else{
                return false;
            }
        }
    }
    return true;
   
     
}

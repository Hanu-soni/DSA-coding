// Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"
const largest=(num)=>{
    if(num.length==0)
    {
        return 'no number';
    }
    //convert numberarr to stringarr
    let strarr=[];
    for(let i=0;i<num.length;i++)
    {
        strarr.push(num[i].toString())
    }
    strarr.sort(function(x,y){
        return x+y>y+x?--y:--x

    });
    let res='';

    for(let i=0;i<strarr.length;i++)
    {
        res+=strarr[i];
    }
    return res;

}

console.log(largest([88,92,209]))
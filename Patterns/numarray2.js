// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17. 

function minsum(arr)
{
    let sum=0,min;
    //let just find subarrays
    for(let i=0;i<arr.length;i++)
    {
        min=arr[i];
        for(let j=i;j<arr.length;j++)
        {
            min=Math.min(min,arr[j])
            sum+=min;
        }
        
    }
    console.log(sum);

}
let arr=[3,1,2,4]
console.log(minsum(arr));

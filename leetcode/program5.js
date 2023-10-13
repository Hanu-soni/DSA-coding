// ) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34


const largestK=(arr,k)=>{
    let large=arr[0];
    let newarr=arr;
    while(k!=0)
    {
        large=newarr[0];

        for(let i=1;i<newarr.length;i++)
        {
            if(newarr[i]>large)
            {
                large=arr[i];
                k--;
                break;
            }
            else{
                newarr.push(arr[i])
            }
        }
        

    }
    return large;
   
}
console.log(largestK([1,2,3,],2));
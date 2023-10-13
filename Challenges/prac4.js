// Given an array of integers arr, find the sum of 'min(b)', where 'b' ranges 
// over every (contiguous) subarray of 'arr'. 
// Since the answer may be large, return the answer *
// *modulo** '109 + 7'. 
// 3 1 2 4 
//
function subarray(arr) {
    let sum = 0;
    let min;
    for (let i = 0; i < arr.length; i++) {
        let min=arr[i];

        for (let j = i; j < arr.length; j++) {
            //console.log(arr[j]);
             min=Math.min(min,arr[j]);
            sum += min;
        }
        //console.log(subarray)

    }
    return sum;

}

console.log(subarray([3,1,2,4]))

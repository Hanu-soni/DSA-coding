//binary search
//[2,3,4,5,7,8,9]--->8
const binary=(arr,n)=>{
    let start=0;
    let end=arr.length-1;
    let mid=Math.floor((start+end)/2)

    while(start<=end)
    {
        if(arr[mid]==n)
        {
            return mid;
        }
      else  if(arr[mid]<n)
        {
            end=mid-1;
        }
        else 
        {
            start=mid+1;
        }
        
        
    }
    return -1;


}
let arr=[2,3,4,5,7,8,9]
console.log(binary(arr,5));

const BubbleSort = (arr) => {
    for (let x = 0; x < arr.length; x++) {
  let swap=false;
      for (let i = 0; i < arr.length - x; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
         swap=true;
        }
      }
  // if arr is sorted then no swap;;
      if (swap ===false) {
        break;
      }
    }
  return arr;
  };
  
//   let arr=[10,20,11,13,14,9,5,23,44,28,35,-3,-1,-30]
//   console.log(BubbleSort(arr))
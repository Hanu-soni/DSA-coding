


//possibilty
//0 and [1,arr.length-1]
//0,1and [mm]

//find sum of all
//14-2=12
function equi(arr)
{
    let sum=0;
    for(let i in arr)
    {
        sum+=arr[i];
    }
    // console.log(sum);
    let sum1=0;
    for(let i=arr.length-1;i>0;i--) //
    {
        sum=sum-arr[i];//14-2=12
        if(sum1==sum)
        {
            return i;
        }
        sum1+=arr[i];
    } 
    return -1;

}
console.log(equi([1,3,5,2,2]));
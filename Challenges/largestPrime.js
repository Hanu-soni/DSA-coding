function prime(num)
{
    let count=0;
    for(let i=2;i<=Math.floor(num/2);i++)//11---->11/2=5--->2,3,4,5
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        return true;
    }
    else{
        return false;
    }
}
//console.log(prime(12));


function largestPrime(arr)
{
    let large=0;
    for(let i of arr){
        //console.log(i);
        if(prime(i) && i>large)
        {
            large=i;
            //console.log(large);
        }
    }
    return large;

}

console.log(largestPrime([101,12,13,45,9,17,31]));
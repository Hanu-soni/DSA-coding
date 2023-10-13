function largestnum(arr)
{
    console.log(arr)
    console.log(arr.sort((a,b)=>(`${b}${a}` - `${a}${b}` )));
    let num="";
    for(let i=0;i<arr.length;i++)
    {
        num+=arr[i];
    }
    console.log(num);
}
let a =[21,9,19,8]
largestnum(a);

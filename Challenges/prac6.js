function last(str)
{
    let lastlength=0;
    for(let i =str.length-1;i>=0;i--)
    {
        if(str[i]==" ")
        {
            break;
        }
        else{
            lastlength++;
        }
    }
    return lastlength;
}
console.log(last("MY NAME IS"));







function maxStr(arr)
{
    //let compare=arr.join(',');
    let max=0,count=0;
    //console.log(compare.length);
    //console.log(arr.length);

    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            for(let k=0;k<arr[i].length;k++)
            {
                console.log(arr[j]);
                console.log(arr[i][k]);
                if(arr[j].includes(arr[i][k]))
                {
                    count=1;
                    break;
                }

            }
            if(count==0)
            {
                 max=Math.max(arr[i].length*arr[j].length,max);
            }

        }
        // let str=arr[i];
        // console.log(str);
        // if(str.includes(compare.substring(arr.length-arr[i].length)))
        // {
        //     max=Math.max(arr[i]*arr[i+1],max);
        // }
        
    }
    return max;

    


}
console.log(maxStr(["stfn","abcd","abc","stf","zvp"]))
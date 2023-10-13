function abc(arr)
{
    let set=new Set();
    for(let i=Math.min(...arr);i<Math.max(...arr);i++)
    {
        if(arr.includes(i)==false)
        {
            set.add(i)
        }
    }
    return set
}
let arr=[1,2,5,6,8]
console.log(abc(arr))
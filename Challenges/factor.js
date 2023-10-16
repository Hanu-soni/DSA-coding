function findfactor(num)
{
    let arrfac=[];
    for(let i=1;i<=num;i++)
    {
        if(num%i==0 && i<=Math.floor(num/2))
        {
            arrfac.push(i);
        }
    }
    arrfac.push(num);
    return arrfac;
}

function arrfactor(arr){
    let objfac=new Object();
    for(let i=0;i<arr.length;i++)
    {
        objfac[arr[i]]=findfactor(arr[i]);
    }
    
}
console.log(arrfactor([2,3,4,5,6]));
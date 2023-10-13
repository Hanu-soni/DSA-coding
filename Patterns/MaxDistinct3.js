function third(arr)
{
    // if(arr.length<=2)
    // {
    //     return Math.max(...arr);
    // }
   arr.sort((a,b)=>(b-a));
   let k=new Set(arr);
   let arr2=[...k];
   console.log(arr2)
   if(arr2.length>=3)
   {
    console.log(arr2[2]);
   }
   else{
    console.log(arr2[0]);
   }
}
let arr =[21,19,19,8,8,12,13]
third(arr)

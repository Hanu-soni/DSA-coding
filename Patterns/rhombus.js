function rhombus()
{
    let str="";


    //row 1 -->4        2 for loops->4-i
    //row 2 -->3 
    //row 3 -->2 
    //row 4 -->1 
    //row 1 -->4 

   for(let i=0;i<=4;i++)
   {
    for(let j=0;j<=3-i;j++)
    {
        str+="#";
    }
    for(let j=0;j<=4;j++)
    {
        str+="*";
    }
    console.log(str)
    str=""
   }
}
rhombus();
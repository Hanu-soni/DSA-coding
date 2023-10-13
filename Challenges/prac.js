//largest substring in a string without repeatation
function prac1(str)
{
    //example--Rameshwaram  0-1 0-2 0-3....
    if(str.length==0 )
    {
        return false;
    }
    if(str.length<=2)
    {
        if(str[0]!=str[1])
        {
            return str;
        }
    }
    var large=0;
    str=str.toUpperCase();
    var set=new Set();
    for(var i=0;i<str.length;i++)
    {
        
        if(!set.has(str.charAt(i)))
        {
            set.add(str[i])
        }
        //Rameshraqu
        else{
                set=new Set();
                str=str.substring(str.indexOf(str.charAt(i))+1)
                console.log(str);
        }  
        if(set.size>large)
        {
            large=set.size;
        }  
        
    }
    return large,set;
    

}
console.log(prac1("Rameshwaram"))

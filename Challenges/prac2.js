function prac2(wd)
{
    if(wd.length==1 || wd.length==0)
    {
        return "Not valid"
    }
    var count=0;
    var newwd="";
    for(var i=wd.length-1;i>=0;i--)
    {
        if(wd[i]==" ")
        {
            count++;
            newwd=""
        }
        else{
            newwd+=wd[i];
        }
        if(count==1)
        {
            return newwd.length;
        }
    }
}
console.log(prac2("I AM A BOY"))
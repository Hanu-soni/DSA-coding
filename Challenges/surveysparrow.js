//wap to << and >> based on the test
function surveysparrow(arr)
{
    if(arr.length==0)
    {
        return "-";
    }
    let str=arr.join('');
    let counter=0,res="";
    for(let i in str)
    {
        if(str[i]=='>')
        {
            counter++;
        }
        else
        {
            counter--;
        }
    }
    console.log(counter)
    
    if(counter>0)
    {
      while(counter>0)
      {
          res+=">";
          counter--;
      }
    }
   else if(counter<0)
    {
         while(counter<0)
      {
          res+="<";
          counter++;
      }
        
    }
    else 
    {
        return "-"
    }
    return res
}

console.log(surveysparrow(["<<",">>","<"]))
// Find the largest consecutive subarray in array .
// [1,2,3,4,4,5,6,8,9]

const largestsub=(arr)=>{
    if(arr.length==1)
    {
        return arr;
    }
    let large=0;
    let result=new Array();
    let set=new Set();
    for(let i=0;i<arr.length;i++)
    {
        //[1,2,3,4,4,5,6,8,9]
      
            if(arr[i]==arr[i+1])
            {
                large=set.size>large?set:large;
                set=new Set();
            }
            else{
                set.add(arr[i]);
            }
        }
        result=[...set];

        return result;
    
    }
  
console.log(largestsub([1,2,3,4,4,5,6,8,9]));


// //Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water

//[[0,1,0],[1,1,1],[0,1,0]]

//     2   4   6   8   10  
//(N-2)*2; 
function water(arr)
{
    let n=arr.length;
    return (n-2)*2;

}
console.log(water([[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]));




// Function check in an array whether the html elements have opening and closing tags both

//[<html>,</html>]
function check(word,arr)
{
    if(word.includes('/'))
    {
        console.log('/60')
        let open=word.substring(0,1)+word.substring(2);
        if(arr.includes(open))
        {
            return true;
        }
        else{return false;}
    }
    else
    {
        let close=word.substring(0,1)+'/'+word.substring(2);
        if(arr.includes(close))
        {
            return true;
        }
        else{return false;}
    }
}


function main(arr)
{
    if(arr.length%2==0)
    {
        console.log("input is right");
        for(let i=0;i<arr.length;i++)
        {
            console.log("i ",i);
            if(check(arr[i],arr))
            {
                console.log(check(arr[i],arr))
                continue;
            }
            else{
                return false;
            }
        }

    }
    else{
        return false;
    }
    return true;
}
console.log(main(['<html>','</html>']))
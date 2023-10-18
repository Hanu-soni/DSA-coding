// 1. Find the largest consecutive subarray in array .
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
  
//  console.log(largestsub([1,3,3,3,4,5,6,8,9,9,10,11,12,13,14,15]));


// 2. //Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water

//[[0,1,0],[1,1,1],[0,1,0]]

//     2   4   6   8   10  
//(N-2)*2; 
function water(arr)
{
    let n=arr.length;
    return (n-2)*2;

}
// console.log(water([[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]));




// 3. Function check in an array whether the html elements have opening and closing tags both

//[<html>,</html>]
function check(word,arr)
{
    // console.log("coming")
    if(word.charAt(1)=='/')
    {
        // console.log('/60')
        let open=word.substring(0,1)+word.substring(2);
        if(arr.includes(open))
        {
            return true;
        }
        else{return false;}
    }
    else
    {
        // console.log("else")
        
        let close=word.substring(0,1)+'/'+word.substring(1);//<html>---<  /   html>
        // console.log(close);
        if(arr.includes(close))
        {
            return true;
        }
        else{return false;}
    }
}


function main3(arr)
{
    if(arr.length%2==0)
    {
        // console.log("input is right");
        for(let i=0;i<arr.length;i++)
        {
            // console.log("i ",i);
            if(check(arr[i],arr))
            {
                // console.log(check(arr[i],arr))
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
// console.log(main3(['<html>','</html>','<head>','<title>','</title>','</html>']))



// 5. Find the nth smallest smallest element  from array 



function smallest(arr)
{
    let small=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(small>arr[i])
        {
            small=arr[i];
        }   
    }
   return small;
}
function main5(n,arr)
{ 
    //[4,5,2,7,8]

    if(arr.length==1)
    {
        return arr[0];
    }
    let small=0;
    for(let i=1;i<=n;i++)
    {
         small=smallest(arr)//
        arr.splice(arr.indexOf(small),1);
    }
    return small;
}
// console.log(main5(3,[4,5,2,7,8]))



//6-> Function to balance  opening and closing brackets both 
        // {[()]}-->6/2==3-1=2
        //[{{({()})}}]---->7-1=6
        //6-7   //5-8  //4-9  //3-10  //2-11  //1-12  0-13
        //incrementer  and decrementer

    function check(i,j)
    {
       // console.log('reached')
        if(i=='{' && j=='}')
        {
            return true;
        }
        
       else if(i=='(' && j==')')
        {
            return true;
        }
        
        else if(i=='[' && j==']')
        {
            return true;
        }
        
      else 
        {
            return false;
        }
    }

    function main6(str)
    {
        
        if(str.length%2==1)
        {
            return false;
        }
        let start=Math.floor(str.length/2)-1;
        // console.log(start);
        let inc=start+1,dec=start;
        // console.log(str[inc])
        // console.log(str[dec])
        for(let i=0;i<=start;i++)
        {
            if(check(str[dec],str[inc])==false)
            {
                return false;
            }
            inc++;
            dec--;
            //console.log(str[inc],'........')
            
            //console.log(str[dec],'.......')
        }
        return true;
        

    }
    //console.log(main6('{[{}]()}'));


    //7
    //find the positional value of arr if the value is rotating
    //example -->[12,14,32,56,18]
    // position 10  output-> 12  because  0-12,1-14 ,2-32 , 3-56, 4-18, 5-12(start point).......9->18,10->12

    function position(arr,n)
    {
        // console.log(arr);
        // console.log(n);
        // console.log(n%arr.length)
        return arr[n%arr.length]
    }
    // console.log(position([12,13,14,15],10))//14




    //8
    // [4,5,6,7,8,9,0,1,2,3] find position of 1 do optimise solution


    function binarySearch(arr, n) {
        let low = 0;
        let high = arr.length - 1;
    
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            
            if (arr[mid] === n) {
                return mid; 
            } else if (arr[mid] < n) {
                low = mid + 1; 
            } else {
                high = mid - 1; 
            }
        }
    
        return -1; 
    }
    
    console.log(binarySearch(  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
    
    

















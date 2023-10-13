// function power(n)
// {

    
//         while(n>1)
//         {
//             n=n/2;  

//     }
//     if(n==1)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
//     //return true;
// }
// console.log(power(1))


var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n-1)) == 0;
}; 
console.log(isPowerOfTwo(9))




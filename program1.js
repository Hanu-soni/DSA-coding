// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]
// Example 2:
// Input - 1500
// reversed Integre - 51
// prime factors of 51 are 3 and 17
// output - Yes - [3, 17]
// Example 3:
// Input - 1000
// reversed Integre - 1
// There are no prime factors for 1
// output - No
// —---------------------------------


//step1 - reverse digit//567
const reverse=(num)=>{
    let dig,rev=0;
    while(num!=0)
    {
        rev=rev*10+(num%10);
        //console.log(num%10);
        num=Math.floor(num/10);
    }
   return rev;

}

//step-2-->find the prime factors
const prime=(mem)=>{
    let count=0;
    for(let i=1;i<=mem;i++)
    {
        if(mem%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        return true;
    }
    return false;
}
const main=(num)=>{
    let fact=[];
    num=reverse(num);//162-->621

    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
           if(prime(i))
           {
            fact.push(i);//
           }
        }
    }
    return [fact,fact.length>0];
}
console.log(main(156));

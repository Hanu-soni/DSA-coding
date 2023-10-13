
//WAP to accept a no. and print sum  of those digits which are divisible by 3
//45297

import java.util.*;
 
class digit_sum_1
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number");
        int n=sc.nextInt();  //  
        int sum=0,dig;
        
        
        while(n!=0)
        {
            
            dig=n%10;
            if(dig%3==0)
            {
              sum=sum+dig;  
            }
            
            n=n/10;
            
        }
        System.out.print("your sum is "+sum);
    }
}

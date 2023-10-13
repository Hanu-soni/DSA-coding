import java.util.*;
 
class digit_sum
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
            sum=sum+dig;
            n=n/10;
            
        }
        System.out.print("your sum is "+sum);
    }
}



//WAP to find sum of even and odd digits of number accepted by user
//45679
//sum of even--->10
//sum of odd --->21
import java.util.*;
class even_odd
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("hey user enter a no");
        int sum1=0,sum2=0,dig;
        while(n!=0)
{
    dig=n%10;
    if(dig%2==0)
    {
        sum1=sum1+dig;
    }
    else
    {
        sum2=sum2+dig;
    }
    n=n/10;
    
}
    }
    
}




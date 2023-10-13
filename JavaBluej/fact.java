//3!=3*2*1=6
//WAP to print factorial of a no. entered by user
import java.util.*;
class fact
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a no.");
        double n=sc.nextDouble();
        double pro=1;
        for(double i=n;i>=1;i--)
        {
           pro=pro*i; 
        }
        System.out.println("The factorial is "+pro);
        
        
    }
}

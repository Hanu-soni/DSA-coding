//n^1 n^2  n^3......10 terms
//n is a number entered by user
import java.util.*;
class series_exponent
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a no.");
        double n=sc.nextDouble();
        for(int i=1;i<=10;i++)
        {
           System.out.println(Math.pow(n,i));
        }
        
    }
}
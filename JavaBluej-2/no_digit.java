////WAP to accept a no. and find no. of 1 and 0s in it
import java.util.*;
class no_digit
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a no");
        int no=sc.nextInt();
        //variable declare
        int rev=0,dig=0,countOne=0,countZero=0;
        while(no!=0)
        {
            dig=no%10;
           if(dig==1)
           {
               countOne++;
           }
           else
           {
               countZero++;
           }
           no=no/10;
        }
        System.out.println("Count Zero"+ countZero);
        System.out.println("Count One"+ countOne);
        
    }
}
        
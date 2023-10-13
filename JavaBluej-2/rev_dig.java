import java.util.*;
class rev_dig
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a no");
        int no=sc.nextInt();
        //variable declare
        int rev=0,dig=0;
        
       
        //rev=rev*10+dig;
        //456
        while(no!=0)
        {
            dig=no%10;//6 5
            rev=rev*10+dig;//654
            no=no/10;//45
        }
        System.out.println("reverse digit is"+rev);
        
    }
}
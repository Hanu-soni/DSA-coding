import java.util.*;
class hk
{
    static void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a no");
        int n=sc.nextInt();
        int dig,rev=0;
        dig=0;
        while(n!=0)
        {
            dig=n%10;
            rev=rev+dig*10;
            n=n/10;
        }
        if(rev==dig)
        {
            System.out.println("I is palinomial"+rev);
        }
    }
}
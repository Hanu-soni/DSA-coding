import java.util.Scanner;
class even_odd
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Hey user enter a no.");
        int n =sc.nextInt();
        int countOdd=0,countEven=0,dig;
        
        while(n!=0)//
        {
            dig=n%10;
            //digits from the no is fetched
            if(dig%2==0)
            {
                countEven++;
            }
            else
            {
                countOdd++;//1
            }
            n=n/10;
            
        }
        System.out.println("no. of even digits"+countEven);
         System.out.println("no. of odd digits"+countOdd);
    }
}
import java.util.*;
class prime_or_not
{
    static void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Oiiiii number enter kar, thik hai");
        int n=sc.nextInt(); 
        int i=1,count=0;
        while(i<=n)
        {
            if(n%i==0)
            {
                count++;
            }
            i++;
        }
        if(count==2)
        
            {
                System.out.println("YES");
            }
             else  
            {
              System.out.println("NO");  
            }
    }
}
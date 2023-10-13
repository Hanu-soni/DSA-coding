import java.util.*;
class prime
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number");
        int x=sc.nextInt();
        int count=0;//count the no. of factors
        for(int i=1;i<=x;i++)
        {
            if(x%i==0)
            {
              count++;  
            }
        }
        if(count==2)
        {
            System.out.println("it is a prime no.");
            
        }
        else
        {
             System.out.println("it is not a prime no.");
            
        }
        
        
    }
}

//for
//1--->21
//21%1  ---1
//21%2 ----
//.....---2
//21%21


//if(count==2)...prime
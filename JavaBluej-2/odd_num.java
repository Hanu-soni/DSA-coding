//WAP to print all odd numbers from 1 to n where n is users choice
//30---->for loop---->if(odd no. or not)--->print
import java.util.Scanner;


class odd_num
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("hey user, till where you want to go");
        int x=sc.nextInt();//to read the integer input ,sc.nextInt() is used
        for(int i=1;i<=x;i++)
        {
            if(i%2==1) //why this if condition
            {
                System.out.println(i);
            }
            //we dont want anything to occur in x 
                
        }
    }
}
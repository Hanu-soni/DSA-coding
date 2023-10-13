//WAP to accept  a number from user and find no. of digits in it.

import java.util.Scanner; //read the numbers entered by user

class digit
{
    void main()
    {
        Scanner sc=new Scanner(System.in);
        System.out.print("hey user, enter a number");
        int a=sc.nextInt();//123
        int count=0; //digits counting help
        while(a!=0)//123!=0;  12!=0    
        {
            a=a/10;     //123/10=12   12/10=1   0
            count++;//->1-->2--->3
            
        }
        System.out.println("no of digits "+count);
        
        
        
    }
}


//JDK-->Java Development Kit
//JVM
//JDK--->packages(collection of logically related classes)--->pre-defined functions

import java.util.Scanner;//this is to import scanner--->Take input from user and user can give his  input in output window itself

class sum
{
    void main()
    {
       Scanner sc=new Scanner(System.in);
       System.out.println("Enter your Choice");
       int a=sc.nextInt();
       for(int i=1;i<=a;i++)
       {
           System.out.print(i);
       }
       
       
    }
}
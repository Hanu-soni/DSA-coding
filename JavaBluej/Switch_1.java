//WAP TO accept Month no. from user and print the month.
//9--->September

import java.util.*;
public class Switch_1
{
     public static void main(String[]args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the month no.");
        int n=sc.nextInt();
        switch(n)//1
        {
           case 1:
               System.out.println("This is January");
               break;
            case 2:
               System.out.println("This is February");
               break;    
            case 3:
               System.out.println("This is March");
               break;
            case 4:
               System.out.println("This is April");
               break;
            case 5:
               System.out.println("This is May");
               break;
            case 6:
               System.out.println("This is June");
               break;
            case 7:
               System.out.println("This is July");
               break;
               default:
                   System.out.println("WRONG INPUT");
        }
    }
}

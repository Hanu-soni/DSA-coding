//1 2 4 8 16 32 64.... yes
//3 5 6 7 ....no
//64/2=32/2=16/2=8/2=4  4/2=2  2/2=1
//wap to check if a number is power of 2 or not.
import java.util.*;
class powertwo
{
    void main()
    {
        Scanner sc=new Scanner(System.in);    //sc     Scanner(a class)      to read a number from user
        System.out.println("enter a number");
        int a =sc.nextInt();//                //a       int                   store number entered by user
        while(a>1)
        {
         //64-->32-->16------->1
         //12
         if(a==1)
         {
             System.out.println("yes it is");
         }
         if(a%2==0)//even
         {
             a=a/2;//6-->3
         }
         else
         {
             System.out.println("No it is not");
         }
         
        }
        System.out.println("yes it is ");    
    }
}

//Var     Data-type    Description
//sc     Scanner(a class)      to read a number from user
//a       int                   store number entered by user

















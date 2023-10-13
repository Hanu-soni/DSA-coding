import java.util.*;
class Zomato
{
    void main()
    {
        Scanner sc=new Scanner(System.in);  //we know the var desc
        System.out.println("Enter what you want to order");
        System.out.println("1 for Pizza and 2 for Pasta and 3 for Burger");
        int item=sc.nextInt(); //item   int    used to store item entered by user     
        int amt=0;//amt int    used to calculate amt for items 
        int ch;// ___    int   choice for user
        for(int i=1;i<=i;i++) // i  int   for iteration
        {
            if(item==1)
        {
            
            System.out.println("WHAT WOULD YOU LIKE TO ORDER");
            System.out.println("PEBBY PANEER  press 1");
            System.out.println("PIZZAMANIA    press 2");
            System.out.println("CHEESEBURST   press 3");
             ch=sc.nextInt();
             System.out.println("Enter Quantity also");
             int qty=sc.nextInt();  //  qty  int   for storing qty of items
             
            if(ch==1)
            {
                
                amt+=225*qty;
                
            }
            else if(ch==2)
            {
                amt+=200*qty;
            }
            else if(ch==3)
            {
                amt+=250*qty;
            }
            else{
                System.out.print("you have entered invalid input");
            }
            
        }
        else if(item==2){
            System.out.println("WHAT WOULD YOU LIKE TO ORDER");
            System.out.println(" PANEER PASTA  press 1");
            System.out.println("VEG PASTA   press 2");
            System.out.println("NON-VEG PASTA   press 3");
             ch=sc.nextInt();
             if(ch==1)
            {
                amt+=225;
            }
            else if(ch==2)
            {
                amt+=200;
            }
            else if(ch==3)
            {
                amt+=250;
            }
            else{
                System.out.print("you have entered invalid input");
            }
             
        }
        System.out.println("ORDERERD ITEM NO. "+item +" "+"Bill AMT: "+" "+amt);
        System.out.print("Want to add more item ? press 4");
        int ch4=sc.nextInt();  // int ch4   user gets to choice if he want to add more item
        if(ch4==4)
        {
          i++;  
        }
        else
        {
            System.out.println("Wrong Input");
            
        }
        
        }
        
        
        
        
        
        
    }
}
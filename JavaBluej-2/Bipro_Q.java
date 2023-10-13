////WAP to accept a no and find sum of odd and even no. and also print the even and odd digits


import java.util.Scanner;
class Bipro_Q
{
    void main()
    {
        Scanner sc=new Scanner(System.in);  // sc   Scanner(class)    used to read number from user
        
        for(int i=0;i<=10;i++)  //  i   int     running the  iteration
        {
            System.out.println("Hey user enter a no.");
        int n =sc.nextInt();     //n     int     store the number entered by user
        int countOdd=0,countEven=0,dig,sumEven=0,sumOdd=0;
        // countOdd   int     counter for odd dig
        //countEven    "        "      "   even "
        //dig          "        "          fetching current dig
        //sumEven      "        "      for sum of even
        //sumOdd       "        "      ""
        
        while(n!=0)//45678
        {
            dig=n%10;
            //digits from the no is fetched
            if(dig%2==0)
            {
                countEven++;
                sumEven=sumEven+dig;
                System.out.println("Even"+dig);
            }
            else
            {
                countOdd++;//1
                sumOdd=sumOdd+dig;
                System.out.println("Odd"+dig);
            }
            n=n/10;
            
        }
        System.out.println("no. of even digits"+countEven);
         System.out.println("no. of odd digits"+countOdd);
         System.out.println("sum of odd no"+sumOdd );
         System.out.println("sum of even no"+sumEven );
        }
    }
}



//var_name      data_type          desc
// sc           Scanner(class)    used to read number from user
// countOdd     int                 counter for odd dig
//countEven     "                "      "   even "
//dig           "                   "fetching current dig
//sumEven       "        "              for sum of even
//sumOdd        "        "              ""



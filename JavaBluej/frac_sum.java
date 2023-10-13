//WAP to print sum of the following series
//1/2 + 3/4 + 5/8 + 7/16 + 9/32 ......
class frac_sum
{
    void main()
    {
        int term1=1,term2=2;
        double sum=0;
        for(int i=1;i<=10;i++) //i=1 ; i=2;  i=3
        {
          sum=sum+(term1/term2); //sum=1/2+3/4+5/8
          term1=term1+2;//3-->5-->7
          term2=term2*2;//4--->8-->10 
        }
        System.out.println("your sum is"+sum);
        
        
    }
}
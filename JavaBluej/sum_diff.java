//WAP to print result of the following series
//1-2+3-4+5-6+7-8+9-10=-5
//even position subtract and odd position add 

class sum_diff
{
    void main()
    {
        int sum=0;
        for(int i=1;i<=10;i++)
        {
           if(i%2==0)//even position
           {
               sum=sum-i;
           }
           else//odd position
           {
               sum=sum+i;
           }
           
        }
        System.out.println("sum of series is " +sum);
        
    }
}


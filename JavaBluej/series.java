//1/1! - 2/2! +3/3!-4/4!......

class series
{
    void main()
    {
        //3!=3*2*1=6
        //4=6*4*3*2*1
        double sum=0,num,den=1;
        for(double i=1;i<=10;i++)
        {
            num=i;
            den=1;
            for(double j=i;j>=1;j--)
            {
                den=den*j;
            }
            //even position=subtract
            //odd position -add
            if(i%2==0)
            {
                sum-=num/den;
                System.out.println(num + "/"+den);
            }
            else
            {
                sum+=num/den;
                System.out.println(num + "/"+den);
            }
            
            
            
            
            
            
        }
        System.out.println("Your sum is "+sum);
    }
}
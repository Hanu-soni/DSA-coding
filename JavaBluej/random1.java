class random1
{
    void main()
    {
        //0.1  to 0.99  *10    (1---9)   //  (1-6)
        //1-60
        //(1->"hospital management)
         //(2->"school management)
          //(3->"bank management)
           //(4->"report management)
            //(5->"hospital management)
             //(6->"hospital management)
        for(int i=1;i<=60;)
        {
            
            double a =(Math.floor(Math.random()*10000));
            int x=(int)a;
            if(a<11000)
            {
             System.out.println("OTP verification"+i+"is  "+a);  
             i++;
            }
             
        }
       
        
        
    }
}
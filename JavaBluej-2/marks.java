//Wap to accept marks of student and give him grades as per table 
//40-50--->D
//50-60--->C
//60-70--->B
//70-80-->A
//80-100-->A+
class marks
{
    void main(int marks)
    {
        char ch='X';
        if(marks>=40 && marks<=50)
        {
            ch='D';   
        }
         else if(marks>=50 && marks<=60)
        {
            ch='C';   
        }
         else if(marks>=60 && marks<=70)
        {
            ch='B';   
        }
         else if(marks>=80 && marks<=100)
        {
            ch='A';  //A+
        }
        System.out.println("Your Grade is " + ch );
    }
}
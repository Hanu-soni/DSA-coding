class Node{
    constructor(value)
    {
        this.next=null
        this.value=value
    }
}
class List{
    constructor(head=null)
    {
        this.head=head;
    }
    show()
    {
        let val=this.head;
        while(val!=null)
        {
            console.log(val.value);
            val=val.next;
        }
    }
    insertAtBegin(value)
    {
        let node =new Node(value);
        node.next=this.head;
        this.head=node
    }
    insertAtend(value)
    {
        if(this.head==null)
        {
            return "empty";
        }
        let node =new Node(value);
        let count=0;
        let temp=this.head;
       
        while(temp.next!=null)
        {
           temp=temp.next;
        }
        temp.next=node;
        node.next=null;

    }
    insertAtpos(value,index) 
    {
        
        let count=0;
        if(index==0)
        {
            this.insertAtBegin(value);
        }
        let node=new Node(value);
        let temp=this.head;
        //12 13 14 16 15
        while(count!==(index-1))
        {
            temp=temp.next;
            count++;
        }
       
        node.next=temp.next;
         temp.next=node;
        

        

    }
    valatpos(index)
    {
        if(index==0)
        {
            return this.head
        }
        let temp=this.head;
        let count=0;
        while(count!=index)
        {
            temp=temp.next;
            count++;
        }
        return temp

    }

    insertAtmid(value)
    {
        let node=new Node(value);
        let mid=this.head;
        let temp=this.head;
        let count=0;
        while(temp.next!==null && temp.next.next!==null)
        {
            mid=mid.next;
            temp=temp.next.next;
            count++;
        }
        this.insertAtpos(node.value,count);
        console.log("mid is ",mid) 
        

    }
    //atPosFromRight
    //1 2 3  4 5 6 7    *5* 8 9 10
    //                           
    right(value,index)
    {
        let node=new Node(value);
        let x=this.head;
        let y=this.valatpos(index)
        while(y.next!=null)
        {
            x=x.next;
            y=y.next;
        }
        node.next=x.next;
        x.next=node;

    }
    removeevenval()
    {

        //11 22  54 56 27
        //0 1 2 3 4 5 6
        this.head=this.head.next;
        let x=this.head;
        //1 2 3 5 6 7 8
        while(x.next!==null)
        {
            
            x.next=x.next.next;
            x=x.next;
        }
       
    }
    removeoddval()
    {
        let x=this.head;
        //1  3  6  8
        while(x!==null)
        {
            
            x.next=x.next.next;
            x=x.next;
        }
       
    }

}
let head=new Node(20);
let list=new List(head);
//insertAtBeg(10);
list.insertAtBegin(20);
list.insertAtBegin(50);
list.insertAtBegin(70);
list.insertAtBegin(80);

list.insertAtend(30);
list.insertAtend(40);
list.insertAtmid(180)


list.insertAtpos(340,2);
console.log(list.valatpos(5))
//console.log("See list")
list.right(567,2)
list.show()
//remove value at odd position
list.removeevenval()
console.log("***")
list.show()

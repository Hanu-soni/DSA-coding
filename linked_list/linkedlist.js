class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head =null){
        this.head= head;
    }

    show(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
    insertAtBeg(val){
        let node = new Node(val);
        node.next = this.head;
        this.head=node;
    }
    insertAtEnd(val){
        let node = new Node(val);
        let temp = this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=node;
    }

    insertAtPos(val, pos){
        let node = new Node(val);
        let temp = this.head;
        let count =1;
        while(count!=pos-1){
            temp=temp.next;
            count++;
        }
        node.next=temp.next;
        temp.next=node;
    }

    DelAtBeg(){
        this.head= this.head.next;
    }

    DelAtEnd(){
        let temp = this.head;
        while(temp.next.next!=null){
            temp=temp.next;
        }
        temp.next=null;
    }

    DelAtPos(index){
       //iterate till nindex-1
       // temp.next = temp.next.next
    }

    printMid(){
        let fast= this.head;
        let slow = this.head;
        while(fast.next!=null && fast.next.next!=null){
            fast =fast.next.next;
            slow=slow.next
        }
        console.log(slow.data)
    }

   nthfromRight(){
        let first= this.head;
        let tracker = this.head;
        let count =1;
        while(count!=n){
            tracker=tracker.next;
            count++;
        }
        while(tracker.next!=null){
            tracker.next;
            first=first.next;
        }
   }

   reverse(){
    let curr = this.head;
    let next;
    let pre = null;

    while(curr!=null){
        next=curr.next;
        curr.next=pre;
        pre=curr;
        curr=next
    }
    this.head=pre;
   }

   loop(){
    // slow fast

    while(slow!=null && fast!=null){
       if(slow==fast){
        return true;
       }else{
        slow=slow.next;
        fast=fast.next.next;
       }
    }
   }

}




let head = new Node(1);
let ll = new LinkedList(head);
let sec = new Node(2);
let thi = new Node(3);
let four = new Node(4);
let fifth = new Node(5);
ll.head.next=sec;
sec.next= thi;
thi.next=four;
four.next=fifth
//ll.show();

ll.reverse();
ll.show();


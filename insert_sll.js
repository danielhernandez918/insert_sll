insertAtFront(data){
    // instantiate the ListNode based on data
    // pointer of the newNode to the original head
    // reassign the head

    // how do we handle an empty list
    var newNode = new ListNode(data);
    if(this.head){
      newNode.next = this.head;
      this.head = newNode;
    }else{
      this.head = newNode;
    }
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    var runner = this.head;
    let numberOfNodes = 0;
    let sum = 0;
    while(runner){
      numberOfNodes += 1;
      sum += runner.data;
      runner = runner.next;
    }
    // console.log(sum);
    // console.log(numberOfNodes);
    let average = sum/numberOfNodes;
    return average;
  } 


  

  // 
    /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    this.head = this.head.next;
  }
  
  
  //given
  printList(){
    if(!this.head){
        console.log("Empty list");
        return
    }
    var runner = this.head;
    while(runner){ // while(runner != null)
        console.log(runner.data);
        runner = runner.next;            
    }
  }
}






var sll1 = new SLL(); // EMPTY LIST
sll1.printList();



var sll2 = new SLL(); 
sll2.insertAtBack(5);
sll2.insertAtBack(6);
sll2.insertAtBack(7);

// HEAD
// (5) -> (6) -> (7) -> NULL

sll2.printList();
console.log();

sll2.insertAtFront(4);
sll2.printList();
console.log();

sll2.removeHead();
sll2.printList();
console.log();

console.log(sll2.average());
console.log();


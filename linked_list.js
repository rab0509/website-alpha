/* Linked List */

// Methods:

// 1. isEmpty
// 2. size
// 3. prepend
// 4. append
// 5. remove (by value)
// 6. contains
// 7. print

function LinkedList() {
  this.head = null;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

// [10] -> [20] -> [30] -> null

LinkedList.prototype.size = function () {
  var current = this.head;
  var count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

// 1. Create a new node with val
// 2. Make the new node point the current head
// 3. Update this.head to point to the node
LinkedList.prototype.prepend = function (val) {
  var newNode = {
    data: val,
    next: this.head
  };
  this.head = newNode;
};

// 1. Create a new node with val
// 2. Traverse to the end of the liat
// 3. Make the lastt node's 'next' value point to the new node
LinkedList.prototype.append = function (val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
    return;
  }
  var current = this.head;

  while (current.next !== null) {
    current = current.next;         // update pointer node
  }

  current.next = newNode;           // update pointer node
};

LinkedList.prototype.remove = function (val) {
 if (!this.contains(val)) {
   return;
 }

 if (this.head.data === val) {
   this.head = this.head.next;
   return;
 }

  var prev = null;
  var curr = this.head;

  while (curr.data !== val) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;            // update pointer node
};

// 1. Create a new node with val
// 2.
// 3.
LinkedList.prototype.contains = function (val) {
  var current = this.head;

  while (current !== null) {
    if (current.data === val) {
      return true;
    }
    current = current.next;           // update pointer to next node
  }
  return false;
};

LinkedList.prototype.print = function () {
  var output = '[';
  var current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ', ';
    }
    current = current.next;       // update pointer node
  }

  output += ']';
  console.log(output);
};

var list = new LinkedList();
list.append(10);
list.append(15);
list.append(20);
list.append(25);
list.prepend(5);
list.print();
console.log(list.contains(15));
console.log(list.size());
console.log(list.isEmpty());
list.remove(15);
list.print();
console.log(list.contains(15));
console.log(list.size());
list.append(15);
list.print();
console.log(list.contains(15));
console.log(list.size());

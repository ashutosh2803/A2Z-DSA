class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at end
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  // Insert at beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Print linked list
  print() {
    let temp = this.head;
    let result = "";

    while (temp !== null) {
      result += temp.data + " -> ";
      temp = temp.next;
    }

    result += "null";
    console.log(result);
  }

  // ⭐ Array → Linked List (sets head & returns it)
  static arrayToLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new Node(arr[0]);
    let temp = head;

    for (let i = 1; i < arr.length; i++) {
      temp.next = new Node(arr[i]);
      temp = temp.next;
    }

    return head;
  }
}

function main() {
  // Using insert methods
  const list = new LinkedList();
  list.insertAtEnd(10);
  list.insertAtEnd(20);
  list.insertAtBeginning(5);
  list.print();

  // Using array → linked list
  const arr = [1, 2, 3, 4, 5];
  const head = LinkedList.arrayToLinkedList(arr);

  // Print using head pointer
  let temp = head;
  let result = "";
  while (temp !== null) {
    result += temp.data + " -> ";
    temp = temp.next;
  }
  result += "null";
  console.log(result);
}

main();

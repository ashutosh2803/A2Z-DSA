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

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

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
}

function main() {
  const list = new LinkedList();

  list.insertAtEnd(10);
  list.insertAtEnd(20);
  list.insertAtEnd(30);
  list.insertAtBeginning(5);

  list.print();
}

main();

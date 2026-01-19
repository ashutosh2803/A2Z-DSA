/*
  1D Doubly Linked List Implementation

  Operations covered in this program (in order):

  1. Create a Doubly Linked List from an array
     Time Complexity: O(n)
     Space Complexity: O(n)

  2. Insert a node at the head
     Time Complexity: O(1)
     Space Complexity: O(1)

  3. Insert a node at the tail
     Time Complexity: O(1)
     Space Complexity: O(1)

  4. Delete the last node
     Time Complexity: O(1)
     Space Complexity: O(1)

  5. Search for an element
     Time Complexity: O(n)
     Space Complexity: O(1)

  6. Find the length of the doubly linked list
     Time Complexity: O(n)
     Space Complexity: O(1)

  7. Find the middle element (Slow & Fast Pointer)
     Time Complexity: O(n)
     Space Complexity: O(1)

  8. Reverse the doubly linked list (Iterative)
     Time Complexity: O(n)
     Space Complexity: O(1)

  9. Delete the Nth node from the end
     Time Complexity: O(n)
     Space Complexity: O(1)

  10. Detect a cycle in the doubly linked list
      Time Complexity: O(n)
      Space Complexity: O(1)
*/

// Node class for Doubly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Insert at head
function insertAtHead(head, data) {
  const newNode = new Node(data);
  if (head !== null) {
    newNode.next = head;
    head.prev = newNode;
  }
  return newNode;
}

// Insert at tail
function insertAtTail(head, data) {
  const newNode = new Node(data);
  if (head === null) return newNode;

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.next = newNode;
  newNode.prev = temp;
  return head;
}

// Delete last node
function deleteLastNode(head) {
  if (head === null) return null;
  if (head.next === null) return null;

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.prev.next = null;
  return head;
}

// Search an element
function searchElement(head, key) {
  let temp = head;
  while (temp !== null) {
    if (temp.data === key) return true;
    temp = temp.next;
  }
  return false;
}

// Find length
function findLength(head) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    count++;
    temp = temp.next;
  }
  return count;
}

// Find middle element
function findMiddle(head) {
  if (head === null) return null;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

// Reverse doubly linked list
function reverseList(head) {
  let current = head;
  let temp = null;

  while (current !== null) {
    // Swap prev and next
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    current = current.prev;
  }

  // New head
  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}

// Delete Nth node from end
function deleteNthFromEnd(head, n) {
  if (head === null) return null;

  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    if (fast === null) return head;
    fast = fast.next;
  }

  if (fast === null) {
    // Delete head
    head = head.next;
    if (head !== null) head.prev = null;
    return head;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  if (slow.next !== null) {
    slow.next.prev = slow;
  }

  return head;
}

// Detect cycle (Floyd’s Algorithm)
function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

// Print doubly linked list (forward)
function printList(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result += temp.data + " <-> ";
    temp = temp.next;
  }
  console.log(result + "null");
}

// Driver code
function main() {
  let arr = [1, 2, 3, 4, 5];

  let head = null;
  for (let val of arr) {
    head = insertAtTail(head, val);
  }

  console.log("Original List:");
  printList(head);

  head = insertAtHead(head, 0);
  console.log("After Insert at Head:");
  printList(head);

  head = insertAtTail(head, 6);
  console.log("After Insert at Tail:");
  printList(head);

  head = deleteLastNode(head);
  console.log("After Delete Last:");
  printList(head);

  console.log("Search 3:", searchElement(head, 3));
  console.log("Length:", findLength(head));
  console.log("Middle Element:", findMiddle(head));

  head = reverseList(head);
  console.log("After Reverse:");
  printList(head);

  head = deleteNthFromEnd(head, 2);
  console.log("After Deleting 2nd Node from End:");
  printList(head);

  console.log("Cycle Detected:", detectCycle(head));
}

main();

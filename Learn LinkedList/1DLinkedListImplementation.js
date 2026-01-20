/*
  1D Singly Linked List Implementation

  Operations covered in this program (in order):

  1. Create a Linked List from an array
     Time Complexity: O(n)
     Space Complexity: O(n)

  2. Insert a node at the head
     Time Complexity: O(1)
     Space Complexity: O(1)

  3. Delete the last node
     Time Complexity: O(n)
     Space Complexity: O(1)

  4. Search for an element
     Time Complexity: O(n)
     Space Complexity: O(1)

  5. Find the length of the linked list
     Time Complexity: O(n)
     Space Complexity: O(1)

  6. Find the middle element (Slow & Fast Pointer)
     Time Complexity: O(n)
     Space Complexity: O(1)

  7. Reverse the linked list (Iterative)
     Time Complexity: O(n)
     Space Complexity: O(1)

  8. Delete the Nth node from the end (Two Pointer Technique)
     Time Complexity: O(n)
     Space Complexity: O(1)

  9. Detect a cycle in the linked list (Floyd’s Cycle Detection)
     Time Complexity: O(n)
     Space Complexity: O(1)
*/

// Node class represents a node in the linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Insert at head
function insertAtHead(head, data) {
  let newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

// Delete last node
function deleteLastNode(head) {
  if (head === null || head.next === null) return null;

  let temp = head;
  while (temp.next.next !== null) {
    temp = temp.next;
  }
  temp.next = null;
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

// 🔁 Reverse linked list
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

// 🧠 Find middle element
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

// 🔄 Detect cycle
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

// ❌ Delete Nth node from end
function deleteNthFromEnd(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

// Print linked list
function printList(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result += temp.data + " -> ";
    temp = temp.next;
  }
  console.log(result + "null");
}

// Driver code
function main() {
  let arr = [1, 2, 3, 4, 5];

  let head = new Node(arr[0]);
  let temp = head;

  for (let i = 1; i < arr.length; i++) {
    temp.next = new Node(arr[i]);
    temp = temp.next;
  }

  console.log("Original List:");
  printList(head);

  head = insertAtHead(head, 0);
  console.log("After Insert at Head:");
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

// Node class represents a node
// in a linked list
class Node {
    // default condition set to null so that if no next node is provided, it defaults to null
    constructor(data, next = null) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}

// Function to find the middle
// node of a linked list
// Brute Force Approach
// Time Complexity: O(N) + O(N/2) => O(N)
// Space Complexity: O(1)

function findMiddle(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let temp = head;
    let count = 0;

    while (temp !== null) {
        count++;
        temp = temp.next;
    }

    let mid = Math.floor(count / 2);
    temp = head;

    for (let i = 0; i < mid; i++) {
        temp = temp.next;
    }

    return temp;
}

// Optimized Approach
// Time Complexity: O(N)
// Space Complexity: O(1)
// The previous method requires the traversal of the linked list twice.
// To enhance efficiency, the Tortoise and Hare Algorithm is introduced as an optimization where the middle node can be found in just one traversal.
// The Tortoise and Hare algorithm leverages two pointers, 'slow' and 'fast', initiated at the beginning of the linked list.
// The 'slow' pointer advances one node at a time, while the 'fast' pointer moves two nodes at a time.

function findMiddleOptimized(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Creating a sample linked list: 
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle node
const middleNode = findMiddle(head);
const middleNodeOptimized = findMiddleOptimized(head);

// Display the value of the middle node
console.log("The middle node value is: " + middleNode.data);
console.log("The middle node value (Optimized) is: " + middleNodeOptimized.data);

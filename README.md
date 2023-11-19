# Understanding Linked Lists

## Linear vs. Non-Linear Data Structures

Linked lists are a form of **linear data structures**, where elements are arranged in a sequential and ordered manner, akin to playing a game of hopscotch. In contrast, **non-linear data structures** do not require items to be arranged sequentially, allowing for non-sequential traversal.

## Linked Lists vs. Arrays

The primary advantage of linked lists over conventional arrays lies in their flexibility. Elements in a linked list can be **easily inserted or removed** without needing to reallocate other elements.

### Arrays: Static Data Structures

Arrays represent **static data structures**. They require allocation of all necessary resources at the time of creation. This means the size and memory allocation for an array remain constant, regardless of any additions or deletions of elements.

### Linked Lists: Dynamic Data Structures

Conversely, linked lists are **dynamic data structures**. They do not require contiguous memory allocation. For instance, a linked list doesn't need a block of memory all in one place, unlike an array needing 7 bytes of contiguous memory for storing seven elements. Instead, the memory used by linked lists can be dispersed throughout.

## How Linked Lists Work

Linked lists consist of a series of **nodes**. Each node comprises:

- **Data**: The value stored in the node.
- **Next Reference**: A pointer or reference to the next node.

The first node, known as the **head**, marks the beginning of the linked list. The end of the list is denoted not by a node, but by a `null` value, indicating the absence of further nodes.

This structure allows for the _dispersed_ memory allocation of linked lists, with each node containing a reference to its successor, eliminating the need for adjacent storage locations.

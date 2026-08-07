---
title: "01. Linked Lists (HL)" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Linked Lists

This lab introduces implementations of different types of Linked Lists.

---
## Syllabus Topics [HL]

- **B4.1.2** Evaluate linked lists. (HL only)
- **B4.1.3** Construct and apply linked lists: singly, doubly and circular. (HL only)


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Node** | Object that makes up some data structures. Generally contains data and a pointer. |
| **SLL Node** | Contains data and a pointer to the next Node. |
| **DLL Node** | Contains data, a pointer to the next Node, and a pointer to the previous Node. |
| **Head** | Pointer to the first node of a Linked List. |
| **Tail** | Pointer to the last node of a Doubly Linked List.|
| **Overriding** | Changing how a method behaves, based on which kind of object it is called on. For example, changing how `print()` behaves for different objects.  |

--- 

<!-- ## Singly Linked List -->

<!-- **This is a UML (unified modelling language) diagram.** It is used to represent a class, its attributes, and methods -->

<!-- {{< mermaid >}}

classDiagram
    class Node {
            -data: ?
            -next: Node
        }

    class SinglyLinkedList {
        -head: Node
        + __init__()
        + insert()
        + delete()
        + __str__()
    }


    SinglyLinkedList *-- Node

{{< /mermaid >}} -->


# [0] Set up

<!-- {{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit03_oop
cd unit03_oop
``` -->

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_linked_lists_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_linked_lists_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] SinglyLinkedList

You can find an implementation of a `SinglyLinkedList` in `linked_list.py`.

## Testing

💻 **At the bottom of the file, test out the `SinglyLinkedList` class.** 

- create a `SinglyLinkedList` object
- append some items
- display the linked list

✏️ **Add descriptive comments into the methods of the `Node` class and  `SinglyLinkedList` class.** 

---

## Override `print()`

Even though we can display the linked list, if you try to use `print()` to print it, it won't look nice.

`Polymorphism` is an OOP concept, where different methods behave differently in different situations.
`Overriding` is a specific polymorphism technique, where we change the behavior of a method, based on which type of object it is called on.

💻 **Create a method `__str__` which will allow you to `print()` the linked list.** 

Be sure to test our your method.

---

## Insert at front 

Adding items to the front of a linked list is simple since we have the `head` pointer.

```md
create the new_node
set the new_node's next to head
set head to  the new_node
```

💻 **Create a method `insert_front(data)` which adds a new `Node` to the beginning of the linked list.** 

Be sure to test our your method.

---

## Insert in order

Adding items in order is more complex. We have to continually test what the `next` value will be! 

```md
create the new_node

if the list is empty
	set head to the new node

else:
    initialize current_node to the head
    loop while next isn't None and next's data isn't greater than the new_node's data
        current_node = next

    set the new_node's next to current_node's next
    set current_node's next to the new_node
```

<!-- ```md
create the `new_node`
if `head` is None
	set `head`  -> `new_node`
else:
    set `current` = `head`
    while `current.next` is not None and `current.next's data` < the `new_node's data`
        `current` = `current.next`  # keep moving

    set `new_node.next` -> `next`
    set `current.next` -> `new_node`
``` -->

💻 **Create a method `insert_inorder(data)` which adds a new `Node` in the correct location of the linked list.** 

Be sure to test our your method on **ordered** data!

---

## Searching for an item

```md
initialize current_node to the head
while current_node is not None:
    if the target is in current's data:
        print the data
    current_node = next
```


💻 **Create a method `search(target)` which prints out the data from all nodes that contain the target.** 

Be sure to test our your method!

---


## Deleting an item

Deleting an item is similar to searching, but we need find the node **before** the target, so we can change its `next` pointer to bypass that Node. The bypassed node will be automatically deleted by Python's garbage collection. 
       
There are many valid ways to go about deleting an item from a linked list:        

**This method uses a `previous_node` variable to keep track of the previous node.**
```md
if the head is the target:
    set the head to the head's next

else:
    set previous_node to None
    set current_node to head

    while current_node is not None and current.data is not the target:
        previous_node = current_node
        current_node = next

    if current is not None:
        change previous_node's next to the current_node's next
```

**This method searches ahead to find the target.**
```md
if the head is the target:
    set the head to the head's next

else:
    set current_node to head

    while next is not None:
        if next's data matches the target:
            change current_node's next pointer to next's next
            return
        current_node = next
```

💻 **Create a method `delete(target)` which removes the `Node` containing the `target` data from the linked list.** 

Be sure to test our your method!

---

# [2] DoublyLinkedList

You can find an implementation of a `DoublyLinkedList` in `doubly_linked_list.py`.

## Testing

💻 **At the bottom of the file, test out the `DoublyLinkedList` class.** 

- create a `SinglyLinkedList` object
- append some items

You might notice that there's no way to view the list!

✏️ **Edit the descriptive comments for the methods of the `Node` class and  `SinglyLinkedList` class.** 

Take note of the differences between this and the SinglyLinkedList

---

## Display forward and in reverse

We can't yet display the doubly linked list! 

💻 **Finish the methods `display()` and `display_reverse()`.** 


You can test your method out on these phrases which work forward and backward, or make up your own!

***are you as bored as I am***     
***dream big work hard***      
***there is hope***      
***clearly spoken dreams***      
***moving fast sometimes***     
***blinking green light shows***     

---



# [3] Deliverables


{{< deliverables "Once you finish the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Checklist:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}}


---

# [4] Practice

*Tip: Use **`⌘` + `click`** to open a link in a new tab*


- Hackerrank [Insert a node at the tail of a linked list](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)
- Hackerrank [Insert a node at the head of a linked list](https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem)
- Hackerrank [Reverse a linked list](https://www.hackerrank.com/challenges/reverse-a-linked-list/problem)
- Hackerrank [Merge two sorted linked lists](https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem)
- Leetcode 83 [Remove duplicate nodes from a sorted linked list](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)
- Hackerrank [Maximum element](https://www.hackerrank.com/challenges/maximum-element/problem)
- Leetcode 141 [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)

---
title: "02. Linked Lists" 
bookFlatSection: false
# weight: 1
# bookCollapseSection: true
# draft: true
---

# Linked Lists

This lab introduces implementations of different types of Linked Lists: Singly Linked List, Doubly Linked List, Circular Linked List.

---
## Syllabus Topics [HL]

- **B4.1.2** Evaluate linked lists. (HL only)
- **B4.1.3** Construct and apply linked lists: singly, doubly and circular. (HL only)


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Node** | Object that makes up some data structures. Generally contains data and a pointer. |
| **Singly Linked List Node** | Contains data and a pointer to the next Node. |
| **Head** | Pointer to the first node of a Linked List. |
| **Tail** | Pointer to the last node of a Doubly Linked List.|


--- 


# [0] Set up


{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit_adt
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

# [1] Singly Linked List

{{< figure src="images/courses/abstract_data_structures/linked_lists_singly.png" width="75%">}}



For a Singly Linked List, you are expected to construct:
- traversal
- inserting at the start
- inserting at the end
- inserting after an existing node
- searching 

💻 **Open `singly_linked_list.py` and test the `traversal()` and `insert_at_beginning()` methods.** We are closely following the code written in our textbook and [InThinking](https://thinkib.net/computerscience/page/62636/b-413-construct-and-apply-linked-lists-python-hl-only). 

It is up to you to complete the other methods.  

---

## Insert at end

Inserting at the end requires you to traverse until the end of the list.

{{< expand "Hint: Pseudocode" >}}

```md
create the new_node

if the list is empty
	set head to the new node

else:
    initialize current_node to the head
    loop while current's next isn't None
        current_node = next

    set current_node's next to the new_node
```

{{< /expand>}}



💻 **Construct the method `insert_at_end(data)` which adds a new `Node` in the correct location of the linked list.** 

💻 **Test your method**



## Insert after node

Inserting after a node is complex because it requires you to traverse until you find the target node.

{{< expand "Hint: Pseudocode" >}}

```md
initialize current_node to the head
loop while current's next isn't None 
    if current node is the target node:
        create the new_node
        set the new node's next to the current's next
        set the current's next to the new node

        return True

return False
```


{{< /expand>}}



💻 **Construct the method `insert_after_node(prev_node_data, new_data)` which adds a new `Node` in the correct location of the linked list.** 

💻 **Test your method**



## Searching

{{< expand "Hint: Pseudocode" >}}

```md
initialize current_node to the head
loop while current_node is not None:
    if the target is in current's data:
        return True

return False
```

{{< /expand>}}




💻 **Create a method `search(target)` which prints out the data from all nodes that contain the target.** 

💻 **Test your method**



## Deleting 

Deleting a node is similar to searching, but we need find the node **before** the target, so we can change its `next` pointer to bypass that Node. The bypassed node will be automatically deleted by Python's garbage collection. 
       
There are many valid ways to go about deleting an item from a linked list:        

{{< expand "Hint: Pseudocode" >}}

**This method uses a `previous_node` variable to keep track of the previous node.**
```md
initialize current_node to head
initialize previous_node to None

if the head is the target:
    set the head to the head's next
    return

loop while current_node is not None and current.data is not the target: 
    set previous to current
    set current to current's next

if current is None
    return because no Node was found


set previous_node's next to the current_node's next
```

{{< /expand>}}



💻 **Create a method `delete(target)` which removes the `Node` containing the `target` data from the linked list.** 

💻 **Test your method**

---

{{< write-action >}}

1) **Take out a piece of paper and write out each `SinglyLinkedList()` method without looking at your solutions.**
    - `traverse()`
    - `insert_at_beginning(data)`
    - `insert_at_end(data)`
    - `insert_after_node(target_data, new_data)`
    - `delete_node(data)`
    - `search(data)`


2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and fix your handwritten code. 

{{< /write-action >}}


<!-- 
---

# [2] DoublyLinkedList

{{< figure src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png" width=75% alt-text="bubble tea flow chart" >}}



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

--- -->



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

# [4] Extension: More Practice

*Tip: Use **`⌘` + `click`** to open a link in a new tab*


- Hackerrank [Insert a node at the tail of a singly linked list](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)
- Hackerrank [Insert a node at the head of a singly linked list](https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem)
- Hackerrank [Reverse a singly linked list](https://www.hackerrank.com/challenges/reverse-a-linked-list/problem)
- Hackerrank [Merge two singly sorted linked lists](https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem)
- Leetcode 83 [Remove duplicate nodes from a sorted linked list](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)
- Hackerrank [Maximum element](https://www.hackerrank.com/challenges/maximum-element/problem)
- Leetcode 141 [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)

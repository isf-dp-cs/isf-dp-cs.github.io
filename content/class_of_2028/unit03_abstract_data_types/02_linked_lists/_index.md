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


## Solution 


{{< expand "Teacher Code for Singly Linked List" >}}

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        """Displays each node"""

        current_node = self.head
        elements = "head -> "
        while current_node:
            elements += f"{str(current_node.data)} -> "
            current_node = current_node.next

        elements += "tail"
        print(elements)

    def insert_at_beginning(self, data):
        """Inserts a new node as the head"""

        new_node = Node(data)
        new_node.next = self.head  # New node points to the old head
        self.head = new_node  # Update head to be the new node

    def insert_at_end(self, data):
        """Inserts a new node as the tail"""

        new_node = Node(data)
        if self.head == None:
            self.head = Node(data)
        else:
            current = self.head
            while current.next != None:
                current = current.next
            current.next = new_node

    def insert_after_node(self, prev_node_data, new_data):
        """Inserts a new node after an existing node"""

        current = self.head

        while current != None:
            if current.data == prev_node_data:
                new_node = Node(new_data)
                new_node.next = current.next
                current.next = new_node

                return True

            current = current.next
        return False

    def delete_node(self, data):
        """Deletes a node and updates other nodes if needed"""

        current = self.head
        previous = None

        # Case 1: The head node holds the key
        if current and current.data == data:
            self.head = current.next
            return

        # Case 2: Search for the key, keeping track of the previous node
        while current and current.data != data:
            previous = current
            current = current.next
            print(previous.data)

        if current == None:
            return

        previous.next = current.next

    def search(self, data):
        """Returns a boolean representing if the data exists in the list"""

        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False
```


{{< /expand >}}


---

# [2] Circular Linked List

{{< figure src="https://media.geeksforgeeks.org/wp-content/uploads/20240501111922/Circular_Linked_List-768.webp" width=75% alt-text="bubble tea flow chart" >}}


💻 **Copy & Paste your `Singly LinkedList` into a new file `circular_linked_list.py`.** 
- Change the class name to `CircularLinkedList`.

💻  **Update the following methods to ensure it is circular.** Optional construct `get_last()` as a helper method.
- `traverse()`
- `insert_at_beginning()`
- `insert_at_end()`
- `insert_after_node() `
- `delete_node()`

💻 **Test your methods!** Ensure they all work as expected and can be used in different combinations and order. 

✏️ **Practice handwriting each method.**


## Solution 


{{< expand "Teacher Code for Circular Linked List" >}}

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class CircularLinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        """Displays each node"""

        elements = f"head -> {self.head.data} -> "
        current_node = self.head.next

        while current_node != self.head:
            elements += f"{str(current_node.data)} -> "
            current_node = current_node.next

        elements += "tail"
        print(elements)

    def get_last(self):
        current_node = self.head

        while current_node.next != self.head:
            current_node = current_node.next

        return current_node

    def insert_at_beginning(self, data):
        """Inserts a new node as the head"""

        new_node = Node(data)

        if self.head == None:
            self.head = new_node  # Update head to be the new node
            new_node.next = self.head  # New node points to the old head
        else:
            last_node = self.get_last()

            new_node.next = self.head
            self.head = new_node

            last_node.next = self.head

    def insert_at_end(self, data):
        """Inserts a new node as the tail"""

        new_node = Node(data)
        if self.head == None:
            self.head = Node(data)
            self.head.next = self.head
        else:
            current = self.head
            while current.next != self.head:
                current = current.next
            current.next = new_node
            new_node.next = self.head

    def insert_after_node(self, prev_node_data, new_data):
        """Inserts a new node after an existing node"""

        current = self.head

        while current != None:
            if current.data == prev_node_data:
                new_node = Node(new_data)
                new_node.next = current.next
                current.next = new_node

                return True

            current = current.next
        return False

    def delete_node(self, data):
        """Deletes a node and updates other nodes if needed"""

        current = self.head
        previous = None

        # Data is in the head
        if current and current.data == data:
            last = self.get_last()
            self.head = current.next
            last.next = self.head

            return

        # Data is not in the head
        while current and current.data != data:
            previous = current
            current = current.next
            print(previous.data)

        # Data is not in the list
        if current == None:
            return

        previous.next = current.next

    def search(self, data):
        """Returns a boolean representing if the data exists in the list"""

        current = self.head
        while current.next != self.head:
            if current.data == data:
                return True
            current = current.next
        return False
```


{{< /expand >}}

---


# [2] Doubly Linked List

**A Doubly Linked List is a collection of nodes where each node contains data and a pointer to the next node and the previous node. It contains a pointer to the head and to the tail.**

{{< figure src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png" width=75% alt-text="bubble tea flow chart" >}}


💻 **Copy & Paste this starter code into `doubly_linked_list.py`.** 

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def traverse_forward(self):
        """Displays each node starting at the head"""
        
        current_node = self.head
        elements = "head <-> "
        while current_node:
            elements += f"{str(current_node.data)} <-> "
            current_node = current_node.next

        elements += "tail"
        print(elements)
    
    def traverse_backwards(self):
        """Displays each node starting at the tail"""



    def insert_at_beginning(self,data):
        """Inserts a new node as the head"""

        new_node = Node(data)

        if not self.head:
            self.head = new_node
            self.tail = new_node
        
        else:
            self.head.prev = new_node
            new_node.next = self.head  
            self.head = new_node

    def insert_at_end(self, data):
        """Inserts a new node as the tail"""

     

    def insert_after_node(self, prev_node_data, new_data):
        """Inserts a new node after an existing node"""



    def delete_node(self, data):
        """Deletes a node and updates other nodes if needed"""


    def search(self, data):
        """Returns a boolean representing if the data exists in the list"""

        current = self.head
        while current:
            if current.data == data:
                return True
            current = current.next
        return False


if __name__ == '__main__':
    dll = DoublyLinkedList()
    dll.insert_at_beginning(5)
    dll.insert_at_beginning(3)
    dll.traverse_forward()
```



💻  **You must construct following methods.** Optional construct `get_last()` as a helper method.
- `traverse_backwards()`
- `insert_at_end()`
- `insert_after_node() `
- `delete_node()`

💻 **Test your methods!** Ensure they all work as expected and can be used in different combinations and order. 

✏️ **Practice handwriting each method.**


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

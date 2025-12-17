---
title: "04. Linked List Methods (HL)" 
bookFlatSection: false
weight: 40
# bookCollapseSection: true
# draft: true
---

# Linked List Methods

This lab is for practicing implementing Linked List methods in context.

---
## Syllabus Topics [HL]

- **B4.1.2** Evaluate linked lists. (HL only)
- **B4.1.3** Construct and apply linked lists: singly, doubly and circular. (HL only)


<!-- ## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Node** | Object that makes up some data structures. Generally contains data and a pointer. |
| **SLL Node** | Contains data and a pointer to the next Node. |
| **DLL Node** | Contains data, a pointer to the next Node, and a pointer to the previous Node. |
| **Head** | Pointer to the first node of a Linked List. |
| **Tail** | Pointer to the last node of a Doubly Linked List.|
| **Overriding** | Changing how a method behaves, based on which kind of object it is called on. For example, changing how `print()` behaves for different objects.  | -->

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
git clone https://github.com/isf-dp-cs/lab_linked_list_methods_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_linked_list_methods_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Whiny Babies

Create a whiny babies game that will allow each player to add complaints to the front of the linked list. 

You will have to complete the implementation of a singly `LinkedList` in `linked_list.py`.

---

## add_front()

Each complaint should be smaller and stupider (more trivial) than the previous one. This should use `linked_list.add_front()`.

💻 **Complete`add_front()`.** 

---

## remove_front()

The other player can reject the most recent addition if its not sufficiently whiny/trivial. This should use `linked_list.delete_front()`

💻 **Complete`delete_front()`.** 

---

## printing

💻 **Finish the method `__str__` which will allow you to `print()` the linked list to show the complaints.** 

---

## Whiny Babies Game


💻 **Create a the game in  `whiny_babies.py`.** 

You can utilize the `Complaints` class too store your complaints, if desired, to increase the complexity.

The game should alternate turns between two players. If one players things the other's complaint isn't sufficiently whiny, they can reject it, and it should get removed from the front of the list, and the whole list should be printed.

---

# [2] Collaborative Story 

The collaborative story is similar to whiny babies, but new additions get added onto the end to create a narrative.
It will also use the `LinkedList` class.

---

## Required methods

💻 **Create a method `add_last()` which adds a new `Node` to the end of the linked list.** 

💻 **Create a method `delete_last()` which removes the last `Node` from the end of the linked list.** 

---

## Story Game


💻 **Create a the game in  `whiny_babies.py`.** 

You can create a new class to store the story part objects, if desired.

---

# [3] Spinning Game

This game will utilize multiple circular linked lists to simulate a spinning game. 

Create a spinning game that uses multiple linked lists to store various emojis.
The game should allow players to trigger a random spinning, that utilizes the nature of a circular linked list
to simulate continuous spinning. 


What methods will your circular linked lists nee

💻 **Create a method that will allow you to insert data into your circular linked list.** 


💻 **Create the spinning game.** 

---


# [4] Deliverables


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

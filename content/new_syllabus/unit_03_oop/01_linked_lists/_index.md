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


<!-- ## Key Vocabulary (add later!)

| Word | Definition |
| :--- | :--- |
| **Object Oriented Programming** | A CS paradigm that creates classes of objects, allowing for increased modularity.  |
| **Class** | An template for creating objects, representing the properties and methods.  |
| **Constructor** | A method that creates a new object of a class with default values for the properties/attributes |
| **Methods** | Functions that are defined in a class. |
| **Attributes** | Variables that are defined in a class |
| **Object** | A specific instance of a class that has properties and methods. |
| **Instantiation** | The process of creating a new instance of a class that is called a object, by calling its constructor. |
| **Private Attribute** | Only accessible by current object |
| **Public Attribute** | Accessible to any code in program.  |
| **Accessor methods** | Methods that are used to return the private attributes.  |
| **Setter methods** | Methods that are used to access and manipulate the attributes  |
 -->

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


{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit03_oop
cd unit02_oop
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
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

💻 **Create a method `\_\_str\_\_` which will allow you to `print()` the linked list.** 

Be sure to test our your method.

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



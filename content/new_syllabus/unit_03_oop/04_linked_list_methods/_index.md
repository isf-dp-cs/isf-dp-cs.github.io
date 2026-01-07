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

{{< expand "Example" "click to expand ⬇️" >}}

```python
from circular_linked_list import CircularLinkedList
import random 
from time import sleep
import os
import keyboard

"""Create a spinning game that uses multiple linked lists to store various emojis.
The game should allow players to trigger a random spinning, that utilizes the nature of a circular linked list
to simulate continuous spinning. 
"""


def simulate_slot_machine():
    """
    Creates three circular linked lists (reels), fills them with emojis, 
    simulates a spin, and returns the resulting emoji combination.
    """
    
    # 1. Define the Emojis for the Reels
    # We use different sets/orders to make the machine slightly more unpredictable.
    all_emojis = ["🍒", "🍋", "🍊", "🍇", "🔔", "💰", "💎", "⭐"]
    
    # 2. Create the three Circular Linked Lists (Reels)
    reel1 = CircularLinkedList()
    reel2 = CircularLinkedList()
    reel3 = CircularLinkedList()
    
    # Create slightly different lists for each reel by rotating the emoji list
    emojis_r1 = all_emojis * 5  # Add a lot of items for a good simulation
    emojis_r2 = all_emojis[2:] + all_emojis[:2] # Shifted list
    emojis_r2 = emojis_r2 * 5
    emojis_r3 = all_emojis[4:] + all_emojis[:4] # Another shifted list
    emojis_r3 = emojis_r3 * 5
    
    # 3. Add Emojis to the Linked Lists
    for emoji in emojis_r1:
        reel1.append(emoji)
    for emoji in emojis_r2:
        reel2.append(emoji)
    for emoji in emojis_r3:
        reel3.append(emoji)


    # print(f"✅ Slot Machine initialized .")
    # os.system('clear')

    one = reel1.head
    two = reel2.head
    three = reel3.head

    try:
        while True:
            os.system('clear')
            print(one.get_data(), two.get_data(), three.get_data())
            sleep(0.1)

            one = one.get_next()
            two = two.get_next()
            three = three.get_next()

    except KeyboardInterrupt:
        pass

    for i in range(5):
        os.system('clear')
        print(one.get_data(), two.get_data(), three.get_data())
        sleep(0.2)

        two = two.get_next()
        three = three.get_next()

    for i in range(5):
        os.system('clear')
        print(one.get_data(), two.get_data(), three.get_data())
        sleep(0.3)


        three = three.get_next()

    os.system('clear')
    print(one.get_data(), two.get_data(), three.get_data())






    # 4. Simulate the Spin
    
    # Determine a random number of steps for each reel to land on a random position.
    # The minimum steps ensures the illusion of spinning.
    min_steps = 10 
    max_steps = 50 
    
    # Random steps for each reel
    steps1 = random.randint(min_steps, max_steps)
    steps2 = random.randint(min_steps, max_steps)
    steps3 = random.randint(min_steps, max_steps)

  

if __name__ == '__main__':

    simulate_slot_machine()

```
{{< /expand >}}

---

# [4] Hue

This game is loosely based on the game **I 💜 Hue**       

## Pretty Print

As you might recall from the string manipulation/Wordle lab at the beginning of the year, you can print text with background colors. If you add this `pretty_print()` method to your linked list class, it will print each number in your linked list with its corresponding background color. 

```python
def pretty_print(self):
    result = ""
    reset = "\u001b[0m"
    current = self.__head
    while current is not None:
        n = current.get_data()
        color = f"\u001b[48;5;{n}m {n:3} {reset}"
        result += color
        current = current.get_next()
    result += "\n"
    print(result)
```

{{< expand "More Detail on Formatting Text" "click to expand ⬇️" >}}

| code                          | description                                                            |
| ----------------------------- | ---------------------------------------------------------------------- |
| `\u001b[48;5;` + n + `m ` | Standard background color where `n` can be a number between 0-7        |
| `\u001b[48;5;` + n + `m ` | High intensity background color where `n` can be a number between 8-15 |
| `\u001b[48;5;` + n + `m ` | Rainbow background color where `n` can be a number between 16-231      |
| `\u001b[48;5;` + n + `m ` | Gray background color where `n` can be a number between 232-255        |



| code        | description      |
| ----------- | ---------------- |
| `\u001b[0m` | Reset all styles |
| `\u001b[1m` | Bold             |
| `\u001b[4m` | Underline        |
| `\u001b[7m` | Reversed         |

The **256 Background Colors** follow a simple forumula: `\u001b[48;5;` + n + `m `

{{< figure src="images/courses/java/ansi_colors.png" width="12%">}}

{{< /expand >}}

💻 **Add a `pretty_print()` to your linked list. Test it out in a new file `hue.py` using this code (or your own).**

```python
from linked_list import Linked_List
import random

colors = Linked_List()

for i in range(12):
    random_n = random.randint(130,135) # generate the color number
    colors.add_last(random_n) # add the color to the linked list
colors.pretty_print()
```

---

## Insert In Order

💻 **Create a method `insert(data)` in your singly linked list which inserts a new `Node` in the correct (in order) location in the linked list.** 

💻 **Then edit your `hue.py` code to use this new method.** 

---

## Verify Order

💻 **Create a method `in_order()` in your singly linked list which returns `True` or `False` depending on whether the numbers in the linked list are in order or not.** 

Test this out using your previous code, and see if it can correctly identify a linked list that is ordered.

---

## Swap

💻 **Create a method `swap(x,y)` in your singly linked list. It should locate the node containing the data `x` and `y`, and swap them in the linked list.** 


---

# [5] Deliverables


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

---
title: "03. Matrix Game" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Aggregation

This lab you will create a game of your choosing with the `Matrix` class.

---
## Syllabus Topics [SL]
- **B3.1.2** Construct a design of classes, their methods and behaviour.
- **B3.1.4** Construct code to define classes and instantiate objects.

## Syllabus Topics [HL]
- **B3.2.4** Explain the role of composition and aggregation in class relationships.



## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Aggregation** | One object contains one or more other objects, but the other objects can exist independently *(ex. library and books, books are not dependent on the library to exist)*  |
| **Overloading** | Two or more methods have the same name, different parameters and functionality.   |
| **Polymorphism** | How objects can perform different    |


---


# [0] Class Relationships

In this lab, you will make a simple version of Blackjack. For this, we use multiple classes. 
- `Card()`
- `Deck()`
- `Hand()`
- `Blackjack`

📖 **Here is the UML diagram for the class relationships.** The unfilled diamonds represent an `aggregation` relationship. A `Deck` contains `Cards`, but `Cards` exist if the `Deck` is destroyed.

{{< mermaid >}}

classDiagram
    class Card {
        - suit: str
        - rank: int
        + __init__(suit, rank)
        + __str__()
        + get_suit()
        + get_rank()
        + set_suit(new_suit)
        + set_rank(new_rank)
        + __eq__(other)
        + __gt__(other)
    }


    class Deck {
        - cards: List~Card~
        + get_deck()
        + deal_card()
        + shuffle_deck()
    }


    class Hand {
        - cards: List~Card~
        - owner: str
        + __srt__
        + get_hand()
        + add_card(card: Card)
        + count_rank()
        + sort_hand()
        + __gt__(other)
        + __eq__(other)
    }


    class Blackjack {
        - deck: Deck
        - human: Hand
        - computer: Hand
        + __init__()
        + deal_cards()
        + computerTurn()
        + play()
        + checkBust()
        + determineWinner()
    } 

    Card o--> Hand
    Card o--> Deck
    Deck o--> Blackjack
    Hand o--> Blackjack
   
{{< /mermaid >}}

---

# [3] Deck

Here is the UML diagram for the `Deck` class.

{{< mermaid >}}
classDiagram
    class Deck {
        - cards: List~Card~
        + get_deck()
        + deal_card()
        + shuffle_deck()
    }
{{< /mermaid >}}

💻 **In `deck.py`, construct the following methods and test each at the bottom of the file.** Read the docstrings to ensure the method works as expected. 
- `deal_card()` - Removes the last Card in the deck. Then, returns that c=Card. If no Cards exist, returns None. 
- `shuffle()` - manually shuffles the deck
    - loop through every position `cards` array   
    - each time you loop, randomly generate another location in the list, `rand_idx`     
    - swap the `Card` located at `i` with the `Card` located at `rand_idx` 






---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_oop
git clone https://github.com/isf-dp-cs/lab_oop_cards_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_oop_cards_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [2] Card

The `Card` class has already been constructed for you in `card.py`.


{{< mermaid >}}
classDiagram
    class Card {
        - suit: str
        - rank: int
        + __init__(suit, rank)
        + __str__()
        + get_suit()
        + get_rank()
        + set_suit(new_suit)
        + set_rank(new_rank)
        + __eq__(other)
        + __gt__(other)
    }   
{{< /mermaid >}}

📖 **In the class, there are three examples of `overloading`.**
- `__str__()` is called when you print an object
- `__eq__()` is called when you compare the equivalence of two objects 
- `__gt__` is called when you compare if an object is greater than another object

```python
c1 = Card("Hearts", 5)
c2 = Card("Hearts", 5)
print(c1)   # calls __str__()
c1 == c2    # calls __eq__()
c1 > c2     # calls __gt__()
```

💻 **Construct tests for each method at the bottom of `card.py`**



---

# [6] Deliverables


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



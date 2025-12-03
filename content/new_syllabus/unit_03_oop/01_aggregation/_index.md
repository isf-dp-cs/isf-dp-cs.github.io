---
title: "01. Aggregation" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Aggregation

This lab introduces relationships between classes.

---
## Syllabus Topics [SL]
- **B3.1.2** Construct a design of classes, their methods and behaviour.
- B3.1.1 Evaluate the fundamentals of OOP.
- **B3.1.4** Construct code to define classes and instantiate objects.

## Syllabus Topics [HL]
- **B3.2.4** Explain the role of composition and aggregation in class relationships.



## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Aggregation** | One object contains one or more other objects, but the other objects can exist independently *(ex. library and books, books are not dependent on the library to exist)*  |
| **Overloading** | An template for creating objects, representing the properties and methods.  |



---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit03_oop
cd unit02_oop
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_oop_songs_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_oop_songs_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

## [1] UML Relationship

In this lab, you will make a simple version of Blackjack. For this, we use multiple classes. 
- `Card()`
- `Deck()`
- `Hand()`
- `Blackjack`


--- 

## [1] Class Relationships

Here is the UML diagram for the class relationships.

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
        + __init__()
        + shuffle_deck()
        + deal_card()
        + reset()
        + count()
    }

    class Hand {
        - cards: List~Card~
        - owner: str
        + __init__(owner=None)
        + add_card(card: Card)
        + get_cards()
        + count_rank()
        + __gt__(other)
        + __eq__(other)
    }

    class Blackjack {
        - deck: Deck
        - player: Hand
        - computer: Hand
        + __init__()
        + start()
        + play()
        + determineWinner()
        + display_player_cards()
        + sortPlayerHand()
    }

    Card --> Hand
    Card --> Deck
    Deck --> Blackjack
    Hand --> Blackjack
   
{{< /mermaid >}}


---

# [2] Card

💻 **In `card.py`, test each method at the bottom of the file.**



---


# [2] Hand

Here is the UML diagram for the `Hand` class.

{{< mermaid >}}
classDiagram
    class Hand {
		-cards: list of Cards
        + get_cards()
        + add_card(new_card)
        + count_rank()
        + __gt__(other)
        + __eq__(other)
    }
{{< /mermaid >}}


💻 **In `hand.py`, construct each method and test it at the bottom of the file.** Read the docstrings to ensure the method works as expected. 
- `add_card()` that returns the last `card` in `cards` attribute** If no card exists, return `None.
- `count_rank()`
- `__gt__()` - compares the rank of itself and another hand
- `__eq__()` - compares the rank of itself and another hand


---

# [3] Deck

Here is the UML diagram for the `Deck` class.

{{< mermaid >}}
classDiagram
    class Deck {
		-cards: list of Cards
        + get_deck()
        + shuffle()
        + deal_card()
    }
{{< /mermaid >}}

💻 **In `deck.py`, construct each method and test it at the bottom of the file.** Read the docstrings to ensure the method works as expected. 
- `deal_card()` that returns the last `card` in `cards` attribute** If no card exists, return `None.
- `shuffle()`
    - loop through every position `cards` array   
    - each time you loop, randomly generate another location in the array, `rand_idx`     
    - swap the `card` located at `i` with the `card` located at `rand_idx` 
- `__gt__()` - compares the rank of itself and another hand
- `__eq__()` - compares the rank of itself and another hand

---



---

Blackjack

- add in check if it ties
- add check if it busts


---

# [2] Deliverables


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



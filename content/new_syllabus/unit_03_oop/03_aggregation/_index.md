---
title: "03. Aggregation" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Aggregation

This lab introduces a different kind of relationship between classes.

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

    Card --o Hand
    Card --o Deck
    Deck --o Blackjack
    Hand --o Blackjack
   
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
- `deal_card()` - Removes the last Card in the deck and returns it. If no Cards exist, returns None. 
    - You may use `pop()`
- `shuffle()` - manually shuffles the deck
    - loop through every position `cards` array   
    - each time you loop, randomly generate another location in the list, `rand_idx`     
    - swap the `Card` located at `i` with the `Card` located at `rand_idx` 


{{< write-action >}}

1) **Close your computer, take out a piece of paper, and write out the `shuffle()` method.** 

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again.

{{< /write-action >}}


---


# [4] Hand

Here is the UML diagram for the `Hand` class.

{{< mermaid >}}
classDiagram
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
{{< /mermaid >}}


💻 **In `hand.py`, construct each method and test it at the bottom of the file.** Read the docstrings to ensure the method works as expected. 
- `add_card()` - returns the last card in cards attribute. If no card exists, return None
- `count_rank()` - returns the sum of the rank's of the Cards in the hand
- `sort_hand()` - sorts the cards in order of rank in ascending order
- `__gt__()` - compares the rank of itself and another hand
- `__eq__()` - compares the rank of itself and another hand

{{< write-action >}}

1) **Close your computer, take out a piece of paper, and write out the `count_rank()` method.** 

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again.

{{< /write-action >}}


---

# [5] Blackjack


{{< mermaid >}}
classDiagram
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
{{< /mermaid >}}

The `Blackjack` class ties all of the pieces together into a cohesive game. 

💻 **In blackjack.py, construct each method to build a working game.** Read the docstrings to ensure the method works as expected. 
- `deal_cards()` - deals 2 cards to the computer and the human
- `computerTurn()` - if the computer's hand's total rank is less than 16, randomly deal up to 2 cards
- `checkBust(player)` - check if a given player's total rank is over 21
- `determine_winner()` - prints a message communicating if the human or computer won, including the corresponding total ranks.
- `play()` - play a round of blackjack. 

💻 **Run `blackjack.py` to play the game and test as you construct each method.**


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



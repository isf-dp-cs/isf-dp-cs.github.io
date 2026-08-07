---
title: "03. Polymorphism" 
bookFlatSection: false
weight: 30
# bookCollapseSection: true
# draft: true
---

# Polymorphism

This lab introduces the ideas of polymorphism, operator overloading, and aggregation as a relationship between classes.

---

## Syllabus Topics [SL]
- **B3.1.2** Construct a design of classes, their methods and behaviour.
- **B3.1.4** Construct code to define classes and instantiate objects.

## Syllabus Topics [HL]
- **B3.2.2** Construct code to model polymorphism and its various forms, such as method overriding.
- **B3.2.4** Explain the role of composition and aggregation in class relationships.


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Polymorphism** | When the same method behaves differently depending on the type of object it's working with.|
| **Aggregation** | One object contains one or more other objects, but the other objects can exist independently *(ex. library and books, books are not dependent on the library to exist)*  |
| **Operator Overloading** | When an operator like `+` `<` `>=` behaves differently based on the types of objects it's operating on. This is an example of polymorphism. |

---


# [0] Class Relationships


{{< columns >}}

{{< mermaid >}}

classDiagram
    class Card {
        - __suit: str
        - __rank: int
        + \_\_init__(str, int)
        + get_suit() str
        + get_rank() int
        + set_suit(str) None
        + set_rank(int) None
        + \_\_str__() str
        + \_\_eq__(Card) bool
        + \_\_gt__(Card) bool
    }


    class Deck {
        - __cards: List~Card~
        + \_\_init__()
        + get_cards() List~Card~
        + deal_card() Card
        + shuffle_deck() None
        + add_card(Card) None
    }


    class Hand {
        - __cards: List~Card~
        - __owner: str
        + \_\_str__() str
        + get_cards() List~Card~
        + add_card(Card) None
        + count_rank() int
        + sort_hand() None
        + \_\_gt__(Hand) bool
        + \_\_eq__(Hand) bool
    }


    class Blackjack {
        - __deck: Deck
        - __human: Hand
        - __computer: Hand
        + \_\_init__()
        + deal_cards() None
        + computer_turn() None
        + play() None
        + check_bust(Hand) bool
        + determine_winner() None
    }  

    Card --o Hand : part of
    Card --o Deck : part of
    Deck --* Blackjack : part of
    Hand --* Blackjack : part of
   
{{< /mermaid >}}

<--->

In this lab, you will make a simple version of Blackjack. For this, we use multiple classes. 
- `Card()`
- `Deck()`
- `Hand()`
- `Blackjack`

📖 **Here is the UML diagram for the class relationships.** The unfilled diamonds represent an `aggregation` relationship. A `Deck` contains `Cards`, but `Cards` exist if the `Deck` is destroyed.




{{< /columns >}}



---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_polymorphism_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_polymorphism_yourgithubusername
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
        - __suit: str
        - __rank: int
        + \_\_init__(str, int)
        + get_suit() str
        + get_rank() int
        + set_suit(str) None
        + set_rank(int) None
        + \_\_str__() str
        + \_\_eq__(Card) bool
        + \_\_gt__(Card) bool
    }  
{{< /mermaid >}}

📖 **In the class, there are three examples of `Polymorphism`.**
- `__str__()` is called when you print an object. 
- `__eq__()` is called when you compare the equivalence of two objects. This is an example of `operator overloading`.
- `__gt__()` is called when you compare if an object is greater than another object. This is an example of `operator overloading`.

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
        - __cards: List~Card~
        + \_\_init__()
        + get_cards() List~Card~
        + deal_card() Card
        + shuffle_deck() None
        + add_card(Card) None
    }
{{< /mermaid >}}

💻 **In `deck.py`, construct the following methods and test each at the bottom of the file.** Read the docstrings to ensure the method works as expected. 
- `deal_card()` - Removes the first Card in the deck and returns it. If no Cards exist, returns None. 
    - You may use `pop()`
- `shuffle_deck()` - manually shuffles the deck
    - loop through every position `cards` array   
    - each time you loop, randomly generate another location in the list, `rand_idx`     
    - swap the `Card` located at `i` with the `Card` located at `rand_idx` 
- `add_card()` - adds a `Card` object into the cards list. 


💻 **Be sure to test this scenario:**
- shuffling the deck
- dealing 3 cards 
- shuffling the deck
- adding the 3 cards back into the deck

{{< write-action >}}

1) **Close your computer, take out a piece of paper, and write out the `shuffle_deck()` method.** 

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again.

{{< /write-action >}}


---


# [4] Hand

Here is the UML diagram for the `Hand` class.

{{< mermaid >}}
classDiagram
    class Hand {
        - __cards: List~Card~
        - __owner: str
        + \_\_str__() str
        + get_cards() List~Card~
        + add_card(Card) None
        + count_rank() int
        + sort_hand() None
        + \_\_gt__(Hand) bool
        + \_\_eq__(Hand) bool
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
        - __deck: Deck
        - __human: Hand
        - __computer: Hand
        + \_\_init__()
        + deal_cards() None
        + computer_turn() None
        + play() None
        + check_bust(Hand) bool
        + determine_winner() None
    } 
{{< /mermaid >}}

The `Blackjack` class ties all of the pieces together into a cohesive game. 

💻 **In blackjack.py, construct each method to build a working game.** Read the docstrings to ensure the method works as expected. 
- `deal_cards()` - deals 2 cards each to the computer and the human
- `computer_turn()` - if the computer's hand's total rank is less than 16, randomly deal up to 2 cards
- `check_bust(player)` - check if a given player's total rank is over 21 and return True/False
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


---

# [7] Extension

As you may have realized, our Blackjack game is not totally accurate to the [official rules](https://bicyclecards.com/how-to-play/blackjack). It is up to you improve the game with the following updatesand decide how to implement them: 
- Cards with a rank of `10-13` should always score for `10`
- The Card with a `1` rank is an Ace. It should count as `11` if the total value of the hand is equal to or less than `10`. 
- Allow the player to play multiple rounds of Blackjack. At the end of each round, add the Cards from their Hand, back into the deck.
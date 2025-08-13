---
title: Practice
weight: 8
# draft: true
---

# Practice

This page contains information and coding exercises for all the topics we've covered so far: `variables`, `loops`, `arrays` and `methods`.

Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.

{{<aside>}}
Make sure you are never using `output`/`return` inside an `if` statement! ❌       
Instead, use a variable to store the `output`/`return` value, and `output`/`return` it at the end.✅
{{</aside>}}

## Choosing Your Level
You can choose whether you want to work at Level 1 or Level 2. 

**Level one is review for what we've already learned.**
**Level 2 is quite a complex challenge - more than can be  done in just 1 class period.**

Choose wisely. If you want to choose Level 2, you must first complete 1 exercise from Level 1 and paste it into your lab log to prove your understanding.

## Level 1

### 1.1 Conditionals + Loops practice
Imagine that there is a swimmer named Michaela, and she can swim 10 laps before she has to stop:


{{< code-action "Write a loop that has the following output:">}} 

```shell
Michaela is on lap 1 and she is not tired
Michaela is on lap 2 and she is not tired
Michaela is on lap 3 and she is not tired
Michaela is on lap 4 and she is not tired
Michaela is on lap 5 and she is getting tired
Michaela is on lap 6 and she is getting tired
Michaela is on lap 7 and she is getting tired
Michaela is on lap 8 and she is super tired
Michaela is on lap 9 and she is super tired
Michaela is on lap 10 and she is super tired
Michaela stopped swimming
```

---


### 1.2 While Loops practice

{{< code-action "Write pseudocode that will continually ask the user to enter their name, and then output Hello <name>. The loop should end when the user types “goodbye”.">}} 

```shell
What is your name?
> Bob
Hello, Bob!
What is your name?
> Elsa
Hello, Elsa!
What is your name?
> goodbye
goodbye!
```

---


### 1.3 Methods + Conditionals practice
Every so often we have a leap year, which is a year where the month of February has a 29th day. Here is the formula for calculating whether a year is a leap year:
> If a year is **divisible by 4**, it is a leap year ✅   
> UNLESS it is **also divisible by 100**, in which case it is NOT a leap year. ❌      
> But if a year is **divisible by 400**, then it IS a leap year. ✅     

{{< code-action "Write a method that determines whether or not a year is a leap year.">}} 
> **input:** year    
> **return:** `true`/`false`  

---


### 1.4 Arrays + Mod practice

{{<aside>}}
Remember, you can use `a mod b` to find the remainder after integer division `a//b`. If the remainder is 0, that means `a` is evenly divisible by `b`.  
{{</aside>}}

{{< code-action "Count up how many occurences there are of multiples of 7 there are in an array. Output the number.">}} 



---



### 1.5 Arrays + Loops practice
A PHE teacher wants to divide her students into 3 teams. She’ll do this by assigning them to team 1, team 2, and team 3 as she walks down the line. Write pseudocode that can divide her students into teams using arrays.
For example, if her students are Abby, Bert, Coco, Daniel , Erika, Fred, Gabby, Hank, and Izzy, the teams will be:
>**Team 1**: Abby,Daniel,Gabby    
>**Team 2**: Bert,Erika,Hank    
>**Team 3**: Coco,Fred,Izzy    



{{< code-action "Use the starter code below, then write a loop that will sort her students into arrays.">}} 

```java
ALL_STUDENTS = ["Alvin", "Bruno", "Charlie", "Dominic", "Elvis", "Franco", "Gloria", "Hermes", "Ivan", "Jacob", "Karenna", "Lennon"]
TEAM1 = ["none","none","none","none"]
TEAM2 = ["none","none","none","none"]
TEAM3 = ["none","none","none","none"]

// add your loop here
```

---


## Level 2

### Poker Challenge

This exercise comes from [project euler](https://projecteuler.net/problem=54)

In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

*   **High Card**: Highest value card.
*   **One Pair**: Two cards of the same value.
*   **Two Pairs**: Two different pairs.
*   **Three of a Kind**: Three cards of the same value.
*   **Straight**: All cards are consecutive values.
*   **Flush**: All cards of the same suit.
*   **Full House**: Three of a kind and a pair.
*   **Four of a Kind**: Four cards of the same value.
*   **Straight Flush**: All cards are consecutive values of same suit.
*   **Royal Flush**: Ten, Jack, Queen, King, Ace, in same suit.

The cards are valued in the order:  
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

| Hand | Player1                                         | Player2                                          | Winner   |
|------|-------------------------------------------------|--------------------------------------------------|----------|
| 1    | 5H 5C 6S 7S KD  Pair of Fives                   | 2C 3S 8S 8D TD Pair of Eights                    | Player 2 |
| 2    | 5D 8C 9S JS AC Highest card Ace                 | 2C 5C 7D 8S QH Highest card Queen                | Player 1 |
| 3    | 2D 9C AS AH AC Three Aces                       | 3D 6D 7D TD QD Flush with Diamonds               | Player 2 |
| 4    | 4D 6S 9H QH QC Pair of Queens Highest card Nine | 3D 6D 7H QD QS Pair of Queens Highest card Seven | Player 1 |
| 5    | 2H 2D 4C 4D 4S Full House With Three Fours      | 3C 3D 3S 9S 9D Full House with Three Threes      | Player 1 |

The file, [poker.txt](https://projecteuler.net/resources/documents/0054_poker.txt), contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?
## Deliverables

{{< deliverables >}}
Paste all your code in your Code Log

<!-- Complete the [Exit Ticket](https://docs.google.com/forms/d/e/1FAIpQLScgcYSCyOc-9A60yAu78deLLUhKunf9wPlE_D1hJHy12Hzq1Q/viewform?usp=sf_link) -->

{{< /deliverables >}}
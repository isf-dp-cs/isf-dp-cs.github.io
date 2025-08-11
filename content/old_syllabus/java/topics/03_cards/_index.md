---
title: "Cards" 
bookFlatSection: false
weight: 6
# bookCollapseSection: true
# draft: true
---

# Cards
This lab uses Java OOP principles. It emphasizes using class objects inside other classes.

---

## [0] Setup


### Clone the Repository

#### 💻 select [`Projects`] > [`Get from VCS`] > [`Repository URL`]

{{< figure src="images/courses/java/intellijIDEA/intellij_repo_url.png" width="50%">}}


 
{{< code-action "Paste your URL to clone the lab">}} 

Be sure to change `yourgithubusername` to your actual GitHub username.

```shell
https://github.com/isf-dp-cs/lab_cards_yourgithubusername
```

---

## [1] Cards

The class Cards has already been written for you. It is a simplified version of the Cards you wrote last class. 

{{< mermaid >}}
classDiagram
    class Card {
		-String suit
    	-int rank
        + Card(suit: String, number: int, symbol: String)
        + getSuit(): String
        + setSuit(suit: String): void
        + getRank(): int
        + setRank(number: int): void
		+ isEqual(otherCard: Card) boolean
		+ isHigher(otherCard: Card) boolean
		+ toString(): String
    }
{{< /mermaid >}}

There are a few main differences:

### Only 2 attributes

```java
public class Card {
    private String suit;
    private int rank;
```

### Overriding toString()

This method overrides `toString()`. This means that now, if you use `System.out.println()` on a `Card` object, it will print nicely to the console:

```java
   // Override toString
    // Converts the card to a readable string representation.
    @Override
    public String toString() {
        String rankString;
        if (rank >= 2 && rank <= 10) {
            rankString = String.valueOf(rank);
        } else if (rank == 11) {
            rankString = "Jack";
        } else if (rank == 12) {
            rankString = "Queen";
        } else if (rank == 13) {
            rankString = "King";
        } else if (rank == 1) {
            rankString = "Ace";
        } else {
            rankString = "Invalid Rank";
        }
        return rankString + " of " + suit;
    }
```

---

## [2] Deck

The `Deck` class uses the `Card` class to make a deck of cards. It will store all the cards into an array.

{{< mermaid >}}
classDiagram
    class Deck {
		-Card[] cards;
    	-int topCardIndex;
        + Deck()
        + shuffle(): void
        + dealCard(): Card
    }
{{< /mermaid >}}

It is your job to finish the Deck class according to the specifications.

---

### Deck Constructor

💻 **Complete the  constructor so it does 2 things:**

#### 1️⃣ initialize `topCardIndex` to its starting value of 0
> *The `topCardIndex` keeps track of which card is the current "top card".*

#### 2️⃣ initialize `cards` with all 52 cards from the deck

>To create all the cards in a deck, you can use nested for-loops to combine the 4 possible suit (❤️♠️♦️♣️) with the 13 possible ranks (1,2,3,4,5,6,7,8,9,10,11,12,13)
>
>Here is an example of using nested `for loops` to generate all possible weekday blocks:
```java
String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
int[] blocks = {1, 2, 3, 4, 5};

for (int i = 0; i < days.length; i++) {
    for (int j = 0; j < blocks.length; j++) {
        System.out.println(days[i] + " block " + blocks[j]);
    }
}
```

---

### shuffle()

💻 **Write a method `shuffle()` that randomly swaps the `card` objects inside the `cards` array**

1️⃣ loop through every position `cards` array   
2️⃣ each time you loop, randomly generate another location in the array, `rand_i`     
3️⃣ swap the `card` located at `i` with the `card` located at `rand_i`    

> Here's how to randomly generate a number 0-9:   
```java
Random rand = new Random(); // you only need to run this once
int randomIndex = rand.nextInt(10); //each time you need a new random number, run this line of code
```


---

### dealCard()
💻 **Write a method `dealCard()` that returns the next `card` in the deck**

1️⃣ if the `topCardIndex` isn't null, return the card there, then increase `topCardIndex` by 1   
2️⃣ else, return `null`

---

## [3] Java Arrays


Here are some examples of how to use Java arrays:

### **Making a Array with Values**
```java
// Create an array of 5 int elements
int[] marks = {10, 20, 30, 40, 50};
```

### **Making a Array without values, then adding them**
```java
int[] marks = new int[3];
marks[0] = 50; 
marks[1] = 70;
marks[2] = 93;
```

### **Changing an Element Value**
```java
int[] nums = {1, 2, 0, 4};
// Change value at index 2
nums[2] = 3;
```

### **Get the length of an array**
```java
marks.length
```

---

## [4] Game

{{< mermaid >}}
classDiagram
    class Game {
		-Deck deck;
    	-Card[] playerHand;
		-Card[] computerHand;
        + Game()
        + start(): void
        + displayHand(Card[] hand): void
		+ calculateScore(Card[] hand): int
		+ sortPlayerHand(): void
		+ sortComputerHand(): void
		+ determineWinner(): void
    }
{{< /mermaid >}}

### Player Hands

Each player's hand should be an array of length 5

*Be careful! Any space in the array could be `null`*

### Avoiding Null
Unfortunately, we can't guarantee that every space in the player's hand always has a card in it. What if you are playing a game like Uno, where players discard as they go?

For example, imagine you are writing `calculateScore`:

```java
// Calculate the total score of a hand of cards
public int calculateScore(Card[] hand) {
	int score = 0;
	for (int i = 0; i < hand.length; i++) {
		Card card = hand[i];
		score += card.getRank();
	}
	return score;
}
```

If one of the spaces in `hand` is `null`, but you call a method like `getRank` anyway, you will get something called a `NullPointerException`. Here are two ways to avoid a `NullPointerException`:

#### Add in an `if` statement to test if the object is `null`:
```java
public int calculateScore(Card[] hand) {
	int score = 0;
	for (int i = 0; i < hand.length; i++) {
		if(hand[i] != null) {
			Card card = hand[i];
			score += card.getRank();
		}
	}
	return score;
}
```

## While loop
This approach only works if you know all the empty spaces will be **at the end** of your array:

```java
public int calculateScore(Card[] hand) {
	int score = 0;
	int i = 0;
	while (i<hand.length && hand[i]!=null){
		Card card = hand[i];
		score += card.getRank();
		i++;
	}
	return score;
}
```

###  start()

This method should do the following:
- shuffle the deck   
- give each player 5 cards

### displayHand()
This method should print out each element in the given hand

### sortPlayerHand()
Use bubble sort to sort the player's hand

{{< expand "Answer" >}}
```java
    public void sortPlayerHand(){
        /* Use bubble sort to sort the player's hand */
        
        // loop for multiple passes through the array
        for( int i = 0; i<playerHand.length-1; i++) {
            // loop through the hand
            for (int j = 0; j < playerHand.length - 1 && playerHand[j+1] != null ; j++) {
                // check if neighboring cards are out of order
                if (playerHand[j].getRank() > playerHand[j + 1].getRank()) {
                    // swap the cards
                    Card temp = playerHand[j + 1];
                    playerHand[j + 1] = playerHand[j];
                    playerHand[j] = temp;
                }
            }
        }
    }
```
{{< /expand >}}

### sortComputerHand()
Use selection sort to sort the player's hand
{{< expand "Answer" >}}
```java
    public void sortComputerHand(){
        /* Use selection sort to sort the player's hand */

        // loop through hand
        for( int i = 0; i<computerHand.length && computerHand[i] != null; i++) {
            // assume the current item is the minimum
            int minIndex = i;
            int minRank = computerHand[i].getRank();
            // loop through remaining unsorted cards
            for (int j = i+1; j < computerHand.length && computerHand[j] != null ; j++) {
                if (computerHand[j].getRank() < minRank){
                    minIndex = j;
                    minRank = computerHand[j].getRank();
                }
            }
        // swap the current card with the minimum card
        Card temp = computerHand[minIndex];
        computerHand[minIndex] = computerHand[i];
        computerHand[i] = temp;
        }
    }
```
{{< /expand >}}

### calculateScore()
Calculate the sum of the ranks of all the cards in a player's hand.

### determineWinner()
Print out which player has a higher score, or print that its a tie.

### determineHighestCard()
Print out which player has a higher top card.

- first, call the sort method for each hand
- then, compare the highest card for each player
- print out which player has the higher card, or print that its a tie.

---

## [5] Deliverables

{{< deliverables>}}


### Push to Github

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}

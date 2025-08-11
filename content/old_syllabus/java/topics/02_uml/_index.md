---
title: "UML" 
bookFlatSection: false
weight: 5
# bookCollapseSection: true
# draft: true
---

# UML
This lab provides several examples of simple UML diagrams for single classes, and examples of how that translates into Java code.

---

## [0] Setup


For this lab, we will continue working in the `lab_oop` repository

---

## [1] Example UML Diagram + Java Code

Here is an example of a Java class and its correspoinding UML diagram

{{< columns >}}
```java
public class Student {
	// attributes 
    private String name;
    private String[] subjects;
    private int idNumber;

	//constructor
    public Student(String name, String[] subjects, int idNumber) {
        this.name = name;
        this.subjects = subjects;
        this.idNumber = idNumber;
    }

	//accessors and mutators
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getSubjects() {
        return subjects;
    }

    public void setSubjects(String[] subjects) {
        this.subjects = subjects;
    }

    public int getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(int idNumber) {
        this.idNumber = idNumber;
    }
}
```

<--->

{{< mermaid >}}
classDiagram
    class Student {
		-String name
    	-String[] subjects
		-int idNumber
		+Student(String name, String[] subjects, int idNumber)
        + getName(): String
        + setName(name: String): void
        + getSubjects(): String[]
        + setSubjects(subjects: String[]): void
        + getIdNumber(): int
        + setIdNumber(idNumber: int): void
    }
{{< /mermaid >}}

{{< /columns >}}

---

## [2] Exercises

### Cards 🃞

{{< columns >}}

{{< mermaid >}}
classDiagram
    class Card {
		-String suit
    	-int number
		-String symbol
        + Card(suit: String, number: int, symbol: String)
        + getSuit(): String
        + setSuit(suit: String): void
        + getNumber(): int
        + setNumber(number: int): void
        + getSymbol(): char
        + setSymbol(symbol: char): void
		+ printCard(): void
    }
{{< /mermaid >}}


<--->

#### *Example `card` objects*

| suit         | number                   | symbol         | printCard() |
|--------------|--------------------------|----------------|-------------|
| spades       | 2                        | null           | 2♠          |
| hearts       | null                     | 'K'            | K❤️          |

{{< code-action "Use the UML to create the class" >}} 
{{< code-action "Add a `main` method and thoroughly test your code">}}

--- 



#### *Extensions*    
{{< code-action "In your `main` method, write a nested loop that generates all 52 cards in the deck">}}
{{< code-action "Add an `isHigher` method." >}}  
> **`+isHigher(Card otherCard): boolean`**   
>
*It should return `true` if `this` card is higher, `false` if the other card is higher.*


{{< /columns >}}

--- 

### Vehicle 🚗

{{< columns >}}

{{< mermaid >}}
classDiagram
    class Vehicle {
        - model: String
        - year: int
        - mileage: int
        + Vehicle(plate: String, model: String, year: int)
        + increaseMileage(milesToAdd: int) : void
        + getModel(): String
        + setModel(model: String): void
        + getYear(): int
        + setYear(year: int): void
        + getMileage(): int
        + setMileage(mileage: int): void
    }
{{< /mermaid >}}


<--->

### *Example `vehicle` objects*

| Model     | Year | Mileage |
|-----------|------|---------|
| Sedan     | 2022 | 10000   |
| SUV       | 2020 | 8500    |

{{< code-action "Use the UML to create the class" >}} 
{{< code-action "Add a `main` method and thoroughly test your code">}}

--- 

#### *Extensions*    
{{< code-action "Add an `showVehicle` method that prints out an ASCII art representation of the vehicle." >}}  
{{< code-action "Add error handling to your methods so that:" >}}
- The user cannot set the year to a year in the future or before cars existed
- The mileage can only go up, not down


{{< /columns >}}

--- 

## [3] Deliverables

{{< deliverables>}}

### Push to Github

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}

---

## [4] Extension: GUI

Follow [this tutorial](https://pbaumgarten.com/java/swing/) and try to add in a GUI using Java Swing. 
<!-- 
- make new class Melee
- create multiple supers inside main
- create method fight() - older super wins, if same, no one wins
- test out fight method with two super objects


- add power and power_level
- update fight() to use strength, and print out power


- add level_up() to Super - if they win, level them up
- add boolean attribute "dead"  -->




<!-- 
## Extension: Brawler Game

- Add a `power` attribute to the cat
- Add the required methods to get and set the `power` of the cat
- Use a `for loop` to create an array containing multiple cats with random power levels
- Use a `while loop` to create the brawler game
	- Randomly select two cats from the array
	- The stronger cat wins
	- The winning cat gains power
	- The losing cat loses a life
	- The game ends when only one cat is left alive

Here's how you can randomly generate numbers in java:
```java
import java.util.Random;

Random rand = new Random();

// Obtain a number between [0 - 49].
int n = rand.nextInt(50);
```
 -->


<!-- 

{: .task }
Create a new java project, and this paste this starter code into your new Java class


```java
public class Harry {

	private boolean cloakOn;

	Harry() {
		System.out.println("making Harry Potter...");
	}

	void castSpell(String spell) {
		System.out.println("casting spell: " + spell);
	}

	void makeInvisible(boolean invisible) {
		this.cloakOn = invisible;

		if (cloakOn)
			System.out.println("Harry is invisible");
		else
			System.out.println("Harry is visible");
	}

	void spyOnSnape() {
		System.out.println("Harry sees Professor Snape doing nefarious things.");
	}

	public static void main(String[] args) {
		// 1. make harry potter
		// 2. become invisible
		// 3. spy on professor snape
		// 4. become visible again
		// 5. cast a “stupefy” spell
	}

}
```
 -->
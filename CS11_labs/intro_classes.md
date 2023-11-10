---
layout: default
title: Classes Intro 
parent: CS11
nav_order: 12
# published: false
---

# Java Intro
{: .no_toc }


<details open markdown="block">
  <summary>
    ☑️ Topics
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Setup
{: .task }
Go to moodle and download `Cat Exercise`
Import it into Eclipse


## Creating an object in Java

{: .task }

```java
public class Cat {
	//atributes
	private String name; 
	private int lives = 9;

	//methods
	public Cat(String name) {
		this.name = name;
	}

	public void speak() {
		System.out.println("meow!!");
	}

	// main method
	public static void main(String[] args) {
		Cat myCat = new Cat("Ollie") // creates a new cat object
		myCat.speak() //calls the cat object's method
	}
}
```

## Extension: Brawler Game

{: .task }
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
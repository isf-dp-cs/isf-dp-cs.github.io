---
layout: default
title: Java Intro 
parent: CS11
nav_order: 9
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
## Starter code

{: .task }
Copy this starter code into your new Java class

```java
public class Cat {

	private String name;
	private int lives = 9;

	Cat(String name) {
		this.name = name;
	}

	void meow() {
		System.out.println("meeeeeooooooooooowwwwwwwww!!");
	}

	public void printName() {
		if (name == null)
			System.out.println("i don't know my own name!");
		else
			System.out.println("my name is " + name);
	}

	void kill() {
		lives--;
		if (lives > 0)
			System.out.println("nice try, but I still have " + lives + " lives left");
		else if (lives < 0)
			System.out.println("that's overkill yo!");
		else
			System.out.println("DEAD CAT :(");
	}

	public static void main(String[] args) {
		/* Do the following things without changing the Cat class */

		// 1. Make the Cat meow

		// 2. Get the Cat to print it's name

		// 3. Kill the Cat!

	}
}
```

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
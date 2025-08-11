---
title: "OOP" 
bookFlatSection: false
weight: 2
# bookCollapseSection: true
# draft: true
---

# Object Oriented Programming (OOP)
This lab introduces the concept of OOP in Java.

---

## [0] Setup


### Clone the Repository

#### 💻 select [`Projects`] > [`Get from VCS`] > [`Repository URL`]

{{< figure src="images/courses/java/intellijIDEA/intellij_repo_url.png" width="50%">}}


 
{{< code-action "Paste your URL to clone the lab">}} 

Be sure to change `yourgithubusername` to your actual GitHub username.

```shell
https://github.com/isf-dp-cs/lab_oop_yourgithubusername
```

---

### Switch to Java 21



**💻 Select [`File`] > [`Project Structure`]**

{{< figure src="images/courses/java/choose_JDK_1.png" width="50%">}}

<br> 

**💻 From the `SDK:` dropdown, select `Java 21`**
{{< figure src="images/courses/java/choose_JDK_2.png" width="50%">}}


---

## [1] Killing the Cat

First, take a look at the `Cat` class:

```java
public class Cat {
	//attributes
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
		Cat myCat = new Cat("Ollie"); // creates a new cat object
		myCat.speak(); //calls the cat object's method
	}
}
```

You can see that there are two attributes (`name` and `lives`) and three methods (the `constructor`, `speak` and `main`).   

The `main` method already creates a `Cat` object and gets it to seak

{{< code-action >}} **Add a `method` that lets the cat introduce itself.** It should print a greeting out to the console, including the cat's name.

{{< code-action >}} **Test your new method by calling it in the `main` method.**

You can see that the cat starts out with 9 lives.    
{{< code-action >}} **Add a loop to the `main` method that can kill the cat.**

---

## [2] Superhumans

Here is an overview of the Superhuman class. 
- The `-` symbol means that the `attribute`/`method` is `private` and can be used only inside the class.

- The `+` symbol means the `attribute`/`method` is `public` and can be used outside of this class.
|   <center>**Superhuman**</center>  |
|:------------------------|
  | **--Attributes--** |
| - name: String    |
| - age: int        |
  | **--Methods--** |
| + Superhuman(String name, int age) |
| + getName(): returns a String |
| + setName(String name): returns void |
| + getAge(): returns an int |
| + setAge(int age): returns void |
| + printInfo(): returns void *---this method should print out all the attributes*| 

## Test the Superhuman Class

{{< code-action >}} **In the `main()` method that creates two superhuman objects and prints out their info using the `printInfo` method.**

{{< code-action >}} **Add more steps to `main()` to test out each of the `settter`s. Call `printInfo()` each time, to check that it's working correctly** 


## Add new features

{{< code-action >}} **Add in a new attribute, `alias`. Make sure to add the correstponding setters/getters.** 

{{< code-action >}} **Test your additions in the `main` method.**


---

## [3] Deliverables

{{< deliverables>}}

### Fill in the Google Form 

[✏️ It can be found here](https://docs.google.com/forms/d/e/1FAIpQLSfb4JqAaXplPhLfzFlNHZiSxWLIzs_71yWCLINI0WxC1wmGqw/viewform?usp=sf_link) 

### Push to Github

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}

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
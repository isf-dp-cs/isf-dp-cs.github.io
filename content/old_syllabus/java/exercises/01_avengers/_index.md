---
title: "0. Superhumans"
weight: 10
# draft: true
---

# Superhumans Class

{{< expand "Skills Covered in this Exercise" "click to expand ⬇️" >}}
- OOP
- One-to-many relationships with Objects
- Java LinkedLists
- Random library
- Looping through list of objects
{{< /expand >}}

## [0] Create the Superhuman class based on the specs below


|   <center>**Superhuman**</center>  |
|:------------------------|
  | **--Attributes--** |
| - name: String    |
| - alias: String   |
| - age: int        |
| - powers: LinkedList\<String\> |
  | **--Methods--** |
| + Superhuman(String name, String alias, int age, LinkedList\<String\> powers) |
| + getName(): returns a String |
| + setName(String name): returns void |
| + getAlias(): returns a String |
| + setAlias(String alias): returnsvoid |
| + getAge(): returns an int |
| + setAge(int age): returns void |
| + getPowers(): returns a LinkedList\<String\> |
| + addPower(String power): returns void |
| + removePower(String power): returns void |
| + printInfo(): returns void *---this method should print out all the attributes, including each power*| 

 ## [1] Test your Superhumans Class

  1. Create a  `main()` method that creates an superhuman, `super1` .
  2. Change the attributes of `super1` using your setters
  2. Print the updated information of `super1`
  3. Create a second avenger and print their information using `printInfo()`

----

# Melee Class

## [0] Attributes and Constructor
  Create a class called Melee, using the following specs:

### Attributes
 - villains: Superhuman[20]   //you can rename these as you see fit
 - heroes: Superhuman[20]   
 - villainPoints: int        
 - heroPoints: int   

### Melee() constructor
 
 This constructor takes no parameters. It creates `villains` and `heroes` and populates them with some superhumans (but not all 20). It sets both`villainPoints` and `heroPoints` to zero.

### main() method
Test your class to see if it works!s

## [1] roster() 
 Parameters: none

 Returns: null

 - Prints out the members of each of the teams, nicely formatted.

 *Test this when you finish writing it!*

## [2] fight(Superhuman hero, Superhuman villain) 
 Parameters: two `Superhuman` objects, one hero and one villain

 Returns: null

 - Calculate which superhuman is stronger. They are strongest is the one with the most powers. If they have the same number of powers, the oldest one wins, unless they are older than 60 or younger than 18, in which case they lose.
 - For the loser, remove their last power
 - For the winner, add a point to their team
 - Increase the age of both superhumans by 5
 - Print out who beat who *i.e. Batman beat the Joker! One point for the heroes*

 *Test this when you finish writing it!*

## [3] randomBattle(int rounds) 
Parameters: number of rounds

Returns: null

- For each round, a random player will be randomly selected from each array of superhumans. Be careful - if you select a null object, you must try again until you get a real superhuman.
- Then, have the two superhumans `fight()`

    *Note: random integers can be generated using the `Random` library*
```java
import java.util.Random; //dont forget to import Random at the top of your file
Random random = new Random(); //create a random gerator object
int rand = random.nextInt(20); //generate an int between 0-19
```
- After all the rounds, print out the winner of the battle *i.e. The villains beat the heroes by 2 points*

*Test this when you finish writing it!*

## [4] VipBattle(int rounds) 
Parameters: number of rounds

Returns: null

- In the first round, the top superhuman from each team will `fight()`. 
- In the second round, the second best superhuman from each team will `fight()`. 
- If a team runs out of players before the round is up they lose.
- After all the rounds, print out the winner of the battle *i.e. The villains beat the heroes by 2 points*

*Test this when you finish writing it!*

---
title: Methods
weight: 6
# draft: true
---

# Methods

This page contains information and coding exercises for `methods`.

Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.


### Creating a Method
```java
method double(NUM)
   // this method doubles any number and returns the result
   NEW_NUM = NUM*2
   return NEW_NUM
end method
```

### Running a Method

```java
OUTPUT_NUM = double(10)
```

## Practice Exercises

### Exercise 1: Looping

{{< code-action >}} **Create a method `search()` that checks for a certain number in a list**     
**Parameters:** a list of numbers,  a number to look for     
**Return:** True/False

1. Create a method that loops through a list
2. Receives a list of numbers as a parameter
3. Returns true if the number is in the list
4. Returns false if the number is not in the list 


### Exercise 2: Mad Libs

The goal is to create a Mad Libs game, using `methods`, `arrays`, and `conditionals`. You can build it up step by step.

{{< code-action >}} **Create a method `makeStory()` that turns the story array into one long string**     
Don't worry about the `adjective` and `noun` parts just yet. 
> **input:** the story array      
> **return:** one long string of all the words together

Remember, you can build up a string like this:
```java
NAME = "Alex"

MYSTORY = ""
MYSTORY = MYSTORY + "Hello, "
MYSTORY = MYSTORY + NAME
```

Here are some examples you can use:

```java
ARR = [ "In", "the", "adjective", "of", "the", "blazing", "noun" ]
```
```java
ARR = [ "In", "the", "adjective", "of", "the", "blazing", "noun", ",", "there", "lived", "a", "noun", "named", "Dusty", "Jake",
    "whose", "plural noun", "had", "seen", "more", "sunsets", "than", "most", "plural noun", "see", "in", "a", "lifetime", ".",
    "With", "a", "adjective", "noun", "etched", "by", "the", "adjective", "winds", "of", "the", "plains", ",", "he", "rode",
    "his", "faithful", "animal", ",", "Thunder", ",", "across", "the", "vast", "adjective", "of", "the", "wild", "noun", ",",
    "chasing", "shadows", "of", "adjective", "and", "dreams", "of", "adjective", "gold", ".", "But", "beneath", "his", "adjective",
    "noun", "and", "adjective", "exterior", ",", "there", "beat", "a", "heart", "as", "adjective", "and", "free", "as", "the",
    "very", "noun", "he", "roamed", ",", "a", "noun", "that", "yearned", "for", "adjective", ",", "for", "the", "untamed", "spirit",
    "of", "the", "untamed", "noun", "." ]
```

<br>

{{< code-action >}} **Create a method `getWord()` that asks the user to input a word**     

> **input:** TYPE. *for example, `adjective` or `noun`*       
> **return:** the word that the user types in

<br>

{{< code-action >}} **Now put them together**     

As you loop through each word in the `makeStory()`, if you encounter any of these: `adjective` `noun` `plural noun` `animal`, use the `getWord()` method to replace the word with the user's choice.


**Now you have a working Mad lib!**

### Extensions

{{< code-action >}} **Generate your own stories** 
Using AI (or your brain), generate stories. AI is reasonably good at converting a paragraph into an array. It's less good at identifying parts of speech, but give it a try!

{{< code-action >}} **Repeat words** 
Add a feature to your code where it can "remember" certain words and repeat them throughout the story, such as the main character's name or catch phrase.


<!-- 
### Exercise 2: Improving Sorting

{{< code-action "Create an method called `swap()` that can swap two numbers in an array" >}}     
**Parameters:** position1, position2, array        
**Return:** nothing
 
1. Swap the items at postition1 and postition1
2. Return the updated array

**Now use your `swap`` to improve your sorting**

{{< code-action "Create a method called `bubbleSort`" >}}     
**Parameter:** a list of numbers          
**Return:** a sorted list of numbers    
1. Sorts the list
2. Everytime a swap is required, it should use `swap()` 
 -->

## Deliverables

{{< deliverables >}}
Paste your code in your Exercises lab log

Complete the [Exit Ticket](https://docs.google.com/forms/d/e/1FAIpQLScgcYSCyOc-9A60yAu78deLLUhKunf9wPlE_D1hJHy12Hzq1Q/viewform?usp=sf_link)

{{< /deliverables >}}
---
title: "05. 2D Lists" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# 2D Lists

This lab introduces the data structure, **2 Dimensional Lists**. 

---
## Syllabus Topics [SL]
- **B2.2.2** Construct programs that apply arrays and Lists.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **2D List** |  A two-dimensional list has a grid structure. It's a list which contains multiple other lists, each of which represent one row of the grid. |


--- 

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_2D_lists_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_2D_lists_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] How to Traverse a 2D List

📖 **Traversing a 2D List of size 3x3.** 

```python
list2D =    [[1,2,3],
             [4,5,6],
             [7,8,9]]
```

```python
for row in range(3):
    for col in range(3):
        print(list2D[row][col])
```

📖 **Traversing a 2D List of any size.** 

```python
list2D =    [[10,11,12,13,14],
             [15,16,17,18,19],
             [20,21,22,23,24]]
```

```python
for row in range(len(list2D)):
    for col in range(len(list2D[row])):
        print(list2D[row][col])
```

📖 **Accessing an item in a 2D List** 

```python
list2D =    [[10,11,12,13,14],
             [15,16,17,18,19],
             [20,21,22,23,24]]
```

```python
print(list2D[1][4])
>>> 19
```

```python
print(list2D[0][1])
>>> 11
```

---

# [2] Get Data


## Print Events

💻 **In `get_data.py`, complete the code for `print_events()`.** 

- Prints all the items using clear formatting.
- Parameters: 
    - **events** (2D list of strings):  list of historical events

Here is an example exerpt of the formatted historical events:

```shell
****************************************
 - Abdication Of Tsar Nicholas
 - March
 - 1917
 - Tsar Nicholas II of Russia abdicated his throne, leading to the end of the Romanov dynasty and paving the way for the Bolshevik Revolution.
****************************************
 - Soviet Crush of the Hungarian Revolt
 - November
 - 1956
 - The Soviet Union forcefully suppressed the Hungarian Revolution, a nationwide revolt against the Marxist-Leninist government of the Hungarian People's Republic.
****************************************
 - Concorde Flies For First Time
 - March
 - 1969
 - The Concorde, a supersonic passenger airliner, made its first flight in March 1969. This aircraft, developed jointly by Britain and France, revolutionized air travel with its speed. The Concorde became a symbol of luxury and technological achievement.
****************************************
```
💻 **Run your function. You should use `all_events`, a 2D list imported from `historical_events.py`, as your parameter.** 

---

## Practice Handwriting

{{< write-action >}}

1) **Take out a piece of paper and write out the code to print every item in a 2D list.**

2) Double check your handwritten code against the examples in **Part 1** of this lab page.

3) If you made mistakes, take note of them and fix your handwritten code. 

{{< /write-action >}}

---

## Search by Keyword


💻 **In `get_data.py`, write the function `search_events()`.** 

- Gets all events containing the keyword in the long event description. 
- It should be **case insensitive**.
- Print out a message if no matches are found.
- Parameters: 
    - **events** (2D list of strings):  list of historical events
    - **keyword** (string): search term
- Return:
    - 2D list of strings 

💻 **Run and test your function using the `all_events` at the bottom of the file.** 

Be sure it includes ***all matches***, regardless of the case. A search for "revolution" should gather events with "Revolution" or "revolution" in the description. 
<br><br>

```python
revolution_events = search_events(all_events, "revolution")

print(len(revolution_events))
>>> 4 # should return all 4 events
```
---

## Get Range

💻 **In `get_data.py`, write the function `get_range()`.** 

- Gets all events containing the keyword in the long event description. 
- It should be **case insensitive**.
- Prints out a message if no matches are found.
- Parameters: 
    - **events** (2D list of strings):  list of historical events
    - **keyword** (string): search term
- Return:
    - 2D list of strings

💻 **Run and test your function using the `all_events` at the bottom of the file.** 

---

# [3] History Quiz Game

💻 **In `quiz_game.py`, create a game that will quiz the player on the years of major historical events.** 

Your gameplay should look something like this:

```shell
--Welcome to the Historical Guessing Game--

What year did the Invention of TCP/IP (Birthday of the Internet) happen?
    Your answer: 1970
Thats not correct. It happened in 1983.

In January 1983, the adoption of TCP/IP protocols marked the birth of the modern Internet. This technology laid the foundation for global digital communication and the vast network we know today. The implementation of TCP/IP was a critical step in the development of the Internet.

Score: 0
--------------------

What year did the Launch Of First Nuclear Submarine happen?
    Your answer: 1950
Correct!

The launch of USS Nautilus, the world's first operational nuclear-powered submarine, marked a new era in naval warfare.

Score: 1
--------------------
```

---

## Random Order

The questions should be presented in a random order, without repeats. There are ***many*** different, valid coding approaches to get this done. Depending on your approach, you may use different built-in Python methods. Here are a handful of useful ones:

**Shuffle a list**
```python
from random import shuffle

my_list = [1,2,3,4,5,6,7]
shuffle(my_list) #shuffles the list

print(my_list)
>>> [4,2,6,1,3,7,5]
```

**Get a random integer**
```python
from random import randint
num = randint(3, 9) #inclusive of 3 and 9

print(num)
>>> 8
```

**Remove and return the last item from a list**
```python
my_list = [1,2,3,4,5,6,7]
num = my_list.pop() 

print(num)
>>>7

print(my_list)
>>> [1,2,3,4,5,6,]
```

**Remove and return any item from a list**
```python
my_list = [100,101,102,103,104,105,106]
num = my_list.pop(3) 

print(num)
>>>103

print(my_list)
>>> [100,101,102,104,105,106]
```

## Customize the Game

💻 **Customize the `quiz_game.py` so it focuses on a particular time period or topic.** 

Using `get_range()` and/or `search_events()`, to focus your quiz to a particular time period and/or topic. You can add events to `all_events` if needed. You could even get user input if you want to make it customizable each time it's run!

You will need to import these functions into your file. At the top of your file, add:

```python
from get_data import *
```

---

# [4] Deliverables


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Tracker:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}}

---

# [5] Extensions 

## Practice handwriting

{{< write-action >}}

1) **Take out a piece of paper and write out entire the function for `search_events()`.**

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and fix your handwritten code. 

{{< /write-action >}}

## Hints in Game

💻 **Add hints to the historical guessing game.** 

After their first guess, give the user a hint and let them guess again. 

Hints could include:
- feedback about their guess (too early, too late, 2 years off, etc.)
- telling them the decade
- printing the longer description to give them context


## Specific Range

💻 **Write a new function `get_specific_range()` which allows users to specify which month the range should start and stop.** 

You will need make a plan for how you tell which months are before others.

One helpful list method is `.index()`

```python
my_list = [100,101,102,103,104,105,106]
my_list.index(101)
>>> 1
```

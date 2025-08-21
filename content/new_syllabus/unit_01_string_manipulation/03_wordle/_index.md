---
title: "03. Wordle"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
# draft: true
---

# Wordle 

In this project, you will experience the IB IA structure and develop the code for a game based on the NYT Wordle.

{{< figure src="images/courses/string_manipulation/wordle_icon.png" width="20%">}}

---
### Syllabus Topics [SL]
* **B1.1.4** Trace flowcharts for a range of programming algorithms.
<!-- * **B2.1.2** Construct programs that can extract and manipulate substrings. -->
* **B2.1.3** Describe how programs use common exception handling techniques.
<!-- * **B2.3.2** Construct programs utilizing appropriate selection structures. -->
<!-- * **B2.3.3** Construct programs that utilize looping structures to perform repeated actions. -->

### Syllabus Topics [HL]

* **B4.1.1** Explain the core principles of ADTs
* **B4.1.5**  Construct and apply sets as an ADT

<!-- * **B2.1.2** Construct programs that can extract and manipulate substrings. -->

---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  
```shell
git clone https://github.com/isf-dp-cs/project_wordle_yourGithubUsername
```
> Below you'll see that the `git clone` command has a `yourGithubUsername`. 
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/isf-dp-cs/project_wordle_emmaqbrown`*


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd project_wordle_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [1] Criteria A: Problem Specification

The Problem Specification is where you outline the description of your problem and how the product will address it. 

In this lab we will focus on the Success Criteria. The Success Criteria measuare outcomes of the solution requirement.

{{< checkpoint  >}}

**👀 Open the `Wordle IA` document in your Google Drive and review the Sucess Criteria.**

{{< /checkpoint>}}

---

# [2] Criteria C: System Overview

The System Overview should enable another developer to recreate the product. It should include system models, algorithms, and a testing strategy. 

## Flowchart


👀 **First, let's consider the game logic by looking at the flow chart.**

{{< figure src="images/courses/string_manipulation/wordle_flowchart.png" width="75%">}}


## Psuedocode for the color formatting

You may noticed the logic for the `process guess and format color` does not include details. This is becuase, sometimes psueodocode is better suited for communicating an algorithm. 

{{< checkpoint  >}}

**✏️ In the Criteria C Pseudocode section  `World IA` document, write psueodocde for processing the guess and formatting the color.**

{{< /checkpoint>}}


<!-- {{< expand "Solution" >}}


```python
loop each letter in guess by index
	Set guess_letter to input_word[i]
	Set bg_color to no_bg

	If guess_letter matches secret_word at same position:
		Set bg_color to green_bg

	Else:
		For each letter in secret_word (by index j):
			If guess_letter matches secret_word[j]:
				Set bg_color to yellow_bg

	Append bg_color + guess_letter + no_bg to word_feedback
```
{{< /expand >}} -->


---

# [3] Criteria D: Development

Development is where you actually create the product. You must justify your Success Criteria and demonstrate your ability to pass the tests outlined in the Testing Strategy.

{{< aside "Choose your own adventure" >}} 

💻 **Follow along coding each success criteria.**

It is your goal to complete as many success claims as you can. Test each one before moving onto the next.
{{< /aside >}}

## Success Criteria 1: User Input

**Success Criteria:** The game allows the user to input guess




<!-- {{< expand "Solution" >}}
```python
from list_of_words import five_letter_words

solution_word = five_letter_words[0]

won = False 
while won == False:
	guess = input("Enter a guess: ")

```
{{< /expand >}} -->

## Success Criteria 2: Correct User Guess 

**Sucess Criteria:** The game provides output and the game stops if the user has successfully guessed the word

{{< code-action "Edit the loop so that if the user guesses correctly, it will end early.">}}


<!-- {{< expand "Solution" >}}

```python
from list_of_words import five_letter_words

solution_word = five_letter_words[0]

won = False 
while won == False:
	guess = input("Enter a guess: ")

	if guess == solution_word:
		won = True
		print("You correctly guessed the word!")

```
{{< /expand >}} -->

## Success Criteria 3: Guess Limit

Right now, the user can guess infinitely. However, if they guess correctly, the loop should end early. 

**Succes Criteria:** The game ends if the user guesses 6 times and outputs the correct word 


<!-- {{< expand "Tip" >}}

```python 
attempts = 0

while attempts < 7:
	guess = input("Enter a guess: ")

	attempts = attemps + 1

```
{{< /expand >}} -->

## Success Criteria 4: Random Word

**Success Criteria:** The game randomly selects a word from a list of possible words  


<!-- {{< expand "Tip" >}}
```python
from word_list import words
import random

solution_word = words[random.randint(0,len(words))]
```
{{< /expand >}} -->

## Success Criteria 5: Color Feedback

A big part of `Wordle` is the feedback from the game. After each guess, the user is shown their guess, and each letter is highlighted according to these rules:

- **GRAY backround**: guess letters not included in the word 
- **YELLOW backround**: guess letters in the wrong location
- **GREEN backround**: guess letters in the correct location

{{< code-action "Each time the user guesses a word, print the word in the terminal, formatted with background colors.">}}

Here are some ANSI codes for you to use:
```java
String gray = "\u001b[47;1m";
String yellow = "\u001b[43;1m";
String green = "\u001b[42;1m";
String reset = "\u001b[0m";
```

<!-- {{< expand "Solution" >}}


{{< /expand >}} -->

## Success Criteria 7: Error Handling

**Sucess Criteria:** The game includes error handling  if the user input contains too few or too many letters 


<!-- {{< expand "Tips" >}}
```python
guess = input("Enter a guess: ")

if len(guess) < 3: 
	print("too short")
```
{{< /expand >}} -->

---


**Example Completed Game**

{{< figure src="images/courses/string_manipulation/wordle_example.png" width="40%">}}



{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

✏️ **Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.**

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m \"describe your code here\"   
- git push
- git remote

{{< /deliverables >}}

---

# [4] Criteria E: Evaluation

The evaluatioin of the product must evaluate if the Success Criteria were met and consider future improvements to the product. 


{{< checkpoint  >}}

**✏️ Fill out Criteria E on your document**

{{< /checkpoint>}}



---

# [5] HL: Abstract Data Types (ADTs)


## Sets

Wouldn't it be great if we had a Wordle helper program that could give a list of the possible words every round? 

A `Set` is perfect for this situation. 

💻 **In the file `word_finder.py`, finish the function `get_possible_words()`.**
- inputs: a string of good letters, a string of bad letters, and a list of five letter words
- output: a list of possible words 

**It uses `sys` to access command line arguements to easily run the program from the Terminal.** The first arguement represents good letters (letters in the word) and the second arguement represents bad letters (letters not in the word). Here is how to run the file. 
```shell
$ python word_finder.py rog asefn
['glory', 'gourd', 'groom', 'group', 'grout', 'growl', 'rigor', 'rough']
```

Consider which Set operations to use. Take a look [this resources](https://www.programiz.com/python-programming/set) for how to use a Set in Python.
- `union`  - join two sets
- `intersection` - find common values
- `difference` - only items from first set
- `subset` - if all of items in first set are in second set
- `superset` - if all items of the items in the second set are in the first set


👾 **Test your `word_finder.py` with the real [Wordle](https://www.nytimes.com/games/wordle/index.html)!** *Consider, how you could rank the possible words in best to worst?*

{{< deliverables>}}

{{< code-action "Push your code to GitHub!" >}} 

{{< /deliverables>}}


<!-- ## Dictionaries



Let's use a dictionary to help us find the optiminal starting words in Worlde.  

For ease of sorting, you can use this build in Python function. It will return a list of tuples, in descending order of the values. 
```python
sorted(dictionary.items(), key=lambda x: x[1], reverse = True)
```


💻 **Create a new file `helpers.py` and write the function `create_letter_ranking()`.** You will need to create dictionary with key-value pairs representing frequency of each letter's number of appearances. Then process that dictionary into an easily sortable list of letter. 
- input: list of words
- output: 


💻 **Write a new function `score_words()`**
- inputs: frequency dictionary and list of words five letter words 
- output: a list of the top 10 best words 

Tips
- Use a set to delete words with duplicate letters --> 
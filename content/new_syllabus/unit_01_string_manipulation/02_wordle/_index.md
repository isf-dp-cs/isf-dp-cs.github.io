---
title: "02. Wordle"
bookFlatSection: false
weight: 2
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
* **B1.1.4** Trace flowcharts for a range of programming algorithms.
<!-- * **B2.1.2** Construct programs that can extract and manipulate substrings. -->
* **B2.1.3** Describe how programs use common exception handling techniques.

---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  
```shell
git clone https://github.com/the-isf-academy/lab_wordle_yourGithubUsername
```
> Below you'll see that the `git clone` command has a `yourGithubUsername`. 
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/the-isf-academy/lab_wordle_emmaqbrown`*


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_wordle_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [1] Critiera A: Problem Specification

The Problem Specification is to where you outline the description of. your problem and how the product will address it. 

In this lab we will focus on the Success Criteria. The Success Criteria are measuare outcomes of the solution requirement.

{{< checkpoint  >}}

**👀 Open your `World IA` document and review the Sucess Critiera.**

{{< /checkpoint>}}

---

# [2] Critiera C: System Overview

The System Overview should enable another developer to recreate the product. It should include system models, algothirms, and a testing strategy. 

## Flowchart


👀 **First, let's consider the logic by looking at the flow chart.**

{{< figure src="images/courses/string_manipulation/wordle_flowchart.png" width="75%">}}


## Psueocode for the color formatting

{{< checkpoint  >}}

**✏️ In your `World IA` document and fill out the Critiera C Pseudocode section.**

{{< /checkpoint>}}


{{< expand "Solution" >}}


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
				Break inner loop

	Append bg_color + guess_letter + no_bg to word_feedback
```
{{< /expand >}}


---

# [3] Critiera D: Development

Development is where you actually create the product. You must justify your Success Criteria and demonstrate your ability to pass the tests outlined in the Testing Strategy.

{{< aside "Choose your own adventure" >}} 

💻 **Either follow along with each success crtieria or attempt Worlde on your own.**

It is your responsiblity to complete as many success claims as you can. 
{{< /aside >}}

## Success Claim 1: User Input

Right now, the code picks a random 5-letter word, and allows the user a single guess. Not much of a game!

{{< code-action "Add a loop to the code, so that the user gets 6 guesses.">}} You can reference your code from the other files to write your loop.

{{< code-action "Edit the loop so that if the user guesses correctly, it will end early.">}}


{{< expand "Solution" >}}
```python
from word_list import words

solution_word = words[0]

won = False 
while won == False:
	guess = input("Enter a guess: ")

```
{{< /expand >}}

## Success Claim 2: Correct User Guess 

The game outputs if the user has successfully guessed the word and the game stops. 

{{< expand "Solution" >}}

```python
from word_list import words

solution_word = words[0]

won = False 
while won == False:
	guess = input("Enter a guess: ")

	if guess == solution_word:
		won = True
		print("You correctly guessed the word!")

```
{{< /expand >}}

## Success Claim 3: Guess Limit

Right now, the user can guess infinitely. However, if they guess correctly, the loop should end early. 

**Succes Claim:** The game ends if the user guesses 6 times and outputs the correct word 


{{< expand "Tip" >}}

```python 
attempts = 0

while attempts < 7:
	guess = input("Enter a guess: ")

	attempts = attemps + 1

```
{{< /expand >}}

## Success Claim 4: Random Word

**Success Claim:** The game randomly selects a word from a list of possible words  


{{< expand "Tip" >}}
```python
from word_list import words
import random

solution_word = words[random.randint(0,len(words))]
```
{{< /expand >}}

## Success Claim 5: Color Feedback

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

{{< expand "Solution" >}}


{{< /expand >}}

## Success Claim 7: Error Handling

**Sucess Claim:** The game includes error handling  if the user input contains too few or too many letters 


{{< expand "Tips" >}}
```python
guess = input("Enter a guess: ")

if len(guess) < 3: 
	print("too short")
```
{{< /expand >}}




**Example Completed Game**

{{< figure src="images/courses/string_manipulation/wordle_example.png" width="40%">}}


{{< deliverables>}}

{{< code-action "Push your code to GitHub using the following steps." >}} 


{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message. If you would like teacher feedback, begin your commit message with `#feedback`**


{{< figure src="images/courses/java/git_commit_1.png" width="30%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="30%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="0%">}}



{{< /deliverables>}}

---

# [4] Evaluation

The evaluatioin of the product must evaluate if the Success Criteria were met and consider future improvements to the product. 


{{< checkpoint  >}}

**✏️ Complelted Critiera E on your document**

{{< /checkpoint>}}


---

# [5] HL: ADT Intro



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

# [1] Planning

Now it's time to put all your new skills to good use! You will be coding the game `Wordle` and documenting your planning and your evaluation of your work. 

## Success Claims

| Feature | Description |
| :--- | :--- |
| User input | The game allows the user to input a guess. |
| Color Feedback | The game provides accurate color feedback based on the user's input letter correctness and position (grey for an incorrect letter, yellow for a correct letter in an incorrect placement, green for a correct letter in a correct placement). |
| Guess limit | The game ends if the user guesses 6 times and outputs the correct word. |
| Correct user guess | The game outputs if the user has successfully guessed the word. |
| Random word | The game randomly selects a word from a list of possible words. |
| Error handling for word length | The game includes error handling if the user's input contains too few or too many letters. |

---

# [2] System Overview

## Flowchart


👀 **First, let's consider the logic by looking at the flow chart.**

{{< figure src="images/courses/string_manipulation/wordle_flowchart.png" width="75%">}}


## Psueocode for the color formatting

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

---

# [3] Development

{{< aside "Choose your own adventure" >}} 

Either follow along with each steps or attempt Worlde on your own. 

It is your responsiblity to complete as many success claims as you can. 
{{< /aside >}}

{{< expand "Detailed Steps" >}}


## Looping
Right now, the code picks a random 5-letter word, and allows the user a single guess. Not much of a game!

{{< code-action "Add a loop to the code, so that the user gets 6 guesses.">}} You can reference your code from the other files to write your loop.

{{< code-action "Edit the loop so that if the user guesses correctly, it will end early.">}}


---

## Highlight
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

---

## End the loop early

Right now, the user will be asked for 6 guesses no matter what. However, if they guess correctly, the loop should end early. Here are three examples of `while` loops:

```python 
num = int(input("Enter a number: "))
attemps = 0
won = False

while attemps < 5 and won == False:
	num = int(input("Enter a number: "))

	if num == 5:
		won = True
```
{{< /expand >}}

**Example Completed Game**

{{< figure src="images/courses/string_manipulation/wordle_example.png" width="40%">}}


---

# [4] Deliverables



{{< deliverables>}}

{{< code-action "Push your code to GitHub using the following steps." >}} 

**✋ If you would like teacher feedback, begin your commit message with `#feedback`**

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}


# [5] HL: ADT Intro



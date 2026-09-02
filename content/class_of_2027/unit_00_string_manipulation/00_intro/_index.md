---
title: "00. Python Basics" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Intro
This lab will introduce you to our coding environment and cover some coding basics:
- navigating your terminal
- using github
- running files
- variables
- printing to the terminal
- getting user input
- selection statements (`if`/`else if`/`else`)
- while loops
- working with strings


---
## [0] Navigating your Terminal

| &nbsp; &nbsp; &nbsp; &nbsp; Command &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| What it does                                 |
| --------------       | -------------------------------------------- |
| `ls`                 | List what's in the current directory.        |
| `cd ~`               | Go to your home directory                    |
| `cd folder`       | Go to `folder`                            |
| `cd ..`              | Go up a level in your directory system.                  |
| `code file.py`      | Opens `file.py` with in VS Code   |
| `code .`      | Opens `file.py` with in VS Code   |
| `python file.py`        | Runs the Python program `file.py`               |

In addition, you can use these shortcuts to help you out:

| &nbsp; &nbsp; &nbsp; &nbsp; Key &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| What it does                                 |
| --------------       | -------------------------------------------- |
| `tab`                | Autocomplete        |
| `^`               | Cycle through your previous commands      |

---
## [1] Using GitHub


{{< code-action "Go to your" >}} **`dpcs/unit00_strings` folder using the `cd` command.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

<!-- {{< code-action "Clone your repo. This will copy it onto your computer." >}} 
> *Replace yourgithubusername with your own username*
>
> *e.g. `https://github.com/isf-dp-cs/lab_python_basics_brittegenzlinger`*

```shell
git clone https://github.com/isf-dp-cs/lab_python_basics_yourgithubusername
```


{{< code-action "In the Terminal, use " >}} **`cd` to enter the folder you just cloned.**
```shell
cd lab_python_basics_yourgithubusername
``` -->

{{< code-action "Clone your repo. This will copy it onto your computer." >}} 

```shell
git clone https://github.com/isf-dp-cs/lab_python_basics
```


{{< code-action "In the Terminal, use " >}} **`cd` to enter the folder you just cloned.**
```shell
cd lab_python_basics
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} We will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```


<!-- {{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

{{< code-action "Take a look at the files inside with:" >}} `ls`
- `breathing_animation.py`
- `movement_animation.py`
- `color_animation.py`
- `basic_shapes.py`
- `helpers.py`
- `settings.py`
- `extension_animation.py` -->

---

## [2] Variables

Variables are used to hold a values within the code. The value can change during the execution of a program. 

#### Variable test 0

{{< code-action "First let's run" >}} `variable_test0.py`.   
```shell
python variable_test0.py
```

👀 **You should see the following words print out in the Terminal.**
```shell
Hello
YOUR NAME
```

{{< code-action "Let's see how that is happening by opening the file in Visual Studio Code:" >}} `code variable_test0.py`
> VSCode is the code editor we will be using throughout this course.

```python
# variable_test0.py

name = "YOUR NAME"
print("Hello")
print(name)
```

{{< code-action >}} **Start by replacing** `"YOUR NAME"` **with your name (but keep the `""`).** Now you have *declared* the `name` variable and *assigned* your name as its value.

{{< code-action "Save the file and run the program again." >}} You should see an output similar to the one below:
> *Tip: Use the up arrow to cycle through your previous commands in Terminal*

```shell
$ python variable_test0.py
Hello
Emma
```

What just happened? After storing your name in the `name` variable, `print(name)` prints out whatever is stored in the variable.

Let's do another test.

{{< code-action "Add the following lines of code to your file." >}}

```python
name = "YOUR FRIEND'S NAME"
print("HELLO")
print(name)
```

{{< code-action >}} **Replace** `"YOUR FRIEND'S NAME"` **with your friend's name.**

Now our program is printing the `name` variable twice but we've assigned different values to the
variable at different places in the code. What do you think will happen?

{{< code-action "Run the code to find out!" >}} You should see an output similar to the one below:
```shell
$ python variable_test0.py
Hello
Emma
Hello
Britte

```
---

#### Variable test 1

{{< code-action "Let's continue explore variables by running a different variable test:" >}} `python variable_test1.py`

Hmm, something is wrong here.

{{< code-action "Open up the code and try to fix the bug:" >}} `code variable_test1.py`
> *Be sure to read the error message. Why does it say `'favorite_fruit' is not defined`?*
```python
# variable_test1.py

favorite_color = "color"
print("Your favorite color is " + favorite_color)
print("Your favorite fruit is " + favorite_fruit)
favorite_fruit = "fruit"
```


---

#### Variable test 2
{{< code-action "Now, let's experiment with user input. Run the 3rd variable test:"  >}} `python variable_test2.py`

```python
# variable_test2.py

favorite_artist = input("What is your favorite artist? ")
print("Oh, I love " + favorite_artist + "!")
```

{{< code-action "Run your program multiple times and change up what artist you type." >}}

This shows how your programs can be responsive to user input and how you can store
information from the user in variables that may change every time your program runs.

---

### User Input and Data Types

You might notice that we are using `input()` to get text from the user. A piece of data that stores text is called a `string`.    

However, sometimes you need numerical input from a user. In this case, you need to convert the input from a `string` to an `int` or integer.

```python
age_string = input("How old are you? ")
age_num = int(age_string) #convert to an integer
```

{{< code-action >}} **In `variable_test3.py`, write code to convert a given temperature from celcius to fahrenheit.** *Remember, how do you open a file to edit in Visual Studio Code?*

The forumula for calculating fahrenheit is **(temp x 1.8) + 32**

Here is an example interaction:

```shell
Input a temperature in Celcius:
>>> 28
28 degrees in Celcius is 82.4 degrees in Fahrenheit
```

---

## [3] Selection/Conditional Statements

{{< expand "Explanation: How do if, elif, and else work?" >}}

Using the selections generated by comparison operators, you can selectively execute pieces of your code. This is useful for changing what your code does to respond to different conditions
of the program.

### if statements
`if` **statements are the beginning of every selection code block.** The code written inside the code block that follows only runs if the selection after the `if` evaluates to `True`.

```python
for i in range(20):
    if i < 10:
        print("Smaller than 10")
```

### else statements
`else` **statements** can be paired with `if` statements to create an alternative block of code to **execute if the condition after the `if` evaluates to `False`.**

What is the difference between the following two programs?

```python
# [else: example 1]
for i in range(20):
    if i < 10:
        print("Smaller than 10")
    print("Greater than or equal to 10")
```

```python
# [else: example 2]
for i in range(20):
    if i < 10:
        print("Smaller than 10")
    else:
        print("Greater than or equal to 10")
```

### elif statements
Finally, `elif` **statements** ("else if") can be used to **create multiple branches of a conditional.** These statements add another condition to check if the condition above them does not pass.

The following program creates three branches of execution:

```python
for i in range(20):
    if i < 10:
        print("Smaller than 10")
    elif i < 15:
        print("Greater than 9 but less than 15")
    else:
        print("Greater than or equal to 15")
```

This selection statement creates the following cases for the variable `i`:

- i < 10
- 10 <= i < 15
- 15 <= i
{{< /expand >}}


{{< code-action  >}} **Run the file `selection_example.py` to see this conditional statement in actions.**
```shell
python selection_example.py
```


{{< code-action >}} **Open the code:**
```shell
code selection_example.py
```

{{< code-action "Experiment with changing the numbers in the selection statements." >}} Then run your code to see how your changes affect what it prints.

---

### Conditional Output

{{< code-action "In the file" >}}  **`generation_labeler.py` write code to tell someone what generation they are in.**

{{< code-action >}} **Open the code:**
```shell
code generation_labeler.py
```

You can determine someone's generation using the following formula:

| Generation | Years |
|:-----|:------------------|
| Boomer | 1946–1964 |
| Gen X | 1965-1980   | 
| Millenial   | 1981-1996 | 
| Gen Z    | 1996-2012 | 
| Gen Alpha   | 2013–now | 

Here is an example interaction:
```shell
What year were you born?
>>> 1995
You are a Millenial. I bet you love avocado toast.
```

---

### Nested Conditionals

Indentation is important for python code. Conditional statements that are indented under eachother are calld `nested`. This can be an important tool for handling many branching scenarios. 

{{< code-action "Run the file" >}} 
```shell
python animal_indentifier.py
```

Experiment with the code till you understand how it works.

{{< code-action "Open the code " >}} 

```shell
code animal_indentifier.py
```

{{< code-action "Add in more conditional statements into the code to include:" >}} 

| Type | Criteria | 
|:-----|:------------------|
| Bug | more than 4 legs, up to 8 legs | 
| Human | 2 legs, can't fly |
| Bird | 2 legs, can fly   | 
| Unknown Creature | everything else | 

---

## [4] While Loops

{{< expand "Explanation: How do while loops work?" >}}

**`while` loops use conditions just like `if` statements.** You can use operators to compare
values or to generate `True` or `False` conditions. Looping until a condition is met
can be useful when you are getting input from a user, generating random variables,
or repeatedly changing a value.

```python
user_input = -1
while user_input < 1 or user_input > 10:
    user_input = int(input("Tell me a number between 1-10 (inclusive): "))
```

{{< /expand >}}


---

### Guessing Game

Practice by using a `while` loop to create a number guessing game.

{{< code-action "Start by running the game file:" >}}
```shell
python guessing_game.py
```

```shell
----------------------------
Guess a number between 1-10!
----------------------------

Guess a number: 5
Guess a number: 10
Guess a number: 3
Correct
Guess a number: 8
Guess a number:
```
> It works! But, even after you guess the correct number, the game continues. It's up to you to fix the code!

{{< aside "Stopping a program" >}}
When you want to stop running a program, type `^C` in the terminal.
{{< /aside >}}

{{< code-action "Open the file in Visual Studio Code" >}}
```shell
code guessing_game.py
```

{{< code-action "Fix the game so the loop ends once the user guesses the correct number. It should also tell the user if their guess is too high or too low." >}}


{{< figure img-class="blackBackground" src="images/courses/cs9/unit00/05_while_guessing_game.drawio_black.png" width=60% alt-text="bubble tea flow chart" >}}
{{< figure img-class="transparentBackground" src="images/courses/cs9/unit00/05_while_guessing_game.drawio.png" width=50% alt-text="bubble tea flow chart" >}}


👾 **The final game should like something like this:**
```shell
----------------------------
Guess a number between 1-10!
----------------------------

Guess a number: 5
Too high...
Guess a number: 3
Too high...
Guess a number: 2
Correct
```

---
<!-- 
### Hailstone Sequence

Now that you've gotten practice with `while` loops, **you will be exploring a special sequence known as the
hailstone sequence**.

**This sequence results from the following rules** (known as the Collatz conjecture):
- take any positive number `n`
- find the next term of the sequence using the following rules:
    - if `n` is even, the next term is `n/2`
    - if `n` is odd, the next term is `n*3+1`
- repeat until `n = 1`

The conjecture states that no matter the starting value of `n`, the sequences will always reach 1.

This sequence is interesting because though no number has ever been found that doesn't reach 1,the Collatz conjecture has never been proven. **This is an unsolved problem in mathematics!**

{{< figure src="images/courses/cs9/unit00/05_while_hailstone.drawio.png" width=40% >}}

--- -->

## [5] Indexing into Words

{{< expand "Explanation: How does indexing work?" >}}

You can get a particular character from a string by using square brackets and the corresponding position `string[0]`. For example:


```python
message = "Hello, World!"
```
```shell
message[0]
>>> H

message[1]
>>> e

message[2]
>>> l

```

{{< /expand >}}

### Starts With A

{{< code-action "Start by running the game file:" >}}
```shell
python starts_with_a.py
```

{{< code-action "Fix the game so it only increases the points if the word actually starts with 'a'" >}}

### Looping through a Word

{{< expand "Explanation: Looping through a word" >}}

You can use a loop to access each letter in a word, one at a time. For example:


```python
message = "Hello!"
for i in range(len(message)):
	print(message[i])
```
```shell
>>> H
>>> e
>>> l
>>> l
>>> o
>>> !

```

{{< /expand >}}

---

## [6] For Loops

A for loop enabled you to easily repeat code. 

This loop runs 5 times, repeating everything indented to the right of the `for i in range(5):` line. `i` is a variable that gets incremented by one every time the loop runs. 

```python
for i in range(5):
    print(i)
```

It will output: 
```shell
0
1
2
3
4
```
> *Remember, in Computer Science counting starts at 0*

---

You don't necessarily need to use the `i` variable inside the loop. Depending on the situation, it can be useful. 

```python
for i in range(3):
    print("Hello World!")
```

Will output:

```shell
Hello World!
Hello World!
Hello World!
```


Loops are incredibly useful for increasing the readability and efficency of your code. 
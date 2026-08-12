---
title: "01. String Manipulation"
bookFlatSection: false
weight: 2
# bookCollapseSection: true
draft: true
---

# String Manipulation

In this lab we are going to explore lots of ways to manipulate strings with Python.

---
#### Syllabus Topics [HL & SL]
* **B2.1.2** Construct programs that can extract and manipulate substrings.
* **B2.3.2** Construct programs utilizing appropriate selection structures.
* **B2.3.3** Construct programs that utilize looping structures to perform repeated actions.

#### Key Vocabulary

| Term | Definition |
| :--- | :--- |
| **Variable** | A named storage location in a computer's memory that can hold a value. The value can change during the execution of a program. |
| **Initialize** | The process of giving a variable its very first value when it is created. |
| **Assign** | To give a variable a new value after it has been initialized. |
| **Data Type** | A classification that specifies which type of value a variable can hold, such as a char, string, int, or a boolean (true/false) value. It determines the operations that can be performed on the data. |
| **Char** | A data type. Short for character, it's a single letter, number, symbol, or space. A string is made up of multiple characters. |
| **String** | A data type. A sequence of characters, such as letters, numbers, and symbols, treated as a single piece of text. |
| **Substring** | A continous string of characters within a string |
| **Slicing** | The process of extracting a portion of a string using `[start:stop]`|
| **Concatenation** | Joining strings together using `+`|

---

## [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  
```shell
git clone https://github.com/isf-dp-cs/lab_string_manipulation_yourgithubusername
```

> Below you'll see that the `git clone` command has `yourgithubusername`. 
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/isf-dp-cs/lab_string_manipulation_brittegenzlinger`*


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_string_manipulation_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

## [1] String Methods

### Star Tree 🌲

{{< expand "Concatenate and Multiply Strings" >}}

You can `concatenate` (combine) strings using `+`. 
```python
"tree" + "house"
>>> "treehouse"
```

You can `multiply` strings using `*`:
```python
"why" + "y"*5
>>> "whyyyyyy"
```
{{< /expand >}}

{{< code-action "In">}} **`star_tree.py`, write code that prints out `*` in a tree pattern.** 
   
The height of the tree should be determined by user input. For example:

```shell
How tall is the tree? 
>>> 4

   *
  ***
 *****
*******
```

```shell
How tall is the tree? 
>>> 2

 *
***
```
---

### Abracadabra

{{< expand "Slicing" >}}

You can get a substring using `slicing`. Just like for loops, the `start index` is **inclusive** and the `end index` is **exclusive**.
```python
my_string = "hello world!"

my_string[1:6]
  >>> "ello "
my_string[4:7]
  >>> "o w"
```
If you leave one of the numbers blank, it includes everything.
```python
my_string[1:]
  >>> "ello world!"
my_string[:3]
  >>> "hel"
my_string[:]
  >>> "hello world!"
```
{{< /expand >}}

{{< code-action "In">}} **`abracadabra.py`, write code that prints out a word in a triangle pattern.** The user should input the word. For example:

```shell
Tell me a word and I'll show you a trick: abracadabra
           
          a
         ra
        bra
       abra
      dabra
     adabra
    cadabra
   acadabra
  racadabra
 bracadabra
abracadabra
```
```shell
Tell me a word and I'll show you a trick: Huh?
    
   ?
  h?
 uh?
Huh?
```


---

### camelCase 🐪

{{< expand "upper() and  lower()" >}}

Python has built-in functions to convert strings to upper case or lower case. 
```python
my_string = "Hello World!"

my_string.upper()
  >>> "HELLO WORLD!"
my_string.lower()
  >>> "hello world!"
```
{{< /expand >}}

{{< expand "split()" >}}

`.split()`converts a string into a list of sub-strings. By default, it splits on spaces

```python
my_string = "Wow! Why are camels so fast?"
word_list = my_string.split()
word_list
  >>> ['Wow!', 'Why', 'are', 'camels', 'so', 'fast?']
```

If you give a specific character as a parameter, it will split on that character instead:
```python
poem = "But still; like dust; I’ll rise."
poem_list = poem.split(";")
poem_list
  >>> ['But still', ' like dust', ' I’ll rise.']
```
{{< /expand >}}


When naming your variables, it can be inconvenient that you can't use spaces. To solve this problem, programmers have come up with a few standard naming conventions:

**`snake_case` is commonly used by Python programmers, since it's used in Python's built-in functions:**

```python
# snake_case
number_of_donuts = 34
```

**`camelCase` is commonly used by Java, JavaScript, and TypeScript programmers:**

```python
# snake_case
numberOfDonuts = 34
```

*There are also other less common options, such as **PascalCase** and **kebab-case**.*

{{< code-action "In the file" >}} `snake_to_camel.py`, write code that can convert a snake_case variable into camelCase variable. For example

```shell
Variable name: number_of_donuts
           
numberOfDonuts

```

---

## [2] ANSI Codes
ANSI escape codes are special codes that you can `concatenate` onto strings to change the formatting when you print to the console.

```python
yellow_bg = "\u001b[43;1m" # code for a yellow background
reset_code = "\u001b[0m" # code to set formatting back to normal
print(yellow_bg + "the sun is yellow" + reset)
```

{{< expand "Standard Text Colors" "click to expand ⬇️" >}}
| code         | description        | code           | description               |
|--------------|--------------------|----------------|---------------------------|
| `\u001b[30m` | Black font color   | `\u001b[30;1m` | Bright Black font color   |
| `\u001b[31m` | Red font color     | `\u001b[31;1m` | Bright Red font color     |
| `\u001b[32m` | Green font color   | `\u001b[32;1m` | Bright Green font color   |
| `\u001b[33m` | Yellow font color  | `\u001b[33;1m` | Bright Yellow font color  |
| `\u001b[34m` | Blue font color    | `\u001b[34;1m` | Bright Blue font color    |
| `\u001b[35m` | Magenta font color | `\u001b[35;1m` | Bright Magenta font color |
| `\u001b[36m` | Cyan font color    | `\u001b[36;1m` | Bright Cyan font color    |
| `\u001b[37m` | White font color   | `\u001b[37;1m` | Bright White font color   |
{{< /expand >}}

{{< expand "256 Text Colors" "click to expand ⬇️" >}}

| code                          | description                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| `\u001b[38;5;` + n + `m ` | Standard font color where `n` can be a number between 0-7        |
| `\u001b[38;5;` + n + `m ` | High intensity font color where `n` can be a number between 8-15 |
| `\u001b[38;5;` + n + `m ` | Rainbow font color where `n` can be a number between 16-231      |
| `\u001b[38;5;` + n + `m ` | Gray font color where `n` can be a number between 232-255        |

{{< /expand >}}


{{< expand "Standard Background Colors" "click to expand ⬇️" >}}
| code         | description              | code           | description                     |
|--------------|--------------------------|----------------|---------------------------------|
| `\u001b[40m` | Black background color   | `\u001b[40;1m` | Bright Black background color   |
| `\u001b[41m` | Red background color     | `\u001b[41;1m` | Bright Red background color     |
| `\u001b[42m` | Green background color   | `\u001b[42;1m` | Bright Green background color   |
| `\u001b[43m` | Yellow background color  | `\u001b[43;1m` | Bright Yellow background color  |
| `\u001b[44m` | Blue background color    | `\u001b[44;1m` | Bright Blue background color    |
| `\u001b[45m` | Magenta background color | `\u001b[45;1m` | Bright Magenta background color |
| `\u001b[46m` | Cyan background color    | `\u001b[46;1m` | Bright Cyan background color    |
| `\u001b[47m` | White background color   | `\u001b[47;1m` | Bright White background color   |
{{< /expand >}}


{{< expand "256 Background Colors" "click to expand ⬇️" >}}

| code                          | description                                                            |
| ----------------------------- | ---------------------------------------------------------------------- |
| `\u001b[48;5;` + n + `m ` | Standard background color where `n` can be a number between 0-7        |
| `\u001b[48;5;` + n + `m ` | High intensity background color where `n` can be a number between 8-15 |
| `\u001b[48;5;` + n + `m ` | Rainbow background color where `n` can be a number between 16-231      |
| `\u001b[48;5;` + n + `m ` | Gray background color where `n` can be a number between 232-255        |
{{< /expand >}}

{{< expand "Other Styles" "click to expand ⬇️" >}}
| code        | description      |
| ----------- | ---------------- |
| `\u001b[0m` | Reset all styles |
| `\u001b[1m` | Bold             |
| `\u001b[4m` | Underline        |
| `\u001b[5m` | Blinking         |
| `\u001b[7m` | Reversed         |

{{< /expand >}}

---
### Formatting Text

{{< code-action "Open up">}} **`ansi_test.py` and complete all 4 `TODO:` tasks**

* Add some more color codes
* Add color to the poem
* Give each letter a different color
* Print a grid of every possible background color (0-255)   
  >*Hint: the **256 Background Colors** follow a simple forumula: `\u001b[48;5;` + n + `m `*
  > {{< figure src="images/courses/java/ansi_colors.png" width="12%">}}


---

## [3] Deliverables


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Tracker**  

These are the topics covered in this lab:

* **B2.1.2** Construct programs that can extract and manipulate substrings.
* **B2.3.2** Construct programs utilizing appropriate selection structures.
* **B2.3.3** Construct programs that utilize looping structures to perform repeated actions.

Go to your **CS Syllabus Content Checklist [class of 2028]** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m \"describe your code here\"   
- git push
- git remote

{{< /deliverables >}}


---

## [4] Extension

### Print Vertical

{{< code-action "In">}} **`print_vertical.py`, write code that takes a sentence and prints it vertically.** The user should input the sentence. For example:

```shell
Enter your text: how are you doing today?

haydt
orooo
weuid
   na
   gy
    ?
```

```shell
Enter a string: When I was a youthful lad...

WIwayl
h a oa
e s ud
n   t.
    h.
    f.
    u 
    l 
```




---
title: "01. String Manipulation"
bookFlatSection: false
weight: 2
# bookCollapseSection: true
# draft: true
---

# String Manipulation

In this lab we are going to explore lots of ways to manipulate strings with Python.

---
### Syllabus Topics
* **B2.1.2** Construct programs that can extract and manipulate substrings.
* **B2.1.3** Describe how programs use common exception handling techniques.
* **B2.3.2** Construct programs utilizing appropriate selection structures.
* **B2.3.3** Construct programs that utilize looping structures to perform repeated actions.

### Key Vocabulary

| Term | Definition |
| :--- | :--- |
| **Variable** | A named storage location in a computer's memory that can hold a value. The value can change during the execution of a program. |
| **Initialize** | The process of giving a variable its very first value when it is created. |
| **Assign** | To give a variable a new value after it has been initialized. |
| **Data Type** | A classification that specifies which type of value a variable can hold, such as a char, string, integer, or a boolean (true/false) value. It determines the operations that can be performed on the data. |
| **Char** | Short for character, it's a single letter, number, symbol, or space. A string is made up of multiple characters. |
| **String** | A sequence of characters, such as letters, numbers, and symbols, treated as a single piece of text. |
| **Concatenation** | def. |

---

## [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  
```shell
git clone https://github.com/isf-dp-cs/lab_intro_yourgithubusername
```

> Below you'll see that the `git clone` command has `yourgithubusername`. 
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/isf-dp-cs/lab_intro_brittegenzlinger`*


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_intro_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

{{< code-action "Take a look at the files inside with:" >}} `ls`
- `breathing_animation.py`
- `movement_animation.py`
- `color_animation.py`
- `basic_shapes.py`
- `helpers.py`
- `settings.py`
- `extension_animation.py`

---

## [2] Strings

`Strings` are more complex objects that come with certain features. Here are some examples:

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName); // add Strings together
```

```java
String txt = "Hello! World";
int length = txt.length(); // get the length of a String
```

```java
String first = "java programming";
String second = "java programming";

boolean result1 = first.equals(second); // compare first and second Strings
```

```java
String txt = "Hello World";
char letter = txt.charAt(2); // returns character at index 2
```

### ANSI Codes
ANSI escape codes are special codes that can change the formatting when you print to the console

```java
String yellowBackground = "\u001b[43;1m";
String reset = "\u001b[0m";
System.out.println(yellowBackground + "the sun is yellow" + reset);
```

{{< code-action "Choose at least two additional ANSI codes from the charts below, and use them in your code.">}}


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
| `\u001b[7m` | Reversed         |

{{< /expand >}}

---


The **256 Background Colors** follow a simple forumula: `\u001b[48;5;` + n + `m `

{{< code-action "Edit the loop to give an example of every possible background color.">}} 

{{< figure src="images/courses/java/ansi_colors.png" width="12%">}}


---

## [3] Deliverables


{{< deliverables "For this lab, you should:" >}}

**Once you've successfully completed the sequence be sure to fill out [this Google form](https://docs.google.com/forms/d/e/1FAIpQLScz0x6-s3GRD9P7oZlcqq24XifGDTw9BQ_j8t8TIqqRYw0naw/viewform?usp=sf_link)**.


{{< code-action "Push your work to Github:" >}}
- git status
- git add file_name.py file_name2.py
- git status
- git commit -m "describe your drawing and your process here"
  > be sure to customize this message, do not copy and paste this line
- git push

{{< /deliverables >}}


---

# [4] Extension


{{< code-action "Open the file:" >}} `extension_animation.py` in Atom. It is just an empty file. 


{{< code-action "Code a custom animation of your choosing!" >}} Here is an example of what you could create:

{{< figure src="images/courses/cs9/unit00/extension_animation.gif" width="50%">}}


---
title: "03. Wordle"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
draft: false
---

<style>
    /* Fix equal column widths or target specific columns */
table {
  width: 100%;
  padding: 0px;
}

table tbody tr td{
  padding: 0px;
  margin: 0px;
  height: 0px;
}

img{
  padding: 0px;
  margin: 0px;
}

th:nth-child(1) { width: 20%; padding: 0px;} /* Symbol Name */
th:nth-child(2) { width: 20%; } /* Shape */
th:nth-child(3) { width: 60%; } /* Purpose and Rules */

</style>

# Wordle

In this lab, you will be introduced to computational thinking and develop the code for a game based on the NYT Wordle.

{{< figure src="images/courses/string_manipulation/wordle_icon.png" width="20%">}}

---

### Syllabus Topics [SL]

- **B1.1.1** Construct a problem specification.
- **B1.1.2** Describe the fundamental concepts of computational thinking.
- **B1.1.3** Explain how applying computational thinking to fundamental concepts is used to approach and solve problems in computer science.
- **B1.1.4** Trace flowcharts for a range of programming algorithms.

### Syllabus Topics [HL]

- **B4.1.1** Explain the core principles of ADTs

---

# [0] Set up

{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  

```shell
git clone https://github.com/isf-dp-cs/lab_wordle_yourGithubUsername
```

> Below you'll see that the `git clone` command has a `yourGithubUsername`.
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/isf-dp-cs/lab_wordle_emmaqbrown`*

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

# [1] Problem Specification

The Problem Specification is where you outline the description of your problem and how the product will address it. This includes the:

- problem scenario: description of problem
- success criteria: measurable outcomes of the solution requirement

📖 **Read [this story](https://www.bbc.com/news/articles/c2k3vz48qq7o) to consider the problem specification for Wordle.**

---

# [2] System Overview: Flow Chart

✏️ **Sketch a flowchart for the Wordle gameplay.** Ensure it completes each success criteria and utilizes the correct symbols.

{{< figure src="images/courses/string_manipulation/floarchart_symbols_inthinking.png" width="75%">}}

*Source: Inthinking eBook*


---

# [3] Criteria D: Development

Development is where you actually create the product. You must justify your Success Criteria and demonstrate your ability to pass the tests outlined in the Testing Strategy.

{{< aside >}}

💻 **Construct code to complete each success criteria.**

0. Each time the user plays the game, the solution word is chosen randomly from a list of words
1. User can input their five letter guess and is limited to six attempts
2. When the user has exceeded six guesses, the game will end and output the solution word
3. After the user guesses, their guess will output with color formatting to display if each letter is correct, incorrect, or in the incorrect position.
4. Error handling ensures the user inputs a guess of the correct length and contains only letters

{{< /aside >}}

## Color Feedback

A big part of `Wordle` is the feedback from the game. After each guess, the user is shown their guess, and each letter is highlighted according to these rules:

- **GRAY backround**: incorrect letter not included in the word
- **YELLOW backround**: correct letter in the wrong position
- **GREEN backround**: correct letter in the correct location

Here are some ANSI codes for you to use. They are also in the `worldle.py` file:

```java
String gray = "\u001b[47;1m";
String yellow = "\u001b[43;1m";
String green = "\u001b[42;1m";
String reset = "\u001b[0m";
```

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

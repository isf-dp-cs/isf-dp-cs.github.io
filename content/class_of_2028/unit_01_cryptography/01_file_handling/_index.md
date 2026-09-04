---
title: "1. File Handling"
bookFlatSection: false
weight: 20
# bookCollapseSection: true
# draft: true
---

# File Handling


---
## Syllabus Topics [SL]
* **B2.5.1** Construct code to perform file-processing operations.



## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Path** | Location of a file  |
| **Boolean Operators** | Symbols used for performing arithmetic on the values `True` and `False`. Includes `AND` `OR` `NOT`|
| **Relational Operators** | Symbols used for comparing values. Includes `<`, `<=`, `>`, `>=`, `==`, `!=`. |
| **Modulo** | An operation that returns the remainder of a division. |

---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit01_cryptography` **folder.**

```shell
cd ~/desktop/dpcs/unit01_cryptography/
```


{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_file_handling_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_file_handling_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] File Handling 

In this lab you will learn how to process files.


📖 **To read a whole file**
```python
file = open('example.txt', 'r')
file.read()
file.close()
```
- `open()` - opens a file in a specific mode, if the file does not exisit it creates a new file
- `'example.txt'` is the name of the file you want to open or create 
- `'r'` represents the mode. important modes to remember are:
    - `'r'` - read the text
    - `'w'` - write over existing text 
    - `'a'` - append text to the end of the file
- `read()` - returns all text in the file
- `close()` - closes the file

📖 **To read a single line**
```python
file = open('example.txt', 'r')
file.readline()
file.close()
```


📖 **To read a file line-by-line**
```python
file = open('example.txt', 'r')
for line in file:
    print(line)
file.close()
```



📖 **To append to the end of an existing file**
```python
file = open('log.txt', 'a')
file.write('A new entry. \n')
file.close()
```

📖 **To write to a new file.** If the file exists, it will overwrite it. 
```python
file = open('new_document.txt', 'w')
file.write('Hello world')
file.close()
```

📖 **To write read a file with a `while` loop.** You can use `file.readline()` to skip lines. 
```python
file = open("file_path.txt", "r")

line = file.readline() # read the first line
while line != "": # check that we're not at the end of the file
    print(line)
    line = file.readline() # read the next line

file.close()
```

📖 **Use `strip()` remove extra spaces or new line characters `\n`** 

```python
line = "Hello World!   \n"
cleaned_line = line.strip()     # cleaned_line = "Hello  World!"
```




---

# [2] Exercises

## MTR Lines

💻 **Open `mtr.py` and construct code to perform the following actions.** 

0) Add the `"Airport Express Line"` to the end of `mtr_lines.txt`. It should appear on the next line.
0) Create a new file `mtr_lines_upper.txt` with each line in all uppercase letters.
    - you can use `.upper()`

---


## Check the inventory

The file `inventory.txt` stores which items are for sale at a technology store. However, there is extra detail included, and some items are out of stock, and shouldn't be shown to customers.

💻 **In `inventory.py`, construct code to find the in-stock items and writes the item and price to a new file `inventory_instock.txt`**

`inventory_instock.txt` should look something like this
```shell
Laptop - $1200.00
Mouse - $25.00
...
```

---


## Book Count

💻 **In `book.py` construct functions to analyze any given book.** The provided book in `book.txt` is Pride and Prejudice by Jane Austen and is provided by [Project Gutenberg](https://www.gutenberg.org/).
- `find_word_count(file, phrase)`
- `num_characters(file)`
- `num_words(file)` 

✅ **Check each function!** Try the names "Elizabeth" or "Darcy". The names of the main character. 

---



## Words

In `words.py` let's learn a bit about the words in the English dictionary. The words_alpha.txt file has been sourced from [this repo](https://github.com/dwyl/english-words/blob/master/words_alpha.txt).

💻  **Construct the function `num_words_of_length(word_length)`. Then, print out the number of words for word length 1-20.**

It should look something like
```shell
0
26
427
2130
7186
15921
29874
41998
51627
53402
45872
37539
29124
20944
14149
8846
5182
2967
1471
760
```


--- 

# [3] Deliverables

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

# [4] Extensions

In `book.py` write the following functions:
- `get_top_used_words(file, num)` - returns a list of the top used words
- `get_word_length_distribution(file)` - returns a dictionary where the keys are the word length and the values are the occurrences


## Camping Trip

On an ELP camping trip, each student has brought snacks with them. The students take turns writing down the number of calories contained by the various snacks that they've brought with them, one item per line. Each student separates their own inventory from the previous student's inventory (if any) by a blank line.

For example, suppose the students finish writing their items' calories and end up with the following list:

```shell
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
```

In case the students get hungry and need extra snacks, they need to know which student to ask: they'd like to know how many calories are being carried by the student carrying the most calories. In the example above, this is 24000 (carried by the fourth student).

The food log is stored in `food.txt`.      

💻 **In `food.py`, write a function finds the student carrying the most calories and returns how many total calories that student carrying.**
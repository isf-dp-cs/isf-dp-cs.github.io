---
title: "2. File Handling"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
# draft: true
---

# File Handling


---
## Syllabus Topics [SL]
* **B2.5.1** Construct code to perform file-processing operations.
* **B2.1.3** Describe how programs use common exception handling techniques.

<!-- ### Syllabus Topics [HL]

* **B4.1.1** Explain the core principles of ADTs
* **B4.1.5**  Construct and apply sets as an ADT -->

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Exception** | Less severe problem that occurs at runtime and can be managed using exception handling (e.g., invalid input, missing files) |
| **ValueError** | An exception that occurs when a function receives an argument of the correct type but with an invalid value (e.g., converting "abc" to an integer). |
| **ZeroDivisionError** | An exception that occurs when you attempt to divide a number by zero.|
| **NameError** | An exception that occurs when you use a variable or function name that has not been defined |
| **FileNotFoundError** | An exception that occurs when a file or directory is requested but cannot be found  |
| **Boolean Operators** | Symbols used for performing arithmetic on the values `True` and `False`. Includes `AND` `OR` `NOT`|
| **Relational Operators** | Symbols used for comparing values. Includes `<`, `<=`, `>`, `>=`, `==`, `!=`. |

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

# [1] Helpful Examples 

## Read File with While

```python
file = open("file_path.txt", "r")

line = file.readline() # read the first line
while line != "": # check that we're not at the end of the file
    print(line)
    line = file.readline() # read the next line

file.close()
```

Sometimes you might want to skip some lines. If this is your file:
```shell
Hi, this is Anna. Would you send your notes from today? I was sick.
Date: 12/9/2025
Sent: 21:10
Sure, just give me a sec to find them.
Date: 12/9/2025
Sent: 21:55
Youre the best!!! 🙏🙏🙏
Date: 12/9/2025
Sent: 22:38
```

You might want to only print every third line:
```python
line = file.readline() # read the first line
while line != "": # check that we're not at the end of the file
    print(line)
    line = file.readline() # read date line
    line = file.readline() # read sent line   
    line = file.readline() # read message line
```

---

## Boolean Operators

Boolean Operators are `AND`, `OR`, and `NOT`. You can use these in any condition. 

#### AND
The statement returns `True` if **both** conditions are `True`
```python
# the student will only study for hl tests
has_test = True
is_hl = True
if has_test and is_hl:
    print("study for test") 

>> True
```

#### OR
The statement returns `True` if **either** condition is `True`

```python
# the student will stay home if they have a fever or if they are sneezing
has_fever = True
sneezing = False

if has_fever or sneezing:
    print("stay home from school -- too sick")

>> True
```

#### NOT 
Reverses the value of the boolean. Works similarly to `!`.
```python
while not line == "":
    line = file2.readline()
```

---

## Strip()

The string function `strip()` removes any extra spaces or newline characters `\n` from the end of a line of text.

```python
line = "Hello World!   \n"
cleaned_line = line.strip()
```

`cleaned_line` is now `"Hello World!"`

---

## Casting

To convert a string to an int, use the `int()` function:
```python
text = "392"
number = int(text) ## cast a string to an integer
```

---

# [2] File I/O Exercises

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

💻 **In `who_has_food.py`, write a function finds the student carrying the most calories and prints out how many total calories that student carrying.**
- Parameter: filepath to the food log
- Add exception handling to your code to handle incorrect file paths and incorrectly formatted files.
- Test your function thoroughly to be sure the exception handling is working

---

## Merge Poem

A beautiful poem has sadly been broken into two incomplete files. The lines from the two incomplete files should be interleaved into the output file (e.g., first line from poem_pt_1, first line from poem_pt_2, second line from poem_pt_1, etc.)    

💻 **In `merge_poem.py`, write a function that merges the text fron `poem_pt_1.txt` and `poem_pt_2.txt` into a single poem, and writes the whole poem to a new file, `wholepoem.txt`.**

---

## Check the inventory

The file `inventory.txt` stores which items are for sale at a technology store. However, there is extra detail included, and some items are out of stock, and shouldn't be shown to customers.

💻 **In `show_inventory.py`, write a function that takes in a file path and prints out only the in-stock items in the following format:**

```shell
Laptop - $1200.00
Mouse - $25.00
...
```

- Parameter: filepath to the inventory
- Add exception handling to your code to handle incorrect file paths and incorrectly formatted files.
- Test your function thoroughly to be sure the exception handling is working

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



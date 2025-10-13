---
title: "00. Lists" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Lists

This lab introduces lists, a common data structure. 

---
## Syllabus Topics [SL]
- **B2.2.2** Construct programs that apply arrays and Lists.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **List** | A data structure that stores elements that are accessible by an index. |
| **Index** | An integer that represents the position in a data structure |
| **Append** | To add an item to the end of a list |

--- 

## What is a list? 

📖 **Here are helpful list operations**

```python
# create an empty list
num_list = []

# create a list with items
dessert_list = ["ice cream", "brownies", "mochi", "timtams"]

# access item in list by index
dessert_list[0]     # returns "ice cream"

# count number of items in list
len(dessert_list)   # returns 4

# add item to end of list
dessert_list.append("cookies")  # ["ice cream", "brownies", "mochi", "timtams", "cookies"]

# remove item from list
dessert_list.remove("brownies")  # ["ice cream", "mochi", "timtams", "cookies"]

# insert item at specific index of list
dessert_list.insert("cookies", 2) # ["ice cream", "mochi", "cookies", "mochi", "timtams"]

# loop through a list
for item in dessert_list:
    print(item)

# loop through a list
for i in range(len(dessert_list)):
    print(dessert_list[i])
```

---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit02_data_structures
cd unit02_data_structures
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_lists_yourGithubUsername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_lists_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] List Transformations: Numbers

💻 **In `number_transformations.py` write 4 functions that take a list of numbers a parameter.** Each function will preform a different transformation on the list.
- `total_sum(num_list)`
- `minimum(num_list)`
- `maximum(num_list)`
- `biggest_difference(num_list)`


💻 **For each function, write 2 tests using `assert` at the bottom of the file.**

```python
assert total_sum([2,4,6]) == 2
```
> - `total_sum([2,4,6])` is the function call with a specific parameter as a test case
> - `== 2` is what the function should return 
> - an error will print to the Terminal if the `assert` condition does not pass

✅ **Check your functions with a peer**


---


# [2] List Transformations: Words


💻 **In `word_transformations.py` write 1 function to properply format the `txt` file and 4 functions that take a list of words a parameter.** Each function will preform a different transformation on the list.
- `get_word_list(file)`
- `get_words_of_length(word_list, length)`
- `get_words_including(word_list, including_string)`
- `get_words_starting(word_list, starting_string)`
- `get_words_ending(word_list, ending_string)`

💻 **Use the functions to answer the questions at the bottom of the file.** Each question applies to the `words_100k.txt` file.

✅ **Check your answers with a peer**

---


# [3] Deliverables


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

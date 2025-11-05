---
title: "03. Binary Search" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Binary Search

This lab introduces an alternate technique for searching for an item in a list, **binary search**. 

---
## Syllabus Topics [SL]
- **B2.4.2** Construct and trace algorithms to implement a linear search and a **binary search** for data retrieval.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Binary Search** |  To find an item in a sorted List by repeatedly dividing it into halves to find a target value  |

--- 

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_binary_search_yourGithubUsername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_binary_search__yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Binary Search

<iframe width="560" height="315" src="https://www.youtube.com/embed/KXJSjte_OAI?si=p1IsgnWKquUNV5pT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

📖 **Here are the key steps the algorithm.** 

```md
start at the middle of the list
    if the current element is the target value, return element

    if the target value is less than the current element, discard the right right of the list

    if the target value is greater than the current element, discard the left right of the list
repeat until target element is found
```

## Code Binary Search


💻 **In `search.py`, write the function `binary_search()`.** 

💻 **In `binary_search()`, include a counter variable for each step it takes to find the target value.** Output it like so:

```python
Binary 17/370105
```

💻 **Run your function using the test data at the bottom of the file.** 

{{< write-action >}}

1) **Take out a piece of paper and write out entire the function for `binary_search()` without looking at your solution.**

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and fix your handwritten code. 

4) Hand your written code it in to a teacher

{{< /write-action >}}

---

# [2] Linear Search

📖 **Here are the key steps the algorithm.** 

```md
iterate, starting at the beginning of the list
    if the current element is the target value, return index
    repeat until target element is found
```

## Code Linear Search


💻 **In `search.py`, write the function `linear_search()`.** 

💻 **In `linear_search()`, include a counter variable for each step it takes to find the target value.** Output it like so:

```python
Linear 263041/370105
```

💻 **Run your function using the test data at the bottom of the file.** 

---

# [3] Runtime tests 

💻 **In `runtime_test.py`, write construct code to run 10 tests using the word_list and output the average times for binary search and linear search.** For each test, it should search for a random word from `word_list`.  

The final output should look something like this:
```shell
Running Tests: 100%|███████████████████████████| 10/10 [00:00<00:00, 216.08it/s]
average time elapsed binary: 0.00000575 seconds
average time elapsed linear: 0.00461342 seconds
```

💻 **You can create a progress bar to follow which test it is on using the [`tqdm` library](https://github.com/tqdm/tqdm).**

```python
for i in tqdm(range(10), desc="Running Tests"):    
```

💻 **Be sure to run the test multiple times. Then, try increasing the number of tests. What do you notice about the average times and step ratio?**


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

# [4] Extension 

## SL: Practice handwriting

✏️ **Brainstorm potential test questions for this syllabus topic using these command terms:** state, define, identify, explain, construct

```md
B2.4.2 - Construct and trace algorithms to implement a linear search and a binary search for data retrieval.
```

✏️  **Answer your potential test questions & check with a peer/teacher.**



## HL: Binary Search Recursive

💻 **In `search.py`, write the function `binary_search_recursive()`.** 

💻 **In `runtime_test.py`, add in a test for `binary_search_recursive()`** 

💻  **Push your work to Github.**
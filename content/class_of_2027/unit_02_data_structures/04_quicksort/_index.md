---
title: "04. Quicksort (HL)" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Quicksort

This lab introduces the recursive sorting algorithm: **Quicksort**.

---
## Syllabus Topics [HL]
- **B2.4.4** Explain the fundamental concept of recursion and its applications in programming. (HL only)

<!-- ## Key Vocabulary -->
<!-- 
| Word | Definition |
| :--- | :--- |
| **Sorting** | to arrange the elements in a list into ascending or descending order |
| **Bubble Sort** | a sorting algorithm that sorts by swapping the adjacent elements if they are not in the correct order  |
| **Selection Sort** | a sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion and swaps it with the first unsorted element |
| **Big O Notation** | used to describe the scaleability of an algorithm, based on an input of size n |
| **Time Complexity** | how long an algorithm will take to run. it is estimated by counting how many operations an algorithm will have to perform, given a input of size n |
| **Space Complexity** | how much memory space it takes to run an algorithm, given an input of size n |

---  -->



# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_quicksort_yourGithubUsername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_quicksort_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Quicksort Algorithm


## What is Quicksort?

<iframe width="315" height="560"
src="https://www.youtube.com/embed/j0Dp9H5ogno?si=7eq926NdDRJaQyQk". 
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>

The idea of quicksort is simple enough. But how do we code it?
<br><br>
We're going to explore **3** different ways to code quicksort, each with their own pros and cons.
<br><br>
*Exam note:*
*Based on the syllabus, you need to be able to do things like recognize quicksort, compare it to other sorting algorithms, discuss its efficiency, etc., but probably will not be expected to code or trace it.*

---

## Extra Lists Method

**This method is probably the easiest one to understand. We're going to create two new lists:**
- one list for items smaller than our pivot
- one list for items bigger than our pivot

To keep the code as short as possible, the example uses `list comprehension`. This is a python trick to make coding easier. It's not necessary, but it is convenient.

Let's say we have a list of fruits, and we want a new list with only fruits containing `"a"`.
```python
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
```
List comprehension shortens this code:

```python
newlist = []
for x in fruits:
  if "a" in x:
    newlist.append(x)
```

into this one line:
```python
newlist = [x for x in fruits if "a" in x]
```

💻 **In `list_comprehension_quicksort.py`, add comments to annotate the quicksort code`.** 

---

## Lomuto Method


<iframe width="560" height="315" src="https://www.youtube.com/embed/Vtckgz38QHs?si=00OOE79YgDiLHpPh&amp;start=14&amp;end=468;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

💻 **In `lomuto_quicksort.py`, add comments to annotate the quicksort code`.** 

---

## Hoare Method


<iframe width="560" height="315" src="https://www.youtube.com/embed/h_9kAXFKJwY?si=PxyQcOJWbXv52Isn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

💻 **In `hoare_quicksort.py`, add comments to annotate the quicksort code.** 


---

# [2] Considering Efficiency

Consider the following questions:

- How do these approaches compare when it comes to **space complexity?**
- How do these approaches compare when it comes to **number of swaps?**
- Is quicksort more efficient on a **randomly-ordered list** or a **partially-sorted list?**
- What is the **Big O time efficiency** of quicksort? 

<!-- 


# [4] Deliverables


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Tracker:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}} -->


---
title: "02. Sorting" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Sorting

This lab introduces two sorting algorithms: **Bubble Sort** and **Selection Sort**.

---
## Syllabus Topics [SL]
- **B2.4.3** Construct and trace algorithms to implement bubble sort and selection sort, evaluating their time and space complexities.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Sorting** | to arrange the elements in a list into ascending or descending order |
| **Bubble Sort** | a sorting algorithm that sorts by swapping the adjacent elements if they are not in the correct order  |
| **Selection Sort** | a sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion and swaps it with the first unsorted element |
| **Big O Notation** | used to describe the scaleability of an algorithm, based on an input of size n |
| **Time Complexity** | how long an algorithm will take to run. it is estimated by counting how many operations an algorithm will have to perform, given a input of size n |
| **Space Complexity** | how much memory space it takes to run an algorithm, given an input of size n |

--- 



# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_sorting_yourGithubUsername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_sorting_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Bubble Sort


## What is Bubble Sort?

<iframe width="560" height="315" src="https://www.youtube.com/embed/WaNLJf8xzC4?si=8F15tbbbs5es7mhS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


📖 **Here are the key steps the algorithm.** 

```md
start at the beginning of the list
for each element in the list 
    compare the current element with the next element
    if the two values are not in order, 
        swap the elements
repeat until all elements have been sorted 
```

## Code Bubble Sort


💻 **In `bubble_sort.py`, write the function `bubble_sort()`.** 


💻 **Run your function using the test data at the bottom of the file.** 

{{< write-action >}}

1) **Take out a piece of paper and write out entire the function for `bubble_sort()` without looking at your solution.**

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and fix your handwritten code. 

4) Hand your written code it in to a teacher

{{< /write-action >}}

---

# [2] Selection Sort

## What is Selection Sort?


<iframe width="560" height="315" src="https://www.youtube.com/embed/EwjnF7rFLns?si=5qLPtmd1KzgMc-E1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



📖 **Here are the key steps the algorithm.** 

```md
at the start, the whole list is unsorted, so the **unsorted part** of the list starts at index 0
    loop through the **unsorted part** to find the smallest item 
    swap that smallest item with the first item in the **unsorted part**
update the start location of the **unsorted part** of the list
repeat until all elements have been sorted 
```

## Code Selection Sort

💻 **In `selection_sort.py`, write the function `selection_sort()`.** 


💻 **Run your function using the test data at the bottom of the file.** 

{{< write-action >}}

1) **Take out a piece of paper and write out entire the function for `selection_sort()` without looking at your solution.**

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and fix your handwritten code. 

4) Hand your written code it in to a teacher

{{< /write-action >}}


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

---



# [4] Extension: Optimizing Bubble Sort

Bubble sort already an inefficient algorithm, but your code is probably wasting even more time than it needs to. 

Before you start optimizing, you want to be able to measure your progress as you improve your code.

{{< code-action "Edit">}} **your `bubble_sort()` to count how many times it has to compare the value of numbers (in the if-statement), and print this number out after it finishes.**

{{< code-action >}} **Put your edits to Github to track your progress.**


## Already sorted elements

[Check out this site](https://mathcs.pugetsound.edu/~aasmith/cs261/sorting-notes/bubble.html) with visualizations of bubble sort

Take a look at the first two "Unoptimized" visualizations. The red signifies numbers that are being compared. Even this "Unoptimized" algorithm is probably more efficient than your code. **It doesn't compare all the items every time.** Which items does it ignore? Why?

{{< code-action >}} **In `bubble_sort.py` write a new function `efficient_bubble_sort()` which ignores already-sorted elements like the "Unoptimized" visualization**

{{< code-action "Run" >}} **`efficient_bubble_sort()` and `bubble_sort()` and notice the difference in how many comparisons each algorithm makes**

{{< code-action >}} **Put your edits to Github to track your progress.**

##  Retire the non-swaps


[Now look at the first optimization](https://mathcs.pugetsound.edu/~aasmith/cs261/sorting-notes/bubble.html) 

Study up, and see if you can tell what it's doing. The semisorted visualization may help you understand. 

This optimization tracks when it has to swap/doesn't swap, and if there are k non-swaps at the end, (k+1) elements can be retired (they don't need to be compared any more).


{{< code-action >}} **In `bubble_sort.py` write a new function `optimized_bubble_sort()` which ignores ALL already-sorted elements.**

**Make sure to test it out thoroughly to make sure it's working. Use semi-sorted lists to showcase the changes you made.**


{{< code-action "Run">}} **`optimized_bubble_sort()`, `efficient_bubble_sort()`, and `bubble_sort()` using the same **semi-sorted** starting list.**
 Notice the difference in how many comparisons each algorithm makes

{{< code-action >}} **Put your edits to Github to track your progress.**


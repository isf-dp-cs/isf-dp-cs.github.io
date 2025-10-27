---
title: "02. Sorting" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
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
| **Big O Notation** | the longest time or space required to run an algorithm |
| **Time Complexity** | how long an algorithm will run or how many steps an algorithm will take to run |
| **Space Complexity** | how much memory space it takes to run an algorithm |

--- 

## What is Bubble Sort?

📖 **Here are the key steps the algorithm.** 

```md
start at the beginning of the list
for each element in the list 
compare the current element with the next element
if the two values are not in order, swap the elements
    move to the next element 
repeat until all elements have been sorted 
```

--- 

## What is Selection Sort?

📖 **Here are the key steps the algorithm.** 

```md
start at the beginning of the list
for each element in the list 
compare the current element with the next element
if the two values are not in order, swap the elements
    move to the next element 
repeat until all elements have been sorted 
```


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


💻 **In `bubble_sort.py`, write the function `bubble_sort()`.** 


💻 **Use the functions to with the test data at the bottom of the file.** 



---

# [1] Selection Sort


💻 **In `bubble_sort.py`, write the function `bubble_sort()`.** 


💻 **Use the functions to with the test data at the bottom of the file.** 



---

# [2] Deliverables


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

---
title: "05. Quicksort (HL)" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Quicksort

This lab introduces the recursive sorting algorithm: **Quicksort**.

## Syllabus Topics [HL]
- **B2.4.4** Explain the fundamental concept of recursion and its applications in programming. (HL only)
  - *Recursive algorithms, including but not limited to quicksort*


{{< aside "Exam Note" >}}

You should be able ot do things like recognize quicksort, describe how it uses recursion, compare it to other sorting algorithms, discuss it Big O time and space complexity. You will not be expected to code or trace it.


Ensure you understand the answers to these questions:
- How does sorting a sorted v unsorted list affect Big O time and space efficiency?
- Is quicksort more efficient on a randomly-ordered list or a partially-sorted list?
{{< /aside >}}


---

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

# [1] What is Quicksort?


## Python Lists Method

<iframe width="560" height="315" src="https://www.youtube.com/embed/XE4VP_8Y0BU?si=gUBOE3VIV8cjQkfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


**This method is probably the easiest one to understand. We're going to create two new lists:**
- one list for items smaller than our pivot
- one list for items bigger than our pivot
- then, recursively call the function on the each section of the list


💻 **In `pylists_quicksort.py` implement quick sort.** You may check your answer with the solution.

{{< expand "Solution" >}}

```python
def pylists_quicksort(alist):
    if len(alist) <= 1:
        return alist

    pivot = alist[0]

    left = []
    for x in alist[1:]:
        if x < pivot:
            left.append(x)

    right = []
    for x in alist[1:]:
        if x > pivot:
            right.append(x)

    return pylists_quicksort(left) + [pivot] + pylists_quicksort(right)
```

{{< /expand >}}

---

## Lomuto Method

The Lomuto Method uses in-place swapping and chooses the last item as the pivot.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vtckgz38QHs?si=00OOE79YgDiLHpPh&amp;start=14&amp;end=468;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

💻 **In `lomuto_quicksort.py`, add comments to annotate the quicksort code`.** 

---

## Hoare Method

The Hoare Method uses in-place swapping and chooses the first item as the pivot.


<iframe width="560" height="315" src="https://www.youtube.com/embed/h_9kAXFKJwY?si=PxyQcOJWbXv52Isn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

💻 **In `hoare_quicksort.py`, add comments to annotate the quicksort code.** 


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


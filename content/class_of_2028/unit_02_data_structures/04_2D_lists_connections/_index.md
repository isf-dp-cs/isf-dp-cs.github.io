---
title: "05b. 2D Lists Connections" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# 2D Lists: Connections

This lab utilizes 2-dimensions lists to create the New York Times game, Connections.

---
## Syllabus Topics [SL]
- **B2.2.2** Construct programs that apply arrays and Lists.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **2D List** |  A two-dimensional list has a grid structure. It's a list which contains multiple other lists, each of which represent one row of the grid. |


--- 

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_2D_lists_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_2D_lists_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] How to Traverse a 2D List

📖 **Traversing a 2D List of size 3x3.** 

```python
list2D =    [[1,2,3],
             [4,5,6],
             [7,8,9]]
```

```python
for row in range(3):
    for col in range(3):
        print(list2D[row][col])
```

📖 **Traversing a 2D List of any size.** 

```python
list2D =    [[10,11,12,13,14],
             [15,16,17,18,19],
             [20,21,22,23,24]]
```

```python
for row in range(len(list2D)):
    for col in range(len(list2D[row])):
        print(list2D[row][col])
```

📖 **Accessing an item in a 2D List** 

```python
list2D =    [[10,11,12,13,14],
             [15,16,17,18,19],
             [20,21,22,23,24]]
```

```python
print(list2D[1][4])
>>> 19
```

```python
print(list2D[0][1])
>>> 11
```

---

# [1] System Overview: Flowchart

✏️ **Look at the flowchart for the Wordle gameplay.** Ensure it completes each success criteria and utilizes the correct symbols.


*Source: Inthinking eBook*


apple	pen	glass	ram
cpu	orange	mug	marker
gui	highlighter	cup	pear
kiwi	ssd	pencil	bottle
-------

Enter guess, separate items with a space: apple kiwi pear orange
Found the category: fruits
-------
apple	pen	glass	ram
cpu	orange	mug	marker
gui	highlighter	cup	pear
kiwi	ssd	pencil	bottle
-------
Enter guess, separate items with a space: pen gui mark cup
Category not found...

~~This text will be crossed out.~~


---

# [3] Criteria D: Development

Development is where you actually create the product. You must justify your Success Criteria and demonstrate your ability to pass the tests outlined in the Testing Strategy.

{{< aside >}}

💻 **Construct code to complete each success criteria.**

0. The words from each category are scrambled and displayed as a 4x4 grid 
0. The user inputs their guess of four words for a given category and can guess until they find all four categories
0. After the user guesses, the game notifies them if they found a category then crosses out the words 

{{< /aside >}}


**Example Completed Game**

{{< figure src="images/courses/connections_gameplay.png" width="75%">}}

---

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
---
title: "3. Recursive Drawing"
bookFlatSection: false
weight: 50
# bookCollapseSection: true
# draft: true
---

# Recursive Drawing 

In this lab you will apply the concept of recursion to drawings! You will not be expected to this on a test. It's just a fun way to engage with recursion.

A fractal is a geometric pattern which is self-similar in some way. These patterns often look similar at different scales, no matter how much you zoom in or out. Fractals can be found throughout nature (snowflakes, ferns, riverbeds, circulatory systems, etc.) One popular example of fractal geometry is the Sierpinsky Triangle


{{< figure src="images/courses/new/recursion_sierpinsky_triangle.png" width="30%">}}

---
## Syllabus Topics [HL]
* **B2.4.4**  Explain the fundamental concept of recursion and its applications in programming. (HL only).
* **B2.4.5**  Construct and trace recursive algorithms in a programming language. (HL only)


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Recursive Function** | A function that calls on itself. |
| **Recursive Case** | The step where the function calls itself with a smaller subproblem. The recursive case must eventually lead to the base case to ensure the recursion terminates. |
| **Base Case** | The condition that stops the recursion. Without a base case, the recursion would continue infinitely, leading to a stack overflow error.|
| **Stack Overflow** |  Each recursive call adds a new frame to the call stack. Excessive recursion can exhaust the stack memory, leading to stack overflow errors and crashing the program.  |
---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit01_cryptography` **folder.**

```shell
cd ~/desktop/dpcs/unit01_cryptography/
```

{{< code-action "Clone your repo and go into the directory." >}} Be sure to replace `yourgithubusername` with your actual username. 

```shell
git clone https://github.com/isf-dp-cs/lab_recursive_drawing_yourgithubusername
```

```shell
cd lab_recursive_drawing_yourgithubusername
```

{{< code-action "Install Tkinter for Turtle Drawings." >}} May not be necessarily. If the drawings don't work, install it.
```shell
brew install python-tk
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Tree drawing 

{{< figure src="images/courses/new/recursion_tree.png" width="30%">}}

**A tree is made up of a series of smaller trees.** Each "tree" contains a straight line, a left, and a right turn.


✏️. **It is VERY helpful to draw it on paper, and consider the recursive nature.**
- what repeats each time? 
- where should the pen start and end?  


💻 **In `tree.py`, code the recursive function `draw_tree()`.** 
- Parameters: 
    - length (int):  size of the tree
- Base case: when the length gets too small, just `return` and end the function

**Helpful Turtle Functions**

```python
forward(100)    #  go forward a certain amount
back(100)       # go backward a certain amount

right(60)       # turn right a certain amount (angle)
left(60)        # turn right a certain amount (angle)
```

---

# [2] Sierpinsky Triangle

{{< figure src="images/courses/new/recursion_sierpinsky_triangle.png" width="30%">}}

The sierpinsky triangle is created by repeating one basic rule:     
**Every time you draw a triangle, draw 3 smaller triangles inside it instead.**
{{< figure src="images/courses/new/recursion_sierpinsky_progress.png" width="50%">}}

**The points of the smaller triangles are located at the midpoints of the larger triange's side.**
{{< figure src="images/courses/new/recursion_sierpinsky_midpoints.png" width="50%">}}

✏️ **It is VERY helpful to draw it on paper, and consider the recursive nature.**
- what should always happen? how should the three triangles be drawn? 
- when should a new full set of triangles be drawn?

💻 **In `sierpinsky_triangle.py`, code the recursive function `sierpinsky()` to draw the triangle pattern.** 
- Parameters: 
    - n (int):  depth of the number of recursive triangles
    - side_length (int): size of triangles
- Base case: when n is 1, just draw a triangle


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
- remote

{{< /deliverables >}}


---

# [3] Extension: Koch Curves or Create your own!

{{< figure src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CT2-nImrPjZK3WwY3Kr2sOU_MT0T0wB1UqeBGC90YBSSR8ybvqmZ7_Q&s=10" width="30%">}}

A Koch curve is created by:
- draw a straight line
- divide line in thirds 
- replace middle section with triangular peak

A Koch Curve can be used to create a Koch snowflake.

💻 **In `extension.py`, code the snowflake.** You may want two functions `line()` and `snowflake()`

💻 **OR just create your own recursive drawing!** Google `recursive drawing` and be inspired.
---
title: "08. Stacks" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---
# Stacks

This lab introduces a data structures: **Stacks**. 

---
## Syllabus Topics [SL]
- **B2.2.3** Explain the concept of a stack as a “last in, first out” (LIFO) data structure.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **LIFO** |  Last in, first out. |
| **Stack** |  A LIFO data structure. Only the top item (most recently added item) can be accessed. Common uses: undo functions, the call stack in a computer, or reversing queues. |
| **`push()`** |  Adds data to the top of the stack. Parameter: data to add to the stack. Returns: none. |
| **`pop()`** |  Removes data from the top of a stack. Parameter: none. Returns: the data at the top of the stack. |
| **`peek()`** |  Allows you to view the data at the top of the stack without removing it. Parameter: none. Returns: the data at the top of the stack. |
| **`isEmpty()`** |  Checks whether the stack contains data. Parameter: none. Returns: boolean.|


## What is a Stack


```python
from stack import Stack

s = stack()
q.push('isf.edu.hk')
q.push('isf.edu.hk/shuyuan')
q.push('isf.edu.hk/shuyuan/cs')

q.peek()               # returns 'isf.edu.hk/shuyuan/cs' 
q.isEmpty()             # return False

q.pop()             # returns 'isf.edu.hk/shuyuan/cs'
item = q.pop()     # returns 'isf.edu.hk/shuyuan'
```


--- 

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_stacks_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_stacks_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Reversing Stacks/Queues

Some of the most common scenarios for stacks and queues are using them to reverse each other. You can easily use a stack to reverse a queue, and similarly you can easily reverse a queue using a stack.

📖 **Reversing a stack using a queue.** 

```python
stack = Stack()
stack.push("A")
stack.push("B")
stack.push("C")

queue = Queue()

# empty the stack into the queue
while not stack.isEmpty():
    item = stack.pop()
    queue.enqueue(item)

# empty the queue back into the stack
while not queue.isEmpty():
    item = queue.dequeue()
    stack.push(item)
```

📖 **Reversing a queue using a stack.** 

```python
queue = Queue()
queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")

stack = Stack()

# empty the queue into the stack
while not queue.isEmpty():
    item = queue.dequeue()
    stack.push(item)

# empty the stack back into the queue
while not stack.isEmpty():
    item = stack.pop()
    queue.enqueue(item)
```

---

# [2] Pixel Art

**In `pixel_art.py` you will create a simple interactive art piece where the user can change cells in the green from green to blue.**

Here is an example user interaction

```shell
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟦🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟦🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟦🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
- Enter a "row, column" number to change to cell to blue (e.g. 3, 3)
- Enter "undo" to undo the previous move.
- Enter "replay" to watch a replay of your design

> 4,4

🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟦🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟦🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟦🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟦🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
- Enter a "row, column" number to change to cell to blue (e.g. 3, 3)
- Enter "undo" to undo the previous move.
- Enter "replay" to watch a replay of your design

> undo

🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟦🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟦🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟦🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
```

💻 **Construct code for this interactive pixel art.** It must include:
- nicely displaying the board 
- users select cells to change color 
- users can undo their moves
- users can watch a replay their design 
    - the board starts all green and each second adds the next move in the history

--- 

{{< aside "A few helpful functions" >}}

Clear the Terminal window.

```python
os.system('clear')
```

Pause the program.
```python
time.sleep(0.5)
```

Check the type
```python
isinstance(5, int)  # returns True
```


{{< /aside >}}


--- 


## Practice Handwriting

{{< write-action >}}

1) **Take out a piece of paper and write out the code to reverse a stack using a queue.**

2) Double check your handwritten code against the examples in **Part 1** of this lab page.

3) If you made mistakes, take note of them and fix your handwritten code. 

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
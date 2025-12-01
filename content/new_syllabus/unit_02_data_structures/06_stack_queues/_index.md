---
title: "06. Stacks & Queues" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---
# Stacks and Queues

This lab introduces two new data structures, **Stacks** and **Queues**. 

---
## Syllabus Topics [SL]
- **B2.2.3** Explain the concept of a stack as a “last in, first out” (LIFO) data structure.
- **B2.2.4** Explain the concept of a queue as a “first in, first out” (FIFO) data structure.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Mutable** |  A data structure that can be changed after it is initialized. Lists, Stacks, and Queues are all mutable. Strings are not mutable. |
| **LIFO** |  Last in, first out. |
| **FIFO** |  First in, first out. |
|   <br> |     |
| **Stack** |  A LIFO data structure. Only the top item (most recently added item) can be accessed. Common uses: undo functions, the call stack in a computer, parsing matched punctuation like `()` `{}`, reversing queues or lists. |
| **`push()`** |  Adds data to the top of the stack. Parameter: data to add to the stack. Returns: none. |
| **`pop()`** |  Removes data from the top of a stack. Parameter: none. Returns: the data at the top of the stack. |
| **`peek()`** |  Allows you to view the data at the top of the stack without removing it. Parameter: none. Returns: the data at the top of the stack. |
| **`isEmpty()`** |  Checks whether the stack contains data. Parameter: none. Returns: boolean.|
| <br> |  |
| **Queue** |  A FIFO data structure. Only the front item can be accessed. Common uses: playlist queues for media, printer queues storing print jobs, internet networks storing data packets. |
| **`enqueue()`** |  Adds data to the back of the queue. Parameter: data to add to the queue. Returns: none. |
| **`dequeue()`** |  Removes data from the front of a queue. Parameter: none. Returns: the data at the front of the queue.|
| **`front()`** |  Allows you to view the data at the front of the queue without removing it. Parameter: none. Returns: the data at the front of the queue.  |
| **`isEmpty()`** |  Checks whether the queue contains data. Parameter: none. Returns: boolean.|


--- 

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_stacks_queues_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_stacks_queues_yourgithubusername
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

Some of the most common scenarios for stacks and queues are using them to reverse eachother. You can easily use a stack to reverse a queue, and similarly you can easily reverse a queue using a stack.

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
queue.enququq("C")

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

💻 **Run `pixel_art.py`, and experiment with editing the grid.** 


```shell
~~Edit Mode~~
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
- Type "undo" to undo the previous move. 
- Type "done" to stop editing. 
- Press enter to edit a square.
> 
Choose row (0-9) > 2
Choose col (0-9) > 3
```

---

## Undo

Currently, the undo functionality doesn't work. Two important actions need to be done:
1. Every move should be saved in the `history` stack.
2. When a user chooses to **undo**, the most recent move should be retrieved from the `history` stack and undone.

💻 **Add undo functionality to `edit_mode()`.**  It is up to you to decide how to add the moves to the stack. We recommend adding the row, then adding the column. 

---

## Timelapse

The timelapse method should give the user a replay of all their moves, from the start. Two important actions need to be done:
1. The `history` stack needs to be reversed, so we can get the moves from the beginning.
2. Get each move from the `history` stack and show each frame to the user

💻 **Finish the function `timelapse()`.** 

---

## Practice Handwriting

{{< write-action >}}

1) **Take out a piece of paper and write out the code to reverse a stack using a queue.**

2) Double check your handwritten code against the examples in **Part 1** of this lab page.

3) If you made mistakes, take note of them and fix your handwritten code. 

{{< /write-action >}}

---

# [3] Song Queue

In this file you will be creating a song queue, similar to Spotify's or Apple Music's `queue` feature. Every time a song is "queued", it is added to the end of the queue. 


💻 **Run `song_queue.py` to experiment with the outline of how this functionality will work.** It has some starter code, but it does not fully work yet.

---

## Create Playlist

💻 **Finish `create_playlist()` so that every song the user inputs is added to the song queue.** Test it by running `song_queue.py`.

---

## Reverse Playlist

A classic task is reversing a queue using a stack.

💻 **Finish `reverse_playlist()` which reverses the order of the song queue.** Test it by running `song_queue.py` .

---


## Play without Repeats

Right now, the function `play()` simply plays each item in the queue, even if the same song plays multiple times in a row. 

It is your job to edit the function, so if the next song is the same as the one that is currently playing, that next song will be removed. 

💻 **Edit `play()` to incorporate this functionality by using the optional parameter `repeats_allowed`.**  Test it by editing the the function call at the bottom of the file to see it's working.

---

## Practice Handwriting

{{< write-action >}}

1) **Take out a piece of paper and write out the code to reverse a queue using a stack.**

2) Double check your handwritten code against the examples in **Part 1** of this lab page.

3) If you made mistakes, take note of them and fix your handwritten code. 

{{< /write-action >}}

---

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

{{< /deliverables >}}

---

# [5] Extensions 

## Shuffle Playlist

💻 **Complete `shuffle()` to shuffle the order of `song_q` using a second queue.** You will need to add your own test to the bottom of the file.

The songs should be shuffled in order, using only a second queue. There are ***many*** different, valid coding approaches to get this done. Resist using a built in shuffling method. Depending on your approach, you may find it useful to use the random library:

**Get a random integer**
```python
from random import randint
num = randint(3, 9) #inclusive of 3 and 9

print(num)
>>> 8
```


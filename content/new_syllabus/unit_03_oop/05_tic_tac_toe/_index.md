---
title: "05. Tic Tac Toe" 
bookFlatSection: false
weight: 50
# draft: true
---

# 2D list in a game: Tic Tac Toe

In this lab you will create an OOP representation of Tic Tac Toe. 

---

# [0] Class Relationships

In this lab, you will make a simple version of Blackjack. For this, we use multiple classes. 
- `Card()`
- `Deck()`
- `Hand()`
- `Blackjack`

📖 **Here is the UML diagram for the class relationships.** The filled diamonds represent an `composition` relationship. A Stack is a part of a TicTacToe and the Stack cannot exist without the TicTacToe.

{{< mermaid >}}

classDiagram
    class Stack {
        - stack: list
        + \_\_init__()
        + \_\_str__()
        + push(element)
        + pop()
        + peek()
        + isEmpty()
    }

    class TicTacToe {
        - board: str[][]
        - history: Stack
        - game_won: bool
        + \_\_init__()
        + \_\_str__()
        + fill_cell(row, col, value) None
        + check_valid_cell(row, col) bool
        + check_win(player) bool
        + computer_move() None
        + player_move() None
        + undo_rounds() None
        + play() None
    }

    Stack --* TicTacToe: part of
{{< /mermaid >}}


---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_tictactoe_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_tictactoe_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [2] TicTacToe

{{< mermaid >}}
classDiagram
    class TicTacToe {
        - board: str[][]
        - history: Stack
        - game_won: bool
        + \_\_init__()
        + \_\_str__()
        + fill_cell(row, col, value) None
        + check_valid_cell(row, col) bool
        + check_win(player) bool
        + computer_move() None
        + player_move() None
        + undo_rounds() None
        + play() None
    } 
{{< /mermaid >}}

💻 **You must construct the following methods in `TicTacToe`.** These are the core functionalities of the game, without considering the games logic. Do not construct the `play()` function with the game logic until the next part of the lab.
- `fill_cell(row, col, value)`
- `check_valid_cell(row, col)`
- `check_win(player)`
    - check for horizontal and both diagonal win conditions
- `player_move()`
- `computer_move()`
- `undo_rounds()`


🤔 **As you're testing, consider what game state you need to ensure each method works.** 

---

## Game Loop

Now that you have all of the required functionalities of the game, **it is up to you determine how you would like your game loop to operate.** The only requirement is it must use all of the methods. 

✏️ **Before you start coding, draw a flowchart to illustrate your game loop.** You may want to reference the textbook or inThinking to remind yourself of the flowchart requirements.



💻 **Construct the code for your implementation of the game loop by following your flow chart.**

{{< expand "example game loop" >}}
```shell
--  Play TicTacToe -- 

  |   |  
_________
  |   |  
_________
  |   |  
_________

Enter cell (row,col) to fill : 0,0
Computer placed an O at 1,2

X |   |  
_________
  |   | O
_________
  |   |  
_________

Would you like to undo the last round? (y/n)? y
  |   |  
_________
  |   |  
_________
  |   |  
_________

```

{{< /expand >}}


---

# [3] Deliverables


{{< deliverables "Once you finish the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Checklist:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}}



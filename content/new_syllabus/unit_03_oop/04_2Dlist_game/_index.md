---
title: "04. 2D list game" 
bookFlatSection: false
weight: 1
draft: true
---

# 2D list in a game: Tic Tac Toe

In this lab you will create an OOP representation of Tic Tac Toe. 


# [0] Class Relationships

In this lab, you will make a simple version of Blackjack. For this, we use multiple classes. 
- `Card()`
- `Deck()`
- `Hand()`
- `Blackjack`

📖 **Here is the UML diagram for the class relationships.** The unfilled diamonds represent an `aggregation` relationship. A `Deck` contains `Cards`, but `Cards` exist if the `Deck` is destroyed.

{{< mermaid >}}

classDiagram
  
    class Stack {
        - \_\_stack: list
        + \_\_init__()
        + \_\_str__()

        + push(element)
        + pop()
        + peek()
        + isEmpty()
    }

    class TicTacToe {
        - __board: list[list[str]]
        - __history: Stack
        - __game_won: bool
        + \_\_init__()
        + \_\_str__()
        + fill_cell(row, col, value): none
        + check_valid_cell(row, col): bool
        + check_win(player): bool
        + computer_move(): none
        + player_move(): none
        + undo_rounds(num_rounds): none
        + play(): none
    }

    stack ---o> TicTacToe
   
{{< /mermaid >}}


---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_oop
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
        - __board: list[list[str]]
        - __history: Stack
        - __game_won: bool
        + \_\_init__()
        + \_\_str__()
        + fill_cell(row, col, value): none
        + check_valid_cell(row, col): bool
        + check_win(player): bool
        + computer_move(): none
        + player_move(): none
        + undo_rounds(num_rounds): none
        + play(): none
    }  
{{< /mermaid >}}

💻 **You must construct the following methods in `TicTacToe`.**
- `fill_cell()`
- `check_valid_cell()`
- `check_win()`
- `player_move()`
- `computer_move()`
- `undo_rounds()`
- `play()`


💻 **A few testing tips**
- test each individual method, before starting the `play` 
- `check_win()`
    - change the board to different win conditions, so you don't have to play the game

{{< write-action >}}

1) **Close your computer, take out a piece of paper, and write code to iterate through self.__board and do XYZ.** 

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again.

{{< /write-action >}}



---

# [6] Deliverables


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



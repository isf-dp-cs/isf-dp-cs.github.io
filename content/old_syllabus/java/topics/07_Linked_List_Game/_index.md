---
title: "Linked List Game" 
bookFlatSection: false
weight: 11
# bookCollapseSection: true
# draft: true
---

# Linked List Game

This lab practices using circular linked lists in the context of a dice-rolling game.

---

## [0] Setup

### Clone the Repository

#### 💻 select [`+ New Project`] > [`Repository URL`]

{{< figure src="images/courses/java/intellijIDEA/intellij_repo_url.png" width="50%">}}


 
{{< code-action "Paste your URL to clone the lab">}} 

Be sure to change `yourgithubusername` to your actual GitHub username.

```shell
https://github.com/isf-dp-cs/lab_linked_list_game_yourgithubusername
```


## [1] UML

**✏️ Create a UML Diagram to describe the classes and their relationships to eachother.**

---

## [2] Iterators

Iterators are used so that you can conveniently 
## [3] First to 100

💻 **Finish the main method in the `FirstTo100` class.**  It should:    

- make a circular linked list
- add players
- loop through each of the players until someone wins
> - player rolls a random number
> - add the roll to their score
> - print out their roll and new score
>- first player to reach 100 wins
- print out a winning message
---

## [4] Add sound effects
Here are some helpful methods to add sound effects:

```java
// start the clip
sound.clip.setFramePosition(0);
sound.clip.start();

// get length of clip
sound.clip.getMicrosecondLength()

// stop clip
sound.clip.stop();

// check if clip is running
sound.clip.isRunning()
```

## [5] Deliverables

{{< deliverables>}}


### Push to Github

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}

---
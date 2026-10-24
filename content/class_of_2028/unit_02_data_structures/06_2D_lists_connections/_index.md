---
title: "06. 2D Lists Connections" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# 2D Lists: Connections

This lab utilizes 2-dimensions lists to create the New York Times game, Connections.


## Syllabus Topics [SL]
- **B2.2.2** Construct programs that apply arrays and Lists.


--- 

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_connections_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_connections_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] System Overview: Diagram

This how your command line user interface should be designed for the connections game. 

**Display the board as a 4x4 grid of randomly arranged words.**.
```shell
ram    | marker  | mug    | pencil
cup    | cpu     | crayon | pear
kiwi   | ssd     | orange | glass
gui    | pen     | apple  | bottle
```

**A user inputs a guess for a category by typing each word, separated by a space**
```shell
Enter guess, separate items with a space: apple kiwi pear orange
```

**If they were successful, it displays the category.**
```shell
Found the category: fruits
```

**If they were unsuccessful, it displays a message.**
```shell
Category not found...
```

**If a category is found, it removes those words from the board.**
```shell
cpu    | ssd     | pencil | pen
bottle | marker  | gui    | ram
glass  | mug     | crayon | cup  	            	    
```

**A message to communicate when the game is won**
```shell
Congratulations on finding each category!            	    
```

---

# [2] Development


💻 **Construct code to complete each success criteria to build a command line version of Connections.**

0. The guessable words from each category are scrambled and displayed as grid with 4 columns
0. The user inputs their guess of four words for a given category, receives feedback on their guess, and can guess until they find all four categories
0. When a user find a category, that category is removed from the board that is displayed


✏️ **Go to your Google Drive and open the "Connections Worksheet" document.** Take screenshots of your implementation and explain how you constructed it and why. 


---

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

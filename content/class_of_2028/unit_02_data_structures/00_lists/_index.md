---
title: "00. Lists" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Lists

This lab introduces Lists, a built-in Python data structure. 

---
## Syllabus Topics [SL]
- **B2.2.2** Construct programs that apply arrays and Lists.
- **B2.4.2** Construct and trace algorithms to implement a linear search ~and a binary search~ for data retrieval.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Array** | A data structure that stores elements that are accessible by an index. |
| **Index** | An integer that represents the position in a data structure |
| **Static Data structure** | A data structure that has a fixed size and will not grow or shrink. |
| **Dynamic Data structure** | A data structure that can change its size as needed as elements are added or deleted. |
| **Python List** | A built-in Python data structure. It implements a dynamic array. |
| **Append** | To add an item to the end of a List |
| **Linear Search** | To find an item in a List by iterating over all of the items in the List, until the current item is equivalent to the target item |


--- 

## What is a list? 

📖 **Operations for using Lists**

```python
# create an empty list
num_list = []

# create a list with items
dessert_list = ["ice cream", "brownies", "mochi", "timtams"]

# access item in list by index
dessert_list[0]     # returns "ice cream"
dessert_list[-1]     # returns "timtams"

# count number of items in list
len(dessert_list)   # returns 4

# loop through a list with indexing
for i in range(len(dessert_list)):
    print(dessert_list[i])
```

📖 **Operations for altering Lists**
```python
dessert_list = ["ice cream", "brownies", "mochi", "timtams"]

# set a particular item by index
dessert_list[2] = "egg tart" # ["ice cream", "brownies", "egg tart", "timtams"]
list[-1] = "chocolate" # ["ice cream", "brownies", "egg tart", "chocolate"]

# add item to end of list
dessert_list.append("cookies")  # ["ice cream", "brownies", "egg tart", "chocolate", "cookies"]

# remove item from list
dessert_list.remove("brownies")  # ["ice cream", "egg tart", "chocolate", "cookies"]

# insert item at specific index of list
dessert_list.insert("cookies", 2) # ["ice cream", "egg tart", "cookies", "chocolate", "cookies"]
```


---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit02_data_structures
cd unit02_data_structures
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_lists_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_lists_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Using Lists: Numbers

💻 **In `number_analysis.py`, write 6 functions that take a list of numbers as a parameter.** Each function will perform an different analysis on the list.
- `total_sum(num_list)`
- `contains(num_list, num)`
- `reverse_list(num_list)`
- `count(num_list, num)`
- `minimum(num_list)`
- `maximum(num_list)`
- `biggest_difference(num_list)`


💻 **For each function, write at least 2 tests using `assert` at the bottom of the file.**

```python
assert total_sum([2,4,6]) == 12
```
> - `total_sum([2,4,6])` is the function call with a specific parameter as a test case
> - `== 12` is what the function should return 
> - an error will print to the Terminal if the `assert` condition does not pass

✅ **Check your functions with a peer**


{{< write-action >}}

1) **Take out a piece of paper and write out entire the function for `total_sum(num_list)` without looking at your solution.**

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again with another function. Continue until you complete one without errors.

{{< /write-action >}}

---


# [2] Creating Lists: Words

## Convert text file to a List

💻 **In `get_words.py` write a function `get_word_list(file)` to properly format the `txt` file.** It should read in the given file and convert it into a List of words. Be sure to remove all newline characters `\n` from the words!

## Get Words

💻 **In `get_words.py` write 4 functions that take a list of words a parameter.** Each function will create and return a new list that contains only some of the words.
- `get_words_of_length(word_list, length)`
- `get_words_including(word_list, including_string)`
- `get_words_starting(word_list, starting_string)`
- `get_words_ending(word_list, ending_string)`

💻 **Use the functions to answer the questions at the bottom of the file.** Each question applies to the `words_100k.txt` file.

✅ **Check your answers with a peer**

 {{< write-action >}}

1) **Take out a piece of paper and write out entire the function for `get_words_of_length(word_list, length)`.**

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again with another function. Continue until you complete one without errors.


{{< /write-action >}}

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

---

# [4] Extension

This exercise comes from [Project Euler](https://projecteuler.net/problem=54).

**In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:**

*   **High Card**: Highest value card.
*   **One Pair**: Two cards of the same value.
*   **Two Pairs**: Two different pairs.
*   **Three of a Kind**: Three cards of the same value.
*   **Straight**: All cards are consecutive values.
*   **Flush**: All cards of the same suit.
*   **Full House**: Three of a kind and a pair.
*   **Four of a Kind**: Four cards of the same value.
*   **Straight Flush**: All cards are consecutive values of same suit.
*   **Royal Flush**: Ten, Jack, Queen, King, Ace, in same suit.

**The cards are valued in the order:**
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

| Hand | Player1                                         | Player2                                          | Winner   |
|------|-------------------------------------------------|--------------------------------------------------|----------|
| 1    | 5H 5C 6S 7S KD  Pair of Fives                   | 2C 3S 8S 8D TD Pair of Eights                    | Player 2 |
| 2    | 5D 8C 9S JS AC Highest card Ace                 | 2C 5C 7D 8S QH Highest card Queen                | Player 1 |
| 3    | 2D 9C AS AH AC Three Aces                       | 3D 6D 7D TD QD Flush with Diamonds               | Player 2 |
| 4    | 4D 6S 9H QH QC Pair of Queens Highest card Nine | 3D 6D 7H QD QS Pair of Queens Highest card Seven | Player 1 |
| 5    | 2H 2D 4C 4D 4S Full House With Three Fours      | 3C 3D 3S 9S 9D Full House with Three Threes      | Player 1 |

💻 **Download the file [poker.txt](https://projecteuler.net/resources/documents/0054_poker.txt)** It contains one-thousand random hands dealt to two players. 
- Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. 
- You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

💻 **Create a new file `poker_extension.py` and answer the question: *How many hands does Player 1 win?***
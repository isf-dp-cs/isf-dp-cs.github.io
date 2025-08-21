---
title: "02. ADT: Sets"
bookFlatSection: false
weight: 2
# bookCollapseSection: true
# draft: true
---

# ADT: Sets

In this lab we are going to introduce Abstract Data Types (ADTs), and specifically Sets. 

---
## Syllabus Topics [HL]
* **B4.1.5**  Construct and apply sets as an ADT

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Abstract Data Type (ADT)** | A model that defines operations and behavior for a data structure, without defining how these operations are implemeneted. |
| **Set** | Stores unordered, mutable, and unique values.  |
| **Mutable** | Data that can be changed after its been initialized  |
| **Casting** | Convert a variable from one data type to another |



---

## [0] What is a Set?

A `Set` is an `abstract data type` that stores multiple items. It is unordered, mutable, and unindexable. 

📖 **Set Methods**

```python
# add
myset = {'apples','bananas', 'grapes'}
myset.add('pears') 
# myset = {'apples','bananas', 'grapes', 'pears'}

# remove
myset = {'apples','bananas', 'grapes'}
myset.remove('grapes') 
# myset = {'apples','bananas'}

# check if in 
myset = {'apples','bananas', 'grapes'}
'apples' in myset  # return True
'lemons' in myset  # return False

# number of items in a set
myset = {'apples','bananas', 'grapes'}
len(myset)  #returns 3

# loop through a set
myset = {'apples','bananas', 'grapes'}
for fruit in myset:
  print(fruit)

# create an empty set
myset = set()

```

📖 **Set Operations**

```python
# union
a = {1,2,3,4}
b = {3,4,5,6}
unioin_set = a | b
# union_set = {1,2,3,4,5,6}

# intersection
a = {1,2,3,4}
b = {3,4,5,6}
interesection_set = a & b
# intersection_set = {3, 4}

# difference
a = {1,2,3,4}
b = {3,4,5,6}
difference_set = a - b
# difference_set = {1,2}

# subset
a = {1,2}
b = {1,2,3,4}
print(a.subset(b)) # True

print(b.subsect(a)) # False

# superset
print(b.superset(a)) # True
print(a.superset(b)) # False

# To cast a List to a Set
fruit = ['apples', 'organges', 'peaches', 'apples']
set(fruit)
```

💻 **Practice using Set methods and operations with exercises [HERE](https://www.w3schools.com/python/python_sets_exercises.asp)**

---

## [1] Set up


{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername`, to your actual username. *e.g. `https://github.com/isf-dp-cs/lab_sets_brittegenzlinger`*
```shell
git clone https://github.com/isf-dp-cs/lab_sets_yourgithubusername
```


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_sets_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

## [2] Music Playlists 

Sets are particularly useful for determining what is similar and what is different in sets of data. In this lab you will compare and contrast 10 individuals' favorite music. 


💻 **In `set_music_examples` follow along and complete each `TODO` item.** They get more challenging as you work from top to bottom. It can help to write out a mini example on a whiteboard/notebook. 
✅ **Check your answers with a friend. When you're confident, check with a teacher.**


{{< expand "Solutions" >}}
```python
from data import favorite_music
import random 

# 💻 1) TODO: Create a class playlist with music from all people
class_playlist = set()
for music_set in favorite_music:
    class_playlist = class_playlist | music_set

print(class_playlist, len(class_playlist))
print()

# 💻  2) TODO: What is the percentage of unique songs compared to total songs in entire dataset(including duplicates)?
count = 0 
for music in favorite_music:
    count += len(music)

print(len(class_playlist)/count)
print()

# 💻 3) TODO: How many times does the song "Espresso" appear?

count = 0 
for music in favorite_music:
    if "Espresso" in music:
        count +=1
print(count)
print()

# 💻 4) TODO: If Index 0 of favorite_music listened to all the music in Index 3 and 4,
#       - How many new songs did they listen to?
#       - What are the song titles? 

total_music = favorite_music[0] | favorite_music[3] | favorite_music[4]
new_songs = total_music - favorite_music[0] 
print(new_songs, len(new_songs))
print()

# 💻 5) TODO: Create a playlist with only songs everyone likes 
common_songs = class_playlist
for music_set in favorite_music:
    common_songs = common_songs & music_set

print(common_songs, len(common_songs))
print()

# 💻  6) TODO: Which index of favorite_music has the most unique music?
most_difference = None
most_index = 0

for i in range(len(favorite_music)):
    current_difference = len(class_playlist-favorite_music[i])

    if i == 0:
        most_difference = current_difference

    if current_difference < most_difference:
        most_difference = current_difference
        most_index = i


print(most_index)
print()
```
{{< /expand >}}

---

## [3] Deliverables


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Tracker:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m \"describe your code here\"   
- git push
- git remote

{{< /deliverables >}}





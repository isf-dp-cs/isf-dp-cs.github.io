---
title: "00. Intro" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Intro to Object Oriented Programming (OOP)

This lab introduces object oriented programming (OOP).

---
## Syllabus Topics [SL]
- **B3.1.2** Construct a design of classes, their methods and behaviour.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Object Oriented Programming** | A style of programming that creates objects using classes, allowing for encapsulation and increased modularity.  |
| **Class** | A template or blueprint for creating objects. The class defines the attributes and methods.  |
| **Constructor** | A method that creates a new object of a class and initializes the values of the attributes.|
| **Object** | A specific instance of a class that has its own instance variables/attributes. |
| **Instantiation** | The process of creating a new instance of a class (aka a new **object**), by calling its constructor. |
| **Methods** | Functions that belong to a class. |
| **Attributes** | Variables that belong to an object. |
| **Private Attribute** | Accessible only within its own class. |
| **Public Attribute** | Accessible to any code in program.  |
| **Accessor methods** | Aka **Getters**. Methods that are used to return the private attributes.  |
| **Mutator methods** | Aka **Setters**. Methods that are used to update the private attributes.  |


--- 

## UML & Classes

**This is a UML (unified modelling language) class diagram.** It is used to represent a class, its attributes, and methods.

{{< mermaid >}}

classDiagram
    class Song {
        - title: string
        - artist: string
        - album: string
        - popularity: integer
        - isExplicit: boolean
        - genre: string
        - length: float
        - energy: float
        - loudness: float
        - valence: float
        + __init__(title, artist, album, popularity, isExplicit, genre, length, energy, loudness, valence)
        + accessor methods  ()
        + __str__()
    }

{{< /mermaid >}}

- First row is the name of the class
- Second row is the attributes
- Third row is the methods
- The `+` or `-` indicates if the attribute/method is public or private

📖 **Here is the Python representation of the `Song` class.**
- `__init__` - is the constructor
- `self.__title` - is one of the the private attributes
- `get_title()` - is one of the public accessor methods
```python
class Song:
    def __init__(self, title, artist, album, popularity, isExplicit, genre, length, energy, loudness, valence):        
        self.__title = title
        self.__artist = artist
        self.__album = album
        self.__popularity = popularity
        self.__isExplicit = isExplicit
        self.__genre = genre
        self.__length = length
        self.__energy = energy
        self.__loudness = loudness
        self.__valence = valence

    def get_title(self):
        return self.__title
```



---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit03_oop
cd unit03_oop
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_oop_songs_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_oop_songs_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Query Songs

In `query.py`, there are six functions to query the list of `Song` objects.

💻 **Construct code for each function. Read the docstring to learn its functionality.** After completed each function, test it at the bottom of the file to ensure it works as expected. 

- `getAllGenre(song_list)`
- `getRandomSongGenre(song_list, target_genre)`
- `getSongByTitle(song_list, target_title)` - use linear search
- `sortPopularity(song_list)` - use bubble sort
- `sortValence(song_list)` - use selection sort
- `getSongByPopularity(song_list, target_popularity)` - use binary search


{{< write-action >}}

1) **Take out a piece of paper and write out entire the function for 2 functions of your choosing.** Be sure to choose functions that need revision.

2) Double check your handwritten code against your typed code.

3) If you made mistakes, take note of them and try again with another function. Continue until you complete one without errors.


{{< /write-action >}}

---

# [2] Deliverables


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



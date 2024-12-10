---
title: "Songs" 
bookFlatSection: false
weight: 7
# bookCollapseSection: true
# draft: true
---

# Songs
**This lab is loosely based on the music platform Spotify.**   

This lab reviews these skills :
- creating and using classes, objects, methods, attributes, parameters
- arrays of objects
- sequential Search
- bubble Sort
- selection Sort
- BufferedReader `.ready` `.readLine`
- String methods `.equals(String)` `.toUpperCase()` `.toLowerCase()`

**These concepts are introduced in this lab. By the end of this lab you should be able to identify examples of each concept, and correctly use these terms, and use them in your code**

- **Do...While** loop
- **Binary Search**

---

## [0] Setup

### Clone the Repository

#### 💻 select [`+ New Project`] > [`Repository URL`]

{{< figure src="images/courses/java/intellijIDEA/intellij_repo_url.png" width="50%">}}


 
{{< code-action "Paste your URL to clone the lab">}} 

Be sure to change `yourgithubusername` to your actual GitHub username.

```shell
https://github.com/isf-dp-cs/lab_songs_yourgithubusername
```

---

## [1] Song

The class Post has already been written for you. This UML describes its structure: 

{{< mermaid >}}

classDiagram
    class Song {
        -title: String
        -artist: String
        -album: String
        -popularity: int
        -isExplicit: boolean
        -genre: String
        -length: double
        -energy: double
        -loudness: double
        -valence: double
        + Song(String title, String artist, String album, int popularity, boolean isExplicit, String genre, double length, double energy, double loudness, double valence)
        + accessor and mutator methods  ()
        + toString(): String
    }
{{< /mermaid >}}


---

### [a] Test Song

Test out the `Song` class, to make sure it behaves as you expect

💻 **Add a main file to the Song class.**  It should:
- Create a new Song object
- Print out the Song object
- Use one of the mutators, and then check if it worked by using the corresponding accessor

---

## [2] Melodify | Class Setup

Here is the UML for the Melodify class:

{{< mermaid >}}

classDiagram
    class Melodify {
        -allSongs: Song[]
        + Melodify()
        + getAllSongs(): Song[]
        + setAllSongs(Song[]): void
        + sortPopularity(): void
        + sortValence(): void
        + getRandomSong(): Song
        + getRandomPopularSong(int popularity): Song
        + getSongByTitle(): Song
        + getSongByPopularity(): Song
        + getSongByValence(): Song
    }
{{< /mermaid >}}

### [a] Attributes + Constructor

Create the correct attribute and constructor for the `Melodify` class, using the UML diagram as a guide.   

You can assume that there will be 200 songs in `allSongs`

---

### [b] Read in All Songs

In your repository, there is already a file located at `"src/allSongs.txt"`   

In the `Melodify` class, write a method `readPostsFromFile()` that reads all `Song` objects from the text file `allSongs.txt` into `this.allSongs`.  *Hint: reference lab_posts for an example of how to do this*   

Here is a reference of how to parse the different types of data in `allSongs.txt`:

```java
String title = data[x]; // read in a String from location x
int popularity = Integer.parseInt(data[x]); // read in an Int from location x
boolean isExplicit = Boolean.parseBoolean(data[x]); // read in an boolean from location x
double length = Double.parseDouble(data[6]); // read in an double from location x
```

---

## [3] Melodify | Data

### [a] Sort by Popularity 🫧
> Note: Use Bubble Sort for this method 

💻 Write a new method `sortPopularity` that sorts `allSongs` by popularity score in descending order (most popular first). This method has access to `allSongs` so it does not need any parameters or to return anything.

---

### [b] Sort by Valence ⤵️
> Note: Use Selection Sort for this method  

Valence is a measure of how "happy" a song sounds. 

💻 Write a new method `sortValence` that sorts `allSongs` by the valence of the songs in ascending order (lowest values first). 

---

### [c] Get Random Song

---


## [4] Deliverables

{{< deliverables>}}


### Push to Github

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}

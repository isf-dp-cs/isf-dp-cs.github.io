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
        + getSongByTitle(String title): Song
        + getSongByPopularity(double target): Song
        + getSongByValence(double target): Song
        + getRandomSong(): Song
        + getRandomPopularSong(int popularity): Song
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

💻 Write a new method `sortPopularity()` that sorts `allSongs` by popularity score in descending order (most popular first). This method has access to `allSongs` so it does not need any parameters or to return anything.

---

### [b] Sort by Valence ⤵️
> Note: Use Selection Sort for this method  

Valence is a measure of how "happy" a song sounds. 

💻 Write a new method `sortValence()` that sorts `allSongs` by the valence of the songs in ascending order (lowest values first). 

---

### [c] Search By Title 🔎
> Note: Use Linear Search for this method  

💻 Write a new method `getSongByTitle(String target)` that finds a song with the given title, and returns that song. If it cannot find a song that matches, it should return null. 

💻 In the `main` method of `Melodify`, **test this method** to be sure it works.

---

### [d] Search by Popularity 🔎
> Note: Use Binary Search for this method  

💻 Write a new method `getSongByPopularity(double target)` that finds a song with the given popularity, and returns that song. If it cannot find a song that matches, it should return null. Remember that binary search only works on **sorted arrays**, so be sure to call one of your sorting methods first.

💻 In the `main` method of `Melodify`, **test this method** to be sure it works.

---

### [e] Search by Valence ⤵️
> Note: Use Binary Search for this method  

This time, you'll practice using a `do...while` loop. It's very similar to a `while` loop, but you state the action **first**, before stating this condition, which ensures it will always run at least one time. Here's an example:

```java
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 5);
```

💻 Write a new method `getSongByValence(double target)` that finds a song with the given valence, and returns that song. Use the `do...while` loop. If it cannot find a song that matches, it should return null. Remember that binary search only works on **sorted arrays**, so be sure to call one of your sorting methods first.

💻 In the `main` method of `Melodify`, **test this method** to be sure it works.

---

### [f] Get Random Song

💻 Write a new method `getRandomSong()` that returns a random Song. 

> Here's how to randomly generate a number 0-9:   
```java
Random rand = new Random(); // you only need to run this once
int randomIndex = rand.nextInt(10); //each time you need a new random number, run this line of code
```
---

### [g] Get Random Song

💻 Write a new method `getRandomPopularSong(int minPopularity)` that returns a random Song that is at least as popular as the parameter. 

Use `do...while` in this method.

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

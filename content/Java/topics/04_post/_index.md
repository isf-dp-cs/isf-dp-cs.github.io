---
title: "Posts" 
bookFlatSection: false
weight: 7
# bookCollapseSection: true
# draft: true
---

# Posts
This lab is based after the November 24 mock exam. **You will practice reviews these skills** :
- creating and using classes, objects, methods, attributes, parameters
- referencing class objects inside other classes
- avoiding null objects when looping through arrays 
- sorting

Concepts introduced in this lab. By the end of this lab you should be able to **identify examples of each concept, and correctly use these terms, and use them in your code**

- **BufferedReader(FileReader) methods `.ready` `.readLine`**
- **Polymorphism** *- (e.g. overriding toString to print a Post object)*
- **String methods `.equals(String)` `.toUpperCase()` `.toLowerCase()`**

<!-- - **Escape sequences** *- (e.g. \n for a newline)*
- **UML to describe one-to-many relationships**
- **Exceptions** *- (e.g. IOException)*
- **Static methods** *- (e.g. `static Post[] readPostsFromFile`)*  -->

---

## [0] Setup

### Clone the Repository

#### 💻 select [`+ New Project`] > [`Repository URL`]

{{< figure src="images/courses/java/intellijIDEA/intellij_repo_url.png" width="50%">}}


 
{{< code-action "Paste your URL to clone the lab">}} 

Be sure to change `yourgithubusername` to your actual GitHub username.

```shell
https://github.com/isf-dp-cs/lab_post_yourgithubusername
```

---

## [1] Post

The class Post has already been written for you. It is based off of the following UML. 

{{< mermaid >}}

classDiagram
    class Post {
		- textContent: String
        - hashtag: String 
    	- likes: int 
        - visibility: boolean
        + Post(String textContent, String hashtag, boolean visibility, int likes)
        + accessors and mutator methods  ()
    }
{{< /mermaid >}}

**Polymorphism in `toString()`**

Polymorphism is when we `override` the usual behavior of a method and define new behavior. 
The usual behavior of `toString()` on any object would be to print out the memory location like this:

```java
Post post2 = new Post("Check out this cool picture!", "#coolpicture", false, 0);
System.out.println(post1);

-----------------
model.Post@30f39991
```

This method of `Post` overrides `toString()`, so now it will print nicely to the console. 

```java
Post post2 = new Post("Check out this cool picture!", "#coolpicture", false, 0);
System.out.println(post1);

--------------------------------------------------
| Check out this cool picture! |
--------------------------------------------------
| Hashtag: #coolpicture |
--------------------------------------------------
| Likes: 0 |
--------------------------------------------------
```
In order to override a method, we need to make sure that we keep these the same:

- Method name
- Return type
- Number and type of parameters

Additionally, we should include the @Override keyword above our child class method to indicate to the compiler that we want to override a method in the parent class.

```java
@Override
public String toString()
```

---

### [a] Find Sample Posts

In the `Main` class, there is a method `readPostsFromFile()` that reads all `Post` objects from a text file `posts_database.txt` into a large, unsorted array called `allPosts`.  

A method is needed to show users a sample selection of posts from the platform.
This method should take the array `allPosts` as a parameter and select `Post` objects from `allPosts` so that every available hashtag is presented only once.   

There are empty spaces at the end of the array `allPosts`. 


You may assume that there are never more than 100 different `hashtags` on the platform (as identified by the variable `hashtag`).

💻 **Construct the code for the method `findSamplePosts()` that will take the array allPosts as a parameter.** It must return a `Post` array that contains one post for every `hashtag` that is used on the social media platform, without including any two `Posts` with the same `hashtag`. 


---

### [b] Popular Hashtags

The students want to know which topics are popular on their platform. Therefore, they want to view which `hashtags` were used in posts with the most likes. To be included, the hashtag must be on a publicly visible post that has at least 200 likes. Even if a `hashtag` is used on many popular posts, it should only be included once in the list of hashtags.   

💻 **Construct the code for the method `findPopularHashtags()` that will perform this query and return the results in the form of a `String` array.**

---

### [c] Update Visibility

The students now want to change the `visibility` feature. Instead of only two options for `visibility` (being viewable by friends or publicly viewable), posts will have a third option to be viewable only to the user themselves.   

Because of this, `visibility` can no longer be a `boolean`. Decide which data type is more appropriate, and then make this change. 

*Note: you will need to make chages in may places, including:*

**`Post`**  
  - constructor
  - accessor
  - mutator
  - toString   

**`Main`**
  - `readPostsFromFile()`    

**`posts_database.txt`**

---

## [2] Profile

The `Profile` creates profiles, which each contain an array of many `Post` objects.

{{< mermaid >}}
classDiagram
    class Profile {
		- username: String
        - firstName: String 
    	- age: int 
        - myPosts: Post[]
        + Profile(String username, String firstName, int age)
        + sortPosts() void
        + accessors and mutator methods  ()
    }
{{< /mermaid >}}

<!-- `Profiles` and `Posts` have a one-to-many relationship. In UML, it is shown like this:

### UML GOES HERE -->

It is your job to finish the Profile class according to the specifications.

---


### [a] Attributes
💻 **Construct code to declare the attributes of the Profile class**

---

### [b] Constructor
💻 **Construct code for the constructor of class Profile.**

💻 **Be sure to test out that `Profile` works before moving on!.**


---

### [c.1] Profile in Main 

💻 **Import the `Profile` class into the Main class.** Reference the way that `Post` was imported as an example.   

💻 **Construct a main method with code that creates an instance of a profile of a 16 year old named Rex whose chosen username is `tyrannosaurus_rex`.**   

Rex needs some posts on his profile.    
💻 **Create a new `.txt` file like `posts_database.txt` to create lots of posts for Rex, and read it in using `readPostsFromFile()`.**

---

### [c.2] Sort Posts

💻 **In `Profile`, construct the code for the method `sortPosts` that will sort the array `myPosts` in descending order of number of likes.**   

After you're finished, make sure to test it on Rex in `Main`!



<!-- ### Construct sortPosts


💻 **Complete the  constructor so it does 2 things:**

#### 1️⃣ initialize `topCardIndex` to its starting value of 0
> *The `topCardIndex` keeps track of which card is the current "top card".*

#### 2️⃣ initialize `cards` with all 52 cards from the deck

>To create all the cards in a deck, you can use nested for-loops to combine the 4 possible suit (❤️♠️♦️♣️) with the 13 possible ranks (1,2,3,4,5,6,7,8,9,10,11,12,13)
>
>Here is an example of using nested `for loops` to generate all possible weekday blocks:
```java
String[] days = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
int[] blocks = {1, 2, 3, 4, 5};

for (int i = 0; i < days.length; i++) {
    for (int j = 0; j < blocks.length; j++) {
        System.out.println(days[i] + " block " + blocks[j]);
    }
}
```

---

### shuffle()

💻 **Write a method `shuffle()` that randomly swaps the `card` objects inside the `cards` array**

1️⃣ loop through every position `cards` array   
2️⃣ each time you loop, randomly generate another location in the array, `rand_i`     
3️⃣ swap the `card` located at `i` with the `card` located at `rand_i`    

> Here's how to randomly generate a number 0-10:   
```java
Random rand = new Random(); // you only need to run this once
int randomIndex = rand.nextInt(10); //each time you need a new random number, run this line of code
```


---

### dealCard()
💻 **Write a method `dealCard()` that returns the next `card` in the deck**

1️⃣ if the `topCardIndex` isn't null, return the card there, then increase `topCardIndex` by 1   
2️⃣ else, return `null` -->

<!-- ---

## [3] Java Arrays


Here are some examples of how to use Java arrays:

### **Making a Array with Values**
```java
// Create an array of 5 int elements
int[] marks = {10, 20, 30, 40, 50};
```

### **Making a Array without values, then adding them**
```java
int[] marks = new int[3];
marks[0] = 50; 
marks[1] = 70;
marks[2] = 93;
```

### **Changing an Element Value**
```java
int[] nums = {1, 2, 0, 4};
// Change value at index 2
nums[2] = 3;
```

### **Get the length of an array**
```java
marks.length
``` -->

---

## [3] Deliverables

{{< deliverables>}}


### Push to Github

{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}

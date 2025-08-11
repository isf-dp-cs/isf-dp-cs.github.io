---
title: "Intro" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Java Intro
This lab will walk you through setting up the IntelliJ Integrated Development Environment (IDE) and introduce you to the the basics of Java.

---


## [0] Setup

### GitHub Configuration

{{<code-action "Join the isf-dp-cs organization on GitHub" >}} 

You will have received an email inviting you to join. You can also log in to github.com to accept the invitation.

{{<code-action "Select" >}} [`Projects`] > [`Get from VCS`]

{{< figure src="images/courses/java/intellijIDEA/vcs1.jpg" width="50%">}}

{{<code-action "Select" >}} [`Github`]
{{< figure src="images/courses/java/intellijIDEA/login1.jpg" width="50%">}}

{{<code-action "Click" >}} [`Authorize`]
{{< figure src="images/courses/java/intellijIDEA/login2.jpg" width="50%">}}
<!-- #### 4️⃣ [`Grant`] permissions to both organizations
>{{< figure src="images/courses/java/intellijIDEA/login3.jpg" width="50%">}} -->


---

### Clone the Repository

#### 💻 select [`Projects`] > [`Get from VCS`] > [`Repository URL`]

{{< figure src="images/courses/java/intellijIDEA/intellij_repo_url.png" width="50%">}}


 
{{< code-action "Paste your URL to clone the lab">}} 

Be sure to change `yourgithubusername` to your actual GitHub username.

```shell
https://github.com/isf-dp-cs/lab_intro_yourgithubusername
```

{{< expand "Cannot Find JDK 17  - Fix" "click to expand ⬇️" >}}

**💻 Select [`File`] > [`Project Structure`]**

{{< figure src="images/courses/java/choose_JDK_1.png" width="50%">}}

<br> 

**💻 From the `SDK:` dropdown, select `Java 21`**
{{< figure src="images/courses/java/choose_JDK_2.png" width="50%">}}


{{< /expand >}}

---

## [1] Variables

In Java, you have to specify the data type of each variable as you declare it, like this:

```java
int videosWatched = 353;
```

Java has 8 primitive data types:

| Data Type | Size    | Description                                                                       |
|-----------|---------|-----------------------------------------------------------------------------------|
| byte      | 1 byte  | Stores whole numbers from -128 to 127                                             |
| short     | 2 bytes | Stores whole numbers from -32,768 to 32,767                                       |
| int       | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647                         |
| long      | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float     | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits           |
| double    | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits               |
| boolean   | 1 bit   | Stores true or false values                                                       |
| char      | 2 bytes | Stores a single character/letter or ASCII values                                  |

You can print variables and text to the console like this:
```java
System.out.println("Number of videos watched: " + videosWatched);
```

<br>

{{< code-action "Add each of the following variables to your code, and print each one to the console.">}} Be sure to use an appropriate data type.

```shell
// add a variable that stores your username
// add a variable that stores the number of videos youve uploaded
// add a variable that stores the average rating you give to videos
// add a variable that stores the theme setting as 'D' 'L' or 'A' for dark mode, light mode, or auto
// add a variable that stores whether you are signed in or not
// add a variable that stores the name of your country
```

---

## [2] Strings

`Strings` are more complex objects that come with certain features. Here are some examples:

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName); // add Strings together
```

```java
String txt = "Hello! World";
int length = txt.length(); // get the length of a String
```

```java
String first = "java programming";
String second = "java programming";

boolean result1 = first.equals(second); // compare first and second Strings
```

```java
String txt = "Hello World";
char letter = txt.charAt(2); // returns character at index 2
```

### ANSI Codes
ANSI escape codes are special codes that can change the formatting when you print to the console

```java
String yellowBackground = "\u001b[43;1m";
String reset = "\u001b[0m";
System.out.println(yellowBackground + "the sun is yellow" + reset);
```

{{< code-action "Choose at least two additional ANSI codes from the charts below, and use them in your code.">}}


{{< expand "Standard Text Colors" "click to expand ⬇️" >}}
| code         | description        | code           | description               |
|--------------|--------------------|----------------|---------------------------|
| `\u001b[30m` | Black font color   | `\u001b[30;1m` | Bright Black font color   |
| `\u001b[31m` | Red font color     | `\u001b[31;1m` | Bright Red font color     |
| `\u001b[32m` | Green font color   | `\u001b[32;1m` | Bright Green font color   |
| `\u001b[33m` | Yellow font color  | `\u001b[33;1m` | Bright Yellow font color  |
| `\u001b[34m` | Blue font color    | `\u001b[34;1m` | Bright Blue font color    |
| `\u001b[35m` | Magenta font color | `\u001b[35;1m` | Bright Magenta font color |
| `\u001b[36m` | Cyan font color    | `\u001b[36;1m` | Bright Cyan font color    |
| `\u001b[37m` | White font color   | `\u001b[37;1m` | Bright White font color   |
{{< /expand >}}

{{< expand "256 Text Colors" "click to expand ⬇️" >}}

| code                          | description                                                      |
| ----------------------------- | ---------------------------------------------------------------- |
| `\u001b[38;5;` + n + `m ` | Standard font color where `n` can be a number between 0-7        |
| `\u001b[38;5;` + n + `m ` | High intensity font color where `n` can be a number between 8-15 |
| `\u001b[38;5;` + n + `m ` | Rainbow font color where `n` can be a number between 16-231      |
| `\u001b[38;5;` + n + `m ` | Gray font color where `n` can be a number between 232-255        |

{{< /expand >}}


{{< expand "Standard Background Colors" "click to expand ⬇️" >}}
| code         | description              | code           | description                     |
|--------------|--------------------------|----------------|---------------------------------|
| `\u001b[40m` | Black background color   | `\u001b[40;1m` | Bright Black background color   |
| `\u001b[41m` | Red background color     | `\u001b[41;1m` | Bright Red background color     |
| `\u001b[42m` | Green background color   | `\u001b[42;1m` | Bright Green background color   |
| `\u001b[43m` | Yellow background color  | `\u001b[43;1m` | Bright Yellow background color  |
| `\u001b[44m` | Blue background color    | `\u001b[44;1m` | Bright Blue background color    |
| `\u001b[45m` | Magenta background color | `\u001b[45;1m` | Bright Magenta background color |
| `\u001b[46m` | Cyan background color    | `\u001b[46;1m` | Bright Cyan background color    |
| `\u001b[47m` | White background color   | `\u001b[47;1m` | Bright White background color   |
{{< /expand >}}


{{< expand "256 Background Colors" "click to expand ⬇️" >}}

| code                          | description                                                            |
| ----------------------------- | ---------------------------------------------------------------------- |
| `\u001b[48;5;` + n + `m ` | Standard background color where `n` can be a number between 0-7        |
| `\u001b[48;5;` + n + `m ` | High intensity background color where `n` can be a number between 8-15 |
| `\u001b[48;5;` + n + `m ` | Rainbow background color where `n` can be a number between 16-231      |
| `\u001b[48;5;` + n + `m ` | Gray background color where `n` can be a number between 232-255        |
{{< /expand >}}

{{< expand "Other Styles" "click to expand ⬇️" >}}
| code        | description      |
| ----------- | ---------------- |
| `\u001b[0m` | Reset all styles |
| `\u001b[1m` | Bold             |
| `\u001b[4m` | Underline        |
| `\u001b[7m` | Reversed         |

{{< /expand >}}

---


The **256 Background Colors** follow a simple forumula: `\u001b[48;5;` + n + `m `

{{< code-action "Edit the loop to give an example of every possible background color.">}} 

{{< figure src="images/courses/java/ansi_colors.png" width="12%">}}

---

## [3] Conditionals

### User Input

In java, you get user input like this:
```java
Scanner scanner = new Scanner(System.in); // create a Scanner object
System.out.print("Are you having a good class so far? (y/n)");
String input = scanner.nextLine(); // get the user input
```

### Modulo
Just like in pseudocode, we can use the modulo operator to calculate the remainder of division. In java, we will use the `%` operator for mod.

```java
int a = 15;
int b = 8;
int remainder = a % b; // calculate the remainder
```

<br>

{{< code-action "Create a new loop in the code that it will do the following:">}} 

- ask the user for their name
- ask the user for their favorite color
- ask the user for their second favorite color
- print out the user's name, alternating between the two colors for each letter

---

## [4] Wordle

<!-- {{< figure src="images/courses/java/wordle.png" width="30%">}} -->
Now it's time to put all your new skills to good use! You will be coding the game `Wordle`.

{{< figure src="images/courses/java/wordle_icon.png" width="20%">}}

### Looping
Right now, the code picks a random 5-letter word, and allows the user a single guess. Not much of a game!

{{< code-action "Add a loop to the code, so that the user gets 6 guesses.">}} You can reference your code from the other files to write your loop.

---

### Highlight
A big part of `Wordle` is the feedback from the game. After each guess, the user is shown their guess, and each letter is highlighted according to these rules:

- **GRAY backround**: guess letters not included in the word 
- **YELLOW backround**: guess letters in the wrong location
- **GREEN backround**: guess letters in the correct location

{{< code-action "Each time the user guesses a word, print the word in the terminal, formatted with background colors.">}}

<!-- Here are some ANSI codes for you to use:
```java
String gray = "\u001b[47;1m";
String yellow = "\u001b[43;1m";
String green = "\u001b[42;1m";
String reset = "\u001b[0m";
``` -->

---

### End the loop early

Right now, the user will be asked for 6 guesses no matter what. However, if they guess correctly, the loop should end early. Here are three examples of `while` loops:

```java
// java while loop
while (i < 6) {
	System.out.println("Hello World");
	i++;
}
```

```java
// java while loop with OR logic 
while (i < 6 || i < 1) {
	System.out.println("Hello World");
	i++;
}
```

```java
// java while loop with AND logic 
while (i < 6 && i > 0) {
	System.out.println("Hello World");
	i++;
}
```

{{< code-action "Edit the loop so that if the user guesses correctly, it will end early.">}}



---

### Example steps for Wordle

<!-- {{< expand "View the steps to complete Wordle" >}} -->
<!-- {{< /expand >}} -->
>**// first some setup**   
>create variable `yellowBackground`, set to  `\u001b[47;1m`    
>create variable `greenBackground`, set to  `\u001b[42;1m`   
>create variable `greyBackground`, set to `\u001b[47;1m`   
>create variable `reset`, set to `\u001b[0m`   
>
>print "Enter a 5-letter word"   
>create variable `found`, set to `false`   
>
>**// begin the guessing**     
>create variable `i`, set to 0   
>loop while `i` <= 6 and `found` is `false`   
>>create variable `input`, set to the user's input  
>>      
>>**// let's check if they got it right**     
>>if `input` is the same as `word`
>>>  print "Well done! You guessed the word!"   
>>>  set `found` to `true`
>>>    
>> end if    
>>    
>>**// we need to format the output string correctly**    
>>create variable `output` set to an empty string     
>>      
>>**//now we loop through each letter to format it correctly**       
>> loop `j` from 0 to the length of the `input`    
>>> create variable `wordLetter`, set to the letter from the actual `word`     *// (use `.charAt(j)`)*      
>>> create variable `guessLetter`, set to the letter from the `input`    *//(use `.charAt(j)`)*       
>>>create variable `formattedLetter`, set to the `guessLetter` with the grey background    
>>>    
>>>**// should the letter be green?**    
>>>if the letters `wordLetter` and `guessLetter` match    
>>>>set `formattedLetter` to the `guessLetter` with green background    
>>>>         
>>>**// should the letter be yellow?**     
>>>else      
>>>> loop `h` from 0 to length of the `word`     
>>>>create variable `compareLetter`, set to the letter from the `word`  *// (use `.charAt(h)`)*         
>>>>>if the `compareLetter` matches the `guessLetter`        
>>>>>>set `formattedLetter` to the `guessLetter` with yellow background      
>>>>>>         
>>>>>end if    
>>>>>       
>>>>end loop     
>>>>        
>>>end if    
>>>add the `formattedLetter` to the end of the `output` 
>>>end loop   
>>>    
>>print the `output`
>>increment `i`     
>>end loop

---

## [5] Deliverables



{{< code-action "Push your code to GitHub using the following steps." >}} 

**✋ If you would like teacher feedback, begin your commit message with `#feedback`**


{{< deliverables>}}
{{< code-action "Select Commit from the menu on the left." >}} Select all your updated files. **Be sure to include a descriptive commit message.**

{{< figure src="images/courses/java/git_commit_1.png" width="40%">}}
{{< code-action "Click Commit and Push" >}} 

{{< figure src="images/courses/java/git_commit_2.png" width="40%">}}

{{< code-action "Click Push" >}}  
{{< figure src="images/courses/java/git_commit_3.png" width="40%">}}



{{< /deliverables>}}



<!-- ---

## [6] Extensions

{{< code-action "Push your code to GitHub">}} -->

<!-- 

{: .task }
Create a new java project, and this paste this starter code into your new Java class


```java
public class Harry {

	private boolean cloakOn;

	Harry() {
		System.out.println("making Harry Potter...");
	}

	void castSpell(String spell) {
		System.out.println("casting spell: " + spell);
	}

	void makeInvisible(boolean invisible) {
		this.cloakOn = invisible;

		if (cloakOn)
			System.out.println("Harry is invisible");
		else
			System.out.println("Harry is visible");
	}

	void spyOnSnape() {
		System.out.println("Harry sees Professor Snape doing nefarious things.");
	}

	public static void main(String[] args) {
		// 1. make harry potter
		// 2. become invisible
		// 3. spy on professor snape
		// 4. become visible again
		// 5. cast a “stupefy” spell
	}

}
```
 -->
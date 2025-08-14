---
title: "02. Wordle"
bookFlatSection: false
weight: 2
# bookCollapseSection: true
draft: true
---

# Wordle 

In this project, you will experience the IB IA structure and develop the code for a game based on the NYT Wordle.

{{< figure src="images/courses/java/wordle_icon.png" width="20%">}}

---
### Syllabus Topics
* **B1.1.4** Trace flowcharts for a range of programming algorithms.
* **B2.1.2** Construct programs that can extract and manipulate substrings.
* **B2.1.3** Describe how programs use common exception handling techniques.
* **B2.3.2** Construct programs utilizing appropriate selection structures.
* **B2.3.3** Construct programs that utilize looping structures to perform repeated actions.

---

## [0] Set up


{{< code-action "Go to your" >}} `cs9/unit00_drawing` **folder.**

```shell
cd ~/desktop/making_with_code/cs9/unit00_drawing/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  
```shell
git clone https://github.com/the-isf-academy/lab_ball_animation_yourGithubUsername
```
> Below you'll see that the `git clone` command has a `yourGithubUsername`. 
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/the-isf-academy/lab_ball_animation_emmaqbrown`*


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_ball_animation_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

{{< code-action "Take a look at the files inside with:" >}} `ls`
- `breathing_animation.py`
- `movement_animation.py`
- `color_animation.py`
- `basic_shapes.py`
- `helpers.py`
- `settings.py`
- `extension_animation.py`

---

## [4] Wordle

Now it's time to put all your new skills to good use! You will be coding the game `Wordle`.


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




## [3] Deliverables


{{< deliverables "For this lab, you should:" >}}

**Once you've successfully completed the sequence be sure to fill out [this Google form](https://docs.google.com/forms/d/e/1FAIpQLScz0x6-s3GRD9P7oZlcqq24XifGDTw9BQ_j8t8TIqqRYw0naw/viewform?usp=sf_link)**.


{{< code-action "Push your work to Github:" >}}
- git status
- git add file_name.py file_name2.py
- git status
- git commit -m "describe your drawing and your process here"
  > be sure to customize this message, do not copy and paste this line
- git push

{{< /deliverables >}}


---

# [4] Extension


{{< code-action "Open the file:" >}} `extension_animation.py` in Atom. It is just an empty file. 


{{< code-action "Code a custom animation of your choosing!" >}} Here is an example of what you could create:

{{< figure src="images/courses/cs9/unit00/extension_animation.gif" width="50%">}}


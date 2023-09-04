---
layout: default
title: Arrays 
parent: CS11
nav_order: 4
# published: false
---

# Arrays
{: .no_toc }

This page contains information and coding exercises for `arrays`.

{: .task }
Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.


<details open markdown="block">
  <summary>
    ☑️ Topics
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>
## Examples of how to use Arrays

### Adding to Arrays
```java
// Example of an auto loop
loop VAR from 1 to 10
   output VAR
end loop
```


### Accessing Elements of an Array
```java
// Example of accessing elements of an array
MONTHS = ["January","February","March","April","May","June","July", "August", "September","October","November","December"]
output MONTHS[0]
output MONTHS[4]
output MONTHS[12]
```

Output:

```java
January
May
undefined
```
### Looping through an Array

```java
// Using an auto loop with an array
MONTHS = ["January","February","March","April","May","June","July", "August", "September","October","November","December"]

loop INDEX from 0 to MONTHS.length-1
    output MONTHS[INDEX]
end loop
```

```java
// Using a while loop with an array
MONTHS = ["January","February","March","April","May","June","July", "August", "September","October","November","December"]

INDEX = 0
loop while MONTHS[INDEX] != null
    output MONTHS[INDEX]
    INDEX = INDEX + 1
end loop
```

## Practice Exercises


### Exercise 1: Checking an Array

{: .task }
>  - [ ] ***Create an array with 10 numbers***
>  - [ ] ***Get user input***
>  - [ ] ***Check whether user input is in the array***  
>
>Here are two example interactions:
>```
Input a number
>>> 3
Not in the array
>```
>
>```
Input a number
>>> 9
In the array
>```

### Exercise 2: Sorted/Unsorted

{: .task }
>  - [ ] ***Create an array with 10 numbers***
>  - [ ] ***Output whether user array is sorted or not***  
>
>Here are two arrays you can use to test your code:
>```
UNSORTED = [32,43,55,31,29,45,46,55,60,99]
SORTED = [19,21,25,27,30,35,37,41,42,50]
>```

### Exercise 3: Movie Ratings

{: .task }
>  - [ ] ***Create 3 empty arrays: BAD, GOOD, and MID***
>  - [ ] ***Get the user to input the title of a movie and 1-5 star rating for the movie***
>  - [ ] ***Get the user to input a 1-5 star rating for the movie***
>  - [ ] ***Add the movie title to one of the arrays, based on its rating***  
>  - [ ] ***After the user has added 5 movies, print out the arrays***
>
>Here is an example interaction:
>```
What is the title of the movie?
>>> Aladdin
What is your rating? (1-5)
>>>3
What is the title of the movie?
>>> Winnie the Pooh
What is your rating? (1-5)
>>>3
What is the title of the movie?
>>> Oppenheimer
What is your rating? (1-5)
>>>5
What is the title of the movie?
>>> Barbie
What is your rating? (1-5)
>>>5
What is the title of the movie?
>>> Morbius
What is your rating? (1-5)
>>>1
>
BAD movies 
Morbius
MID movies
Aladdin,Winnie the Pooh
GOOD movies
Oppenheimer,Barbie
>```
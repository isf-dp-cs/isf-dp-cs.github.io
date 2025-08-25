---
title: Arrays
weight: 4
# draft: true
---
# Arrays

This page contains information and coding exercises for `arrays`.

{{< code-action >}} Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.


## Examples of how to use Arrays

### Creating Arrays
```java
// new array without data
MYSTUFF = []

// new array with data
COLORS = ["aqua","crimson","mauve","rust","taupe","jade","navy", "lemon"]
```

### Adding to Arrays
```java
// make empty array
EVEN_NUMS = []

// loop to create each index
loop I from 0 to 9
   // add to array
   EVEN_NUMS[I] = I*2
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

## Practice Exercises


### Exercise 1: Searching

{{< code-action "Search through an Array to find the user input.">}} 
  1. Create an array with 10 numbers
  2. Get user input
  3. Check whether the user input is in the array

Here are two example interactions for this array:
```python
NUMS = [20, -1, 9, 4, 9, 30]
```
```shell
Input a number
>>> 3
Not in the array
```
```shell
Input a number
>>> 9
In the array
```

### Exercise 2: Sorted/Unsorted

{{< code-action "Check whether an array is sorted.">}} 
1. Create an array with 10 numbers
2. Output whether user array is sorted or not 

Here are two arrays you can use to test your code:
```shell
UNSORTED = [32,43,55,31,29,45,46,55,60,99]
SORTED = [19,21,25,27,30,35,37,41,42,50]
```

### Exercise 3: Movie Ratings

{{< code-action "Categorize the movies into arrays based on their ratings." >}} 
  1. Create 3 empty arrays: BAD, GOOD, and MID
  2. Get the user to input the title of a movie and 1-5 star rating for the movie
  3. Get the user to input a 1-5 star rating for the movie
  4. Add the movie title to one of the arrays, based on its rating
  5. After the user has added 5 movies, print out the arrays

Here is an example interaction:
```shell
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
```
```shell
>
---BAD movies---
Morbius
---MID movies---
Aladdin,Winnie the Pooh
---GOOD movies---
Oppenheimer,Barbie
>
```
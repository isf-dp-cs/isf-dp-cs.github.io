---
title: Loops
weight: 3
# draft: true

---


# Loops

This page contains information and coding exercises for `auto loops` and `while loops`.

{{< code-action >}} Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.


## Auto Loops
```java
// Example of an auto loop
loop VAR from 1 to 10
   output VAR
end loop
```

### Practice Auto Loops

{{< code-action "Write pseudocode to calculate the numbers in the fibonacci sequence." >}} 

Each number in the fibonacci sequence is the sum of the two previous numbers

Your output should look like this:

```shell
How many terms of the fibonacci sequence would you like?
>>> 10
1
1
2
3
5
8
13
21
34
55
```

## While Loops
```java
// Example of a while loop
NUM = 10
loop until NUM = 1
   NUM = NUM - 1
   output NUM
end loop
```
### Practice While Loops

{{< code-action "Write a guessing game." >}}

Here is an example interaction:
```shell
Guess a number between 1-10
>>> 3
Too low
>>>9
Too high
>>>7
You got it!
```
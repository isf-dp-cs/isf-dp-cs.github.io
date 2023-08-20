---
layout: default
title: Intro to Pseudocode 
parent: CS11
nav_order: 1
---

# Intro To Pseudocode
{: .no_toc }

Pseudocode is a language designed by the IB to help you focus on the `logic` of programming, without having to think too much about `syntax`. Although it's designed to be handwritte, we have a handy website that can compile and run pseudocode.

{: .task }
Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.

<!-- >{: .warning }
This compiler does not supply any error messages. If your program isn't running, you can visit the [debugging page](/CS11_labs/troubleshooting_pseudocode.html) to help you troubleshoot. -->

<details open markdown="block">
  <summary>
    ☑️ Topics
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Variables
In Pseudocode, all variable names must be written with ***capital letters***. 
>We use a single `=` for variable assignment.
>Comments are created using `//`

```java
X = 1 //integer
NAME = "Freddy" //string
RAINING = false //boolean
```

## Input/Output
```java
  NAME = input("What is your name?")  
  output "It's lovely to meet you, ",NAME
```
### Practice Input/Output

{: .task }
>***Write pseudocode to convert a given temperature from celcius to fahrenheit.*** 
>The forumula for calculating fahrenheit is ***(temp x 1.8) + 32***
>
>Here is an example interaction:
>```
Input a temperature in Celcius:
>>> 28
28 degrees in Celcius is 82.4 degrees in Fahrenheit
```

## Conditional Statements
In Pseudocode, conditional statements follow the format `if _______ then` or `else if ______ then`. After the statement, you end the conditional with `end if`.  A single `=` is used for comparison (in addition to a variable assignment).

```java
QUANTITY = input("How many hamburgers do you want?")
 
if  QUANTITY >= 10  then
   PRICE = 2.50
else if  QUANTITY <= 9  AND  QUANTITY >= 5  then
   PRICE = 3.00
else if QUANTITY = 1 then
   PRICE = 3.50
else
   PRICE = 4.00
end if // this is required
```

### Practice Conditional Statements

{: .task }
>***Write pseudocode to tell someone what generation they are in.*** 
>
>You can determine someone's generation using the following formula:
>
|:-----|:------------------|
| Boomer | 1946–1964 |
| Gen X | 1965-1980   | 
| Millenial   | 1981-1996 | 
| Gen Z    | 1996-2012 | 
| Gen Alpha   | 2013–now | 
>
>Here is an example interaction:
>```
What year were you born?
>>> 1995
You are a Millenial. I bet you love avocado toast.
```

## Nested Conditional Statements

```java
LEGS = input("Enter the number of legs the animal has: ")
FUR = input("Does the animal have fur? (yes/no)")
FLY = input("Can the animal fly? (yes/no)")

TYPE = ""

if LEGS = 4 then
    if FUR = "yes" then
        if FLY = "yes" then
            TYPE = "A flying mammal"
        else
            TYPE = "A mammal"
        end if
    else
        TYPE = "A reptile"
    end if
end if
output "The animal is: ", TYPE
```
### Practice Nested Conditional Statements

{: .task }
>***Copy the code above and use it as starter code. Add in more conditional statements to include:*** 
>
|:-----|:------------------|
| Bug | more than 4 legs, up to 8 legs | 
| Human | 2 legs, can't fly |
| Bird | 2 legs, can fly   | 
| Unknown Creature | everything else | 

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

{: .task }
>***Write a guessing game.***  
>
>Here is an example interaction:
>```
Guess a number between 1-10
>>> 3
Too low
>>>9
Too high
>>>7
You got it!
```

## Auto Loops
```java
// Example of an auto loop
loop VAR from 1 to 10
   output VAR
end loop
```

### Practice Auto Loops

{: .task }
>***Write pseudocode to calculate the numbers in the fibonacci sequence.*** 
>
>Each number in the fibonacci sequence is the sum of the two previous numbers
>
>Your output should look like this:
```
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
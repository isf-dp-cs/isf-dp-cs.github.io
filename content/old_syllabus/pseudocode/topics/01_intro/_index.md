---
title: "Intro to Pseudocode"
weight: 2
# numberHeaders: true
# draft: true

---

# Intro To Pseudocode

Pseudocode is a language designed by the IB to help you focus on the `logic` of programming, without having to think too much about `syntax`. Although it's designed to be handwritten, we have a handy website that can compile and run pseudocode.

{{< code-action >}} Choose one of these two compilers you can use for pseudocode:   
 > [This compiler is more forgiving](https://ibps.inandioglu.com/). I suggest you start here. Careful, because it will allow you to use Python syntax. Don't fall into that trap!     

 > [This pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) is more strict, and won't run at all if you don't use the right syntax. 

{{< aside "FYI" >}}
The more strict compiler does not supply any error messages. If your program isn't running, you can visit the [debugging page]({{< ref "/00_debugging" >}}) to help you troubleshoot.
{{< /aside >}}


## Variables
In Pseudocode, all variable names must be written with **capital letters**. 
>Use a single `=` for variable assignment.
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
### Practice

{{< code-action "Write pseudocode to convert a given temperature from celcius to fahrenheit." >}} 
The forumula for calculating fahrenheit is **(temp x 1.8) + 32**

Here is an example interaction:

```shell
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

### Practice

{{< code-action "Write pseudocode to tell someone what generation they are in." >}}  

You can determine someone's generation using the following formula:

| Generation | Years |
|:-----|:------------------|
| Boomer | 1946–1964 |
| Gen X | 1965-1980   | 
| Millenial   | 1981-1996 | 
| Gen Z    | 1996-2012 | 
| Gen Alpha   | 2013–now | 

Here is an example interaction:
```shell
What year were you born?
>>> 1995
You are a Millenial. I bet you love avocado toast.
```

## Nested Conditionals
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
### Practice
{{< code-action "Copy the code above and use it as starter code. Add in more conditional statements to include:" >}} 

| Type | Criteria | 
|:-----|:------------------|
| Bug | more than 4 legs, up to 8 legs | 
| Human | 2 legs, can't fly |
| Bird | 2 legs, can fly   | 
| Unknown Creature | everything else | 


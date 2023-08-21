---
layout: default
title: Debugging Pseudocode
parent: CS11
nav_order: 2
# published: false
---

# Common Issues
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>


---

## Code that won't even run
Here are some possible causes for code that does nothing (but should do something):



### Conditional: Missing keyword `then`
Double check that all `if` and `else if` statements have the keyword `then` included.

```java
if HAPPY = true then
   output "I'm happy!"
else if HAPPY = false then
   output "Not happy :("
end if
```
---

### Loop or Conditional: Missing `end`
All conditionals and loops must have an end statement.

```java
if HAPPY = true then
   output "I'm happy!"
end if //DONT FORGET THIS!
```

```java
loop I from 1 to 10
   output I
end loop //DONT FORGET THIS!
```

---

### Incorrect Keywords

| Use | Don't Use |
|:-----|:------------------|
| AND | and |
| OR | or   | 

---

## Code that partially runs, then stops

### Incorrect Variable Names
If you accidentally misspelled your variable name one time, it could cause your program to stop mid-way

```java
NUMBER = 10
NUMBR = NUMBR + 1 // your code will stop here
```

---

### Incorrect Boolean or null

| Use | Don't Use |
|:-----|:------------------|
| true | True |
| false | False   | 
| null | None   | 

---

### You used `else then`
When using else, you do not need `then`.

```java
if X < 0 then
   output "Negative"
else then // THIS WILL NOT WORK
   output "Not negative"
end if
```
---

## Code that crashes the pseudocode website

There is only one cause for this, and that is a ***infinite while loop***. Double check that your while loop will eventually end.

```java
// this loop will never end. the program will crash
X = 3
loop while X > 0
   if X % 2 = 0 then
      X = X-1
   end if
end loop
```
---

## Issue not listed here?

{: .warning }
>If you found an possible issue that wasn't included in this page, but should be, [let us know about it](https://docs.google.com/forms/d/e/1FAIpQLScxDxwDYWmBCwgXCK8FyW7jESl0C0HfxOyK5wJxXKPcWhgD0A/viewform?usp=sf_link) and we'll add it to this page.
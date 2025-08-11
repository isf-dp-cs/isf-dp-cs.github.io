---
title: Exam Review - Snakes
weight: 15
# draft: true
---

# Exam Review - Snakes

This page contains the Snake pseudocode problem seen on the 2025 April Exam. 

Completing the problems as coding exercises allows you to receive real-time feedback on whether your algorithm works.

Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab and use it to complete the exercises below.

<br>

---

A safari is home to a variety of snakes. 
<br>

The safari organization maintains a database of 100 snake species which are categorized by their toxicity. The database is read into a collection SNAKES, as follows:

```shell
Viper, 7.2, Krait, 8.5, Mamba, 6.1, Ribbon, 0.0, Cobra, 9.0, Adder, 4.8, Python, 2.3, Garter, 0.0
```


### Part A

{{< code-action "Construct an algorithm in pseudocode to read the data from SNAKES and store the names of the snakes in a one-dimensional string array, NAME, and the toxicity levels of the snakes into another one-dimensional string array, TOX.">}}

Here is the starter code for you to copy/paste into your editor. Write your code where it says `YOUR CODE GOES HERE`:

```java
// set up
SNAKES = new Collection()
SNAKES.addItem("Viper")
SNAKES.addItem(7.2)
SNAKES.addItem("Krait")
SNAKES.addItem(8.5)
SNAKES.addItem("Mamba")
SNAKES.addItem(6.1)
SNAKES.addItem("Ribbon")
SNAKES.addItem(0.0)
SNAKES.addItem("Cobra")
SNAKES.addItem(9.0)
SNAKES.addItem("Adder")
SNAKES.addItem(4.8)
SNAKES.addItem("Python")
SNAKES.addItem(2.3)
SNAKES.addItem("Garter")
SNAKES.addItem(0.0)
NAME = ["", "", "", "", "", "", "", ""] // create "empty" array
TOX = [-1,-1,-1,-1,-1,-1,-1,-1] // create "empty" array


"YOUR CODE GOES HERE"


// testing if it worked
output "names array"
loop I from 0 to 7
    output NAME[I]
end loop
output "tox array"
loop I from 0 to 7
    output TOX[I]
end loop
```
<br>

Once you've given it a solid try on your own, you can reference this solution:
{{< expand "Answer" >}}
```java
SNAKES.resetNext()

IDX = 0
loop while SNAKES.hasNext()
    NAME[IDX] = SNAKES.getNext()
    TOX[IDX] = SNAKES.getNext()
    IDX = IDX + 1
end loop
```
{{< /expand >}}

<br>

---

### Part B

{{< code-action "Construct an algorithm in pseudocode to sort the contents of the array NAME in alphabetical order using the selection sort algorithm. The indexes for the corresponding data in the two parallel arrays must remain the same after sorting.">}}

{{<aside>}}
In pseudocode, you can compare two strings alphabetically using `<` and `>`. For example, 
```java
"Apple" < "Banana"
true
```

```java
"Apple" > "Banana"
false
```

{{</aside>}}


Here is the starter code for you to copy/paste into your editor. Write your code where it says `YOUR CODE GOES HERE`:

```java
NAME = ["Viper", "Krait", "Mamba", "Ribbon", "Cobra", "Adder", "Python", "Garter"]
TOX = [7.2, 8.5, 6.1, 0.0, 9.0, 4.8, 2.3, 0.0]

output "Before sorting"
printNums(NAME)
printNums(TOX)



"YOUR CODE GOES HERE"



output "After sorting"
printNums(NAME)
printNums(TOX)

method printNums(ARR)
   loop C from 0 to 7
      output ARR[C]
   end loop
   output "========"
end method
```
<br>

Once you've given it a solid try on your own, you can reference this solution:
{{< expand "Answer" >}}
```java
loop I from 0 to NAME.length - 2
    MIN = I
    loop J from I+1 to NAME.length - 1
        if NAME[J] < NAME[MIN] then
           MIN = J
        end if
    end loop	

    //swap with minimum item  
    TEMP = NAME[MIN]
    NAME[MIN] = NAME[I]
    NAME[I] = TEMP

    TEMP = TOX[MIN]
    TOX[MIN] = TOX[I]
    TOX[I] = TEMP
end loop
```
{{< /expand >}}

<br>

---

### Part C

{{< code-action "Construct a method in pseudocode that takes the name of a snake as a parameter, searches for the name in the NAME array using a binary search, and returns the toxicity level of the snake. If the inputted name does not occur in the NAME array, it returns -1.">}}

{{<aside>}}
This question requires integer division, but the pseudocode compiler doesn't do it properly. 

What you would write on an exam:
```java
7 div 3
```

What the pseudocode compiler expects:
```java
div(7,3)
```

{{</aside>}}

Here is the starter code for you to copy/paste into your editor. For the method definition and call, **choose which version to use (recursive or non-recursive) and delete unneeded code**.    
   
Write your code where it says `YOUR CODE GOES HERE`:

```java
//setup
TOX = [4.8,9,0,8.5,6.1,2.3,0,7.2]
NAME = ["Adder","Cobra","Garter","Krait","Mamba","Python","Ribbon","Viper"]

method toxicityLookup(TARGET) //SL non-recursive approach
method toxicityLookup(TARGET, LOW, HIGH) //HL recursive approach



"YOUR CODE GOES HERE"



end method

//testing method
output "Type the ID number that you wish to find"
input USERTARGET

RESULT = toxicityLookup(USERTARGET) //SL non-recursive approach
RESULT = toxicityLookup(TARGET, LOW, HIGH) //HL recursive approach

if RESULT >= 0 then
    output USERTARGET , ":" , RESULT
else
    output USERTARGET , " was not found"
end if
```
<br>

Once you've given it a solid try on your own, you can reference this solution:
{{< expand "[SL] Non-Recursive Answer" >}}
```java
method toxicityLookup(TARGET)
  LOW = 0
  HIGH = NAME.length-1
  FOUND = -1

  loop while FOUND = -1 AND LOW <= HIGH
    MID = div( LOW + HIGH , 2)   // should be (LOW + HIGH) div 2
                                // but (A div B) doesn't work correctly in this editor
    if NAME[MID] = TARGET then
        FOUND = TOX[MID]
    else if TARGET < NAME[MID] then
        HIGH = MID - 1
    else
        LOW = MID + 1
    end if
  end while
  return FOUND
end method
```
{{< /expand >}}

Once you've given it a solid try on your own, you can reference this solution:
{{< expand "[HL] Recursive Answer" >}}
```java
method toxicityLookup(TARGET, LOW, HIGH)

  if  LOW <= HIGH then
    MID = div( LOW + HIGH , 2)   // should be (LOW + HIGH) div 2
                                // but (A div B) doesn't work correctly in this editor
    if NAME[MID] = TARGET then
        return TOX[MID]
    else if TARGET < NAME[MID] then
        return toxicityLookup(TARGET, LOW, MID - 1)
    else
        return toxicityLookup(TARGET, MID + 1, HIGH)
    end if
  else
     return -1
  end if

end method
```
{{< /expand >}}
<br>

---


## Deliverables

{{< deliverables >}}
Paste all your code in your Code Log

<!-- Complete the [Exit Ticket](https://docs.google.com/forms/d/e/1FAIpQLScgcYSCyOc-9A60yAu78deLLUhKunf9wPlE_D1hJHy12Hzq1Q/viewform?usp=sf_link) -->

{{< /deliverables >}}
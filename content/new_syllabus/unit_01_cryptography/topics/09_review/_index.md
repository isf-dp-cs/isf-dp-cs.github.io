---
title: Review
weight: 10
# draft: true
---

# Review

This page contains information and coding exercises for all our pseudocode topics: `variables`, `loops`, `arrays`, `parallel arrays`, `searching`, `methods`, `sorting`,`collections`.

Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.

{{<aside>}}
Make sure you are never using `output`/`return` inside an `if` statement! ❌       
Instead, use a variable to store the `output`/`return` value, and `output`/`return` it at the end ✅
{{</aside>}}


<br>

---


## Conditionals, Loops, Mod 

{{<aside>}}
Remember, you can use `a mod b` or `a%b` to find the remainder after integer division `a//b`.    
If the remainder is 0, that means `a` is evenly divisible by `b`.  
{{</aside>}}

{{< code-action "Write a method that outputs a checkerboard pattern of `#` and `_`.">}} 
> **input**: number of rows, number of columns    
> **return**: none

example output:
```java
#_#_#
_#_#_
#_#_#
_#_#_
#_#_#
```

{{< expand "Answer" >}}
```java
method pattern(ROWS, COLUMNS)
  loop R from 1 to ROWS
    ONE_ROW = ""
    loop C from 1 to COLUMNS
      if ((R+C) mod 2) = 0 then
        ONE_ROW = ONE_ROW + "#"
      else 
        ONE_ROW = ONE_ROW + "_"
      end if
    end loop
    output ONE_ROW
  end loop
end method

pattern(5,5)
```
{{< /expand >}}

<br>

---


## Collections, Array, Search, Mod

A number is prime if it cannot be evenly divided by any number besides 1 and itself. For example 5 is prime, and can only be evenly divided by 5 and 1.    

To check if `n` is prime, you can try dividing it by every number lower than `n`. If you are able to evenly divide it, it is not prime. If you try every number and none work, then it is prime.

{{< code-action "Write a method that determines whether or not a number is prime.">}}
> **input**: a number   
> **return**: `true`/`false`

{{< expand "Answer" >}}
```java
method isPrime(NUM)
  primeCheck = true

  loop I from 2 to NUM-1
     if NUM mod I == 0 then
       primeCheck = false
     end if
  end loop

  return primeCheck
end method

output isPrime(19)
```
{{< /expand >}}

{{< code-action "Write a method that searches through a collection. Each time it finds a prime number, it should add that prime number to a new array. It should return that array.">}}
> **input**: a collection of numbers   
> **return**: an array of all the primes found in the collection

{{< expand "Answer" >}}
```java
method primeSearch(NUMS_COLLECTION)
  PRIMES = []
  INDEX = 0
  NUMS_COLLECTION.resetNext()
  loop while NUMS_COLLECTION.hasNext()
    NUMBER = NUMS_COLLECTION.getNext()
    if isPrime(NUMBER) = true then
       PRIMES[INDEX] = NUMBER
       INDEX = INDEX + 1
    end if
  end loop
  return PRIMES 
end method

NUMS = new Collection()

NUMS.addItem(13)
NUMS.addItem(14)
NUMS.addItem(15)
NUMS.addItem(16)
NUMS.addItem(17)
NUMS.addItem(18)
NUMS.addItem(19)
NUMS.addItem(20)
NUMS.addItem(21)
NUMS.addItem(22)
NUMS.addItem(23)

output primeSearch(NUMS)
```
{{< /expand >}}

<br>


---


## Collections, Arrays, Loops

{{< code-action "Write a method that transfers the elements of a collection into an array, but in the opposite order.">}} You may assume the collection has exactly 10 items in it.

> **input**: a collection with 10 items     
> **return**: an array, which contains the same elements but in the opposite order

{{< expand "Answer" >}}
```java
method swapOrder(MY_COLLECTION)
  NEW_ARRAY = []
  INDEX = 9

  MY_COLLECTION.resetNext()
  loop while MY_COLLECTION.hasNext()
     ITEM = MY_COLLECTION.getNext()
     NEW_ARRAY[INDEX] = ITEM
     INDEX = INDEX - 1
  end loop
  
  return NEW_ARRAY

end method

NUMS = new Collection()

NUMS.addItem(14)
NUMS.addItem(15)
NUMS.addItem(16)
NUMS.addItem(17)
NUMS.addItem(18)
NUMS.addItem(19)
NUMS.addItem(20)
NUMS.addItem(21)
NUMS.addItem(22)
NUMS.addItem(23)

output swapOrder(NUMS)

```
{{< /expand >}}


<br>


---



## Deliverables

{{< deliverables >}}
Paste all your code in your Code Log

<!-- Complete the [Exit Ticket](https://docs.google.com/forms/d/e/1FAIpQLScgcYSCyOc-9A60yAu78deLLUhKunf9wPlE_D1hJHy12Hzq1Q/viewform?usp=sf_link) -->

{{< /deliverables >}}
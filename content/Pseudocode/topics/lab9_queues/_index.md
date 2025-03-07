---
title: Stacks and Queues
weight: 10
# draft: true

---

# Stacks and Queues

This page contains information and coding exercises for `queues`.

{{< code-action >}} Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.


---


## Queue Examples

### Creating a new Queue
```java
NAMES = new Queue()
```

### Queue methods
```java
NAMES.enqueue("Bob") // put an item into the end of a queue
NEXT_NAME = NAMES.dequeue() // remove and return the item from the front of the Queue
NAMES.isEmpty() // returns TRUE if queue is empty, FALSE otherwise
```

### Creating a new Stack
```java
NAMES = new Stack()
```

### Stack methods
```java
NAMES.push("Bob") // adds an item to the top of the stack
NAMES.pop() // remove and return the item from the front of the top of the stack
NAMES.isEmpty() // returns TRUE if stack does not contain any elements, FALSE otherwise
```

## Practice Exercises

### Exercise 1: Reverse an Queue, using a Stack

{{< code-action "Write a program that does the following: " >}}
  1. Create a Queue
  2. Add 5 items to it
  3. Create a Stack for temporary storage 
  4. Loop through the Queue, and push each item onto the Stack
  5. Loop through the Stack, and push all items back onto the Queue

At the end, the Queue should be reversed. For example:

This Queue: 

```shell
- back -
Abby
Brittany
Chloe
Daria
Eloise
- front -
```

Should become: 

```shell
- back -
Eloise
Daria
Chloe
Brittany
Abby
- front -
```

---


### Exercise 2: Reverse a Stack, using a Queue

{{< code-action "Similarly to the exercise above, you should write pseudocode that reverses the order of a Stack, using a Queue as temporary storage" >}}

This Stack: 

```shell
- top -
Abby
Brittany
Chloe
Daria
Eloise
- bottom -
```

Should become: 

```shell
- top -
Eloise
Daria
Chloe
Brittany
Abby
- bottom -
```

---

✏️ When you're done, paste your finished pseudocode in your lab log.
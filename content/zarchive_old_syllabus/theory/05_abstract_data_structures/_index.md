---
title: "[5] Abstract Data Structures"
weight: 50
# bookFlatSection: false #this makes it so this page isn't seen
# bookCollapseSection: true
---
# Abstract Data Structures

---

## Review Tools
[Topic 5 Revision](https://www.computersciencecafe.com/key-terminology-ib-topic-5-223994.html) from Computer Science Cafe.

[Topic 5 Key Terminology](https://www.computersciencecafe.com/key-terminology-ib-topic-5.html) from Computer Science Cafe.


[Video 1](https://youtu.be/M5QYynjOaRU?si=tO7d1b5DmZxW97KF) from CS Classroom (Intro, 2D Arrays, Recursion)

[Video 2](https://youtu.be/wf3Ifpbyy38?si=t2ubBRi_AkZko5AX) from CS Classroom (Stacks and Queues)


---

## Key Terms (covered)

{{< expand "View Terms" >}}

*Covered for Class of 2026*

| Term                  | Meaning                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 2D arrays             | A data structure that stores elements in a grid-like format with rows and columns.                                                         |
| Stacks                | A data structure that follows the Last-In-First-Out (LIFO) principle, where elements are added and removed from the same end.              |
| Queues                | A data structure that follows the First-In-First-Out (FIFO) principle, where elements are added to one end and removed from the other end. |
| Recursion             | A programming technique where a function calls itself.                                                                                     |
| Base case             | The terminating condition for a recursive function.                                                                                        |
| Recursive case        | The condition where a recursive function continues to call itself.                                                                         |
| Linked lists          | A data structure that stores elements in nodes, where each node contains a value and a pointer to the next node.                           |
| Double linked lists   | A linked list where each node has a pointer to both the next and the previous node.                                                        |
| Circular linked lists | A linked list where the last node points to the first node, creating a circular structure.                                                 |
| Pointers              | A variable that stores the memory address of another variable.                                                                             |
| Binary trees          | A tree-based data structure where each node has at most two children.                                                                      |
| Non-binary trees      | A tree-based data structure where each node can have more than two children.                                                               |
| Nodes                 | An individual element of a data structure, such as a linked list or a tree.                                                                |
| Parent node           | A node that has one or more children.                                                                                                      |
| Left-child node       | The child node of a parent that appears to the left.                                                                                       |
| Right-child node      | The child node of a parent that appears to the right.                                                                                      |
| Subtree node          | A smaller tree that is part of a larger tree.                                                                                              |
| Root node             | The topmost node in a tree.                                                                                                                |
| Leaf node             | A node that has no children.                                                                                                               |
| Tree traversal        | The process of visiting all nodes in a tree data structure.                                                                                |
| Pre-order traversal   | A type of tree traversal where the root node is visited first, followed by the left subtree and then the right subtree.                    |
| Post-order traversal  | A type of tree traversal where the left subtree is visited first, followed by the right subtree, and then the root node.                   |
| In-order traversal    | A type of tree traversal where the left subtree is visited first, followed by the root node, and then the right subtree.                   |

{{< /expand >}}

---

## Example Problems Stacks + Queues


**1. Identify two applications of a stack. [2]**

{{< expand "Answer" >}}
Award [2 max]:
- Running recursive processes.
- Holding return memory addresses / function call.
- Expression evaluation and conversion / evaluating arithmetic expressions.
- String reversal.
- Interrupt handling.
- Undo / redo in gaming / any other example.
- Backwards navigation on a web browser.
- Backtracking path in algorithms.
- Stack-based parsing algorithms.
- Reversing a queue.
- Depth-first search algorithms.
{{< /expand >}}

---

**2. Identify two applications of queues in computing. [2]**
{{< expand "Answer" >}}
Award [2 max]:
- Print queue (serving requests on a shared printer) / spooling in printer.
- CPU task scheduling.
- Handling of interrupts (in the same order as they arrive).
- Buffer for devices like keyboard.
- Queues in routers / switches.
- Mail queues.
- Simulation / computer modeling of physical queues (e.g., a customer waiting line in a supermarket queue, a call center where technical personnel take calls and provide service, etc.).
- Handling website traffic / network congestion.
- Maintaining playlist in media player.

Note: Accept other appropriate examples of applications of queues in computing.
{{< /expand >}}

---

**3. Stack operations. [6]**

A stack is a data structure that is used in the implementation of a recursive method.

#### (b) Outline the purpose of the stack access method `isEmpty()`. [2]

{{< expand "Answer" >}}
Award [2 max]:
- `isEmpty()` returns a Boolean value `True` if the stack size is 0, else it returns `False`.
- It is used/called in conditions in `if`/`while` statements or before an attempt is made to remove a value from the stack.
- Prevents performing operations on an empty stack / prevents stack underflow error.
{{< /expand >}}

---

**The stack TOWNS holds several town names, and the name “Cardiff”is on the top of
the TOWNS stack (see Figure 1a).**   

**An algorithm is needed that will reverse the contents of the TOWNS stack. The name
“Geneva” should be on top of the `TOWNS` stack after reversing its contents (see
Figure 1b).**

{{< figure src="images/courses/abstract_data_structures/towns_stack_reversal.png" width="70%">}}



#### (c) Construct an algorithm that will reverse the `TOWNS` stack using an empty queue. [5]

{{< expand "Answer" >}}
Award [5 max]:
- Award [1] for correct use of stack and queue access methods (`isEmpty()`, `push()`, `pop()`, `enqueue()`, `dequeue()`).
- Award [1] for looping through the `TOWNS` stack.
- Award [1] for taking an element from the top of the `TOWNS` stack.
- Award [1] for enqueuing the value popped from the `TOWNS` stack to the `TEMP` queue.
- Award [1] for looping through the `TEMP` queue and pushing the dequeued value back onto the `TOWNS` stack.

Example:
```python
loop while not TOWNS.isEmpty()
    X = TOWNS.pop()
    TEMP.enqueue(X) // TEMP is an empty queue
end loop

loop while not TEMP.isEmpty()
    Y = TEMP.dequeue()
    TOWNS.push(Y)
end loop
```

{{< /expand >}}

---

**4. A computer science student is coding and running a program while several documents, such as essays, lab reports and homework, are being printed out.**

#### (a) Define the term queue as a data structure. [1]

{{< expand "Answer" >}}
Award [1 max]:
- A data structure in which items are added to the tail/rear (one end) and removed from the head/front (another end).
- First In First Out (FIFO) data structure.
{{< /expand >}}

#### (b) Identify two different queues used in the given scenario. [2]

{{< expand "Answer" >}}
Award [2 max]:
- Print queue.
- Keyboard queue.

Accept any other job queue (e.g., program is running).
{{< /expand >}}

---

**5. Identify one characteristic of a queue. [1]**

{{< expand "Answer" >}}
Award [1 max]:
- A linear (abstract) data structure.
- First In First Out (FIFO).
- Elements can only be added at one end (rear/tail) and removed from the other (front/head).
- Once a new element is inserted into the queue (enqueue), all the elements inserted before it must be removed (dequeue) to remove the new element.
{{< /expand >}}

---

## Example Problems 2D Arrays

**1. 2D Arrays using dice rolls. [15]**

A program is developed to simulate the roll of dice in a game.

Three dice are thrown, with faces that have numbers from 1 to 6.

The dice are thrown seven times, and the data are stored in a two-dimensional array called DICEDIAL (see Figure 2).

{{< figure src="images/courses/abstract_data_structures/dice_2d_array.png" width="70%">}}


#### (a) Construct an algorithm in pseudocode to calculate the sum of all values stored in the `DICEDIAL` array. [3]

{{< expand "Answer" >}}
Award [3 max]:
- Award [1] for a correct row loop.
- Award [1] for a correct column loop.
- Award [1] for initializing `SUM` and summing inside the loop using correct array indexes.

Example 1:
```python
SUM=0
loop I from 0 to 6
       //accept DICEDIAL.length-1
       // or len(DICEDIAL)-1 instead of 6
   loop J from 0 to 2
        //accept DICEDIAL[I].length-1
        // or len(DICEDIAL[I])-1 instead of 2

       SUM = SUM + DICEDIAL[I][J]
    end loop
end loop
```

Example 2:
```python
I =0
SUM=0
loop while I <= 6
      j=0
      loop while J <= 2
         SUM =SUM + DICEDIAL[I][J]
         J = J + 1
      end loop
      I = I + 1
end loop
```
{{< /expand >}}

---

The sub-program DuplicateNum(DICEDIAL,R) checks whether there are repeated numbers in row R. If the numbers are not repeated, it returns 0, otherwise it returns the repeated number.

The DuplicateNum() sub-program will produce the following from the values used in Figure 2:

DuplicateNum(DICEDIAL,0) returns 2

DuplicateNum (DICEDIAL,1) returns 4

DuplicateNum(DICEDIAL,2) returns 0

#### (b) Construct an algorithm in pseudocode for the sub-program `DuplicateNum(DICEDIAL, R)`. [4]

{{< expand "Answer" >}}
Award [4 max]:

**Example 1 (if-else statement):**   
- Award [1] for initializing `VAL` to 0 and returning `VAL` (in case no duplicates).
- Award [3 max] for determining a correct value (1 mark for each correct condition and change of the value of `VAL` if needed).
- Note: Award marks for determining a correct return value in each of possible cases: three different values in row R- no duplicates, any two numbers/values in row R are the same and all three values in row R are the same.
- Award [1] for correct use of row index and column index in the `DICEDIAL` array.
- Note: the method heading may not appear in a candidate’s response. 


```python
DuplicateNum(DICEDIAL, R)
    VAL = 0
    if DICEDIAL[R][0] = DICEDIAL[R][1]
        VAL = DICEDIAL[R][0]
    else if DICEDIAL[R][0] = DICEDIAL[R][2]
        VAL = DICEDIAL[R][0]
    else if DICEDIAL[R][1] = DICEDIAL[R][2]
        VAL = DICEDIAL[R][1]
    end if
    return VAL
end DuplicateNum
```


**Example 2 (several if statements- inefficient, but it outputs a correct value):**
- Award [1] for each correct if statement, ×4
- Award [1] for correct use of row index and column index in the DICEDIAL array

```python
if //three different numbers
  DICEDIAL[R][0]!=DICEDIAL[R][1]
     and DICEDIAL[R][0]!=DICEDIAL[R][2]
         and DICEDIAL[R][1]!=DICEDIAL[R][2]
  then
      RESULT=0
end if
if DICEDIAL[R][0]=DICEDIAL[R][1] and DICEDIAL[R][0]=DICEDIAL[R][2]
  then //three same numbers
      RESULT = DICEDIAL[R][0]
end if
//any two same
if DICEDIAL[R][0]=DICEDIAL[R][1] or DICEDIAL[R][0]=DICEDIAL[R][2]
  then
      RESULT = DICEDIAL[R][0]
end if
if DICEDIAL[R][1]=DICEDIAL[R][2]
     then
          RESULT = DICEDIAL[R][1]
end if
return RESULT
```
- Note: Accept answers written in Java/ Python. The following example answer is written in Java.

```java
public int DuplicateNum (int[][] DiceDial, int row)
{ 
if(DiceDial[row][0] == DiceDial[row][1] || DiceDial[row][0] == 
DiceDial[row][2])
       { 
       return DiceDial[row][0]; 
       }
    else if(DiceDial[row][1] == DiceDial[row][2])
                  { 
                     return DiceDial[row][1]; 
                  } 
          else return 0; 
}
```
**Example 3 (single loop):**
- Award [1] for initializing VAL to 0 and return VAL
- Award [1] for correct loop
- Award [1] for correct condition and change of VAL
- Award [1] for if statement after the loop
- Award [1] for correct use of row index and column index in the DICEDIAL array

```python
DuplicateNum (DICEDIAL, R)
VAL=0
loop K from 0 to 1
    if (DICEDIAL[R][K]== DICEDIAL[R][K+1])
          then
             VAL= DICEDIAL[R][K]// or DICEDIAL[R][K+1]
    end if
end loop // determines VAL
         //comparing only DICEDIAL[R][0] with DICEDIAL[R][1]
         // and DICEDIAL[R][1] with DICEDIAL[R][2]
if (DICEDIAL[R][0] == DICEDIAL[R][2])
          then
             VAL= DICEDIAL[R][0] //or DICEDIAL[R][2]
end if
return VAL
end DuplicateNum
```
**Example 4 (nested loops):**
- Award [1] for initializing VAL to 0 and return VAL
- Award [1] for correct outer loop
- Award [1] for correct inner loop
- Award [1] for correct condition and change of VAL
- Award [1] for correct use of indexes in the DICEDIAL array

```python
VAL =0
 loop K from 0 to 1
   loop J from K + 1 to 2
       if DICEDIAL[R][K] == DICEDIAL[R][J]
          then VAL = DICEDIAL[R][K]
       end if
   end loop
end loop
return VAL
```
{{< /expand >}}

---

The sub-program highestRT(DICEDIAL) accepts the DICEDIAL array and outputs the highest row total and the indexes of all the rows with that total.

From the example data given in Figure 2, highestRT(DICEDIAL) would output that the highest row total is 16, and it occurs in the rows with indexes 3 and 4.

#### (c) Construct an algorithm in pseudocode for the sub-program `highestRT(DICEDIAL)`. [8]

{{< expand "Answer" >}}

**Example 1:**
Award [8 max]:
- Award [1] for initializing `HIGHEST`.
- Award [1] for a correct row loop (`I`).
- Award [1] for calculating the sum of all elements in the `I`th row.
- Award [1] for using correct indexes in the `DICEDIAL` array.
- Award [1] for comparing the row sum with the highest row sum so far.
- Award [1] for changing the value of `HIGHEST` if needed.
- Award [1] for outputting the highest row sum once.
- Award [1] for a second loop to output row numbers with the highest total.

Example:
```python
highestRT(DICEDIAL)
    HIGHEST = 0
    loop I from 0 to 6
        SUM = DICEDIAL[I][0] + DICEDIAL[I][1] + DICEDIAL[I][2]
        if SUM > HIGHEST
            HIGHEST = SUM
        end if
    end loop
    output('The highest row total:', HIGHEST)
    output('The highest row total occurs in the following rows:')
    loop I from 0 to 6
        SUM = DICEDIAL[I][0] + DICEDIAL[I][1] + DICEDIAL[I][2]
        if SUM = HIGHEST
            output(I)
        end if
    end loop
end highestRT
```

**Example 2:**
- Award [2 max] for defining the ROWTOTALS array (1 mark for correct row loop (I) and 1 mark for calculating the sum of all elements in the Ith row of the DICEDIAL array)
- Award [1] for initializing HIGHEST
- Award [3 max] for searching for the highest (1 mark for the correct loop, 1 mark for comparing the row sum with the highest row sum so far and 1 mark for and changing the value of HIGHEST if needed)
- Award [1] for outputting the highest row sum once
- Award [3 max] outputting the numbers of rows with the highest total (1 mark for a loop, 1 mark for comparing the row total with the highest total and 1 mark for outputting the corresponding index in the ROWTOTALS array)

```python
loop I from 0 to 6
   S = 0
   loop K from 0 to 2 S = S + DICEDIAL[I][K]
      end loop
   ROWTOTALS[I] = S
end loop
      //ROWTOTALS[R] holds the sum of all
      //numbers in row R of the DICEDIAL array

HIGHEST = 0 //any number <= 0 OR ROWTOTALS[0]

loop I from 0 to 6
   if ROWTOTALS[I] > HIGHEST
      then HIGHEST = ROWTOTALS[I]
   end if
end loop //searching for the highest row total

output(‘the highest row total:’, HIGHEST)

output(‘the highest row total occurs in the following rows:’)

loop I from 0 to 6
   if ROWTOTALS[I] = HIGHEST
      then output(I)
   end if
end loop
```

**Example 3:**
- Award [1] for initializing MAXT
- Award [1] for correct row loop (R)
- Award [1] for calculating the sum of all elements in row R (using correct indexes in the DICEDIAL array)
- Award [1] for comparing the row sum with the highest row sum so far (S == MAXT), and changing
the value FLAGMAXTIND[R] to 1 if they are equal
- Award [1] for comparing the row sum with the highest row sum so far (S > MAXT) and updating the highest row sum so far
- Award [1] for reinitializing FLAGMAXTIND array
- Award [1] for changing the value FLAGMAXTIND[R] to 1
- Award [1] for outputting the highest row total only once
- Award [2] for outputting row numbers with the highest total (1 mark for a loop, 1 mark for output within if statement)

```python
// assume FLAGMAXTIND - zero array initialized
MAXT = 0
loop R from 0 to 6
      S = DICEDIAL[R][0]+ DICEDIAL[R][1]+ DICEDIAL[R][2]
      if S = MAXT
         then
            FLAGMAXTIND[R]=1
      end if
      if S > MAXT
         then
            MAXT = S
            loop K from 0 to 6
               FLAGMAXTIND[K]=0
            end loop
            FLAGMAXTIND[R]=1
      end if
end loop

output('The highest row total is', MAXT)

output(' and it occurs in the following rows:')
loop R from 0 to 6
      if FLAGMAXTIND[R] == 1 // or FLAGMAXTIND[R] != 0
         then
            output(R)
      end if
end loop 
```

{{< /expand >}}

---
**2. Bus Stops [15]**

A bus company provides services within a city. Passengers can look up the distance between any two bus stations on any of its routes.

For each route, a one-dimensional string array is used to store the names of all bus stations on the route, and a two-dimensional array is used to store the distances between the bus stations (in kilometers). Only the lower triangle of the two-dimensional array is used to store the distances.

Figure 1 shows data about Route X, a bus route between Oppox and Dovely.

{{< figure src="images/courses/abstract_data_structures/bus_stop_2d_array.png" width="70%">}}

For example, the distance between Kingsley and Kronos (2.0 kilometers) can be found in `ROUTE_X_DISTANCES[7][5]`.

#### (a) State the distance between Kiko and Longlines. [1]

{{< expand "Answer" >}}
Award [1 max]:  
- 5.9;
{{< /expand >}}

---



The two-dimensional array `ROUTE_X_DISTANCES` is valid if all the entries on and above the main diagonal are zero and all the entries below the main diagonal are greater than zero.


{{< figure src="images/courses/abstract_data_structures/bus_stop_2d_array_2.png" width="70%">}}


#### (b) Construct an algorithm in pseudocode that checks the elements of the array `ROUTE_X_DISTANCES` and outputs whether the array is valid or not. [5]

Note: Marks should also be awarded if a candidate wrote the algorithm in Java/Python/Javascript.

{{< expand "Answer" >}}
Award [5 max]:  
- Award [1] for correct outer/row loop.  
- Award [1] for correct inner/column loop.  
- Award [1] for use of a flag.  
- Award [1] for checking whether all elements on and above the main diagonal are zero.  
- Award [1] for checking all elements below the main diagonal (they all should be positive numbers).  
- Award [1] for outputting the appropriate message.

**Example 1**:
```python
VALID = True
loop R from 0 to 9
    loop C from 0 to 9
        if R > C and ROUTE_X_DISTANCES[R][C] <= 0
            then VALID = False
        end if
        if R <= C and ROUTE_X_DISTANCES[R][C] != 0
            then VALID = False
        end if
    end loop
end loop
if VALID
    then output('VALID')
    else output('INVALID')
end if
```

**Example 2**:
```python
FLAG = 1
loop R from 1 to 9
    loop C from 0 to R - 1
        if ROUTE_X_DISTANCES[R][C] <= 0
            then FLAG = 0
        end if
    end loop
end loop
loop R from 0 to 9
    loop C from R to 9
        if ROUTE_X_DISTANCES[R][C] != 0
            then FLAG = 0
        end if
    end loop
end loop
if FLAG == 1
    then output('IT IS VALID')
    else output('IT IS NOT VALID')
end if
```
{{< /expand >}}

---

#### (c) Construct an algorithm in pseudocode that inputs the names of two bus stations and outputs the distance between them. If any of the inputted names are not found, the method should output an appropriate message. [6]

Note: Award marks if algorithm is presented in a Java/Python/Javascript/any other program rather than IB pseudocode.
For example, please see the following Javascript program

{{< expand "Answer" >}}
Award [6 max]:  
- Award [1] for all variables correctly declared and initialized.  
- Award [1] for looping through the array `ROUTE_X_NAMES`.  
- Award [1] for determining positions of the first name in the array.  
- Award [1] for determining positions of the second name in the array.  
- Award [1] for outputting a message if one or the other is not present.  
- Award [1] for a comparison of positions to find the largest.  
- Award [1] for the correct output of distance from `ROUTE_X_DISTANCES`.

**Example 1**:
```python
NAME1 = input()
NAME2 = input()
POS1 = -1
POS2 = -1
K = 0
loop while K <= 9 and (POS1 == -1 or POS2 == -1)
    if ROUTE_X_NAMES[K].equals(NAME1) // accept '==' instead
        then POS1 = K
    end if
    if ROUTE_X_NAMES[K].equals(NAME2)
        then POS2 = K
    end if
    K = K + 1
end while
if POS1 == -1 OR POS2 == -1
    then output('stations are not found')
    else
        if POS1 > POS2
            then output(ROUTE_X_DISTANCES[POS1][POS2])
            else output(ROUTE_X_DISTANCES[POS2][POS1])
        end if
end if
```

**Example 2**:
```python
ST1 = input()
ST2 = input()
PS1 = -1
PS2 = -1
loop K from 0 to 9
    if ROUTE_X_NAMES[K] == ST1
        then PS1 = K
    end if
    if ROUTE_X_NAMES[K] == ST2
        then PS2 = K
    end if
end loop
if PS1 != -1 AND PS2 != -1
    then if PS1 < PS2
        then T = PS1
        PS1 = PS2
        PS2 = T
    end if
    output(ROUTE_X_DISTANCES[PS1][PS2])
    else
    output('stations not found')
end if
```
{{< /expand >}}

---

#### (d) The array `ROUTE_X_TIMES` (Figure 3) stores the approximate number of minutes it takes for a bus to travel to a bus station from the previous one. For example, `ROUTE_X_TIMES[6]` stores the number of minutes it takes for a bus to travel from Kingsley to Allapay: 7 minutes.


{{< figure src="images/courses/abstract_data_structures/bus_stop_2d_array_3.png" width="70%">}}


Explain how this data could be used to determine the number of minutes it takes for a bus to travel between any two bus stations. [3]

{{< expand "Answer" >}}
Award [3 max]:  
- Determine positions/indexes/subscripts of both bus stations in array `ROUTE_X_NAMES`.  
- Calculate the sum of the elements of array `ROUTE_X_TIMES` (calculate the number of minutes as the sum of the array elements).  
- Between (lower + 1) index and higher index.
{{< /expand >}}

---

## Example Problems Recursion 

**Define the term *recursion*. [1]**

{{< expand "Answer" >}}
When a method calls on itself.
{{< /expand >}}


---

**Outline two disadvantages of recursive methods. [4]**

{{< expand "Answer" >}}
Award [4 max]   
Award [1] for a disadvantage and [1] for the elaboration, ×2.

- **Memory intensive**:  
    - Recursion uses memory (call stack) to store all intermediate arguments and return values.  
    - This could lead to stack overflow if there is a large amount of data.

- **Can be slow**:  
    - If not implemented correctly, recursion can result in too many recursive calls, slowing down execution.

- **Complex logic**:  
    - Recursive functions can be difficult to construct, analyze, or understand due to the complexity of the paradigm.

{{< /expand >}}


---

**Consider the following recursive method:**

```python
def rec(A):
    if A >= 2:
        return rec(A - 2) + rec(A - 1)
    else:
        return 1
```

#### Determine the value of `rec(5)` (show all your working). [4]

{{< expand "Answer" >}}
Award [4 max]:

The working may be differently represented. If only the final result (8) is shown, then award only one mark.

```python
rec(5)
= rec(3) + rec(4)
= rec(1) + rec(2) + rec(2) + rec(3)
= 1 + rec(0) + rec(1) + rec(0) + rec(1) + rec(1) + rec(2)
= 1 + 1 + 1 + 1 + 1 + 1 + rec(0) + rec(1)
= 8
```

{{< /expand >}}

---

**Explain how a stack may be used in the implementation of a recursive function. [4]**

{{< expand "Answer" >}}
Award [4 max]    

- A recursive function calls itself during its execution;
- First call (all local variables, data, return addresses, etc.) is pushed onto stack;
- Second/subsequent recursive calls are pushed on to the stack (added above previous call(s));
- When the terminating condition is met/ execution of recursive function ends;
- The function calls pop from the stack;
- In the reverse order to which they were pushed/LIFO;
{{< /expand >}}

---

**Consider the following recursive method:**

```python
fun(N)
    if N > 0
        then
            return (N mod 10) + fun(N div 10)
        else
            return 0
    end if
end fun
```

#### (a) Determine the value of `fun(1216)`. Show all your working. [4]

{{< expand "Answer" >}}
Award [4 max]:

The working may be differently represented. If only the final result (8) is shown, then award only one mark.

```python
fun(1216) = 6 + fun(121);
          =6 + 1 + fun(12);
          =6+1+2+ fun(1);
          =6+1+2+1+ fun(0);
          =6+1+2+1+0= 10;
```

{{< /expand >}}


#### (b) Deduce the purpose of this recursive method. [2]

{{< expand "Answer" >}}
Award [2 max]:

Calculates/returns the sum;
Of all digits in N;

{{< /expand >}}

---

## Example Problems Trees


*Consider the following binary tree:*


{{< mermaid >}}
graph TB;
    A-->X;
    A-->C;
    C-->E;
    C-->Y;
    Y-->H;
{{< /mermaid >}}


\(a\)State the result of postorder traversal of the binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]***
-  X E H Y C A; 
{{< /expand >}}


\(b\)State the result of inorder traversal of the binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]***
-  X A E C H Y; 
{{< /expand >}}

---

<!-- *Linked lists and binary trees are examples of dynamic data structures.*


Outline **one** benefit of using dynamic data structures.  **\[2\]**

{{< expand "Markscheme" >}}

*Award* ***\[2 max\]***
*Award* ***\[1\]*** *for the benefit and award* ***\[1\]*** *for expansion.*   
- Efficient use of memory;
- memory is allocated during the execution of the program as needed / memory is deallocated and re-used when no longer required; 
<br><br>
- There is no need to predefine the size of a dynamic data structure;
- so, they can grow/data can be added or shrink in size/data removed depending on the requirements; 
<br><br>
- Efficient insertion and deletion operations can be carried out;
- with the adjustment of pointers/ no need to shift elements / as they are stored in chained memory locations; 
{{< /expand >}}

--- -->

<!-- Outline **one** drawback of using dynamic data structures.  **\[2\]**

{{< expand "Markscheme" >}}

*Award* ***\[2 max\]***
*Award* ***\[1\]*** *for drawback and award* ***\[1\]*** *for further expansion.*   
- (Memory) overflow;
- Can happen if more memory is actually used than has been allocated/available; 
<br><br>
- (Memory) underflow;
- can happen if attempting to delete an element from an empty data structure; 
<br><br>
- Harder to program;
- because it is more difficult to keep track of the size and location of the data structure; 
<br><br>
- Potential for memory leaks;
- when allocated memory is not properly deallocated after use; 
<br><br>
- Errors, crashes & security vulnerabilities;
- due to null pointer dereferencing, dangling pointers, or memory access violations; 
<br><br>
- More memory usage for the set amount of data;
- as dynamic data structures require additional memory to store pointers; 

- Slower execution time/longer to traverse etc;
- due to more programming statements required/ manipulation of pointers; 
{{< /expand >}}

--- -->




<!-- *These numbers are input in the following order:*


*17    11    23    5    3    19    37    31*


*and inserted in a binary tree such that an inorder traversal of the binary tree outputs the numbers sorted in ascending order.*


(d.i)Sketch the resulting binary tree.  **\[3\]**

{{< expand "Markscheme" >}}

*Award* ***\[3 max\]***
-  Root node correct;
- Left subtree correct;
- Right subtree correct; 



{{< /expand >}}

--- -->

<!-- (d.ii)State all the leaf nodes in the binary tree sketched in part (d)(i).  **\[1\]**

{{< expand "Markscheme" >}}

*Award* ***\[1 max\]***
-  3, 19, 31  *match their answer to part (d)(i).*\ *Allow follow through from part (d)(i).* 
{{< /expand >}}

--- -->



\(c\)Describe the structure of a node in a binary tree.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
-  A node contains a data element;
- A node has two pointers (a pointer to a left child (node) and a pointer to the right child (node)) 
{{< /expand >}}

---
<!-- 
*These numbers are input in the following order:*


*18    15    25    6    2    21    36    30    40*


*and inserted in a binary tree such that an inorder traversal of the binary tree outputs the numbers sorted in ascending order.*


\(d\)\[N/A\](d.i)Sketch the resulting binary tree.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\]***
-  Root node correct;
- Left subtree correct;
- Right subtree correct; 
- ![](media/rId32.png){width="6.347222222222222in" height="4.0in"} 
{{< /expand >}}

---

(d.ii)State all the leaf nodes in the binary tree sketched in part (d)(i).  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]***
-  2, 21, 30,40  match their answer to part (d)(i).*\ *Allow follow through from part (d)(i).* 
{{< /expand >}}

--- -->

<!-- These flower names should be inputted in the following order,Gladiolus, Lantana, Hyacinth, Iris, Columbineand inserted into a binary tree in such a way that an inorder traversal of the binary tree visits the nodes in alphabetical order of the names.Sketch the resulting binary tree.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\]**.*
*Award **\[1\]** for the correct root*\ *Award **\[1\]** for the correct left subtree*\ *Award **\[1\]** for correct right subtree.* ![](media/rId35.png){width="4.041666666666667in" height="2.2916666666666665in"} <br><br>  *Note: Accept the mirror image.* 
{{< /expand >}}

---

*Consider the following binary tree, in which each node stores a value greater than all the values in the node's left subtree and less than those in its right subtree.*


*![](media/rId38.png){width="6.5in" height="2.3925076552930884in"}*


\(a\)Identify the leaf nodes in this binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]*** A C E G
- 
{{< /expand >}}

---

\(b\)State the result of the postorder traversal.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]*** A C B E G F D
- 
{{< /expand >}}

---

\(c\)Sketch the resulting binary tree after the deletion of the root node.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\]***
*Award **\[1\]** for the correct root*\ *Award **\[1\]** for the correct left subtree*\ *Award **\[1\]** for the correct right sub-tree.* 
- ![](media/rId41.png){width="5.569444444444445in" height="2.5833333333333335in"} 
- OR 
- ![](media/rId44.png){width="5.458333333333333in" height="2.5277777777777777in"} 
{{< /expand >}}

---

*Consider the following binary tree, in which each node stores a number greater than all the numbers in the node's left subtree and less than those in its right subtree.*


*![](media/rId47.png){width="6.5in" height="3.714284776902887in"}*


\(a\)Identify the leaf nodes in this binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Awar
- **\[1 max\]*** 4 7 9; 
{{< /expand >}}

---

\(b\)State the result of the preorder traversal.  **\[1\]**

{{< expand "Markscheme" >}}

*Awar
- **\[1 max\]*** 6 3 5 4 8 7 9; 
{{< /expand >}}

---

\(c\)Sketch the resulting binary tree after the deletion of the root node.  **\[3\]**

{{< expand "Markscheme" >}}

*Awar
- **\[3 max\]***\ *Award **\[1\]** for the correct root*\ *Award **\[1\]** for the correct left subtree*\ *Award **\[1\]** for the correct right sub-tree.* 
- ![](media/rId50.png){width="6.5in" height="2.697367672790901in"} 
-  
- OR 
- ![](media/rId53.png){width="6.5in" height="3.7088232720909886in"} 
{{< /expand >}}

---

*A list of students' names and test scores are written in a teacher's notebook in alphabetical order. The teacher uses an application that allows her to input all of the names and scores in the order they appear in her notebook. The application orders the scores from highest to lowest and then outputs all the names and scores (see **Figure 1**).*


***Figure 1: An example of the input and output of the application***


*![](media/rId56.png){width="2.9027777777777777in" height="2.3333333333333335in"}*


*The application: - inputs the names and scores - stores the input data in two arrays: `NAMES` and `SCORES` (see **Figure 2**)*


***Figure 2: The** `NAMES` **and** `SCORES` **arrays***


*![](media/rId59.png){width="6.5in" height="1.6728871391076114in"}*


*For example, `NAMES[3]` holds the student's name (Emma), and her score (87) can be found in `SCORES[3]`.*


*The application also:   - sorts the input data in order of scores from the highest to the lowest by using a bubble sort algorithm. - outputs the sorted data.* -->


*A decision has been made to create a new application. It will use a binary tree as an alternative to the two arrays.*


\(b\)Identify the components of a node in a binary tree.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3\]** max*.
- Components data / two data fields: 
- name and score;
- pointer to the left child;
- pointer to the right child; 
{{< /expand >}}

---

\(c\)The input data will be inserted into the binary tree so that an inorder traversal of the binary tree would output all the students' names and scores, sorted from the highest to the lowest score. Describe the steps in this insertion process.  **\[6\]**

{{< expand "Markscheme" >}}

*Award **\[6\]** max*.
*Award **\[1\]** for a loop (to input all the data)*\    
*Award **\[1\]** for placing the inputted data into a newly created node*\.   
 *Award **\[1\]** for setting the root node to the new node (if the tree is empty/ no root node)*\.   
  *Award **\[1\]** for start searching from the root node*\     
  *Award **\[1\]** for searching for the empty location in the left subtree if the input score is higher than the current value*\     
  *Award **\[1\]** for inserting the new node in the left subtree when the proper location is found*\     
  *Award **\[1\]** for searching for the empty location in the right subtree if the input score is **lower** than the current value*\.   
   *Award **\[1\]** for inserting the new node in the right subtree when the proper location is found* 
**<br><br>  **Example 1**:**
- Repeat the following steps (until all the names and scores are inputted);
- input the values (name and score of one student), create a new node and\ place the input values into the newly created node;
- If the tree is empty, set the root to a new node;
- Else (if the tree is not empty)\ repeat the following until a leaf node is reached;
- If a new node is smaller than or equal to the node (here it is a root node)\ move to its right child;
- If a new node is larger than the node, move to its left child:\ insert the new node (as a right or left child of the leaf node based on node\ is less or greater than the leaf node); 
**<br><br>  **Example 2**:**
- Repeat the following steps (until all the names and scores are inputted);
- Create a new node (for example, named ITEM); input the values (name and score of one student) and place them into the new node (ITEM) ( and set its left and right to NULL);
- If there isn\'t a root node, set the root node to ITEM;
- If there is a root node, start searching from the root node (to find ITEM\'s proper location),\ if the score in ITEM is greater than the score in the root search for the empty\ location in the left subtree;
- otherwise (if the score in ITEM is lesser than the score in the root), search for the empty location in the right subtree;
- insert ITEM into empty location; 
**<br><br>  **Example 3**:**
- While the end of the input list is not reached do the following;
- input the values (name and score of one student), create a new node\ and place the input values into the newly created node;
- if there is no root node, set the root to the new node;
- if there is a root node\ start from the root node and if the score in the node to insert is less than\ the root, go to right child;
- otherwise go to the left child of the root;
- continue this process (Note: each node is a root for some subtree) until\ a null pointer (or leaf node) is found ( where it is not possible to go any further);
- when the leaf node is found, insert the node as a right or left child of the leaf node\ ( based on node is less or greater than the leaf node); 
{{< /expand >}}

---

Define the term child in relation to a binary tree.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- Child (is either null or) is a node that has up to two references /links to other nodes;
- and has (only) one predecessor (parent) node; 
- "Child" is every node in a binary tree which is descendant/ the node which has a link from its predecessor (the node which is a predecessor of any node is called as parent node);
- The child node can have up to two descendants (child nodes);
- (All the nodes except the node which is the origin of the binary tree data structure (called root) are child nodes;) 
{{< /expand >}}

---
<!-- 
*Reverse Polish notation (RPN) is a method used to represent mathematical expressions so they can be evaluated without the need for parentheses.*


*An expression written in this form is known as postfix notation, whereas an expression written the traditional way is known as infix notation.*


*For example:*


*Infix notation: `(8 − 5) * 7`*


*Postfix notation: `8 5 − 7 *`*


*Both the infix and postfix expressions have the same result: 21*


*RPN expressions are evaluated from left to right as follows:*


*Each character is checked,   - if it is a digit, it is pushed onto a stack. - if it is a mathematical operator, the last two digits are popped from the stack and evaluated as though the current operator was between them. The result of this operation is then pushed back onto the stack.*


*The process is repeated until all the characters in the RPN expression have been used.*


*The value left in the stack is the result of the expression.*


*A collection named RPN already stores an expression formatted in Reverse Polish notation.\ The algorithm reads the values from the collection and, using a stack data structure, evaluates it.*


```java
    RPN.resetNext()
    loop while RPN.hasNext()
        VALUE = RPN.getNext()
        loop while not (VALUE = "+" or VALUE = "-" or VALUE = "*" or VALUE = "/")
            stack.push(VALUE)
            VALUE = RPN.getNext()
        end loop
        OPERAND2 = stack.pop()
        OPERAND1 = stack.pop()
        if VALUE = "+" then
          NEW_VAL = OPERAND1 + OPERAND2
          stack.push(NEW_VAL)
        end if
        if VALUE = "-" then
          NEW_VAL = OPERAND1 - OPERAND2
          stack.push(NEW_VAL)
        end if
        if VALUE = "*" then
          NEW_VAL = OPERAND1 * OPERAND2
          stack.push(NEW_VAL)
        end if
        if VALUE = "/" then
          NEW_VAL = OPERAND1 / OPERAND2
          stack.push(NEW_VAL)
        end if
    end loop
    RESULT = stack.pop()
    output "The result is: ", RESULT
```

\(a\)Copy and complete the trace table for the algorithm using the RPN collection data:`5 2 + 25 16 − * 3 /`![](media/rId62.png){width="6.5in" height="1.1002843394575679in"}  **\[6\]**

{{< expand "Markscheme" >}}

*Award **\[6 max\
- ***\ *Award **\[1\]** for correct values in* VALUE column;
- *Award **\[1\]** for correct values of* OPERAND2, OPERAND1 and NEW_VAL when VALUE is '+';
- *Award **\[1\]** for correct values of* OPERAND2, OPERAND1 and NEW_VAL when VALUE is '-';
- *Award **\[1\]** for correct values of* OPERAND2, OPERAND1 and NEW_VAL when VALUE is '\*';
- *Award **\[1\]** for correct values of* OPERAND2, OPERAND1 and NEW_VAL when VALUE is '/';
- *Award **\[1\]** correct output:* 'The result is: 21'; 
- ![](media/rId65.png){width="6.5in" height="3.0662357830271216in"} 
<br><br>  ***Note**: The trace table may be differently presented.* 
<br><br>  ***Note**: Allow Follow Through.* 
{{< /expand >}}

--- -->
<!-- 
\(b\)Explain why a stack is used in the process of evaluating the expression in the algorithm.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\
- ***\ A stack is a last in first out (LIFO) / first in last out (FILO) data structure;
- ...which means data is popped off the stack in the reverse order to which it was pushed;
- In the expression, it is important to evaluate some of the values in a certain order(to obtain the correct result);
- For example, 25 − 16 would give the wrong value if it was evaluated as 16 − 25; 
- Pushing items onto a stack and then popping them off reverses the order;
- To evaluate e.g. "10 2 /" we must treat it as "do the operation on the operands 10 and 2"/ i.e. we have to access the operator before we can apply it to the operands;
- A stack achieves the reversing of the order of the operators and their operands as a group (but it also reverses the operands which must be fixed); 
{{< /expand >}}

---

*An alternative data structure in which the expression used in **part (a)** may be stored is a binary tree. If the tree is traversed using postorder tree traversal, the output is formatted in RPN.*


*![](media/rId68.png){width="6.5in" height="3.3752088801399824in"}*
 -->

\(c\)Outline the steps involved in traversing the given tree using postorder tree traversal.  **\[4\]**

{{< expand "Markscheme" >}}

*Award **\[4 max\
- ***\ Start from the root node;
- If the root is null, return immediately;
- Traverse left subtree;
- Traverse right subtree;
- Visit root; 
- start from the root node (for example traverse (root)) ;
- terminate traversal (and backtrack) when/if root equals null;
- (before visiting the root node) traverse (and visit/process/output) each node in the left subtree (i.e., traverse(root.left));
- (before visiting the root node) traverse (and visit/process/output) each node in the right subtree (i.e., traverse(root.right));
- visit/output/process root (for example, output(root)); 
{{< /expand >}}

---
<!-- 
\(d\)State the output from the given tree using inorder tree traversal.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\
- ***\ *Award **\[1\]** if the answer contains no more than one error.* 
- `(5+2)*(25−16)/3` 
<br><br>  *Note to examiners: Ignore the brackets -- these represent the completely correct mathematical expression, but they are not read from the tree. Some candidates might include them because they realise that they may be needed so the expression works correctly.* 
{{< /expand >}}

--- -->

\(a\)Identify **one** difference between a binary tree and a non-binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\
- ***\ Binary tree (is a tree) in which every node has (no, one or) at most two children whilst\ a non binary tree can have nodes with more than 2 children (non binary trees do not have an upper limit on number of children nodes); 
- Each node in a binary tree can have at most two subtrees (left and right subtree), a node in a non binary tree can have any number of subtrees; 
{{< /expand >}}

---
<!-- 
\(b\)Given the following binary search tree (BST), draw the resulting BST after the deletion of the root node.![](media/rId71.png){width="3.0in" height="3.1805555555555554in"}  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\
- *** 
*Award **\[1\]** for the root (1)*
*Award **\[1\]** for the correct right subtree* 
- ![](media/rId74.png){width="2.2222222222222223in" height="2.388888888888889in"} 
- Alternative answer 
*Award **\[1\]** for the root (4)*
*Award **\[1\]** for the correct right subtree* 
- ![](media/rId77.png){width="3.0555555555555554in" height="1.6805555555555556in"} 
{{< /expand >}}

---

Sketch a balanced binary tree that would allow the following output when traversed using in order traversal:Zebra, Tango, Hotel, Foxtrot, Delta, Bravo, Alpha.  **\[3\]**

{{< expand "Markscheme" >}}

- ![](media/rId80.png){width="6.5in" height="2.282442038495188in"} 
*Award **\[3 max\
- ***\ Correct root;
- Correct left sub-tree;
- Correct right sub-tree;
- <br><br>  ***Note***: Award 1 mark for any binary tree with the same number of nodes in the left and right subtree; 
{{< /expand >}}

---

*Consider the following binary tree.*


*![](media/rId83.png){width="3.138888888888889in" height="3.0833333333333335in"}*


\(a\)State the result of inorder traversal of this binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]***
- B, A, D, C; 
{{< /expand >}}

---

\(b\)State the result of preorder traversal of this binary tree.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]***
- A, B, C, D; 
{{< /expand >}}

---

\(a\)State **two** applications of stacks.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- Holding all data of a function/method call; simulation of recursion;
- Conversion of expressions (infix to postfix, infix to prefix, etc.)\ Evaluating expression;
- Parsing; 
{{< /expand >}}

---

\(b\)Explain the use of a one-dimensional array as a static stack. Your answer should include brief outlines of the push and pop operations and the tests for empty and full stacks.  **\[6\]**

{{< expand "Markscheme" >}}

*Award **\[6 max\]***
*Award **\[3 max\]** for the following*:\ An array A of N elements should be initialized (fixed, predetermined size); 
- ![](media/rId86.png){width="6.5in" height="0.9337685914260717in"} 
- keep track of the top of the stack since not all of the array holds stack elements (in an integer variable, for example, named TOP); 
- the main property of a stack is that stack values/objects go on and come off of the one end of the stack (LIFO data structure); 
*Award **\[1\]** for each stack method outlined*
- 
- *Push*\ Places a value (object) on the top of the stack;
- Increase TOP by one and set A\[TOP\]= value; 
- *Pop*\ Returns a value from the top of the stack and removes that value from the top of the stack;
- Returns A\[TOP\] and decreases TOP by 1; 
- *IsEmpty*\ Reports whether the stack is empty or not / returns True if the stack is empty, False otherwise;
- Returns True if TOP is less than 0, False otherwise; 
- *IsFull*\ Reports whether the stack is full or not/ returns True is stack is full, False otherwise;
- Returns True if TOP is greater than N-1 (where N is size of the array), False otherwise; 
{{< /expand >}}

---

*Consider the following binary tree.*


*An inorder traversal of this binary tree will produce a list of names sorted in ascending order.*


*![](media/rId89.png){width="6.5in" height="1.5191207349081364in"}*


(c.i)State the result of postorder traversal.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\
-  ***The names must be in the following order:***\ Elm, Elder, Holly, Rowan, Larch, Hazel; 
{{< /expand >}}

---

(c.ii)Draw the binary tree after deleting the root node.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\
-  *Award **\[1\]** for the correct root.*\ *Award **\[1\]** for the correct left subtree.*\ *Award **\[1\]** for the correct right subtree.* 
- ![](media/rId92.png){width="6.5in" height="4.537735126859142in"} 
{{< /expand >}}

--- -->

<!-- \(d\)Compare the use of static and dynamic data structures.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\]***
- Static data structures are fixed sized (for example, arrays) whilst dynamic data structure (for example, trees, linked lists) have flexible size; 
- The size of static data structures is predetermined; the amount of memory once allocated to them at compile time cannot change on run time whereas dynamic data structures they can grow or shrink as needed to contain the data to be stored; 
- Slower access to elements of dynamic data structure (sequential access) when compared with (direct) access to elements of static data structures; 
{{< /expand >}}

--- -->
<!-- 
State the output from the binary tree using postorder traversal.![](media/rId95.png){width="3.361111111111111in" height="1.9583333333333333in"}  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2\]** for completely correct answer and **\[1\]** for any 
- numbers in correct order*. 
- Postorder traversal: 76 75 79 70 68 72 83 
{{< /expand >}}

--- -->

Outline why a binary tree would be a good choice of data structure for maintaining an address book.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***.
- Time efficient searching / traversing for a contact in an address book;
- Each iteration / comparison allows the size of the search to be reduced (by skipping about half of the remaining contacts); 
- Fast/easy addition / removal of contacts in an address book;
- Quick search for the leaf node / empty node where a new contact can be placed / for the node containing the contact to be deleted; 
- Contacts can be listed / output in alphabetical order/ fast sorting;
- using inorder traversal; 
{{< /expand >}}




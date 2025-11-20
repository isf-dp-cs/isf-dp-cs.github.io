---
title: "[4] Programming"
weight: 40
bookFlatSection: false #this makes it so this page isn't seen
# bookCollapseSection: true
# draft: true
---


# Theoretical Questions

## Subprograms

Outline why a sub-program is considered an example of abstraction. **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\*** 
- A sub-program is a named section of code that performs a specific task (in a program) / can be called by name / referred by the identifier when needed;
- without knowing the details (of code and data structures) as these are wrapped / hidden within the sub-program; 
{{< /expand >}}

---

State **two** benefits of using subprograms within a computer program.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- Modularity;
- Extensibility;
- Reusability;
- Improved testing/ debugging;
- Maintainability;
- Abstraction;
<br><br>  ***Note**: A single word does not have to be used, accept descriptions.* 
{{< /expand >}}

---

Identify **two** components in a conditional statement.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***.
- `if;`\ `then;`\ `else;` 
<br><br>  *Note to examiners: allow an alternative descriptive version such as*:\ test/condition;
- action/consequence;
- (optional) alternative action/consequence; 
{{< /expand >}}

---

## Abstraction


Explain why abstraction is required in the design of algorithms.  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\]***.
- Abstraction allows us to create a general idea of what the problem is and how to solve it;
- Abstraction removes all specific detail, and any patterns that will not help in solving a problem. This helps in forming a "model" (If designers don't abstract they may end up with the wrong solution to the problem they are trying to solve);
- Abstraction is widely used because there exist a number of "patterns" in programming that keeps repeating in every application/program;
- The pattern corresponding to an issue can be found, then the abstract solution to it can be found and implemented, and the problem is solved;
- Most programming languages provide some built-in abstract patterns, which are easy to use (some API provides more advanced patterns); 
- Abstraction is the process of taking away or removing characteristics from something in order to reduce it to a set of essential characteristics;
- In object-oriented programming, abstraction is one of three central principles (along with encapsulation and inheritance);
- Through the process of abstraction, a programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency;
- The resulting object itself can be referred to as an abstraction, meaning a named entity made up of selected attributes and behavior specific to a particular usage of the originating entity. 
- Abstraction is related to both encapsulation and data hiding; 
{{< /expand >}}

---

Outline what is meant by the term "abstraction".  **\[2\]**

{{< expand "Markscheme" >}}

Award **\[2 max\]**
- *one of the key concepts of OOP languages;*
- *to decompose complex problems;*
- *Hide / remove unnecessary details;*
- *look for recurring patterns;*  
<br>

**Example 1 (OOP)**
- Abstraction is a process in which a programmer hides / removes all but the relevant data about an object;
- in order to reduce complexity / increase efficiency; **<br><br>  

**Example 2 (OOP)**
- Abstraction in OOP is a programming methodology in which details of the programming codes are hidden away from the user;
- and only the essential things are displayed to the user; **<br><br>  

**Example 3 (OOP)**
- Abstraction is one of the key concepts of OOP languages;
- its main goal is to handle complexity (by hiding/removing unnecessary details); 

**Example 4**
- Abstraction is the process of ignoring the characteristics of patterns that we don't need;
- in order to concentrate on those that we do need; 

**Example 5**
- Abstraction means decomposing complex problems;
- And then looking for patterns among and within the smaller problems (that make up the complex problem); 
{{< /expand >}}

---

## Concurrent Processing


Outline what is meant by concurrent processing.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]**.*
- Concurrent processing means that a single or multiple system perform several tasks; simultaneously/within overlapping time frames; 
- Concurrent processing means execution of several algorithms/programs/sub-programs;
- At the same time (regardless of the number of processors); 
{{< /expand >}}

---

 Identify **one** advantage of concurrent processing.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]**.*
- Better use of (computer) resources;
- Decreased response time/waiting time/increased efficiency;
- Reduced overall run-time of the program;
- More real-world problems can be solved; 
{{< /expand >}}

---


 Evaluate the use of designing and developing different parts of software products concurrently.  **\[3\]**

{{< expand "Markscheme" >}}

*Award* **\[3 max\]**
- different stages (of programming) (*Accept examples!*) run simultaneously (rather than consecutively);
- this decreases product development time / decreases the time to market;
- leading to improved productivity/reduces costs;
- however, it requires more resources/more software developers; 
{{< /expand >}}

---


## Collections

Outline what is meant by a collection.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
*Award **\[1\]** for structure and **\[1\]** for methods/properties.* A collection is a grouping of a variable number of data items into a single unit;
- that need to be operated upon together; A collection is a term used to describe a data structure designed to contain multiple elements of any type;
- and methods which make this data useful; *Accept example methods, such as methods given in IB pseudocode:* *hasNext()*, *getNext()*, *resetNext()*, etc.;
- \ A collection is a class used to represent a set of similar data type items as a single unit (such as an array list, linked list, stack, queue);
- and methods used for efficient data manipulation/ and the set of methods that are common to all data items; 
{{< /expand >}}

---

Describe **one** standard operation of collections.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- addItem();
- adds an element to the collection (at the end); getNext();
- returns / gets / obtains the next element from the collection (indicated by the pointer); resetNext();
- restarts the iteration through the collection from the first element / moves the pointer to the beginning of the collection; hasNext();
- returns TRUE if there is as least one more element in the collection that has not been accessed (in the current iteration) / if there is any element remaining to access; isEmpty();
- returns TRUE if the collection does not contain any elements;   <br><br>  *Note: Award **\[1\]** mark for name and Award **\[1\]** mark for the description of collection methods.*\ *Accept other equivalent method names such as add(), getData() etc.* *Alternative mark points based on syllabus content:*\ *Award **\[1 max\]***\ Data can be added to the collection (at the current location or at the start);
- Data cannot be inserted at a specific location in the collection;
- Data can be removed/retrieved from the collection (at the current location or at the start); 
{{< /expand >}}

---

Describe **one** standard operation of collections.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
-  addItem();
- adds an element to the collection (at the end); getNext();
- returns / gets / obtains the next element from the collection (indicated by the pointer); resetNext();
- restarts the iteration through the collection from the first element / moves the pointer to the beginning of the collection; hasNext();
- returns TRUE if there is as least one more element in the collection that has not been accessed (in the current iteration) / if there is any element remaining to access; isEmpty();
- returns TRUE if the collection does not contain any elements;   <br><br>  *Note: Award **\[1\]** mark for name and Award **\[1\]** mark for the description of collection methods.*\ *Accept other equivalent method names such as add(), getData() etc.* *Alternative mark points based on syllabus content:*\ *Award **\[1 max**\];*   Data can be added to the collection (at the current location or at the start);
- Data cannot be inserted at a specific location in the collection;
- Data can be removed/retrieved from the collection (at the current location or at the start); 
{{< /expand >}}

---



## Arrays

State **two** characteristics of a linear array.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]*** Predetermined size (size should be known i
- compile time / it should be known in advance how many elements are to be stored in array);
- Fixed size (once the memory is allocated to the linear array, it cannot be increased or decreased);
- An array holds elements that have the same data type;
- Array name represents the address of the starting element, all elements of an array can be distinguished using an index number (direct access to each element);
- Array elements are stored in subsequent memory locations; 
{{< /expand >}}

---


State **two** characteristics of a collection.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
-  Collection holds objects/data that can be of different types/ has different ways of organizing data /objects it contains;
- Collection can hold an unlimited number of values (limited only by the amount of available memory);
- Collection has a set of in-built methods (getNext etc.) that define operations performed on the elements/objects;
- Reduced programming effort (implementations of data structures are provided in collections);
- Increased performance of the program (efficient pre-defined algorithms); 
{{< /expand >}}

---


## Algorithms


Identify **two** types of searching algorithm.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- Linear/sequential search;
- Binary search; <br><br>  ***Note:** Award other suitable responses such as Jump search, Interpolation search, Exponential search, etc.* 
{{< /expand >}}

---


(b.i)State **one** algorithm that could be used to arrange the values in a linear array from the lowest to highest value.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **\[1 max\]***
-  Sorting algorithm;
- Bubble sort;
- Selection sort;
- Insertion sort;
- Shell sort;
- Merge sort;
- Quick sort;
- Heap sort; 
{{< /expand >}}

---


Compare and contrast the bubble sort algorithm and the selection sort algorithm.  **\[4\]**

{{< expand "Markscheme" >}}

*Award **\[4 max\]***
<br><br>  *Note: At least one similarity and one difference to be mentioned* ***Similarities*:**\ Both use nested loops, (each time reducing the inner loop);
- Both have the same worst case time complexity ( O(n^2^) );
- Both perform in place sorting directly within the array (without requiring additional data structures / memory); ***Differences*:**\ Bubble sort works by comparing adjacent elements, swapping the elements if they are in wrong order, (repeating these steps until the array is fully sorted);
- Selection sort works by selecting the smallest (or largest) element from the unsorted portion of the array and swapping it with the first unsorted element;
- Bubble sort can exit early/ is faster if the list is already sorted;
- Selection sort will need to complete the procedure for the entire list every time;
- Bubble sort has a higher number of comparisons and swaps, making it slower compared to selection sort for larger datasets;
- Bubble sort has a best-case time complexity O(n) whereas Selection sort has a best-case time complexity O(n^2^); 
{{< /expand >}}

---


# Tracing Code

Construct a trace table for the following algorithm:    **\[6\]**
```java
N = 5
S = 0
R = 0
loop while N > 0
    A = N mod 3
    if A = 0
         then
             S = S − N
         else
             if A = 1
                 then
                     S = S + N
                 else
                     S = S + 1
             end if
     end if
     R = R + S
     N = N − 1
end loop
output ('The result is ', R)
```


{{< expand "Markscheme" >}}

*Award **max** \[6\].*
- *Award \[1\] for a trace table with at least 4 columns, excluding the output column.* <br> 
- *Award \[1\] for each correct column (column heading: N, S, R, A, output, see the example)*  
*Note*: *The trace table may be differently presented.* 


{{< figure src="images/courses/practice_questions/trace_table_NSR.png" width="60%">}}


{{< /expand >}}

---

Construct a trace table for the following algorithm:     **\[6\]**
```java
K = 1
S = 0
Z = 0
loop while K < 6
    A = K mod 3
    if A = 2 
        then 
            S = S + K
        else
            if A = 1
                then 
                    S = S − K
                else
                    S = S + 1
            end if
     end if
     Z = Z + S
     K = K + 1
end loop
output ('The result: ', Z)
```
 

{{< expand "Markscheme" >}}

*Award **max** \[6\].* 
- *Award \[1\] for a trace table with at least 4 columns excluding the output column;*
- *Award \[1\] for each correct column (column heading: K, S, Z, A, output, see the example);* <br>
**Note**: *The trace table may be differently presented.* 
{{< figure src="images/courses/practice_questions/trace_table_KSZ.png" width="60%">}}


{{< /expand >}}

---



Construct a trace table for the following algorithm:
```java
A = 20
B = 12
loop while B > 0
    TEMP = B
    B = A mod B
    A = TEMP
end loop
output (A)
```


  **\[4\]**

{{< expand "Markscheme" >}}

*Award **\[4 max\]***
- *Award **\[1\]** for each correct column.*
- *The trace table may be differently presented.* 

{{< figure src="images/courses/practice_questions/trace_table_AB.png" width="60%">}}


{{< /expand >}}

---


Given the one-dimensional array `NAMES`:

{{< figure src="images/courses/practice_questions/oneD_array_NAMES.png" width="15%">}}


construct a trace table for the following algorithm:     **\[4\]**

```java
K=3
loop while K>=0
    A=K mod 3
    output (NAMES[A])
    K=K−1
end while
```




{{< expand "Markscheme" >}}

*Award **\[4\]** max.*
- *Award **\[1\]** for a truth table with at least 3 columns*
- *Award **\[1\]** for correct column K*
- *Award **\[1\]** for correct column A* 
- *Award **\[1\]** for correct output* 
<br><br>

*Example:* 

{{< figure src="images/courses/practice_questions/oneD_array_NAMES_trace.png" width="60%">}}

{{< /expand >}}

---



Construct a trace table for the following algorithm:

```java
N = 1216
X = 0
loop while N > 0
    X = X + N mod 10
    N = N div 10
end loop
output (X)
```

{{< expand "Markscheme" >}}

*Award **\[4 max\]**.* 
- *Award **\[1\]** for a trace table with at least 2 columns (N, X, output)*
- *Award **\[1\]** for the correct column N*
- *Award **\[1\]** for the correct column X*
- *Award **\[1\]** for the correct output* 

{{< figure src="images/courses/practice_questions/trace_table_NX.png" width="60%">}}


 <br><br>  ***Note:** The trace table may be presented differently.* 
 
    
 *Alternate Mark Scheme:*
 - *Award **\[4 max\]**.*
 - *Award **\[1\]** for a trace table with at least 2 columns (N, X)*
 - *Award **\[1\]** for the first two rows (with correct values of N and X)*
 - *Award **\[1\]** for the next two rows (with correct values of N and X)*
 - *Award **\[1\]** for the last row (with correct values of N, X and output)* 

{{< /expand >}}


Deduce the purpose of this algorithm.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- Calculates/outputs the sum;
- Of all digits in N;
{{< /expand >}}

---

*Given the integer array `DATA`:*


{{< figure src="images/courses/practice_questions/purpose_DATA.png" width="30%">}}


*and the following algorithm:*

```java
K = 5
A = 1
B = 0
while K >= 0
    if DATA[K] mod 2 < 1
        then
            A = A * DATA[K]
        else
            B = B + 1
    end if
    K = K - 1
end while
output(A)
output(B)
```

Construct a trace table for this algorithm.  **\[4\]**

{{< expand "Markscheme" >}}

*Award **\[1\]** for correct column K*\
*Award **\[1\]** for correct column A*\
*Award **\[1\]** for correct column B*\
*Award **\[1\]** for correct column Output* 

***Note:** The
trace table may be differently presented.*

Example: 




  -------- -------- -------- ----------- --------------- ------------- ------------
   **K**    **A**    **B**    **K\>=0**   **DATA\[K\]**   **DATA\[K\]   **Output**
                                                          mod 2 \<1**  

     5        1        0        True            2            True            

     1        2                 True            6            True            

     3        12                True           19            False           

     2                 1        True            5            False           

     1                 2        True           21            False           

     0                 3        True            7            False           

     -1                4        False                                        

                                                                            12

                                                                            4
  -------- -------- -------- ----------- --------------- ------------- ------------

{{< /expand >}}

Deduce the purpose of this algorithm.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- It counts the number of odd numbers held in the DATA array;
- It calculates the product of the even numbers held in the DATA array; 
{{< /expand >}}

---

# Coding

## Parallel Arrays, Conditionals


*A teacher would like a simple program to store the names, marks and grades of students in a set of three parallel one-dimensional arrays called `NAME[]`, `MARK[]` and `GRADE[]` .*


*The grade boundaries for the individual grades are shown below:*

{{< figure src="images/courses/practice_questions/grade_boundaries.png" width="40%">}}

*The class has 30 students.*


**\(a\) Construct an algorithm using pseudocode to take the marks that have been stored in `MARK[]`, convert them into the appropriate grade and store the calculated grades in `GRADE[]`.**  **\[5\]**

{{< expand "Markscheme" >}}

*Award **\[5 max\]***.
- *Award **\[1\]** for an appropriate loop with correct loop parameters to cover 30 array elements/all students*\ 
- *Award **\[1\]** for correct use of indexes in two arrays ( *`MARK`* and *`GRADE`* ) 
- *Award **\[1\]** for each if statement with correct condition and grade assignment up to **\[4\]**.* 
<br><br>  
*Note to examiners: Award **\[4\]** if candidate has correctly used an alternative conditional statement such as switch/ case*
<br><br>  

**Example answer 1*****

```java
loop COUNTER from 0 to 29
    if MARK[COUNTER] >= 80
      then GRADE[COUNTER] = "Distinction"
      else
        if MARK[COUNTER]>˝= 60
          then GRADE[COUNTER] = "Merit"
          else
            if MARK[COUNTER} >= 40
               then GRADE[COUNTER] = "Pass"
               else
                    GRADE[COUNTER] = "Fail"
           end if
       end if
   end if
end loop
```

***<br><br>  **Example answer 2*****

```java
COUNTER = 1
loop while COUNTER <= 30
    if MARK[COUNTER-1] >= 80
      then GRADE[COUNTER-1] = "Distinction"
    end if
    if MARK[COUNTER-1] >= 60 and MARK[COUNTER-1] < 80
          then GRADE[COUNTER-1] = "Merit"
    end if
    if MARK[COUNTER-1} >= 40 and MARK[COUNTER-1] < 60
            then GRADE[COUNTER-1] = "Pass"
    end if
    if MARK[COUNTER-1} < 40
               GRADE[COUNTER-1] = "Fail"
    end if
    COUNTER = COUNTER + 1
end loop
```
{{< /expand >}}

**\(b\) Outline how the name, mark and grade in the three arrays correspond to the same student.**  **\[2\]**

{{< expand "Markscheme" >}}
*Award **\[2 max\]***.
- Three arrays are parallel/ they have the same number of elements/ the same length;
- the same array index can be used to represent name, grade and mark of the same student/ the array index makes sure that data from the three arrays lines up; 
{{< /expand >}}


**\(c\) Construct an algorithm using pseudocode to output the names and grades of all students who achieve a grade of Merit or Distinction.**  **\[3\]**

{{< expand "Markscheme" >}}

*Award **\[3 max\]***.
- *Award **\[1\]** for correct loop to check all students*
- *Award **\[1\]** for correct conditional statement checking correct array*
- *Award **\[1\]** for correct output* 

***<br><br>  **Example answer 1*****
```java
loop COUNTER from 0 to 29
    if MARK[COUNTER] >= 60 then
      output NAME[COUNTER], GRADE[COUNTER]
    end if
end loop
```
***<br><br>  **Example answer 2*****
```java
loop C from 0 to 29
  if GRADE[C].equals(“Merit”)OR GRADE[C].equals(“Distinction”)
       then
          output NAME[C], GRADE[C]
    end if
end loop
```
{{< /expand >}}

**(d) Explain how you would change your algorithm in part (c) to allow a user to choose a grade and output the names and marks of the students who have achieved this grade.** **\[3\]**

{{< expand "Markscheme" >}}
*Award **\[3 max\]***.
- *Award **\[1\]** for an input statement before the loop;*
- *Award **\[1\]** for changing the conditional statement so that it checks the* `GRADE[]` *array for the* `GRADE` *input (using the same variable)* 
- *Award **\[1\]** for outputting the name and marks of the student who has achieved the inputted grade* 
<br><br>  

*Note to examiners: Accept a written explanation or an amended algorithm that corresponds to candidate's answer to part(c).* 

***<br><br>  **Example*****
```java
G=input()
COUNTER = 0
loop while COUNTER < 30
    if GRADE[COUNTER] = G
      then
           output(NAME[COUNTER], MARK[COUNTER])
    end if
    COUNTER = COUNTER + 1
end loop
```

{{< /expand >}}

---

## Collection, Parallel Arrays, Sort, Binary Search



A company has 600 employees whose names are currently stored using a collection called `NAMES`. The names are stored as surname, first name. For example: 

```java
Smith, Jane, Uysal, Rafael, Ahmed, Ishmael, Jonsonn, Sara, ...
```


**\(a\) Construct a pseudocode algorithm that will store the surnames in one array and first names in another.**  **\[4\]**

{{< expand "Markscheme" >}}

*Award* **\[4 max\]**
- Collection method `NAMES.getNext() / NAMES.getData()` correctly used;
- Correct loop;
- Correct use of index (in both arrays);
- Correct assignment in array for surnames;
- Correct assignment in array for first names; 

**Note**: Award 1 mark in case that string methods are used to separate 'name' and 'surname' in the data item.     

***Example answer 1***

```java
NAMES.resetNext() // reset and
SURNAME[600] //initialization of arrays
FIRSTNAME[600] //may not appear in candidates’ responses
COUNTER = 0
loop while NAMES.hasNext()
    SURNAME[COUNTER] = NAMES.getNext()
    FIRSTNAME[COUNTER] = NAMES.getNext()
COUNTER = COUNTER + 1
end loop
```


***Example answer 2***

```java
NAMES.resetNext()
loop COUNTER from 0 to 599
    SURNAME[COUNTER] = NAMES.getNext()
    FIRSTNAME[COUNTER] = NAMES.getNext()
end loop
```

***Example answer 3 (assumes that items in the collection are objects- two attributes: surname and first name)***

```java
I = 0
loop while NAMES.hasNext()
        X= NAMES.getData()
        SURNAME[I] = X.surname
        FIRSTNAME[I] = X.firstname
        I = I + 1
end loop
```

{{< /expand >}}

The names in the collection are kept in a random order. However, it would be more useful if they were kept in alphabetical order.

**(b) Construct a pseudocode algorithm that will sort the surnames into alphabetical order using the bubble sort method. The order of the first names must also be changed so that they keep the same index as their corresponding surname.**  **\[5\]**

{{< expand "Markscheme" >}}
*Award **\[5 max\]***
- Correct outer loop;
- Correct inner loop;
- Checking of surname order;
- Swapping surnames if necessary;
- Swapping corresponding names;
- Correct use of flag; 

*<br><br>  **Example 1***
```java
loop I from 0 to 599
   loop C from 0 to 598-I //accept 598
       if SURNAME[C] > SURNAME[C + 1] then
         TEMP1 = SURNAME[C]
         TEMP2 = FIRSTNAME[C]
         SURNAME[C] = SURNAME[C + 1]
         FIRSTNAME[C] = FIRSTNAME[C + 1]
         SURNAME[C + 1] = TEMP1
         FIRSTNAME[C + 1] = TEMP2
       end if
    end loop
end loop
```

*<br><br>  **Example 2***
```java
FLAG = TRUE
loop while FLAG = TRUE
    FLAG = FALSE
    loop COUNTER from 0 to 598
       if SURNAME[COUNTER] > SURNAME[COUNTER + 1] then
         TEMP1 = SURNAME[COUNTER]
         TEMP2 = FIRSTNAME[COUNTER]
         SURNAME[COUNTER] = SURNAME[COUNTER + 1]
         FIRSTNAME[COUNTER] = FIRSTNAME[COUNTER + 1]
         SURNAME[COUNTER + 1] = TEMP1
         FIRSTNAME[COUNTER + 1] = TEMP2
         FLAG = TRUE
       end if
    end loop
end loop
```
{{< /expand >}}

The company’s staff list is now organized in the arrays in alphabetical order.

A binary search was used to find a specific name in the array.

**(c) Describe the process a binary search would follow to find a record in the surname array.** **\[4\]**


{{< expand "Markscheme" >}}

*Award **\[4 max\]*** 

***Example 1***:
- Calculate the index of the middle point in the array SURNAME: (first + last)/2;
- Compare surname found with the one stored at middle point;
- If greater than the value at the middle point, search the upper half of the array (right side) by calling the binary search method again with a new first index (first = middle + 1);
- If smaller than the value at the middle point, search the lower half of the array (left side) by calling the binary search method with a new last (last = middle −1);
- if found algorithm terminates; 
<br><br>  

***Example 2***:
- Find the centre point of the array SURNAME\[ \];
- Compare surname to be found with the current name in SURNAME\[ \];
- If correct surname found =\> STOP;
- Else if surname to be found is greater than the current name in SURNAME\[ \]eliminate lower half of array from search and repeat algorithm;
- Else if surname to be found is less than the name in SURNAME\[ \] eliminate upper half of array from search and repeat algorithm; 
<br><br>  
*Note: Allow a mark for provision for name not found*; 

{{< /expand >}}


---

## Parallel Arrays, Arrays, Conditionals


*There are 200 students in a school. Their names are held in the one-dimensional string array `STUDENTS`.*


*The one-dimensional integer array `MARKS` stores marks (0--100 inclusive) that students scored in an examination.*


***Figure 1: Example data stored in the two arrays** `STUDENTS` **and** `MARKS`*


{{< figure src="images/courses/practice_questions/grades_arrays.png" width="40%">}}


*The one-dimensional integer array `GRADES` will be used to store the grades awarded to students based on their examination marks.*


*In **Figure 1**, Boris Mount scored 88 marks. His grade will be stored in `GRADES[1]`.*


*Consider the following algorithm that the school currently uses for awarding grades:*



```java
loop K from 0 to 199
    GRADES[K] = 1 + (MARKS[K] div 10)
    if GRADES[K] >= 7 then
        GRADES[K] = 7
    end if
end loop
```

**(a.i) Determine the value of `GRADES[0]`.**  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 1; 
{{< /expand >}}

---

**(a.ii) Determine the value of `GRADES[1]`.**  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 7; 
{{< /expand >}}

---

**(a.iii) Determine the value of `GRADES[2]`.**  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 5; 
{{< /expand >}}

---

**(a.iv) State the minimum mark necessary to achieve Grade 7.**  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 60; 
{{< /expand >}}

---

*Grade 1 is a failing grade. Each student who receives a failing grade must re-sit the examination.*


**\(b\) Construct an algorithm in pseudocode to fill the one-dimensional string array `RESIT` with the names of students who must re-sit the examination.**  **\[4\]**

{{< expand "Markscheme" >}}

*Award **max** \[4\].* 
- *Award \[1\] for a correct loop;*
- *Award \[1\] for checking if a failing grade;*
- *Award \[1\] correct indexing used to access values in at least two arrays;*
- *Award \[1\] for initializing and incrementing (if needed) the index (*`I`*) in the array* `RESIT`*;*
- *Award \[1\] for correctly assigning the name from the array* `STUDENTS` *to the array* `RESIT`*;*\ 
<br><br>  
**Example 1 (uses the `MARKS` array)**
```java
// assume: the array RESIT of sufficient size is initialized
//  the minimum mark for grade 2 (passing grade) is 10
I = 0
loop K from 0 to 199  //Accept len(STUDENTS)−1 or STUDENTS.length()−1
    //accept any correct loop through the array MARKS
    if MARKS[K] < 10
        then
            RESIT[I] = STUDENTS[K]// Accept RESIT.append(STUDENTS[K])
            I = I + 1
    end if
end loop
```

<br><br>  **Example 2 (uses the `GRADES` array defined in part(a))**
```java
// assume: the array RESIT of sufficient size is initialized
// grade 1 is a failing grade
I = −1
loop K from 0 to 199 //Accept len(STUDENTS)−1 
    //accept any correct loop through the array GRADES
    if GRADES[K] = 1
        then
            I = I + 1
            RESIT[I] = STUDENTS[K]// Accept RESIT.append(STUDENTS[K])
    end if
end loop
```

*<br><br>  *Note**: Collection methods not accepted. 
{{< /expand >}}

---

*A different method of awarding grades is proposed for the examinations. This new grading system will use three grades represented by the letters A, B, and C.*


*Grades A, B, or C will be calculated as follows:*


- The average mark for all students is calculated. 
- Grade A is awarded if an individual student's marks are more than 20 marks above the average mark for all students. 
- Grade B is awarded if an individual student's marks are within 20 marks of the average mark for all students. 
- Grade C is awarded if an individual student's marks are more than 20 marks below the average mark for all students.


*For example, if the average mark for all students is 49.5:* 

- Grade A is awarded if a student's marks are greater than 69.5. 
- Grade B is awarded if a student's marks are in the range from 29.5 to 69.5 inclusive. 
- Grade C is awarded if a student's marks are less than 29.5.*


**\(c\) Construct an algorithm in pseudocode to calculate and store the letter grades of all students in the one-dimensional string array `LETTERGRADES` as described.**  **\[7\]**

{{< expand "Markscheme" >}}

*Award **max** \[7\].*    

- *Award **max \[3\]** for the calculation of the average mark. \[1\] for initializing sum and adding Marks \[k\] to the sum, \[1\] for a correct loop, \[1\] for the sum divided by 200;*
- *Award **\[1\]** for a correct second loop;*
- *Award **\[1\]** for correct use of indexing in both* `MARKS` *and* `LETTERGRADES` *array;*
- *Award **max \[3\]** for determining each letter grade. \[1\] for each condition and grade assignment (String) to the* `LETTERGRADES` *array **x3**;* 

```java
//calculate the average mark
Sum=0
loop K from 0 to 199   //Accept len(STUDENTS)−1 or STUDENTS.length()−1
    Sum = Sum + MARKS[K]   // Accept any correct loop
end loop
AVE = Sum / 200   //accept SUM DIV 200

K=0
loop K from 0 to 199   //Accept len(STUDENTS)−1 or STUDENTS.length()−1
        // loop through the array MARKS
        // accept any correct loop
    if MARKS[K] > AVE + 20         //determine the grade
        then
            G = "A"
        else
            if MARKS[K] < AVE − 20
                then
                    G = "C"
                else
                    G = "B"
            end if
    end if
    LETTERGRADES[K] = G
end loop
```

*Note**: Collection methods not accepted.       
Alternate selection constructs accepted provided it leads to the correct grade assignment 
{{< /expand >}}

---



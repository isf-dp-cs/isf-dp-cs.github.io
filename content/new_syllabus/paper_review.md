---
title: "Paper Review"
weight: 1
draft: false
---

# Paper Review

**To prepare for your exams, we recommend...**
- review your syllabus tracker
- create flash cards for the vocabulary
- re-do the questions from your previous summatives
- re-do the questions form the previous practice test 
- re-do the [intro quizzes](https://docs.google.com/presentation/d/1_BBtil2oZq7xZOhnts3uXBCrZmmdaV_pJ3d0ACT4JW4/edit)
- review the [Summative Tips Document](https://docs.google.com/document/d/17d-3OemFpOZ9m083nm-FPLA6xUdWmzrfumSWKpKCxHU/edit?usp=sharing)


---

> Here are EVEN MORE example questions.


## Paper 1 (Theme A: Concepts of Computer Science)

### [A1.2: Data representation and computer logic]

**IP addresses are stored 128-bit binary numbers, but are displayed to the network administrator in hexadecimal format.**

<div style="margin-left: 20px">


State the hexadecimal equivalent of the following binary number: 11011111. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- DF  
{{< /expand >}}



State the hexadecimal equivalent of the binary number 11111011. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- FB  
{{< /expand >}}


State the hexadecimal representation of the binary number 10001010. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 8A  
{{< /expand >}}


State the hexadecimal equivalent of the binary number 10011110. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 9E  
{{< /expand >}}


Calculate the denary (base 10) equivalent of the hexadecimal number BF. **[2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- 11 × 16 + 15  
- 191  
- Allow solution via binary route 1 mark for working, 1 mark for answer.  
- Allow both marks if correct answer given.  
{{< /expand >}}


State the binary equivalent of the denary number 89. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 01011001 OR 1011001  
{{< /expand >}}


State the binary equivalent of the denary number 37. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 00100101 OR 100101 OR 0100101  
{{< /expand >}}


Calculate, showing your working in each case: the binary (base 2) value of the denary (base 10) number: 105. **[2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- Award [1] for showing workings.  
- (0)1101001  
{{< /expand >}}


Calculate, showing your working in each case: the hexadecimal (base 16) value of the denary (base 10) number: 200. **[2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- Award [1] for showing workings.  
- C8  
{{< /expand >}}

</div>

---

**Each pixel on a computer screen has three colour values associated with it: red, green and blue. The range for each of the three colour values is from 0(10) to 255(10). Colour values can also be represented in hexadecimal. For example, the colour blue can be represented in hexadecimal as 0000FF.**


<div style="margin-left: 20px">

(a) State the binary representation of the colour blue. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 000000000000000011111111  
{{< /expand >}}


b) State the number of colours that can be represented in each pixel on the computer screen. **([1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 224 / (28)3 / 2563  
- 16.8 million / 16,777,216  
{{< /expand >}}

</div>

---

**Colours are represented by a computer as a combination of the three primary colours: red, green and blue. Numerical values are used to represent the different shades of each primary colour. These values range from 0 to 255 in decimal, or 00 to FF in hexadecimal.**

<div style="margin-left: 20px">

(a) State why hexadecimal numbers are frequently used in computing. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- Hexadecimal numbers are used for shorter representation of data because a (modern) byte can be represented exactly by two hexadecimal digits.  
- Hexadecimal numbers are used for shorter representation of data, because computers store and handle binary digits, and four binary digits make one hexadecimal digit.  
{{< /expand >}}


(b) State the number of bits used to represent a non-primary colour, such as yellow. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 24  
{{< /expand >}}



(c) State the maximum number of colours that can be represented in a computer pixel. **[1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 256 × 256 × 256 / (28)3 / 224  
- 2563  
- 16 777 216  
{{< /expand >}}

</div>


## Paper 2 (Theme B: Computational Thinking and Problem-solving)

### [B2.1: Programming fundamentals]

**Algorithmic Design**

<div style="margin-left: 20px">


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

</div>

---

### [B2.2: Data structures]


**There are 200 students in a school. Their names are held in the one-dimensional string array `STUDENTS`. The one-dimensional integer array `MARKS` stores marks (0--100 inclusive) that students scored in an examination.**

<div style="text-align: center">

***Figure 1: Example data stored in the two arrays** `STUDENTS` **and** `MARKS`*


{{< figure src="images/courses/practice_questions/grades_arrays.png" width="40%">}}

</div>

<div style="margin-left: 20px">


The one-dimensional integer array `GRADES` will be used to store the grades awarded to students based on their examination marks.


In **Figure 1**, Boris Mount scored 88 marks. His grade will be stored in `GRADES[1]`. Consider the following algorithm that the school currently uses for awarding grades:

```python
GRADES[K] = 1 + (MARKS[K] // 10)

if GRADES[K] == 7:
    GRADES[K] = 7
```


(a.i) Determine the value of `GRADES[0]`.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 1; 
{{< /expand >}}


(a.ii) Determine the value of `GRADES[1]`.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 7; 
{{< /expand >}}


(a.iii) Determine the value of `GRADES[2]`.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 5; 
{{< /expand >}}


(a.iv) State the minimum mark necessary to achieve Grade 7.  **\[1\]**

{{< expand "Markscheme" >}}

*Award **max** \[1\].*
- 60; 
{{< /expand >}}

---

**A grade of 1 is a failing grade. Each student who receives a failing grade must re-sit the examination.**



(b) Construct an algorithm in pseudocode to fill the one-dimensional string array `RESIT` with the names of students who must re-sit the examination. **\[3\]**

{{< expand "Markscheme" >}}

*Award **max** \[3\].* 
- *Award \[1\] for a correct loop;*
- *Award \[1\] for checking if a failing grade;*
- *Award \[1\] correct appending Student's name to RESIT list;*
<br><br>  

```python
RESIT = []

for i in range(len(GRADES)):
    if GRADES[i] == 1:
        RESIT.append(STUDENTS[i])
```

{{< /expand >}}


</div>

---

**Stacks + Queues**

<div style="margin-left: 20px">


Identify two applications of a stack. **[2]**

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


Identify two applications of queues in computing. **[2]**
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



Outline the purpose of the stack access method `isEmpty()`. **[2]**

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
“Geneva” should be on top of the `TOWNS` stack after reversing its contents.**

<div style="margin-left: 40px">

{{< figure src="images/courses/abstract_data_structures/towns_stack_reversal.png" width="70%">}}

Construct an algorithm that will reverse the `TOWNS` stack using an empty queue. **[5]**

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

</div>

---

**A computer science student is coding and running a program while several documents, such as essays, lab reports and homework, are being printed out.**

<div style="margin-left: 40px">


(a) Define the term queue as a data structure. **[1]**

{{< expand "Answer" >}}
Award [1 max]:
- A data structure in which items are added to the tail/rear (one end) and removed from the head/front (another end).
- First In First Out (FIFO) data structure.
{{< /expand >}}

(b) Identify two different queues used in the given scenario. **[2]**

{{< expand "Answer" >}}
Award [2 max]:
- Print queue.
- Keyboard queue.

Accept any other job queue (e.g., program is running).
{{< /expand >}}

(c) Identify one characteristic of a queue. **[1]**

{{< expand "Answer" >}}
Award [1 max]:
- A linear (abstract) data structure.
- First In First Out (FIFO).
- Elements can only be added at one end (rear/tail) and removed from the other (front/head).
- Once a new element is inserted into the queue (enqueue), all the elements inserted before it must be removed (dequeue) to remove the new element.
{{< /expand >}}

</div>

</div>

---

### [B2.4: Programming Algorithms]

**Searching Algorithms**

<div style="margin-left: 20px">


Identify **two** types of searching algorithm.  **\[2\]**

{{< expand "Markscheme" >}}

*Award **\[2 max\]***
- Linear/sequential search;
- Binary search; <br><br>  ***Note:** Award other suitable responses such as Jump search, Interpolation search, Exponential search, etc.* 
{{< /expand >}}


State **one** algorithm that could be used to arrange the values in a linear array from the lowest to highest value.  **\[1\]**

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

</div>

### [B3: Object-oriented Programming]

<div style="margin-left: 20px">

**A car rental company has offices in cities in Spain and Portugal. It manages its cars as a large, unsorted collection of rental objects.**

The following UML diagram describes the current main Rental class. Fuel type and transmission type were chosen to be Boolean because they have two choices: petrol or diesel for fuel type, and manual or automatic for transmission type.

The brand and the model of the car are stored together as one string brandModel. Typically the company has many cars of the same brand and model.

{{< figure src="images/courses/java/rental_class_uml.png" width="70%">}}


(a) Outline the general nature of an object. **[2]**

{{< expand "Answer" >}}
Award [2 max].
* an object is an abstract entity;
* consists of data/attributes/properties;
* has methods/behaviour/actions on (that data/attributes/properties);
* An object occupies memory / has a lifecycle;
* An object is an instance of a class;
{{< /expand >}}


(b) State one mutator method to be included in the class Rental. **[1]**

{{< expand "Answer" >}}
Award [1 max].
Any instance variable with the prefix 'set' and ( ) such as:
* setNumberPlate(numberPlate);
* setPricePerDay(pricePerDay);
* setRentalClass(rentalClass);
* setYear(year);
* SetBrandModel(brandModel);
* SetFuelType(fuelType);
* SetTransmissionType(transmissionType);

Note: Ignore the parameter and semi colon.
{{< /expand >}}

(c) Construct the code for the accessor method getBrandModel(). **[2]**

{{< expand "Answer" >}}
Award [2 max].
* correct method definition;
* correct return of private attribute;

Example answer:
```python
def get_brand_model(self):
    return self.__brand_model
```
{{< /expand >}}



(d) Outline one purpose of a default constructor. **[2]**

{{< expand "Answer" >}}
Award [2 max].

* A default constructor instantiates an object of a class;
* with null or default values (for the instance variables/attributes);
* without using any parameter;
{{< /expand >}}




---

**The rental car company stores a list of the rental cars in the list `CARS`**

<div style="margin-left: 40px">

(e) Construct code to sort the contents of the list CARS into ascending numerical order according to the year using the bubble sort algorithm.  **[5]**

{{< expand "Answer" >}}

- correct outer loop;
- correct inner loop;
- correctly comparing adjacent elements of CARS list using year accessor;
- correctly swapping elements;  
- Swapping contents in CARS array if required;

```python
for i in range(len(CARS)):
    for j in range(0, len(CARS) - i - 1):
        if CARS[j].getYear() > CARS[j + 1].getYear():
            # Swap the objects in the list
            temp = CARS[j]
            CARS[j] = CARS[j + 1]
            CARS[j + 1] = temp
```

{{< /expand >}}



---


(f) Construct the code that will take the list `CARS` and output a new list that contains every `brandModel` that is available without duplication. You may not use the `in` keyword for lists. **[7]** 

{{< expand "Answer" >}}
Award [7 max].

* Award [1] for initialization of unique_brand list
* Award [1] for loop through `CARS`
* Award [1] for use of accessor method for brand model
* Award [1] for inner loop for each unique_brand
* Award [1] for correctly flagging duplication
* Award [1] for adding brand to unique_brand if not duplicate
* Award [1] for printing unique_brand

Example answer:

```python
unique_brands = []

for car in CARS:
    current_brand = car.get_brand_model()
    
    is_duplicate = False
    for brand in unique_brands:
        if brand == current_brand:
            is_duplicate = True
            
    if not is_duplicate:
        unique_brands.append(current_brand)

print(unique_brands)
```
{{< /expand >}}




</div>
</div>
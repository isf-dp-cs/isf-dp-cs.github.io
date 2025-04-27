---
title: "[2] Computer Organization"
weight: 20
# bookFlatSection: false #this makes it so this page isn't seen
# bookCollapseSection: true
---
# Computer Organization

---

## Review Tools

[Topic 2 Revision](https://www.computersciencecafe.com/topic-2-revision-ib.html) from Computer Science Cafe.

[Topic 2 Key Terminology](https://www.computersciencecafe.com/key-terminology-ib-topic-2.html) from Computer Science Cafe.

[Topic 2 Quizlet Flashcards](https://quizlet.com/235342599/ib-computer-science-topic-2-computer-organization-flash-cards/) from CS Classroom.

[Topic 2 Video](https://youtu.be/Rtj_31vemao?si=c_0K1Xjv7P-7Kcg3) from CS Classroom.

---


## Key Terms 

{{< expand "View Hardware/OS Terms" >}}

| Term                                                 | Meaning                                                                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Central processing unit (CPU)                        | The part of a computer that performs the majority of the processing and calculation tasks.                                         |
| Arithmetic logic unit (ALU)                          | The part of the CPU responsible for performing arithmetic and logical operations.                                                  |
| Control unit (CU)                                    | The part of the CPU responsible for coordinating and controlling the other components of the CPU.                                  |
| Registers                                            | Small areas of memory within the CPU used to store and manipulate data quickly.                                                    |
| Data bus                                             | The communication pathway between the CPU and other components that transfers data.                                                |
| Address bus                                          | The communication pathway between the CPU and other components that carries memory addresses.                                      |
| Primary memory                                       | The main memory used by a computer to store data and program instructions that are currently being used.                           |
| Random access memory (RAM)                           | A type of primary memory that is volatile and can be read from and written to by the CPU.                                          |
| Read-only memory (ROM)                               | A type of primary memory that is non-volatile and contains instructions that cannot be altered.                                    |
| Cache memory                                         | A small amount of high-speed memory used to store frequently accessed data for faster access by the CPU.                           |
| Machine instruction cycle                            | The process of fetching, decoding, executing, and storing machine instructions within the CPU.                                     |
| Secondary memory                                     | Long-term storage used to store data and programs that are not currently being used.                                               |
| Volatile                                             | Memory that loses its contents when power is removed.                                                                              |
| Non-volatile                                         | Memory that retains its contents even when power is removed.                                                                       |
| Operating system                                     | Software that manages the resources and activities of a computer, and provides a user interface for interacting with the computer. |
| Application software                                 | Software designed for specific tasks or purposes, such as word processing, spreadsheets, or graphic design.                        |
| Graphical user interface (GUI)                       | A user interface that allows users to interact with a computer using graphical elements, such as icons, windows, and menus.        |

{{< /expand >}}

{{< expand "View Data Representation Terms" >}}

| Term                                                 | Meaning                                                                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Binary representation                                | A method of representing data using only two digits, 0 and 1.                                                                      |
| Bit                                                  | A single unit of binary data, either 0 or 1.                                                                                       |
| Byte                                                 | A group of 8 bits, used to represent a larger unit of data.                                                                        |
| Boolean operators                                    | Logical operators used to combine or manipulate binary data, including AND, OR, NOT, NAND, NOR, and XOR.                           |
| Truth tables                                         | Tables used to represent the outputs of Boolean expressions for every possible combination of inputs.                              |
| Logic gates                                          | Electronic components used to implement Boolean expressions and perform logical operations.                                        |
| Denary/Decimal                                       | A base-10 numbering system, used to represent decimal numbers.                                                                     |
| Hexadecimal                                          | A base-16 numbering system, used to represent binary data more efficiently.                                                        |
| Logic diagrams                                       | Diagrams that use logic gates and Boolean expressions to represent and solve problems.                                             |
| AND                                                  | A Boolean operator that returns true if and only if both of its inputs are true.                                                   |
| OR                                                   | A Boolean operator that returns true if at least one of its inputs is true.                                                        |
| NOT                                                  | A Boolean operator that negates the input, returning true if the input is false, and vice versa.                                   |
| NAND                                                 | A Boolean operator that returns false if and only if both of its inputs are true.                                                  |
| NOR                                                  | A Boolean operator that returns true if both of its inputs are false.                                                              |
| XOR                                                  | A Boolean operator that returns true if and only if exactly one of its inputs is true.                                             |
| String                                               | A sequence of characters used to represent text in a computer program.                                                             |
| Integer                                              | A whole number used to represent numerical values in a computer program.                                                           |
| Characters                                           | Single letters, digits, symbols, or other marks used in a computer program.                                                        |
| Unicode                                              | A character encoding standard that allows computers to represent and manipulate text from different writing systems.               |
| Ergonomics                                           | The study of designing equipment and devices that are comfortable and efficient for human use.                                     |
| Accessibility                                        | The degree to which a system or device can be used by people with disabilities or special needs.                                   |
| Thinking logically                                   | A problem-solving approach that involves breaking down problems into smaller parts and using reasoning to arrive at solutions.     |
| Connecting computational thinking and program design | The process of using computational thinking principles to design effective and efficient programs.                                 |

{{< /expand >}}

---

## Example Problems


---
**State the hexadecimal equivalent of the following binary number: 11011111. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- DF  
{{< /expand >}}

---

**State the hexadecimal equivalent of the binary number 11111011. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- FB  
{{< /expand >}}

---

**State the hexadecimal representation of the binary number 10001010. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 8A  
{{< /expand >}}

---

**State the hexadecimal equivalent of the binary number 10011110. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 9E  
{{< /expand >}}

---

**Calculate the denary (base 10) equivalent of the hexadecimal number BF. [2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- 11 × 16 + 15  
- 191  
- Allow solution via binary route 1 mark for working, 1 mark for answer.  
- Allow both marks if correct answer given.  
{{< /expand >}}

---

**State the binary equivalent of the denary number 89. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 01011001 OR 1011001  
{{< /expand >}}

---

**State the binary equivalent of the denary number 37. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 00100101 OR 100101 OR 0100101  
{{< /expand >}}

---

**Calculate, showing your working in each case: the binary (base 2) value of the denary (base 10) number: 105. [2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- Award [1] for showing workings.  
- (0)1101001  
{{< /expand >}}

---

**Calculate, showing your working in each case: the hexadecimal (base 16) value of the denary (base 10) number: 200. [2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- Award [1] for showing workings.  
- C8  
{{< /expand >}}

---

**Each pixel on a computer screen has three colour values associated with it: red, green and blue. The range for each of the three colour values is from 0(10) to 255(10). Colour values can also be represented in hexadecimal. For example, the colour blue can be represented in hexadecimal as 0000FF.**

**(a) State the binary representation of the colour blue. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 000000000000000011111111  
{{< /expand >}}

---

**(b) State the number of colours that can be represented in each pixel on the computer screen. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 224 / (28)3 / 2563  
- 16.8 million / 16,777,216  
{{< /expand >}}

---

**Colours are represented by a computer as a combination of the three primary colours: red, green and blue. Numerical values are used to represent the different shades of each primary colour. These values range from 0 to 255 in decimal, or 00 to FF in hexadecimal.**

**(a) State why hexadecimal numbers are frequently used in computing. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- Hexadecimal numbers are used for shorter representation of data because a (modern) byte can be represented exactly by two hexadecimal digits.  
- Hexadecimal numbers are used for shorter representation of data, because computers store and handle binary digits, and four binary digits make one hexadecimal digit.  
{{< /expand >}}

---

**(b) State the number of bits used to represent a non-primary colour, such as yellow. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 24  
{{< /expand >}}

---

**(c) State the maximum number of colours that can be represented in a computer pixel. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- 256 × 256 × 256 / (28)3 / 224  
- 2563  
- 16 777 216  
{{< /expand >}}

---

**Outline one reason for using Unicode to represent data in a computer system. [2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- Unicode is an established standard for data representation, providing a single encoding scheme for all languages and characters.  
- It allows data to be used and transported through many different systems, platforms, and devices.  
- Unlike ASCII, which uses 8 bits, Unicode uses 16 or 32 bits, enabling it to represent over a million characters.  
- Unicode supports a wide range of characters, including those from over 150 modern and historic scripts, as well as emoji.  
- It offers different character encodings such as UTF-8, UTF-16, and UTF-32, ensuring compatibility and flexibility across various applications.  
{{< /expand >}}

---

### Boolean operators

---

**Define the NOR Boolean operator. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- Award [1] for either the description OR the truth table.  
- Outputs the value of one if and only if all inputs have a value of zero.  

| A | B | Z  |
|---|---|----|
| 0 | 0 | 1  |
| 0 | 1 | 0  |
| 1 | 0 | 0  |
| 1 | 1 | 0  |

Note: DO NOT accept –reverse/ negates OR  
{{< /expand >}}

---

**Define the Boolean operator XOR. [2]**

{{< expand "Answer" >}}
- Award [2 max]:  
- The XOR operation takes two Boolean operands and returns true (if and only) if the operands are different.  
- It returns false if the two operands have the same value.  

Note: If defined by drawing the truth table; then award 1 mark for all four combinations of two inputs and 1 mark for the correct output column.  

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

{{< /expand >}}

---

**Define the Boolean NAND operator. [1]**

{{< expand "Answer" >}}
- Award [1 max]:  
- The NAND operator produces a FALSE value only if (and only if) both values of its two inputs are TRUE.  

Note: Accept a correct truth table for the expression A NAND B.  

| A | B | A NAND B |
|---|---|----------|
| 0 | 0 | 1        |
| 0 | 1 | 1        |
| 1 | 0 | 1        |
| 1 | 1 | 0        |

{{< /expand >}}

---

### Logic Gates and Circuits

---

**A car has features that monitor its speed, direction and distance from the car in front.**


| Input | Binary representation | Description |
|---|---|---|
| A | 0 | Car is less than 20 metres from the vehicle in front. |
| A | 1 | Car is 20 metres or more from the vehicle in front. |
| B | 0 | Car is travelling in reverse or stationary. |
| B | 1 | Car is travelling forward. |
| C | 0 | Car speed is more than 130 kilometres per hour. |
| C | 1 | Car speed is 0-130 kilometres per hour. |


For example, if the car is travelling forward, input B would have a binary representation of 1.    


**(a) Construct a logic diagram with inputs A, B, and C and output Z to represent the following scenario:**

**Output Z equals 1 when:**
- **The car is travelling forward AND it is less than 20 metres from the vehicle in front.**  
**OR**  
- **The car speed is more than 130 km per hour.**  

**In all other conditions, output Z equals 0. [4]**

{{< expand "Answer" >}}
Award [4 max]:  
Correct NOT gate with input A and single output;  
Correct NOT gate with input C and single output;  
Correct AND gate with two inputs - one input from B and one output;  
Correct OR gate with two inputs and one output Z;  

Answer should represent Z = A’.B + C’  

Example answer:  

{{< figure src="images/courses/computer_organization/car_circuit_diagram.png" width="70%">}}


Alternative answer:  
 
{{< figure src="images/courses/computer_organization/car_circuit_diagram_2.png" width="70%">}}


{{< /expand >}}

---

Information similar to that presented in the chart above could be used to construct decisions and conditions in program design.

| Identifier | Description |
|---|---|
| F | Distance in metres to the vehicle in front |
| S | Speed of car in kilometres per hour |
| T | Travelling in a forward direction |


**(b) Determine the value of the following expression given that the input values for F, S and T are:**

**F = 5**  
**S = 30**  
**T = true**     

**F >= 25 AND S >= 10 AND S <= 130 AND T = true [2]**

You must show your working. 

{{< expand "Answer" >}}
Award [2 max]:  
- Award [1] for evidence of working e.g. substitution into variables to evaluate the expression.  
- Award [1] for correct answer false.  

Example answer:  

```shell
5 >= 25 AND 30 >= 10 AND 30 <= 130 AND true  
false AND true AND true AND true  
(Output =) false  
```

Note:  
- Accept 1/0 instead of True/False.  
{{< /expand >}}

---

### Truth Tables

---

**Construct a truth table for the logic expression A NAND (B NOR C). [4]**

{{< expand "Answer" >}}
Award [4 max]:  
- Award [1] for every 2 correct rows in the truth table.  

| A | B | C | A NAND (B NOR C) |
|---|---|---|------------------|
| 0 | 0 | 0 | 1                |
| 0 | 0 | 1 | 1                |
| 0 | 1 | 0 | 1                |
| 0 | 1 | 1 | 1                |
| 1 | 0 | 0 | 0                |
| 1 | 0 | 1 | 1                |
| 1 | 1 | 0 | 1                |
| 1 | 1 | 1 | 1                |  
{{< /expand >}}

---

**Construct a truth table for the following expression: A OR NOT B AND C. [3]**

{{< expand "Answer" >}}
Award [3 max]:  
- Award [1] for 5 correct rows in the truth table.  
- Award [2] for 6 or 7 correct rows in the truth table.  
- Award [3] for all 8 correct rows in the truth table. 

| A | B | C | A OR NOT B AND C |
|---|---|---|-------------------|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

{{< /expand >}}

---

**Copy and complete the following truth table where:**

**X = A XOR B**  
**Y = A NOR C**  
**Z = X OR NOT Y [4]**

| A | B | C | X | Y | Z |
|---|---|---|---|---|---|
| 0 | 0 | 0 |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |

{{< expand "Answer" >}}
Award [4 max]:  
- Award [1] for all 8 input values correct.  
- Award [1] for correct X column.  
- Award [1] for correct Y column.  
- Award [1] for correct Z column.  

Allow follow through from incorrect columns X or Y.  

| A | B | C | X | Y | Z |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 | 0 | 1 |

{{< /expand >}}

---

**Construct a truth table for the logic expression (A NAND B) NOR C. [4]**

{{< expand "Answer" >}}
Award [4 max]:  
- Award [1] for every 2 correct rows in the truth table.  

| A | B | C | (A NAND B) NOR C |
|---|---|---|------------------|
| 0 | 0 | 0 | 0                |
| 0 | 0 | 1 | 0                |
| 0 | 1 | 0 | 0                |
| 0 | 1 | 1 | 0                |
| 1 | 0 | 0 | 0                |
| 1 | 0 | 1 | 0                |
| 1 | 1 | 0 | 1                |
| 1 | 1 | 1 | 0                |  
{{< /expand >}}

---

**Construct a truth table for the following logical expression: (A XOR B) AND NOT C. [4]**

{{< expand "Answer" >}}
Award [4 max]:  
- Award [1] for a truth table with all 8 inputs and up to 3 correct outputs.  
- Award [2] for 4 or 5 correct rows in the truth table.  
- Award [3] for 6 or 7 correct rows in the truth table.  
- Award [4] for all 8 correct rows in the truth table.  

| A | B | C | (A XOR B) AND NOT C |
|---|---|---|--------------------|
| 0 | 0 | 0 | 0                  |
| 0 | 0 | 1 | 0                  |
| 0 | 1 | 0 | 1                  |
| 0 | 1 | 1 | 0                  |
| 1 | 0 | 0 | 1                  |
| 1 | 0 | 1 | 0                  |
| 1 | 1 | 0 | 0                  |
| 1 | 1 | 1 | 0                  |

{{< /expand >}}

---

**Construct a truth table for the following expression: (A XOR B) AND B. [3]**

{{< expand "Answer" >}}
Award [3 max]:  
- Award [1] for all four combinations of two inputs.  
- Award [1] for 3 correct outputs.  
- Award [1] for all 4 correct outputs.  

Example:  

| A | B | (A XOR B) AND B |
|---|---|-----------------|
| 0 | 0 | 0               |
| 0 | 1 | 1               |
| 1 | 0 | 0               |
| 1 | 1 | 0               |  
{{< /expand >}}

---

**Construct the truth table for the following logic circuit. [4]**


{{< figure src="images/courses/computer_organization/circuit_diagram_1.png" width="70%">}}


{{< expand "Answer" >}}
Award [4 max]:  
- 1 mark: 1–2 correct rows.  
- 2 marks: 3–4 correct rows.  
- 3 marks: 5–6 correct rows.  
- 4 marks: 7–8 correct rows.  

| A | B | C | P (A') | Q (P.B) | R (B+C) | Z (R.Q) |
|---|---|---|--------|---------|---------|---------|
| 0 | 0 | 0 | 1      | 0       | 0       | 0       |
| 0 | 0 | 1 | 1      | 0       | 1       | 0       |
| 0 | 1 | 0 | 1      | 1       | 1       | 1       |
| 0 | 1 | 1 | 1      | 1       | 1       | 1       |
| 1 | 0 | 0 | 0      | 0       | 0       | 0       |
| 1 | 0 | 1 | 0      | 0       | 1       | 0       |
| 1 | 1 | 0 | 0      | 0       | 1       | 0       |
| 1 | 1 | 1 | 0      | 0       | 1       | 0       |

{{< /expand >}}

---

**Construct the truth table from the following logic circuit. [3]**

{{< figure src="images/courses/computer_organization/circuit_diagram_2.png" width="70%">}}


{{< expand "Answer" >}}
Award [3 max]:  
- Award [3] for all 8 correct rows.  
- Award [2] for 7 correct rows.  
- Award [1] for 5–6 correct rows.  

| A | B | C | S | Z |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

{{< /expand >}}

---

**Draw the truth table for the following logic circuit. [4]**

{{< figure src="images/courses/computer_organization/circuit_diagram_3.png" width="70%">}}


{{< expand "Answer" >}}
Award [4 max]:  
- 1 mark for every two correct rows.  

| A | B | C | P | Q | X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 1 |

{{< /expand >}}

---

**Draw the logic circuit represented by the following truth table. [2]**

| A | B | Z |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

{{< expand "Answer" >}}
Award [2 max]:  
Note: There could be many answers that are correct.  

Example 1:  
- Correct inputs and XOR gate;  
- NOT gate, correct final output and link from XOR gate;  

{{< figure src="images/courses/computer_organization/circuit_diagram_4.png" width="70%">}}


Example 2:  
- 2 marks, 1 mark for each correct input in OR gate.  
- Note: In this example, the two inputs in the OR gate are (NOT A AND NOT B) and (A AND B).  
- 1 mark for drawing any 3 gates (complete with inputs and outputs).  

{{< figure src="images/courses/computer_organization/circuit_diagram_6.png" width="70%">}}


{{< figure src="images/courses/computer_organization/circuit_diagram_5.png" width="70%">}}

{{< /expand >}}

---

**Construct a logic diagram for the following expression: [3]**

**NOT A OR (A AND B).**

{{< expand "Answer" >}}
Award [3 max]:  
- Award [1] for a logic diagram representing A OR B with 2 inputs, 1 output, and 3 logic gates.  
- Award [1] for the OR gate having 2 inputs, one of which is NOT A.  
- Award [1] for another input to the OR gate, which is A AND B. 

{{< figure src="images/courses/computer_organization/circuit_diagram_7.png" width="70%">}}


{{< /expand >}}

 
---

### Computer Architecture


---

**Outline the purpose of the memory data register (MDR). [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- To hold the data/instructions;  
- To be transferred/fetched to/from the main memory/RAM of the computer OR that has been read or needs to be written;  
- Using the address from the MAR;  
{{< /expand >}}

---

**Outline the purpose of the memory address register (MAR). [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- To hold the address of a location/data address/instruction address/address copied from the PC;  
- To be transferred/fetched to/from the main/primary storage of the computer OR to be read from/written to;  
{{< /expand >}}

---

**Outline the purpose of the memory address register (MAR) in the central processing unit (CPU). [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- The MAR holds the memory location of data/instructions;  
- …that need to be accessed (read/write) (fetch/store);  
{{< /expand >}}

---

**Identify three functions of the control unit (CU) in the central processing unit (CPU). [3]**

{{< expand "Markscheme" >}}
Award [3 max]:  
- Fetches/extracts each instruction from memory;  
- Decodes/transforms them into several commands/signals/steps (that are passed to the ALU or I/O or other components in the CPU for execution);  
- Controls the movements of data within the CPU;  
- Generates the clock pulses that regulate the speed of the instruction cycle;  
- Generates control signals for all hardware components to regulate their activities;  
- Synchronizes all the operations of the CPU;  

Note: Accept other reasonable answers.  
{{< /expand >}}

---

**State the function of the control unit (CU) in the central processing unit (CPU). [1]**

{{< expand "Markscheme" >}}
Award [1 max]:  
- It decodes the instructions and controls all the other internal components of the CPU to make it work;  
{{< /expand >}}

---

**Explain the purpose of cache memory. [3]**

{{< expand "Markscheme" >}}
Award [3 max]:  
- Cache memory is a memory that a computer microprocessor can access more quickly than it can access regular RAM;  
- It is integrated directly with the CPU chip or placed on a separate chip which has a separate bus interconnect with the CPU;  
- And stores frequently used data only until a computer is powered down;  
- Thus, when a processor requests data that already has an instance in the cache memory, it does not need to go to the main memory or the hard disk to fetch the data;  
- Cache memory is a small-sized type of volatile computer memory;  
- That provides high-speed data access to a processor;  
- And stores frequently used computer programs, applications, and data;  
- Cache memory can be primary or secondary cache memory, where primary cache memory is directly integrated into the processor;  
- And secondary cache memory is a reserved portion on a disk that stores and provides access to frequently accessed data/applications from the disk.  
{{< /expand >}}

---

**State the part of the central processing unit (CPU) that is responsible for carrying out calculations. [1]**

{{< expand "Markscheme" >}}
- Arithmetic and Logic Unit/ALU;  
{{< /expand >}}

---

**Distinguish between two types of primary memory. [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- RAM is a volatile/temporary memory (which could store the data as long as the power is supplied) and ROM is a permanent/non-volatile memory (which could retain the data even when power is turned off);  
- Data stored in RAM can be altered whilst data stored in ROM can only be read;  
- RAM is used to store the instructions/data/programs that are currently being processed/in use whereas ROM is used to store permanent data/files such as start-up instructions for the computer;  
- RAM - large physical chip size/higher capacity/expensive whilst ROM - small size/less capacity/cheaper;  
- The CPU can access the data stored in RAM directly whilst the CPU cannot access the data stored on ROM (unless the data is stored in RAM).  

Note: Do not award marks for Cache memory.  
{{< /expand >}}

---

**Identify one characteristic of random access memory (RAM). [1]**

{{< expand "Markscheme" >}}
Award [1 max]:  
- Random Access Memory is volatile/requires power to maintain the stored information/data is retained in RAM as long as the computer is on, but it is lost when the computer is turned off;  
- Data/instructions that are currently being used are stored in RAM;  
- RAM can be modified, erased, or read/data stored in RAM can be altered;  
- RAM is small in capacity compared to secondary storage media;  
- It is fast (faster to read from and write to than other kinds of storage, such as a hard disk drive (HDD)/solid-state drive (SSD));  
{{< /expand >}}

---

**Explain the use of cache memory. [3]**

{{< expand "Markscheme" >}}
Award [3 max]:  
- Cache memory is (an extremely) fast memory type;  
- That acts as a buffer between RAM and the CPU;  
- It holds frequently requested data and instructions;  
- So that they are immediately available to the CPU when needed;  
- Cache memory is used as an intermediate form of storage between very high-speed CPU registers and the slower RAM;  
- Located inside the CPU and can be directly accessed by the processor;  
- It is used to store instructions and data that are repeatedly required during the execution of programs;  
- Thus, improving the performance and speed of the whole system/thus avoiding the need to access the dynamic RAM to retrieve the same data repeatedly/is used to reduce the average time to access data from the main memory;  
{{< /expand >}}

---

**Distinguish between random access memory (RAM) and read-only memory (ROM). [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- RAM is a volatile memory (which could store the data as long as the power is supplied) whilst ROM is a non-volatile memory (which could retain the data even when power is turned off);  
- Data stored in RAM can be altered whilst data stored in ROM can only be read;  
- RAM is used to store the data that has to be currently processed by the CPU whilst ROM stores the instructions required during the bootstrap of the computer;  
- RAM - large physical chip size/higher capacity/expensive whilst ROM - small size/less capacity/cheaper;  
- The CPU can access the data stored in RAM whilst the CPU cannot access the data stored on ROM (unless the data is stored in RAM);  
{{< /expand >}}

---

**Explain how cache memory affects system performance. [3]**

{{< expand "Markscheme" >}}
Award [3 max]:  
- Cache is high-speed memory;  
- Located between CPU and RAM;  
- Frequently used data/instructions are (temporarily) stored in cache memory;  
- To reduce the access time needed/Speed up retrieval time/To improve the speed of processing;  
- CPU searches an instruction’s address first in the cache, and if not found, in RAM;  
{{< /expand >}}

---

**The machine instruction cycle is a sequence of actions that a central processing unit (CPU) performs to execute each machine code instruction in a program.**

**(a) State where the program is held. [1]**

{{< expand "Markscheme" >}}
Award [1 max]:  
- RAM;  
{{< /expand >}}

---

**(b) State the part of the central processing unit (CPU) that performs the decoding. [1]**

{{< expand "Markscheme" >}}
Award [1 max]:  
- CU/Control Unit;  
{{< /expand >}}

---

**(c) Outline the function of the memory address register (MAR). [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- MAR (is a register in the CPU that) stores the address of the (next) instruction/data;  
- To be read from/written to RAM;  
{{< /expand >}}

---

### Operating Systems and Applications

---

**Identify one function of a single-user operating system. [1]**

{{< expand "Markscheme" >}}
Award [1 max]:  
- Memory management;  

Note: Allow any other correct function of a single-user operating system.  
{{< /expand >}}

---

**Outline the function of a web browser. [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- A web browser allows users access to information/resources on the WWW;  
- (When a user asks for a particular website) the web browser fetches the required content from a web server/acts as an interface between a client and server;  
- Prepares the retrieved information to be displayed/interprets the content to be rendered in a format that can be understood/displays the resulting web page on the user's device;  
- Allows the user to navigate around the website/open more than one web page/print/save page/etc.;  
{{< /expand >}}

---

**State two features of a web browser. [2]**

{{< expand "Markscheme" >}}
Award [2 max]:  
- User interface features (for example, allow the user to open multiple pages at the same time, back and forward buttons, a refresh button to reload the current page, stop button to cancel loading the page, home button to return to the user's home page);  
- Access/display to/of web pages (an address bar to input the URL of a page and display it);  
- A search bar to input terms into a search engine;  
- Support of HTML standards, graphics, etc.;  
- Caching;  
- Plug-ins – different media;  
- Bookmarking and favourites;  
{{< /expand >}}

 

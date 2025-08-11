---
title: "5. Patterns"
weight: 50
draft: true
---

# Printing Patterns

{{< expand "Skills Covered in this Exercise" "click to expand ⬇️" >}}
- Nested loops
- Conditionals
- Printing
{{< /expand >}}

*These exercises come from Chua Hock-Chuan [Programming Notes](https://www3.ntu.edu.sg/home/ehchua/programming/java/J2b_BasicsExercisesOnline.html#zz-3.)*

## Setup

💻 Create a new class called `Patterns`. It does not need any properties. 

💻 Create a main method for this class.  As you write each new method below, you can use the main method to test the method. 


## Checker Pattern

🚨 Note: <br> `System.out.println()` prints the text on a new line. 
<br> `System.out.print()` prints the text on the same line.


💻 Write a method that prompts the user for the size of the pattern, and prints the checker pattern as shown:

```java
Enter the size: 5
# # # # # 
 # # # # # 
# # # # # 
 # # # # # 
# # # # # 
```

```java
Enter the size: 1
#
```

```java
Enter the size: 3
# # # 
 # # # 
# # # 
```
---

## Triangle Pattern

🚨 Note: <br> `System.out.println()` prints the text on a new line. 
<br> `System.out.print()` prints the text on the same line.


💻 Write a method that prompts the user for the size of the pattern, and prints the checker pattern as shown:

```java
Enter the size: 5
*
**
***
****
*****
```

```java
Enter the size: 4
*
**
***
****
```

```java
Enter the size: 1
*
```

---

## Z Pattern

🚨 Note: <br> `System.out.println()` prints the text on a new line. 
<br> `System.out.print()` prints the text on the same line.


💻 Write a method that prompts the user for the size of the pattern, and prints the checker pattern as shown:

```java
Enter the size: 5
*****
   * 
  *  
 *   
*****
```

```java
Enter the size: 3
***
 * 
***
```

```java
Enter the size: 1
*
```

---

## Hill Pattern

🚨 Note: <br> `System.out.println()` prints the text on a new line. 
<br> `System.out.print()` prints the text on the same line.


💻 Write a method that prompts the user for the size of the pattern, and prints the checker pattern as shown:

```java
Enter the size: 5
    ^     
   ^^^    
  ^^^^^   
 ^^^^^^^  
^^^^^^^^^ 
```

```java
Enter the size: 4
   ^    
  ^^^   
 ^^^^^  
^^^^^^^ 
```

```java
Enter the size: 1
*
```

---

## Multiplication Table

🚨 Note: <br> `System.out.println()` prints the text on a new line. 
<br> `System.out.print()` prints the text on the same line.


💻 Write a method that prompts the user for the size of the pattern, and prints the checker pattern as shown:

```shell
Enter the size of the table: 9

 * |   1   2   3   4   5   6   7   8   9
===+====================================
 1 |   1   2   3   4   5   6   7   8   9
 2 |   2   4   6   8  10  12  14  16  18
 3 |   3   6   9  12  15  18  21  24  27
 4 |   4   8  12  16  20  24  28  32  36
 5 |   5  10  15  20  25  30  35  40  45
 6 |   6  12  18  24  30  36  42  48  54
 7 |   7  14  21  28  35  42  49  56  63
 8 |   8  16  24  32  40  48  56  64  72
 9 |   9  18  27  36  45  54  63  72  81
```

```shell
Enter the size of the table: 5

 * |   1   2   3   4   5
===+====================
 1 |   1   2   3   4   5
 2 |   2   4   6   8  10
 3 |   3   6   9  12  15
 4 |   4   8  12  16  20
 5 |   5  10  15  20  25
```

```shell
Enter the size of the table: 1

 * |   1
===+====
 1 |   1 
```
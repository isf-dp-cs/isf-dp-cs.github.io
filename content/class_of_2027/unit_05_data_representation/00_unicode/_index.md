---
title: "00. Unicode" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Unicode

This lab explores Unicode and invisible characters.

<!-- --- -->
<!-- ## Syllabus Topics [SL]
- **A3.3.1** Outline the differences between data language types within SQL.
- **A3.3.2** Construct queries between two tables in SQL.
- **A3.3.3**  Explain how SQL can be used to update data in a database. -->

<!-- 
## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **SQL** | Structured Query Language |
| **Database** | an organized collection of structured information that can be accessed in different ways |
| **Table** | a structure of rows and columns for storing a group of similar data  |
| **Field** |the column name  |
| **Data Language Types** | languages used to interact with databases  |
| **Data Definition Language (DDL)** | language that is used to create, modify, and remove data structures  from a  database  |
| **Data Manipulation Language Language (DML)** | language that is used to add, modify, delete, and retrieve data stored in  databases  |
| **Query** | to request information from a database |
| **Relational Operators** | `=`, `>`, `<`, `!=`, `<=`, `>=`, `between`, `in`, `like`, `%`, `IS NULL`|
| **Filtering** | using `WHERE` |
| **Pattern Matching** |  using `like`, `%`, `_`|
 -->

---

## [0] Setup

We will do these experiments in the python shell. 
💻  **Enter the python shell**
```python
python3
```

you will know you're in the shell if it looks like this:

```python
>>>
```

{{< aside "Exiting the shell" >}}

To exit the shell, type `control` + `D` or type `exit`.

{{< /aside >}}

---


## [1] Print Unicode as integers


💻  **The ord() function prints unicode as integers**

<br>


**For example:.** 

```python
char_a = 'A'
char_tree = '樹'
char_poo = '💩'
```

```python
>>>ord(char_tree)
```

```python
>>>ord(char_tree)
```

```python
>>>ord(char_poo)
```

💻  **Experiment by printing out some different characters**

You can see integer representation is longer for some than it is for others

---

## [2] Invisible characters

Some emojis have variations, such as different skin and hair colors

💻  **Save an emoji that has variations into a variable**
```python
char_man = '🙋🏻'
char_painter = '👩🏽‍🎨'
```

When you try to print them out as a whole, you may get an error.

💻  **Print each piece of the emoji separately**
```python
>>>ord(char_painter[0])
>>>ord(char_painter[1])
>>>ord(char_painter[2])
>>>ord(char_painter[3])

```





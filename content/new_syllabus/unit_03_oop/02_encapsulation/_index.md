---
title: "02. Encapsulation" 
bookFlatSection: false
weight: 20
# bookCollapseSection: true
# draft: true
---

# Encapsulation

This lab introduces the ideas of encapsulation, information hiding, static variables, and composition as a relationship between classes.

---
## Syllabus Topics [SL]
- **B3.1.2** Construct a design of classes, their methods and behaviour.
- **B3.1.3** Distinguish between static and non-static variables and methods.
- **B3.1.4** Construct code to define classes and instantiate objects.
- **B3.1.5** Explain and apply the concepts of encapsulation and information hiding in OOP.


## Syllabus Topics [HL]
- **B3.2.4** Explain the role of composition and aggregation in class relationships.


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Encapsulation** | Combining datapoints and methods that manipulate those datapoints together to create objects. This often involves information hiding. | 
| **Information Hiding** | Restricting access to certain datapoints or methods. |
| **Class Members** | Any element inside the class definition, including both attributes (variables) and methods (functions) |
| **Access Modifiers** | Controls where variables and methods can be accessed from. E.g. public (no underscore), and private (two underscores) |
| **Static** | Attributes or methods that belong to the class, not the individual objects. |
| **Static Variable** | Attribute which is shared among all objects of a class. |
| **Instance Variable** | Non-static attributes that belong to a particular object. |
| **Composition** | One object contains one or more other objects, but the other objects **cannot** exist independently *(ex. house and room - if the house is destroyed, so are the rooms)*  |

---


# [0] OOP Concepts

## Composition



{{< columns >}}

In this lab, you will make a model Bank with two classes: `Bank` and `Account`. We would phrase this relationship as:

>An Account is **part of** a Bank

 This **"part of"** relationship is referred to as **composition**. If the Bank is destroyed, so are the Accounts .



<--->

{{< mermaid >}}
classDiagram
    Account --* Bank : part of
    Lungs --* Body : part of
    Room --* Building : part of
{{< /mermaid >}}

<--->
<br><br>
**Here are some example UML diagrams of composition relationships.** 
<br><br>
**Composition** relationships are drawn with a filled diamond ⬥ 

{{< /columns >}}

---

## Static

{{< columns >}}

Static variables and methods belong to the whole class, rather than to an individual object. They are shared across all objects of the class.
      
<!-- For example, all `Account` objects share the same `next_account_number` and `interest_rate`. -->

- The `static` `next_account_number` is used to ensure each object has a unique number
- The `static` `interest_rate` is used to ensure all bank accounts have the same interest rate

<!-- The instance variables are non-static. Each bank account will have its own value for `name` `balance` and `account_number` -->

You use static variables/methods using the class name. For example:
```python
# using a static variable
Account.__interest_rate = 0.05
print(Account.__interest_rate)
```

<--->

Static items are <u>underlined</u> in UML diagrams.

{{< mermaid >}}

classDiagram
    class Account {
        + next_account_number: int$
        + interest_rate: float$
        - __name: str
        - __balance: float
        - __account_number: int
        + __init__(str)
        + __str__() str
        + get_name() str
        + set_name(str) None
        + get_account_number() str
        + get_balance() float
        + deposit(float) None
        + withdraw(float) bool
        + apply_interest() None
    }
   
{{< /mermaid >}}

{{< /columns >}}

---

## Encapsulation and Data Hiding

Encapsulation is bundling datapoints and the methods that manipulate those datapoints together to create objects. This often involves restricting access to certain datapoints or methods, aka **data hiding**.

Examples of data hiding in the `Account` class:

- `name` `balance` and `account_number` are private attributes which can only be directly accessed inside the `Account` class
- `name` can only be be changed through the mutator `set_name()`
- `balance` can only be be changed through the mutators `deposit()` `withdraw()` and `apply_interest()`, which operate according to specific rules
- `account_number` cannot be changed

---

## UML

Here is the full UML diagram representing the classes in this lab:

{{< mermaid >}}

classDiagram
    class Account {
        + next_account_number: int$
        + interest_rate: float$
        - __name: str
        - __balance: float
        - __account_number: int
        + __init__(str)
        + __str__() str
        + get_name() str
        + set_name(str) None
        + get_account_number() str
        + get_balance() float
        + deposit(float) None
        + withdraw(float) bool
        + apply_interest() None
    }

    class Bank {
        - __bank_name: str
        - __accounts: list~Account~
        + __init__(str)
        + get_bank_name() str
        + set_bank_name(str) None
        + get_accounts() list~Account~
        + find_account_by_name(str) Account
        + add_account(str) bool
        + apply_interest_all() None
        + transfer(str, str, int) bool
        + report() None
    } 

    Account --* Bank
   
{{< /mermaid >}}

---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_encapsulation_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_encapsulation_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [2] Account

Here is the UML diagram for the `Account` class.

{{< mermaid >}}
classDiagram
    class Account {
        + next_account_number: int$
        + interest_rate: float$
        - __name: str
        - __balance: float
        - __account_number: int
        + \_\_init__(str)
        + \_\_str__() str
        + get_name() str
        + set_name(str) None
        + get_account_number() str
        + get_balance() float
        + deposit(float) None
        + withdraw(float) bool
        + apply_interest() None
    }
{{< /mermaid >}}

💻 **Finish the following `Account` methods in `account.py`:**
- `get_name()`
- `set_name()`
- `get_account_number()`
- `get_balance()`
- `deposit()`
- `withdraw()`
- `apply_interest()`

💻 **At the bottom of the `account.py`, create multiple `Account` objects and tests each method.** 

---

# [3] Bank

Here is the UML diagram for the `Bank` class. **The `Bank` is the only way to interact an `Account`.**

{{< mermaid >}}
classDiagram
    class Bank {
        - __bank_name: str
        - __accounts: list~Account~
        + \_\_init__(str)
        + get_bank_name() str
        + set_bank_name(str) None
        + get_accounts() list~Account~
        + find_account_by_name(str) Account
        + add_account(str) bool
        + apply_interest_all() None
        + transfer(str, str, int) bool
        + report() None
    }    
{{< /mermaid >}}

💻 **Construct code for the unfinished methods. Read the docstring to learn its functionality.** After completed each function, test it at the bottom of the file to ensure it works as expected. Be sure to test all scenarios!

- `get_bank_name()`
- `set_bank_name()`
- `get_accounts()`
- `find_account_by_name()`
- `add_account()`
- `apply_interest_all()` 
- `transfer()` 

💻 **Test your finished Bank by completing the following steps!** 

- Create 10 bank accounts using a loop
- Deposit a different random amount into each account
- Print the name of the account with the most and least money in it. Transfer all the money from the most into the least.

---

# [4] Security

Right now, the bank is not very secure. You can can withdraw money from the account by just providing the account name!
<br>
In real life, if you want to withdraw money, you need to provide a PIN (Personal Identification Number). This would be a 4-digit code, for example "1234" or "0030".

💻 **Add a PIN to the Account by doing the following**

- add a new **private** attribute to the `Account` to store the PIN. 
- edit the constructor so that it additionally takes the PIN as a parameter and sets the PIN value

💻 **Add `check_pin()`**

- `check_pin()` should prompt the user to type in a PIN. 
- If they enter the correct PIN, it should return `True`
- If they mis-type the PIN, it should allow them to re-type the PIN.
- After 5 incorrect attempts, it should print "Too many attempts" and return False

💻 **Edit withdraw() to require a PIN**

- In order to withdraw money, the user should have to complete the `check_pin()` process successfully

---

# [5] Deliverables


{{< deliverables "Once you finish the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Checklist:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}}
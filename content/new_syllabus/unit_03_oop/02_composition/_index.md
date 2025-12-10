---
title: "02. Composition" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Composition

This lab introduces relationships between classes.

---
## Syllabus Topics [SL]
- **B3.1.2** Construct a design of classes, their methods and behaviour.
- **B3.1.4** Construct code to define classes and instantiate objects.

## Syllabus Topics [HL]
- **B3.2.4** Explain the role of composition and aggregation in class relationships.


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Composition** | One object contains one or more other objects, but the other objects CANNOT exist independently *(ex. house and room - iff the house is destroyed, so are the rooms)*  |
| **Static** | Attributes or methods that belong to the class, not the individual objects  |


---


# [0] Class Relationships

In this lab, you will make a model Bank with two classes: `Bank` and `Account`. This is an example of composition because if the bank is destroyed, so are the bank accounts.


📖 **Here is the UML diagram for the class relationships.** 
- The filled diamonds represent a `composition` relationship. A `Bank` contains an `Account`, but `Accounts` don't exist if the `Bank` is destroyed.
- The `static next_account_number` is used to ensure each object has a unique number

{{< mermaid >}}

classDiagram
    class Account {
        static next_account_number: int = 0
        - __name: str
        - __balance: float
        + account_number: int
        + __init__(name)
        + __str__()
        + get_balance(): float
        + get_name(): str
        + change_balance(amount): none
    }

    class Bank {
        static interest_rate: float = 5.00
        - name: str
        - __accounts: list~Account~
        + __init__(name)
        + get_accounts() : list~Account~
        + report(): none
        + get_specific_account(target_account_name): Account | None
        + sort_accounts(): none
        + add_account(account_name) : bool
        + deposit(account_name, amount): bool
        + withdraw(account_name, amount): bool
        + transfer(account1, account2, amount): bool
        + apply_interest(account_name): bool
    } 

    Account --* Bank
   
{{< /mermaid >}}


---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_oop
git clone https://github.com/isf-dp-cs/lab_composition_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_composition_yourgithubusername
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
        static next_account_number: int = 1
        - __name: str
        - __balance: float
        + account_number: int
        + __init__(name)
        + __str__()
        + get_balance(): float
        + get_name(): str
        + change_balance(amount): none
    }
{{< /mermaid >}}

💻 **Finish the following `Account` methods in `account.py`:**
- `get_name()`
- `get_balance()`
- `change_balance`

💻 **At the bottom of the `account.py`, create multiple `Account` objects and test each method.** 


---

# [2] Bank

Here is the UML diagram for the `Bank` class. **The `Bank` is the only way to interact an `Account`.**

{{< mermaid >}}
classDiagram
    class Bank {
        - name: str
        - __accounts: list~Account~
        + __init__(name)
        + get_accounts() : list~Account~
        + add_account(account_name) : bool
        + sort_accounts(): none
        + get_specific_account(target_account_name): Account | None
        + deposit(account_name, amount): bool
        + withdraw(account_name, amount): bool
        + transfer(account1, account2, amount): bool
        + report(activity): none
    }    
{{< /mermaid >}}

💻 **Construct code for the unfinished methods. Read the docstring to learn its functionality.** After completed each function, test it at the bottom of the file to ensure it works as expected. 

- `get_specific_account(target_account_name)` - use binary search
- `sort_accounts()` - use sorting method of your choosing
- `add_account(account_name)` 
- `deposit(account_name, amount)` 
- `withdraw(account_name, amount)` 
- `transfer(account_name1, account_name2, amount)` 
- `apply_interest(self, account_name)`

{{< write-action >}}

1) **Draw the UML diagrams by ONLY referencing the code.** 

2) Double check your diagram against the website.

3) If you made mistakes, take note of them and try again.

{{< /write-action >}}


---

# [6] Deliverables


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



---
title: "07. Static Methods" 
bookFlatSection: false
weight: 50
# draft: true
---

# Static Methods

In this lab you will learn about static methods through a Currency Conversion System. 

---

## Syllabus Topics [HL]
- **B3.1.3** Distinguish between static and non-static variables and methods.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Static Method** | A method that belong to the class, not the individual objects.  | 

---

# [0] Class Overview

In this lab, you a class that only has `static methods` and `static attributes`: `CurrencyConverter`.

**A Currency Conversion System has only static methods and static attributes because it helpful to have the functionaries grouped together in a class, but it does not require objects with unique attributes or methods.** 

Static methods can be called without can object, simply on the class itself. 

```python
class CurrencyConverter:
    
    CURRENCIES = ["HKD", "USD", "JPY", "EUR", "GBP", "THB", "KRW"]
    RATES = [1.0, 0.13, 20.32, 0.11, 0.096, 4.02, 188.68]

    @staticmethod
    def get_rate(currency):
        """Returns the rate for the currency"""

        index = CurrencyConverter.CURRENCIES.index(currency)

        return CurrencyConverter.RATES[index]

CurrencyConverter.get_rate("HKD")
```

<br>

📖 **Here is the UML diagram for the class.** The underline of an attribute or method denotes it is static.

{{< mermaid >}}

classDiagram
    
    class CurrencyConverter {
        +CURRENCIES : [] str$
        +RATES : [] float$
        +SYMBOLS: [] str$
        +get_rate(currency)$
        +convert(amount, from_currency, to_currency)$
        +format(amount, currency)$
        +change_rate(currency, new_rate)$
        +parse_and_convert(user_input)$
    }

{{< /mermaid >}}

---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_static_methods_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_static_methods_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [2] Implement the methods

💻 **Firstly, test using the existing static attributes and methods in the `CurrencyConverter` class.**

💻 **Secondly, implement the following methods as outlined in the DOCSTRINGS**
- `convert(amount, from_currency, to_currency)`
- `format(amount, currency)`
- `parse_and_convert(user_input)`

💸 **Currency Conversion Tips**
- HKD to another currency: multiply by the rate
- another currency to another currency:  convert the first currency to HKD then to the other currency

```shell
# HKD $10 -> USD $1.3
10 * 0.13 = 1.3

# JYP ¥1000  -> GDP £8.64
1000/20.32 -> 49.20     #1) convert JYP to HKD
4.92*0.096 = 4.72       # 2) convert HKD to GDP

```

---

# [4] Deliverables


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


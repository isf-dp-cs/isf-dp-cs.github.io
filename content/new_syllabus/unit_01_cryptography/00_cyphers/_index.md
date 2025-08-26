---
title: "0. Subsitution Ciphers"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
# draft: true
---

# Subsitution Ciphers 

In this lab you will be introduced to `functions` by constructing multiple substitution ciphers.

{{< figure src="images/courses/string_manipulation/wordle_icon.png" width="20%">}}

---
### Syllabus Topics [SL]
* **B1.1.4** B2.3.4 Construct functions and modularization.


POTENTIAL TOPICS
A1.2.1 Describe the principal methods of representing data.
A2.4.4 Describe the process of encryption and digital certificates.
A1.2.1 Describe the principal methods of representing data.
<!-- ### Syllabus Topics [HL]-->


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Function** | A reusuable block of code that returns a value. |
| **Scope** | EDIT |
| **Encryption** | EDIT. |
| **Symmetric Cryptography** | EDIT.  |

---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit01_cryptography
cd unit01_cryptography
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/https://github.com/isf-dp-cs/lab_substitution_ciphers.git
```



{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd project_wordle_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [1] What is a function? 

A function is a reusable block of code. We often think of functions as taking an `input` of information, transfomrating the information, and returning an `output` of information. 

In this example the `numbter_to_letter()` function takes any integer as an input and returns the corresponding letter as an output. 

```python
def number_to_letter(number):
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    letter = alpha[number]

    return letter

convert_five = number_to_letter(5) 
```

Construct a function to convert a string of any length into numbers. 




--- 


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

✏️ **Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.**

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m \"describe your code here\"   
- git push
- git remote

{{< /deliverables >}}

---

# [4] Criteria E: Evaluation

The evaluatioin of the product must evaluate if the Success Criteria were met and consider future improvements to the product. 


{{< checkpoint  >}}

**✏️ Fill out Criteria E on your document**

{{< /checkpoint>}}



---

# [5] HL: Abstract Data Types (ADTs)


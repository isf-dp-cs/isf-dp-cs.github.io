---
title: "0. Substitution Ciphers"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
# draft: true
---

# Substitution Ciphers 

In this lab you will be introduced to `functions` by constructing multiple substitution ciphers.


---
## Syllabus Topics [SL]
- **B2.3.1** Construct programs that implement the correct sequence of code instructions to meet
program objectives.
- **B2.3.4** Construct functions and modularization.


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Function** | A reusuable block of code that returns a value. |
| **Modularization** | The process of dividing into smaller parts that work independently.  |
| **Local Scope** | A variable defined inside a function may only be used in that function. |
| **Global Scope** | A variable defined in the main body of a program, may be used thorughout the program. |
| **Infinite Loop** | A loop that will never end.  |
| **Casting** | Convert a variable from one data type to another |

<!-- | **Deadlock** | A variable defined in the main body of a program, may be used thorughout the program. | -->



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
git clone https://github.com/isf-dp-cs/https://github.com/isf-dp-cs/lab_substitution_ciphers_yourGithubUsername.git
```



{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_substitution_ciphers_yourGithubUsername
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

In this example the `pluralize()` function takes any string as an input and returns the string in its pluralized form.

```python{linenos=table}
def pluralize(word):
    if word[-1] == 's' or word[-1] == 'ch' or word[-1] == 'sh':
        word = word + 'es'
    else:
        word = word + 's'
    return word

```
- `line 1` defines the function with an arguement/parameter
- `line 2-5` contains a conditional checking the final letters of the noun. Most English nouns are pluralized by adding “s” (“tree” becomes “trees”). But nouns ending in “s”, “ch”, or “sh” are pluralized by adding “es” (“beach” becomes “beaches”).
- `line 6` returns the pluralized word

To use this function you must `call` it. Functions make it really easy to reuse code, becuase you can them an unlimited amount of times.

```python{linenos=table}
pluralize('apple')  # returns 'apples'
pluralize('beach')  # returns 'beaches'
```

To store the return value of the function:
```python{linenos=table}
plural_apple = pluralize('apple')  # stores 'apples'
pluaral_beach = pluralize('beach')  # stores 'beaches'
```

{{< aside "Function Practice" >}}

💻 **You can practic writing functions at [codingbat.com](https://codingbat.com/python)**


{{< /aside >}}



---

# [2] Substitution Cipher

A cipher is an algorithm for disguising a message. In this lab you will write a series of substitution ciphers to disguise a message. 

💻 **Open `substitution_ciphers.py`**

---


### `reverese_message()`

💻 **Construct the code for the `reverese_message()` function.** *You may not use `.reverse()`.*
- inputs - origianl_message (str)
- output - returns the new message reversed


💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    reversed_message = reverese_message('hello world')
    print(reversed_message)
    # OUPUT: dlrow olleh
```

---

### `charachter_to_integer()`

💻 **Construct the code for the `charachter_to_integer()` function.** 
- inputs - origianl_message (str), charachter (str), integer(int) 
- output - returns the new message with all instances of the charachter, replaced by the integer


💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    replace_p = charachter_to_integer('apple','p',5)
    print(replace_p)
    # OUPUT: a55le
```

---

### `find_replace()`


💻 **Construct the code for the `find_replace()` function.** 
- inputs - original_message (str), find_test (str), replace_text (int) 
- output - returns a new message with all instances of the find_test, replaced by the replace_text




💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    replace_p = charachter_to_integer('apple','p',5)
    print(replace_p)
    # OUPUT: a55le
```

---

# [3] Deliverables

{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

✏️ **Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.**

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m \"describe your code here\"   
- git push
- remote

{{< /deliverables >}}


---

# [4] Extensions 


### `reverse_each_word()`

💻 **In`extension_ciphers.py`, construct the code for the `reverse_each_word()` function.** 
Be sure to consider:
- what existing function  you use? 
- what should it input and output


💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    reversed_message = reverse_each_word('hello world')
    print(reversed_message)
    # OUPUT: olleh dlrow
```
---


### `reverse_each_word()`

💻 **In`extension_ciphers.py`, construct the code for the `string_to_integer()` function.** It will transform each charachter to its coresponding index in the English alphabet. Be sure to consider:
- what should it input and output

💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    converted_message = string_to_integer('abcd')
    print(converted_message)
    # OUPUT: 0123

    converted_message2 = string_to_integer('hello')
    print(converted_message)
    # OUPUT: 74111114
```

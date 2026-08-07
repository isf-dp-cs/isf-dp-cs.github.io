---
title: "0. Substitution Ciphers"
bookFlatSection: false
weight: 10
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
| **Function** | A reusuable block of code that takes input and gives an output. |
| **Parameter/Argument** | The input value(s) of a function. There can be many parameters.|
| **Return value** | The value that a function outputs. There can only be one output. |
| **Modularization** | The process of dividing a larger task into smaller parts that work independently. |
| **Scope** | Where a variable can be accessed in the code. |
| **Local Scope** | A variable defined inside a function, loop, or condition that may only be used within that indented block. |
| **Global Scope** | A variable defined in the main body of a program, may be used thorughout the program. |
| **Infinite Loop** | A loop that will never end.  |
| **Casting** | Convert a variable from one data type to another |


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
git clone https://github.com/isf-dp-cs/lab_substitution_ciphers_yourGithubUsername
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

A function is a reusable block of code. We often think of functions as taking an `input` of information, transforming the information, and returning an `output` of information. 

In this example, the `pluralize()` function takes any string as an input, and returns the string in its pluralized form.

```python{linenos=table}
def pluralize(word):
    if word[-1] == 's' or word[-1] == 'ch' or word[-1] == 'sh':
        word = word + 'es'
    else:
        word = word + 's'
    return word

```
- `line 1` defines the function with an argument/parameter
- `line 2-5` contains a conditional to check the final letters of the noun. Most English nouns are pluralized by adding “s” (“tree” becomes “trees”). But nouns ending in “s”, “ch”, or “sh” are pluralized by adding “es” (“beach” becomes “beaches”).
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


### `reverse_message()`

💻 **Construct the code for the `reverse_message()` function.** *You may not use `.reverse()`.*
- inputs - original_message (str)
- output - returns the new message reversed


💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    reversed_message = reverse_message('hello world')
    print(reversed_message)
    # OUPUT: dlrow olleh
```
💻 **Once you have it working, decrypt the secret messages.** 
{{< expand "Secret Message 1" >}}
```text
selif ruoy gnidaer morf stnemnrevog rojam pots lliw taht yhpgotpyrc dna ,selif ruoy gnidaer morf retsis dik ruoy pots lliw taht yhpgotpyrc :dlrow siht ni yhpgotpyrc fo sdnk owt era erehT
```
— Bruce Schneier

{{< /expand >}}

{{< expand "Secret Message 2" >}}
```text
LLEH OTNI SDRAWKCAB KLAW DNA DOG ECAf lliw I SLAMINA EHT TA GNIRELLOH ROF EM SNAB OOZ EHT FI
```
― @dril

{{< /expand >}}

---

### `character_to_integer()`

💻 **Construct the code for the `character_to_integer()` function.** 
- inputs - original_message (str), character (str), integer(int) 
- output - returns the new message with all instances of the character, replaced by the integer


💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    replace_p = character_to_integer('apple','p',5)
    print(replace_p)
    # OUPUT: a55le
```

💻 **Once you have it working, decrypt the secret message.** 

{{< expand "Secret Message 3" >}}
Replace all `m` with `o`     
Replace all `q` with `e`     
Replace all `P` with `I`     
Replace all `j` with `d`     
```text
Pf P gmt any cmmlqr P wmulj frqqzq tm jqath
```
-Kanye West
{{< /expand >}}

---

### `find_replace()`


💻 **Construct the code for the `find_replace()` function.** 
- inputs - original_message (str), find_test (str), replace_text (int) 
- output - returns a new message with all instances of the find_test, replaced by the replace_text




💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    replace_p = character_to_integer('apple','p',5)
    print(replace_p)
    # OUPUT: a55le
```

💻 **Once you have it working, decrypt the secret message.** 

{{< expand "Secret Message 4" >}}
Replace all `ham` with `the`     
Replace all `el` with `in`     
Replace all `barbie` with `you`     
Replace all `qu` with `re`     
    
```text
If barbie quveal barbier secquts to ham weld, barbie should not blame ham weld for quvealelg hamm to ham tques.
```
-Kahlil Gibran
{{< /expand >}}

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
- what existing function can you utilize? 
- what should it input and output?


💻 **Test your function at the bottom of the file.** Be sure to test multiple cases. 
```python
if __name__ == "__main__":
    reversed_message = reverse_each_word('hello world')
    print(reversed_message)
    # OUPUT: olleh dlrow
```
---


### `string_to_integer()`

💻 **In`extension_ciphers.py`, construct the code for the `string_to_integer()` function.** It will transform each character to its coresponding index in the English alphabet. Be sure to consider:
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

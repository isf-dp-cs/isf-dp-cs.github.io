---
title: "00. Cyphers"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
# draft: true
---

# Cyphers 

In this project, you will experience the IB IA structure and develop the code for a game based on the NYT Wordle.

{{< figure src="images/courses/string_manipulation/wordle_icon.png" width="20%">}}

---
### Syllabus Topics [SL]
* **B1.1.4** B2.3.4 Construct functions and modularization.
* **B2.1.3** Describe how programs use common exception handling techniques.


<!-- ### Syllabus Topics [HL]

* **B4.1.1** Explain the core principles of ADTs
* **B4.1.5**  Construct and apply sets as an ADT -->


---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit00_strings` **folder.**

```shell
cd ~/desktop/dpcs/unit00_strings/
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}}  
```shell
git clone https://github.com/isf-dp-cs/project_wordle_yourGithubUsername
```
> Below you'll see that the `git clone` command has a `yourGithubUsername`. 
>
> **You need to replace this with your username**
>
> *e.g. `https://github.com/isf-dp-cs/project_wordle_emmaqbrown`*


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

[1] What is a function? 

input -> transformation -> output

```python
def number_to_letter(number):
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    letter = alpha[number]

    return letter

convert_five = number_to_letter(5) 
```

Construct a function to convert a string of any length into numbers. 



---

[2] File I/O

Reading a file

Writing to a file

---

[3] Caesar Cipher

```python
def caesar_cipher(plain_text, encryption_key ):
    # returns the plain_text encrypted by the encryption key number

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    cipher_text = ""

    for letter in plain_text: 
        letter = letter.lower()
        if letter in alphabet:
            letter_index = alphabet.index(letter)
            letter_encrypted_index = letter_index + encryption_key
            letter_encrypted_index = letter_encrypted_index%26
            cipher_text += alphabet[letter_encrypted_index]
        
        else:
            cipher_text += letter

    return cipher_text
```



💻 **Include `try`, `except` and `raise Exception` in your program. You can use them in whatever way makes the most sense to you.** Read more here:
- [`try` and `except`](https://www.w3schools.com/python/python_try_except.asp)
- [Build-in Exceptions](https://www.w3schools.com/python/python_ref_exceptions.asp)


{{< expand "Tips" >}}
```python
letter = 'a'
try:
	letter = letter + 3
except: 
	print("letter is not a number")

# RAISE EXCEPTIONS 
try:
	print(x)
except: 
	raise Exception("Impossible!")


# BUILT-IN EXCEPTIONS
try:
	print(x)
except: 
	raise ValueError("x does not exist")
```


{{< /expand >}}


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


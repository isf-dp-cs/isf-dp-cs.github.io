---
title: "1. Encryption Ciphers"
bookFlatSection: false
weight: 4
# bookCollapseSection: true
# draft: true
---

# Encryption Ciphers 

In this lab you will continue to practice functions and are introduced to file handling.

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/1200px-Caesar_cipher_left_shift_of_3.svg.png" width="50%">}}

---
## Syllabus Topics [SL]
* **B2.5.1** Construct code to perform file-processing operations.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Path** | Location of a file  |
| **Absolute Path** | Location of a file specificed from the root/home directory  |
| **Relative Path** | Location of a file specificed from the current directory |


---

# [0] Set up


{{< code-action "Go to your" >}} `dpcs/unit01_cryptography` **folder.**

```shell
cd ~/desktop/dpcs/cd unit01_cryptography/
```

{{< code-action "Clone your repo and go into the directory." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/https://github.com/isf-dp-cs/lab_encryption_ciphers.git
cd lab_encryption_ciphers_yourGithubUsername
```


{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [1] File Handling 

In this lab you will use file handling techniques to encrypt and decrypt large text files. 


📖 **To open a file**

```python
file = open('example.txt', 'r')
file.read()
file.close()
```
- `open()` - opens a file in a specific mode, if the file does not exisit it creates a new file
- `example.txt` is the name of the file you want to open, read, or create 
- `r` represents the mode mode, important modes to remember are:
    - `r` - read the text
    - `w` - write over existing text 
    - `a` - append text to the end of the file
- `read()` - returns all text in the file
- `close()` - closes the file

📖 **To write to a file**
```python
file = open('example.txt', 'a')
file.write('Hello world')
file.close()
```

📖 **To loop through each line in a file**
```python
file = open('example.txt', 'r')
for line in file:
    print(line)
file.close()
```


💻 **Open `file_handling.py` and construct the following actions.** 

0) Open `song.txt`, read the file, and print the text
0) Append the last line of the song. Be sure it is appended on the next line. 
    - last line: `You're my soda pop, gotta drink every drop`
0) Create a new file `capitalized_song.txt` with lyrics of the song in all capital letters, print the full text


---

# [2] Caesar Cipher

The caesar cipher is a type of substitution cipher used in the Roman empire. It takes a message, the `plain text` and transforms it by shifting each letter by a set value, the `encryption key`. 

For example the plain text `"cat"` with the encryption key `3`, becomes `"fdw"`.
- `c` shifts by 3, becoming `f`
- `a` shifts by 3, becoming `d`
- `t` shifts by 3, becoming `w`


💻 **In `caesar_cipher.py`, construct the function `decrypt_caesar_cipher()` to decrypt a message that has been encrypted by a caesar cipher.** 

💻 **Test your decryption function `decrypt_caesar_cipher()` on words and short phrases**

💻 **Use your `decrypt_caesar_cipher()` function and file handling methods to decrypt the message in `caesar_encrypted_text.txt`.** You should then create a new file with the decrypted text.

✅ **Check your work by openning the created file and ensuring it makes sense as English text.** *Do you recogonize the text?*

---

# [3] Vigenere Cipher

The Vigenere cipher is another substitution cipher. It takes a message, the `plain text` and transforms it by shifting each letter by a set value relative a repeating `encryption key`.  Unline the caesar cipher, the encryption key is a `string`. 

For example the plain text `"apple" `with the encryption key `"be"`, becomes `"btqpf"`. 
- the first letter `a` is shifted by `1` positions because of the letter `i`
- the second letter `p` is shifted by `5` positions because of the letter `t`
- then, the encryption key repeats. 
- the third letter `p` is shifted by `1`
- the fourth letter `l` is shifted by `5`
- the fifth letter `e` is shifted by `1`

💻 **In `vigenere_cipher.py`, construct the function `decrypt_vigenere_cipher()` to decrypt a message that has been encrypted by a caesar cipher.** 

💻 **Test your decryption function `decrypt_vigenere_cipher()` on words and short phrases**

💻 **Use your `decrypt_vigenere_cipher()` function and file handling methods to decrypt the message in `caesar_vigenere_text.txt`.** The encryption key is the encryption key from the caesar_cipher problem written in English (e.g. 1 is one). is the You should then create a new file with the decrypted text.

✅ **Check your work by openning the created file and ensuring it makes sense as English text.** *Do you recogonize the text?*

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



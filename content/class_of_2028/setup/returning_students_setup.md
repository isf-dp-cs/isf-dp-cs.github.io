---
title: "Check Existing Setup"
weight: 2
---

# Check setup

**Welcome back to CS! These instructions will help you get your computer set up for the class.**
If you get stuck or are unsure what to do, first check out the debugging section at the bottom of the page. If you are still encountering an error, please send a screenshot of your error to Ms. Brown.


---
 
## Ensure Xcode is Updated

{{< code-action "Copy and paste the command below into your Terminal to install Xcode." >}} Then press `Enter/Return`. Make sure you have a strong internet connection, this may take up to 2 hours to complete. Don't worry, you can still use your computer and have it running in the background. 

```shell
xcode-select --install
```


{{< code-action "Enter your password when prompted." >}} You won't see any letters appearing as you enter the password. This is a security feature.

{{< aside >}}
If you already have this installed, you will see the following message instead:
```shell
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```
{{</ aside >}}

---

## Update Homebrew
*Homebrew helps you install different libraries and packages*

{{< code-action "Update Homebrew" >}} 

```shell
brew update
```

{{< code-action "It may ask you to upgrade" >}} 

```shell
brew upgrade
```

---


## Upgrade Poetry

{{< code-action "Upgrade Poetry " >}} 
```shell
poetry self update
```

{{< code-action "Add the poetry shell plugin" >}} 
```shell
poetry self add poetry-plugin-shell
```


---

## Github Setup 

{{< code-action "Upgrade gh " >}} 
```shell
brew upgrade gh
```

{{< code-action "Ensure you are logged into Github." >}} Follow the instructions. 
```shell
gh auth login
```

---

## Testing your Setup

💻 **Run each of the following checks one at a time to check your setup.** If you do not see an `version number`, there was an error with the install.


✔️ *Checks `Xcode`*

```shell
xcode-select --version
```

✔️ *Checks `Python`*

```shell
python3 --version
```

✔️ *Checks `Homebrew`*

```shell
brew --version
```

✔️ *Checks `Poetry`*

```shell
poetry --version
```



{{< deliverables "Fill out the Install Form" >}}

✅ **Fill out this form to notify your teachers if your install was successfull or not:** [forms.gle/uHZ2xGhuhhYFnCkXA](https://forms.gle/AabMrNKgSs4snuBWA)


{{< /deliverables >}}

---

## Debugging 

**If `code --version` shows `EACCES: permission denied, unlink '/usr/local/bin/code'`**
1.  First double check `VS Code` is in your “Applications” folder
2.  In the top menu click `View > Comannd Palette...`
3.  Type `uninstall code`, click the option 
4.  Type `install code`, click the option
5.  In Terminal, try `code --version`.
6.  If you do not see a version number, run this command: `sudo chown -R your_user_name /usr/local/bin`
7.  In Terminal, try `code --version`.
3. If still does not show a verison number, ask a teacher.

---

 **If you see `Error: poetry not installed` or if your poetry version starts with a 1, e.g. `1.8.3`**   
    
1. Run this command in your terminal `pipx install poetry`   
2. Try `poetry self add poetry-plugin-shell` again

---

**If `poetry --version` does NOT show a version number.** 
1. Copy & Paste this command into the Terminal: `pipx ensurepath`
2. Try `poetry --version` again. 
3. If still does not show a verison number, ask a teacher.

---

**If `brew --version` does NOT show a version number.** 
1. Copy & Paste the commands below into the Terminal.  Be sure to paste them one at a time. Each time, pressing `return` to run the command.
    1. `echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile`
    2. `eval "$(/opt/homebrew/bin/brew shellenv)"`
2. Try `brew --version` again.
3. If still does not show a verison number, ask a teacher.


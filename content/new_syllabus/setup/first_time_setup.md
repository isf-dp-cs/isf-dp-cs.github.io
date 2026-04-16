---
title: "Initial Setup"
weight: 1
draft: false
---

# Initial setup

**Welcome to CS! These instructions will help you get your computer set up for the class.** Use these instructions if you didn't take Shuyuan CS, or if you have a new computer. This guide will require the admin password of your computer.

If you get stuck or are unsure what to do, first check out the debugging section at the bottom of the page. If you are still encountering an error, please send a screenshot of your error to Ms. Brown *ebrown@isf.edu.hk*.



---
## Visual Studio Code
*This is the editor that you will use to write your code.*

(0) **Download and Install.** [Open this link](https://code.visualstudio.com/), click "Download for macOS," or click on "other plaforms" to choose your operating system. Follow the installation instructions.

(1) **Drag to Applications Folder.** Open up the `Finder` application on your Mac. On the left hand side, click on `Downloads`.  Drag `Visual Studio Code` to the folder named `Applications`.

{{< figure src="images/courses/cs9/unit00/-000_initialsetup12.gif" width="25%" alt-text="mwc setup" >}}

(2) **Install Shell Commands.** Open up your freshly installed `Visual Studio Code` application. From the top menu, select `View > Command Pallete`. 

{{< figure src="images/courses/cs9/unit00/-000_initialsetup7.png" width="75%" alt-text="mwc setup" >}}

In the prompt, type `Shell Commands` and click on the first option to install the `code` command in your PATH.

{{< figure src="images/courses/cs9/unit00/-000_initialsetup6.png" width="75%" alt-text="mwc setup" >}}

---

## Opening the Terminal

For most of the remaining setup, you will be using your `Terminal`. This is an application that lets you type commands directly to your computer. You can access it through any of these ways:

- Using your `🔍 spotlight search` (press `⌘`+`space` then type "terminal")
{{< figure src="images/courses/cs9/unit00/-000_initialsetup9.png" width="75%" alt-text="mwc setup" >}}

- Or, you can find it using your computer's `launchpad`
{{< figure src="images/courses/cs9/unit00/-000_initialsetup11.png" height="25%" alt-text="mwc setup" >}}


One you have it open, it should look something like this:
{{< figure src="images/courses/cs9/unit00/-000_initialsetup10.png" width="50%" alt-text="mwc setup" >}}

---
 
## Installing Xcode

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

## Installing Python
*Python is the language we will be coding in*

(0) **Start by installing the latest version of Python.** [Open this link](https://www.python.org/downloads/), click "Download Python," and follow the installation instructions.


(1) **Once the installation finishes, you will see a Finder window showing what was installed**.
(If you closed the window, open Finder, click on "Applications," and then "Python 3.14" (or whatever version of Python you just installed).


(2) **Check Python installed successfully by typing `python3 --version` into the Terminal.** You should see version number  `3.14`.

{{< figure src="images/courses/cs9/unit00/-000_initialsetup14.png" width="50%" alt-text="mwc setup" >}}


(3) **Double-click on "Install Certificates.command".** This will will open a Terminal window and run a bunch of commands. Once you see `[Process completed]`, you may close the window.

(4) **Double-click on "Update Shell Profile.command".** Each of these will open a Terminal window and run a bunch of commands. Once you see `[Process completed]`, you may close the window.

[Here is a video that walks you through the steps.](https://youtu.be/OiCiOgeyaWA)


{{< aside >}}
**If you see a red "Permission denied" error message when running "Install Certificates.command"**:
- open a Terminal window and run **`sudo "/Applications/Python 3.14/Install Certificates.command"`**
- You will be asked for an administrator password; you won't see any letters appearing as you enter the password. This is a security feature.
{{</ aside >}}

<!-- {{< youtube "OiCiOgeyaWA" >}} -->

---

## Installing Homebrew
*Homebrew helps you install different libraries and packages*

{{< code-action "Run the below command to install homebrew." >}} This will install homebrew onto your computer. This may take up to an hour to complete. Don't worry, you can still use your computer and have it running in the background. If you already have homebrew, then this step will be quick.
> *You may want to follow along with [this youtube video](https://www.youtube.com/watch?v=IWJKRmFLn-g) (watch 1:30 - 3:00)*

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

💻 **As the installation runs, follow all the instructions, such as:**

**1. Type your password** - you won't see any letters appearing as you enter the password. This is a security feature.

**2. Press `return` to continue** 


**It may ask you to press `Enter` a few more times throughout the process.**

You will know it is finished when you see your username and a `$` or `%` once again. For example:*
```shell
bgenzlinger~/Documents$
```

{{< figure src="images/courses/cs9/unit00/-000_initialsetup10.png" width="50%" alt-text="mwc setup" >}}


{{< code-action "Run the below commands one at a time." >}} 
```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

```shell
eval "$(/opt/homebrew/bin/brew shellenv)"
```

---


## Installing Poetry
*Poetry makes sure your coding environment is set up to work for all your coding projects*

{{< code-action "Run the below command to install Pipx with Brew." >}} You MUST install `pipx` after installing `homebrew`. 
```shell
brew install pipx
```

{{< code-action "Run the below command to install Poetry." >}} 
```shell
pipx install poetry
```

{{< code-action "Run the below command to add the Poetry to the path." >}} 
```shell
pipx ensurepath
```

{{< code-action "Run the below command to add the poetry shell plugin" >}} 
```shell
poetry self add poetry-plugin-shell
```

---

## GitHub

Git is a tool for `version control`. It allows you to see the history of your code, and to collaborate with other people! It's sort of like google docs for code.


{{< code-action "Make a Github Account" >}}   

Go to [GitHub](https://github.com/) to register. Feel free to skip all the personalization steps. 

*Use your school email for your account, but please **don't use your id # as your username**! Memorable usernames help your teachers keep track of who is who.*


{{< code-action "Run this command in your terminal." >}} 
```shell
git --version
```
If you do not see a version number, it will automatically install `git` for you.

{{< code-action "Run each of these commands in your terminal to configure Git.">}} 

> Make sure to replace `your_name` and `your_school_email` with your information.

```shell
git config --global user.name your_name
```

```shell
git config --global user.email your_school_email
```

{{< code-action "Run this command to install the Github CLI." >}}
```shell
brew install gh
```
{{< code-action "Run this command to authorize." >}} This will take you through a few prompts to log in to your github account.
```shell
gh auth login
```

**You will be asked the following questions to finish the authorization process. You should accept all the default highlighted options, which are:**

0. "What account do you want to log into?" - GitHub.com
0. "What is your preferred protocol for Git operations?" - HTTPS
0. "Authenticate Git with your GitHub credentials?" - Yes
0. "How would you like to authenticate GitHub CLI?" - Log in with a web browser

> **If you are asked for your computer password, you won't see any letters appear as you type.** This is normal--it's to keep the person standing behind you from seeing your password.

{{< code-action "When prompted, copy your code and press enter." >}} Then you can follow the prompts in your browser.
<br>

{{< code-action "Run this command to add a shortcut to easily open Github" >}} 
```shell
echo 'alias remote="open \"\$(git remote get-url origin | sed \"s/\.git\$//\")\""' >> ~/.zshrc
```

---

## Testing your Setup

💻 **Close your Terminal window and open a new Terminal window.**

💻 **Run each of the following checks one at a time to check your setup.** If you do not see an `version number`, there was an error with the install. You can try to debug yourself by referencing the `Debugging` section below. 

✔️ *Checks `Visual Studio Code`*

```shell
code --version
```

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

✅ **Fill out this form to notify your teachers if your install was successfull or not:** [forms.gle/xSKm6Xv7G3NYQ4EF7](https://forms.gle/AabMrNKgSs4snuBWA)


A successful setup will look something like below. It is okay if the version numbers do not match. This just means the package has been updated. 

{{< figure src="images/courses/cs9/unit00/-000_initialsetup15.png" width="80%" alt-text="mwc setup" >}}


{{< /deliverables >}}


---

## Debugging 

**If `code --version` showes `EACCES: permission denied, unlink '/usr/local/bin/code'`**
1.  First double check `VS Code` is in your “Applications” folder
2.  In the top menu click `View > Comannd Palette...`
3.  Type `uninstall code`, click the option 
4.  Type `install code`, click the option
5.  In Terminal, try `code --version`.
6.  If you do not see a version number, run this command: `sudo chown -R your_user_name /usr/local/bin`
7.  In Terminal, try `code --version`.
3. If still does not show a verison number, ask a teacher.

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


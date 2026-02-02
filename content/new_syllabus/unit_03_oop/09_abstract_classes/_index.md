---
title: "09. Abstract Classes" 
bookFlatSection: false
weight: 80
# draft: true
---

# Abstract Classes


---

# [0] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_abstract_classes_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_abstract_classes_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [1] Zoo Example

An abstract class is similar to a superclass in inheritance except none of the implementation is provided. The abstract class is a generalised form of the class that is shared by subclasses. The subclasses are necessary to provide the implementation information.

To develop an abstract class in Python you need to import ABC (abstract base class) otherwise this will not work. The class then inherits ABC through the class parameter brackets. You need to tell Python this is an abstract method with the @abstractmethod call.


## Lion 

When you run the program you will notice the error:

Traceback (most recent call last):
  File "/Multiple Class OOP/Abstract Class/Introduction to Abstract Class/main.py", line 8, in <module>
    myZoo.append(Lion("Lion", "Plains", "Meat", False, "Krugar"))
TypeError: Can't instantiate abstract class Lion with abstract methods getDiet
Look closely at the Lion.py file. You will notice that the def getDiet(self):is missing. Using this abstract class ensures that you program in all the required functionality.



💻 **Now fix the `Lion.py` file..**

---

# [2] Restaurant Menu

💻 **Modify class `Starter(MenuItem)` so that the menu can be printed.**

---

# [3] Restaurant Menu

You have been asked to help develop a system to manage the attractions at a theme park. The system should be able to handle different types of attractions such as rides, shows, and food stalls. Each type of attraction will have specific details and restrictions that need to be managed.

💻 **Create a set of classes that can represent these attractions, including their details and any restrictions.**


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


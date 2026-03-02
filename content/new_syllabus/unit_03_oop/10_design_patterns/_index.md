---
title: "10. Design Patterns" 
bookFlatSection: false
weight: 80
draft: true
---

# Design Patterns


---

# [0] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_design_patterns_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_design_patterns_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [1] Singleton

💻 **In `singleton.py`, modify the Singleton class to track an "access count."**

- Add an __init__ method to initialize self.count = 0.
- Add a method increment_count(self) that adds 1 to the count.
- In your main script, create two variables s1 and s2 using Singleton().
- Call increment_count() twice using s1, then print s2.count.


✏️ **Explain why this happens even though you only called the method on s1.**

---

# [2] Factory

💻 **In `factory.py`, modify class a new method of transport type to the shipping company.**


- Create a new class that inherits from Transport and give it a `deliver()` method. *(e.g. Train, Airplane, BikeCourier)*
- Update `ShippingCompany.get_transport()` so that certain input causes the new class to be used. *(e.g. "China", "USA", "Cypberport")*
- Use the factory to create the new transport method and deliver with it.

✏️ **Explain how the Factory promotes the "Open/Closed Principle."**

---

# [3] Observer

💻 **Implement a custom logger observer..**

- Create a LoggerObserver class that inherits from Observer.
- Make its update method print: "[LOG ENTRY]: System state changed to {state}".
- In your script, attach LoggerObserver to a Subject, set the state, then detach an observer and set the state again.

✏️ **How does the Subject know how to talk to your new LoggerObserver without you having to rewrite the notify() method?**

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


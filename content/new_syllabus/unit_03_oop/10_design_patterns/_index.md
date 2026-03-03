---
title: "10. Design Patterns" 
bookFlatSection: false
weight: 80
# draft: true
---

# Design Patterns

---

## Syllabus Topics [HL]
- **B3.2.5**  Explain commonly used design patterns in OOP.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Singleton** | Design pattern that ensures that a class has only one instance and provides a global point of access to that instance. | 
| **Factory** | Design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.  | 
| **Observer** | Design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.  | 
| **Open/Closed principle** | States that well designed software should be **open for extension**, but **closed for modification**"; that is, it allows its behaviour to be extended without modifying its source code.  | 
 
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

💻 **At the bottom of the file `singleton.py`, create two `Singleton` objects, and print them out."**

```python
s1 = Singleton()
s2 = Singleton()

print(s1)
print(s2)
```

{{< expand "✏️ Explain the output of the print statements" "Answer ⬇️" >}}

Each output shows the location of each object in memory. Since every object of a singleton class are actually the **same instance**, the same memory location is printed twice.

{{< /expand >}}

{{< expand "✏️ Why does `_instance` have to be static?" "Answer ⬇️" >}}

So that every it's accessible at the class level (instead of the instance level). This way, it can be used by `__new__` to figure out if an object of the class alread exists *before* a new object is made. 

{{< /expand >}}


💻 **In `singleton.py`, modify the Singleton class to track an "access count."**

- Add an `__init__(self)` method to initialize `self.count = 0`
- Add a method `increment_count(self)` that adds 1 to the `count`
- In the main code, call `s1.increment_count()` twice, then print `s2.count`.

```python
    s1.increment_count()
    s1.increment_count()

    print(s2.count)
```

{{< expand "✏️ Explain why the output is 2, even though you only called the method on s1" "Answer ⬇️" >}}

This is because `s1` and `s2` are references to the same object in memory.

{{< /expand >}}

---

# [2] Factory

💻 **In `factory.py`, modify class a new method of transport type to the shipping company.**


- Create a new class (e.g. `Motorbike`) that inherits from Transport and give it a `deliver()` method. 
- Update `ShippingCompany.get_transport()` so that certain input causes the new class to be used. *(e.g. if the delivery is on HK Island, use a motorbike)*
- Use the factory to create the new transport method and deliver an item with it.

<br>

The **Open/Closed principle** means that well designed software should be **open for extension**, but **closed for modification**"; that is, it allows its behaviour to be extended without modifying its source code.

{{< expand "✏️ Explain how our `ShippingCompany` follows the Open/Closed Principle." "Answer ⬇️" >}}

You can add a new method of transport like a motorbike or airplane without changing the main code / client code. The `ShippingCompany` (using the Factory pattern) decouples `Transport` object creation from the code that uses them, allowing the `ShippingCompany` to add new types of `Transport` (it's "Open for extension") without modifying the client code logic, or the other existing `Transport` types (Closed for modification).

{{< /expand >}}

---

# [3] Observer

💻 **Allow parents to subscribe to the Qilin Post.**

- Create a Parent class that inherits from Observer.
- Make its update method print: "[ISF Notification]: {state}".
- In your script, create your Parent and subscribe them to the Qilin Post. 
- Unsubscribe ethan the Qilin Post
- Publish the Third issue of the Qilin Post and be sure your parent and ms. genzlinger receive updates.

{{< expand "✏️ How does the your parent get updates without you having to rewrite Qilin Post's `notify()` method?" "Answer ⬇️" >}}

The Subject uses the Observer interface (Abstract Base Class). Because `Parent` implements the `update()` method, the Subject can treat it exactly like any other observer without needing to know its specific class name.

{{< /expand >}}



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


---
title: "06. Inheritance" 
bookFlatSection: false
weight: 50
# draft: true
---

# Inheritance

In this lab you will learn inheritance and create an OOP representation of an Event Management system. 

---

## Syllabus Topics [HL]
- **B3.2.1** Explain and apply the concept of inheritance in OOP to promote code reusability.


## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Inheritance** | Where a class takes a copy of an existing class as its starting point for its attributes and methods. These can be overridden and extended upon. | 
| **Superclass / Parent class** | The original class that sets the standard behavior in an inheritance relationship. | 
| **Subclass / Child class** | The class that inherits attributes/methods from the superclass/parent class, and then extends it. | 
| **super()** | Refers to the superclass/parent class of the current class. This allows you to extend or override superclass methods, while invoking the superclass's functionality. | 
| **Override** | Changing how a method behaves, based on which kind of object it is called on. | 

---

## Simple Inheritance Example 

Here is a simple example of a `Superclass` and a `Subclass`. Be sure to notice how `super()` is used in the `Dog` constructor and in `speak()`.

```python
class Animal:                           # Define Superclass
    def __init__(self, name):
        self.__name = name

    def speak(self):
        print(f"{self.__name} says hi!")

class Cat(Animal):                              # Define Subclass
    def __init__(self, name, color):
        self.__name = name
        self.__color = color

class Dog(Animal):                      # Define Subclass
    def __init__(self, name, breed):
        super().__init__(name)          # Invoke superclass's constructor

        self.__breed = breed

    def speak(self):
        super().speak()                 # Invoke the Superclass's speak method
        print("*bark bark*")             # Extends functionality


#####


a = Animal('Ringo')
a.speak()                               # "Ringo says hi!"
isinstance(a, Animal)                   # Returns True

c = Cat('George')
c.speak()                               # "George says hi!"
isinstance(c, Cat)                      # Returns True
isinstance(c, Dog)                      # Returns False
isinstance(d, Animal)                   # Returns True

d = Dog('Starr', 'Poodle')
d.speak()                               # "Starr says hi! *bark bark*"
isinstance(d, Dog)                      # Returns True
isinstance(d, Animal)                   # Returns True
```


---

# [0] Class Relationships

In this lab, you will implement multiple classes for a Event Management System.
- `Event()`
- `Concert()`
- `Sport()`
- `Wedding()`
- `ManagementSystem()`

📖 **Here is the UML diagram for the class relationships.** 
- The empty arrows represents an `inheritance` relationship 
- The filled diamond represents a `aggregation` relationship

{{< mermaid >}}

classDiagram
    class Event {
        - name: str
        - date: str
        - num_attendees: int
        - max_attendees: int
        + \_\_init__(name, date, max_attendees)
        + get_name()
        + get_date()
        + get_num_attendees()
        + get_max_attendees()
        + register_attendee()
        + \_\_str__()
    }

    class Concert {
        - artist: str
        - num_vips : int
        + \_\_init__(name, date, max_attendees, artist)
        + \_\_str__()
        + get_artist()
        + get_num_vips()
        + register_attendee(is_vip)
    }

    class Sport {
        + seat_number: int$
        - sport: str
        - home_team: str
        - away_team: str
        + \_\_init__(name, date, max_attendees, sport, home_team, away_team)
        + \_\_str__()
        + register_attendee(): int
    }

    class Wedding {
        - venue: str
        - num_vegetarians: int
        - num_omnivores: int
        + \_\_init__(name, date, max_attendees, venue)
        + \_\_str__()
        + get_venue()
        + register_attendee(diet)
    }

    class ManagementSystem{
        - events: list
        + schedule_event(Event)
        + register_attendee(event_name, attendee_name, attendee_email)
        + display_events(event_type: Event = None)
    }

   
    Event <|-- Concert: is a
    Event <|-- Sport: is a
    Event <|-- Wedding: is a
    Event --* ManagementSystem: part of

{{< /mermaid >}}



---

# [1] Set up

{{< code-action "Clone your repo in the correct folder." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit03_oop
git clone https://github.com/isf-dp-cs/lab_inheritance_yourgithubusername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_inheritance_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}


---

# [2] Test the Superclass and a Subclass

💻 **Test the `Event` superclass.** 

💻 **Test the `Concert` subclass.**
- understand how `super()` works.
- test the superclass methods on a `Concert` object


---

# [3] Implement the UML

💻 **Only parts of the UML diagram are constructed. It is up to you to construct the following classes.** Refer to the full UML diagram in `Class Relationships` to ensure it is implemented as planned.

1️⃣ **`Sport(Event)`**
- `register_attendee()` - should return the `seat_number` and increase the static variable `seat_number`


{{< mermaid >}}
classDiagram

    class Sport {
        + seat_number: int$
        - sport: str
        - home_team: str
        - away_team: str
        + \_\_init__(name, date, max_attendees, sport, home_team, away_team)
        + \_\_str__()
        + register_attendee(): int
    }

{{< /mermaid >}}

2️⃣ **`Wedding(Event)`**
- `register_attendee()` - should increase `num_vegetarians` or `num_omnivores` based on its parameter `diet`


{{< mermaid >}}
classDiagram
    class Wedding {
        - venue: str
        - num_vegetarians: int
        - num_omnivores: int
        + \_\_init__(name, date, max_attendees, venue)
        + \_\_str__()
        + get_venue()
        + register_attendee(diet)
    }
   {{< /mermaid >}}

3️⃣ **`EventManagementSystem`**

{{< mermaid >}}
classDiagram
    class ManagementSystem{
        - events: list
        + schedule_event(Event)
        + register_attendee(event_name, attendee_name, attendee_email)
        + display_events(event_type: Event = None)
    }
{{< /mermaid >}}





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


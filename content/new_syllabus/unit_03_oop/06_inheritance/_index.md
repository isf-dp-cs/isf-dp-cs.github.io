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


---

# [0] Class Relationships

In this lab, you will implement multiple classes for a Event Management System.
- `Event()`
- `Concert()`
- `Sport()`
- `Attendee()`
- `ManagementSystem()`

📖 **Here is the UML diagram for the class relationships.** 
- The empty arrows represents an `inheritance` relationship 
- The empty diamond represents a `composition` relationship
- The filled diamond represents a `aggregation` relationship

{{< mermaid >}}

classDiagram
    class Event {
        - name: str
        - date: str
        - num_attendees: int
        - registered_attendees: list
        + \_\_init__(name, date, num_attendees)
        + get_name()
        + get_date()
        + num_attendees()
        + register_attendee(name, email)
        + get_attendees()
        + \_\_str__()
    }

    class Concert {
        - artist: str
        + \_\_str__()
    }

    class Sport {
        - sport: str
        - home_team: str
        - away_team: str
        + \_\_str__()
    }

    class Attendee {
        - name: str
        - email: str
        + \_\_str__()
    }

    class ManagementSystem{
        - events: list
        + schedule_event(Event)
        + register_attendee(event_name, attendee_name, attendee_email)
        + display_events(event_type: Event = None)
    }

   
    Event <|-- Concert: is a
    Event <|-- Sport: is a
    Attendee --o Event : part of
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

# [2] Implement the UML

💻 **Only parts of the UML diagram are constructed. It is up to you to construct the following classes.** Be sure to refer to the UML to ensure it is implemented as planned.
- `Sport`
- `Attendee`
- `EventManagementSystem`



#### Inheritance Tips

```python
e = Event('Graduation', '08 May 2026', 100)
isinstance(e, Event)  # Returns True

c = Concert('LNY Concert', '01 February 2026', 50)
isinstance(c, Concert)  # Returns True
isinstance(c, Event)  # Returns True
```


---

# [3] Deliverables


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


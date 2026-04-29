---
Title: "1. DP Group 4 Sorting"
# draft: true

---

# DP Group 4 Sorting

In this lab you will be introduced to documentation required for the IA by creating a DP Group 4 Science Project Student Sorting app. 

This includes:
- Criterion A: Problem specification
- Criterion B: Planning
- Criterion C: System overview

---

## [0] Starter Code

{{< code-action "Download your repository with starter code for your project." >}}

```shell
cd ~/desktop/dpcs/ia_examples
git clone https://github.com/isf-dp-cs/lab_group4_sorting_yourgithubusername
cd lab_group4_sorting_yourgithubusername
```

{{< code-action "Install requirements" >}}
```shell
poetry install
```

{{< code-action "Enter the poetry shell." >}}
```shell
poetry shell
```

{{< code-action "Open the code" >}}
```shell
code .
```

---

## [1] Create a mini-IA

{{< code-action "Open the example documentation doc:" >}} [here](https://docs.google.com/document/d/1HrReEbhIgxcnaIShSutnKonD1LYEf8_HUdR1fl66o5U/edit?usp=sharing). 

In this lab, it is up to you to follow the documentation and create a fully working web application that satisfying the success criteria. 


{{< code-action "Referencing the documentation, create a fully working web application that solves the diverse, randomize DP Group 4 project problem." >}} We have provided the outline of the file structure and helper functions for the diversity algorithms. 

The goal of this lab is to get more familiar with flask and the expectations of the IA. The goal is NOT to 100% replicate this application in a class. We recommend spending an hour of extra practice and coming to next class with questions.


---

### [Querying in SQLAlchemy]

There are two ways to query. One is through a series of functions like you saw in `lab_flask_intro`. Another way is through writing full SQL queries like you're used it. 
- [sqlalchemy orm guide](https://docs.sqlalchemy.org/en/20/orm/queryguide/index.html)

```Python
from models import db, Student 
db.init_app(app)

# Example 1: SQLAlchemy functions
one_student = db.session.query(Student).where(Student.id==1).one()
one_student.id  # access any field via it's name

all_students = db.session.query(Student).all()


# Example 2: SQL Queries
one_student =  db.session.execute(text("Select * from student where id=1")).one() # returns tuple
one_student[0] # access fields by index 

# or convert it to a dictionary with ._mapping
one_student = one_student._mapping
one_student['id']

all_students = db.session.execute(text("Select * from student")).all() # returns list of tuples



```

---

## [3] Deliverables 

{{< deliverables >}}
{{< code-action "Push your work to Github:" >}}
- `git status`  
- `git add -A`
- `git status`
- `git commit -m "your message goes here"`
    - be sure to customize this message, do not copy and paste this line
- `git push`
{{< /deliverables >}}

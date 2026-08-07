---
title: "02 Normalization" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Database Normalization

In this lab you will consider how to design a database.

---
## Syllabus Topics [SL]
- **A3.2.5** Explain the difference between normal forms.- A3.2.1 Describe database schemas.
- **A3.2.6** Construct a database normalized to 3NF for a range of real-world scenarios.
- **A3.2.7** Evaluate the need for denormalizing databases.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Normalization** | XX  |
| **First Form (1NF)** | - has a primary key - includes no duplicate attributes   |
| **Second Form (2NF)** | XX  |
| **Second Form (3NF)** | XX  |
| **Atomic** | XX  |
| **Unique Identification** | XX  |
| **Functional Dependencies** | XX  |
| **Partial-key Dependencies** | XX  |
| **Non-key/transitive Dependencies** | XX  |


---

## [0] Setup

{{< code-action "Go to your" >}} `dpcs/unit04_databases` **folder**.

```shell
cd ~/desktop/dpcs/unit04_databases
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_normalization_yourgithubusername
```

--- 


## [1] Schema 

In this lab you will create a relational database representing sports teams and players.


{{< columns >}}


### Conceptual Schema

In a `conceptual schema`, the diagram should only describe the structure of the relationships of the data.

{{< mermaid >}}

erDiagram
    TEAM ||--|{ PLAYER: "one team has many players"
    
    TEAM {
        
    }

    PLAYER {
      
    }

{{< /mermaid >}}



<--->

### Logical Schema

In a `logical schema`, the diagram should only describe the fields, data types, primary key, and foreign key.


{{< mermaid >}}

erDiagram
    TEAM ||--|{ PLAYER: "one team has many players"
    
    TEAM {
        int team_id PK
        char team_name
        char sport
    }

    PLAYER {
        int player_id PK
        int team_id FK
        string first_name
        string last_name
        char position
        games_played integer
    }

{{< /mermaid >}}

{{< /columns >}}


---

## [2] Create a Database


Create your own 1f, 2f, and 3f databases from your worksheets


---

# [2] Deliverables


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


---

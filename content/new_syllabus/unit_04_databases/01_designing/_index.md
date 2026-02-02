---
title: "01. Database Design" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Database Design

In this lab you will design and create a database. 

---
## Syllabus Topics [SL]
- A3.1.1 Explain the features, benefits and limitations of a relational database.
- A3.2.1 Describe database schemas.
- A3.2.2 Construct ERDs.
- A3.2.3 Outline the different data types used in relational databases.
- A3.2.4 Construct tables for relational databases.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Entity** | anything that cna have data stored about it that can be described  |
| **Entity Relationship Diagrams (ERDs)** | XXX  |
| **Record** | one instance of an entity; a row in a table |
| **Primary Key** | a column that uniquely identifies a record in a table  |
| **Composite Keys** | multiple columns that form a primary key |
| **Relational Database** | a set of tables  |
| **Relationship** | a connection established between different tables where the foreign key in one table refers to the primary key in another table |
| **One-to-One** | one record in one table is associated with exactly one record in another table (e.g. one country has one capital)  |
| **One-to-Many** | one record in one table is associated with one or more records in another table  (e.g. one teacher has many classes) |
| **Many-to-One** |  many records in one table is associated with exactly one record in another table (e.g. many students in one school) |
| **Many-to-Many** | multiple records in one table is associated with one or more records in another table (e.g. many actors in many movies) |
| **Schema** | architecture showing how data is organized and the relationship between data  |
| **Conceptual Schema** | abstract model describing the structure of the data without considering how it will physically be implemented; an ERD is a conceptual schema |
| **Logical Schema** | a detailed design of the structure of tables with fields and data types and the relationship between tables and constrains  |
| **Data Definition Language (DDL)** | a language that is used to create, modify, and remove data structures from a relational database  |



---

## [0] Setup

{{< code-action "Download DB Browser for SQLite onto your computer:" >}} [sqlitebrowser.org/dl/](https://sqlitebrowser.org/dl/)



{{< code-action "Go to your" >}} `dpcs` **folder** and create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit04_databases
cd unit04_databases
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_oop_songs_yourgithubusername
```

--- 


## [0] Schema 

### Conceptual Schema


### Logical Schema


---

## [1] SQL Murder Mysteries

💻 **Go to [sqlnoir.com/](https://www.sqlnoir.com/) and create an account** Solve one mystery from each level. 

💻 **Solve a longer mystery at [mystery.knightlab.com/](mystery.knightlab.com/).** Be sure to try the bonus question at the end.

---

# [2] Deliverables


{{< deliverables "Once you finish the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Checklist:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< /deliverables >}}



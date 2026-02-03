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
| **Entity Relationship Diagrams (ERDs)** | a visual representation of the entities in a database and the relationship between them  |
| **Record** | one instance of an entity; a row in a table |
| **Primary Key** | a column that uniquely identifies a record in a table  |
| **Composite Keys** | multiple columns that form a primary key |
| **Relational Database** | a set of tables  |
| **Relationship** | a connection established between different tables where the foreign key in one table refers to the primary key in another table |
| **One-to-One** | one record in one table is associated with exactly one record in another table (e.g. one country has one capital)  |
| **One-to-Many** | one record in one table is associated with one or more records in another table  (e.g. one teacher has many classes) |
| **Many-to-Many** | multiple records in one table is associated with one or more records in another table (e.g. many actors in many movies) |
| **Schema** | architecture showing how data is organized and the relationship between data  |
| **Conceptual Schema** | abstract model describing the structure of the data without considering how it will physically be implemented; an ERD is a conceptual schema |
| **Logical Schema** | a detailed design of the structure of tables with fields and data types and the relationship between tables and constrains  |
| **Data Definition Language (DDL)** | a language that is used to create, modify, and remove data structures from a relational database  |
| **View** | a virtual table based on the result of a query |




---

## [0] Setup

{{< code-action "Download DB Browser for SQLite onto your computer:" >}} [sqlitebrowser.org/dl/](https://sqlitebrowser.org/dl/)


{{< code-action >}} **Download `sqlite3` to run SQL commands from the command line**

```shell
brew install sqlite3
```

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


## [1] Schema 

In this lab you will create your own database.


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
        char coach_name
    }

    PLAYER {
        int player_id PK
        int team_id FK
        string name
        char position
        goals integer
    }

{{< /mermaid >}}

{{< /columns >}}









---

## [2] Create your Database

💻 **Create your database file**

```shell
sqlite3 database.db
```

💻 **Create the `teams` table.** The semicolon `;` MUST be used to denote the end of your command.

```shell
create table teams(
    team_id integer primary key AUTOINCREMENT,
    team_name char,
    coach_name char
);
```

💻 **Insert multiple records** Because the `team_id` will auto-increment, we do not need to enter it.

```shell
insert into names (team_name, coach_name) values ("ISF", "Dr. Krammer");
```

💻 **Exit `sqlite3`**
```shell
exit.
```

💻 **Open the database file in `DB Browser for SQLite`.** As you try more commands, refresh your database file `(command + r)` to see the changes.
```shell
open .
```

---

## [3] Modify your Database


💻 **Re-enter `sqlite3`**
```shell
sqlite3 database.db
```

💻 **Test the queries you learned in the last lab.** 
```shell
select * from names;

select * from names
where team_name like "I%";

select * from names;
order by coach_name desc
```

💻 **Delete a record with a `where` query.** It will delete all records that match the query. Try to delete multiple rows at at time.

```shell
delete from names 
where team_id=12;
```

💻 **Update a record with a `where` query.** It will delete all records that match the query. Try to delete multiple rows at at time.

```shell
update from names 
set team_name="Hong Kong"
where team_id=1;
```

💻 **Test all of the commands on your database** 

```shell
# SL must know the following commands

SELECT, DISTINCT, FROM, WHERE, BETWEEN, ORDER BY, GROUP BY, HAVING, ASC,
DESC, JOIN, LIKE with % wildcard, AND, OR, NOT

# HL must know the following commands
AVERAGE, COUNT, MAX, MIN, SUM
```

---

## [4] Add the Relational Database

💻 **Create a new table for the `players`** 

```shell
CREATE TABLE players (
    player_id INTEGER PRIMARY KEY autoincrement,
    team_id INTEGER,
    foreign key (team_id) references teams(team_id),
    name CHAR NOT NULL,
    position Char NOT NULL,
    goals INTEGER DEFAULT 0,
);
```

💻 **Insert 3 records into `players`** 

💻 **User `JOIN` to view both of the tables combined.** 


---

## [5] HL: Create a View

💻 **Create a new `view` based on a `SELECT` command.** You can then use the `view_name` as the `table_name` in commands.

```shell
create view as view_name
select * from teams
```

💻 **Create a new `view` with both tables combined.** 



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

## [X] HL: Create a View
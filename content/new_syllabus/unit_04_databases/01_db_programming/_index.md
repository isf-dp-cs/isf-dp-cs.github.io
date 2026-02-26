---
title: "01. Database Programming" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Database Programming

In this lab you will practice SQL commands and create tables for a relational database. 

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
| **Entity** | anything that can have data stored about it that can be described  |
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
| **View** | a virtual table based on the result of a query |



---

## [0] Setup

<!-- {{< code-action "Download DB Browser for SQLite onto your computer:" >}} [sqlitebrowser.org/dl/](https://sqlitebrowser.org/dl/) -->


{{< code-action >}} **Download `sqlite3` to run SQL commands from the command line.** The documentation is at [sqlite.org/docs.html](https://sqlite.org/docs.html)

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
git clone https://github.com/isf-dp-cs/lab_db_programming_yourgithubusername
```


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_db_programming_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

--- 


## [1] Riddle Schema 

The first example is a simple database with one table. It stores Riddles.


{{< columns >}}


### Conceptual Schema

In a `conceptual schema`, the diagram should only describe the structure of the relationships of the data.

{{< mermaid >}}

erDiagram

    RIDDLES {
        
    }

{{< /mermaid >}}



<--->

### Logical Schema

In a `logical schema`, the diagram should only describe the fields, data types, primary key, and foreign key.


{{< mermaid >}}

erDiagram

    RIDDLES {
        id integer PK
        question text
        answer text
        total_guesses integer
        correct_guesses integer
        difficulty text
    }

{{< /mermaid >}}

{{< /columns >}}



---


## [2] Riddles Worksheet


💻 **Open a new database file in the `sqlite3` shell.**

```shell
sqlite3 database_riddles.db
```

💻 **Create the `riddles` table.** The semicolon `;` MUST be used to denote the end of your command.

```sql
CREATE TABLE IF NOT EXISTS riddles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    total_guesses INTEGER DEFAULT 0,
    correct_guesses INTEGER DEFAULT 0,
    difficulty TEXT DEFAULT 'easy'
);
```

💻 **Exit the `sqlite3` shell**
```shell
control + c OR control + d
```

💻 **List the files.** You should see your newly created `database_riddles.db` in the directory!
```shell
ls
```

👀 **Take a look at `init_db.py`.** This is where the new rows are added to the riddles table. The riddles are populated from the `riddles.json` file.

💻 **Run `init_db.py` to fill your database.**
```python
python init_db.py
```

💻 **Enter the `sqlite3` shell again.**

```shell
sqlite3 database_riddles.db
```

💻 **Turn on `headers` to be able to view the columns names`**
```shell
.headers on
```

💻 **Turn on `column` mode to display queries in clear columns**

```shell
.mode column
```

✏️ **Write out a query to answer each question on the worksheet.**            

💻 **Test each query out in your shell to make sure it works as expected.** Don't forget the semi-colon `;` to end each statement.


💻 **Exit `sqlite3`**
```shell
control + c OR control + d
```


---

## [3] Team Schema 

In this lab you will create a relational database representing sports teams and players.


{{< columns >}}


### Conceptual Schema

In a `conceptual schema`, the diagram should only describe the structure of the relationships of the data. Here we see that one team has many players.



*Crows-foot style notation*

{{< mermaid >}}

erDiagram

    TEAM ||--|{ PLAYER: ""
    
    TEAM {
        
    }

    PLAYER {
      
    }

{{< /mermaid >}}




*Chen style notation*

{{< mermaid >}}

flowchart TD

    TEAM[TEAM] -->|1| B{has}
    B --> |N| PLAYER[PLAYER]
    

{{< /mermaid >}}



<--->

### Logical Schema

In a `logical schema`, the diagram should only describe the fields, data types, primary key, and foreign key.


{{< mermaid >}}

erDiagram
    TEAM ||--|{ PLAYER: ""
    
    TEAM {
        team_id integer PK
        team_name text
        sport text
    }

    PLAYER {
        player_id integer PK
        team_id integer FK
        first_name text
        last_name text
        position text
        games_played integer
    }

{{< /mermaid >}}

{{< /columns >}}



---


## [4] Create a Database

💻 **Create a new database file**

```shell
sqlite3 database.db
```

💻 **Turn on `headers` to be able to view the columns names`**
```shell
.headers on
```

💻 **Turn on `column` mode to display queries in clear columns**

```shell
.mode column
```

💻 **Create the `teams` table.** The semicolon `;` MUST be used to denote the end of your command.

```shell
create table teams(
    team_id integer primary key AUTOINCREMENT,
    team_name char,
    sport char
);
```

💻 **Insert 5 records** Because the `team_id` will auto-increment, we do not need to enter it. You can use the `up arrow` to cycle through previous commands.

```shell
insert into teams (team_name, sport) values ("ISF", "Basketball");
```

💻 **Query for all records.** *Don't forget the semi-colon `;`*

```shell
select * from teams;
```

💻 **Test the query commands you learned in the last lab.** 
```shell
SELECT, DISTINCT, FROM, WHERE, BETWEEN, ORDER BY, GROUP BY, HAVING, ASC,
DESC, LIKE with % wildcard, AND, OR, NOT
```

---

## [5] Modify your Database



💻 **Delete a record with a `where` query.** It will delete all records that match the query. Try to delete multiple rows at at time.

```shell
delete from teams 
where team_id=0;
```

💻 **Update a record with a `where` query.** It will delete all records that match the query. Try to delete multiple rows at at time.

```shell
update teams 
set team_name="Hong Kong"
where team_id=1;
```

---

## [6] Add the Relational Database

💻 **Create a new table for the `players`** 

```shell
CREATE TABLE players (
    player_id integer primary key autoincrement,
    team_id integer,
    first_name char NOT NULL,
    last_name char NOT NULL,
    position char NOT NULL,
    games_played INTEGER DEFAULT 0,
    foreign key (team_id) references teams(team_id)
);
```

💻 **Insert 5 records into `players`** 

💻 **User `JOIN` to view both of the tables combined.** 


---

## [7] HL: Create a View

💻 **Create a new `view` based on a `SELECT` command.** You can then use the `view_name` as the `table_name` in commands.

```shell
create view view_name as
select sport from teams
where sport like "%b%";
```

💻 **Create a new `view` with both tables combined.** 

💻 **On your `view`, test all aggregation commands**

```SQL
AVERAGE, COUNT, MAX, MIN, SUM
```



---

## [8] Deliverables


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



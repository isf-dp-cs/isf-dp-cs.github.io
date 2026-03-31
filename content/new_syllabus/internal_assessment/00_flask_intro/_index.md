---
Title: "0 Flask Intro"
# draft: true

---

# Flask Intro

In this lab you will be introduced to the Flask framework for making web applications. 

{{< figure src="images/courses/cs10/unit02/04_riddle0.png" width="50%" >}}

---

## [0] Starter Code

{{< code-action "Download dbsqlite onto your computer:" >}} [https://sqlitebrowser.org/dl/](https://sqlitebrowser.org/dl/)
> If you already have this application from Shuyuan CS, you do not need to re-download it 

{{< figure src="https://sqlitebrowser.org/images/sqlitebrowser.svg" alt-text="database icon" >}}


{{< code-action "Create a new folder" >}}

```shell
cd ~/desktop/dpcs/
mkdir ia_examples
```


{{< code-action "Download your repository with starter code for your project." >}}

```shell
git clone https://github.com/the-isf-academy/lab_flask_riddle_yourgithubusername
cd lab_flask_riddle_yourgithubusername
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

📖 **Documentation**
- [Flask](https://flask.palletsprojects.com/en/stable/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.readthedocs.io/en/stable/)
- [Flask WTF](https://flask-wtf.readthedocs.io/en/1.2.x/)

---

## [1] Database

In this lab we will create a riddle guessing game. This is the ERD diagram. 

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

{{< code-action >}} **Look at `models.py` to see the ERD represented as a model.** We are using `flask-sqlalchemy`, an ORM. 

{{< code-action >}} **Let's start by making the database file by running `python init_db.py`** This file reads in the data from `riddles_data.py`. Feel free to add your own before making the database file.

{{< code-action >}} **This creates a new folder `/instance` and a new file inside it `riddles.db`.** 

{{< aside "Reset Database" >}}

If you want to reset your database, simply delete the database file:

```shell
rm instance/riddles.db
```

Then, re-run:

```shell
python init_db.py
```

{{< /aside >}}

---


## [2] Learn Flask

We are using Flask to create a web application. 

{{< code-action "Start the web app by running" >}}
```shell
python app.py
```

{{< code-action "Then view the app on running on your local server:" >}}  [127.0.0.1:5000](http://127.0.0.1:5000)



{{< checkpoint >}}

✏️💻 **Follow along with the worksheet to understand how this web app is made.** You will learn about:
- [flask wtf fields](https://wtforms.readthedocs.io/en/2.3.x/fields/#basic-fields)
- [session variables](https://flask.palletsprojects.com/en/stable/api/#sessions)
- [flash messages ](https://flask.palletsprojects.com/en/stable/patterns/flashing/)

{{</ checkpoint >}}

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

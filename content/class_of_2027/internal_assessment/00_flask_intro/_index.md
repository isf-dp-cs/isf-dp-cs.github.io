---
Title: "0. Flask Intro"
# draft: true

---

# Flask Intro

In this lab you will be introduced to the Flask framework for making web applications. 

We recommend using this framework for your IA, unless you are ~80% confident in your ability in an alternative pathway.

{{< figure src="images/courses/java/Flask_icon.png" width="30%" >}}

---

## [0] Starter Code

{{< code-action "Download dbsqlite:" >}} [sqlitebrowser.org](https://sqlitebrowser.org/dl/). We will use this application to view your database. If you already have it from Shuyuan CS, you do not need to re-download it.


{{< code-action "Then, create a new folder for this mini-unit ." >}}

```shell
cd ~/desktop/dpcs/
mkdir ia_examples
cd ia_examples
```


{{< code-action "Clone your repository with starter code for your project." >}}

```shell
git clone https://github.com/isf-dp-cs/lab_flask_riddle_yourgithubusername
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


📁 **Flask File Structure Overview**
- `app.py` - routes
- `/templates` - HTML files
- `/static` - CSS, JS, and images
- `models.py`
- `forms.py`
- `init_db.py`


---

## [1] Database

**We will create a simple Web App for a riddle guessing game.** Those who took Shuyuan CS, this will seem familiar to Django but with a few differences. 


This is the ERD diagram for a riddle. 

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

> In this example web app, we only have one table and one model, however in your IA we expect you to have multiple relationships between entities and models. 

{{< code-action >}} **Let's start by making the database file by running `python init_db.py`** This file reads in the data from `riddles_data.py`. Feel free to add your own before making the database file.

{{< code-action >}} **This creates a new folder `/instance` and a new file inside it `riddles.db`.** 

{{< code-action >}} **Open the database file in dbsqlite:**
```shell
open /instance/riddles.db
```

<br>

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

When developing a web application you can view your progress by running a local server. 

{{< code-action "Start the server by running" >}}
```shell
python app.py
```

{{< code-action "Then view the app on running on your local server:" >}}  [127.0.0.1:5000](http://127.0.0.1:5000). 

As you use the site, consider all the different components that its made up of. 



---

### [Routes]

Web apps are made up of a series of routes. Routes are what connect the frontend and the backend.


**This is the route for the `index` page. The index page is the homepage.**
```python{linenos=table}
@app.route(f"/", methods=['GET'])
def index():
    curr_datetime = date.today()

    return render_template(
        'index.html',
        curr_datetime = curr_datetime)

```
> - `line 1` - defines the Route, url path, and HTTP method
> - `line 2` - defines a simple function to receive a `request`, builds a `response`, and returns it
> - `line 3` - gets the current date
> - `line 7` - returns an HTML file and sends data to the file

--- 

### [Templates]

***Templates* are pieces of HTML code that can be used to build a webpage.** The
call to `render_template()` on `line 5-7` in the `index()` route requests the template `templates/index.html`.

Every app in the project has a folder called `templates`; when you ask for a
template, Flask searches the folder for a match. 

{{< code-action >}} **Find this template `templates/index.html` and open it.**

```html {linenos=table}
{% extends 'base.html' %}

{% block content %}
	
  <h1>Welcome to the Riddle!</h1>

  <p>It is {{curr_datetime}}</p>

  <p>Play the <a href="{{ url_for('game_setup') }}">game</a></p>
	

{% endblock %}

```

Flask uses [jinja](https://flask.palletsprojects.com/en/stable/templating/) for templates. This allows templates comands like   `{% ... %}` and `{{ ...}}`. 
- `line 1` - `extends` means this template extends another template (in this
  case, `base.html`, which you can find in `templates/base.html`.
  Extending another template works by overriding particular *blocks*. Here, we
  are overriding the block called `content`.
- `line 7` - `{{curr_datetime}}`  is a placeholder which will be replaced with the variable called `curr_datetime` given to the template by the function `index()` in `app.py`. 
- `line 9`- `url_for()` means look up a url by function name in `app`. Why not
  just type in the url? If you change it later, you might forget to fix it here,
  especially after you have a few dozen templates.


{{< code-action >}} **You can edit the styles of the site in `static/styles.css`. Take a look a make a small change.** The `/static` directory is also where any images or javascript files should be stored. 


---

### [Forms]

**Forms are used anytime we want to receive data from the user.** We will use the [wtfforms](https://wtforms.readthedocs.io/en/3.2.x/) and [flask-wtf](https://flask-wtf.readthedocs.io/en/1.2.x/) libraries. Forms can also be manually written using plain HTML, but the libraries are useful for things like validation.

{{< code-action >}} **In `forms.py` `NewRiddleForm` is one of the three forms. This one is used for users to add new riddles to the database.**

```python {linenos=table}
class NewRiddleForm(FlaskForm):
    question = StringField('Enter question:',validators=[DataRequired()])
    answer = StringField('Enter answer:',validators=[DataRequired()])
    difficulty = SelectField('Enter difficulty', choices=[('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')])
    submit = SubmitField('Submit')
```
> - `lines 2-4` - defines the fields, data types, and validation
> - `line 5` - defines the submit button `

{{< code-action >}} **In `app.py` the `add_riddle()` route processes the `NewRiddleForm` form.**

```python {linenos=table}
@app.route(f"/add", methods=['GET', 'POST'])
def add_riddle():
    form = NewRiddleForm()

    if request.method == 'POST':
        if form.validate_on_submit(): 
            data = form.data 
           
            new_riddle = Riddle(
                question = data['question'],
                answer = data['answer'],
                difficulty = data['difficulty'])
            
            db.session.add(new_riddle)
            db.session.commit()
           
            flash("Riddle saved")
            return redirect(url_for("index"))
      
    else:
        return render_template(
            'add_riddle.html', 
            form = form,
           )
```
 - `line 3 & lines 19-23` - creates an empty `NewColorForm` (the fields do not have user data) and gives it to the
template. The user sees a page with text input fields and a dropdown menu.
 
 - `lines 5-17` - when the user submits the form (this is a `POST`
request because data is being sent), `add_riddle()` again receives the request. This time, since it's a
`POST` with form data (name, color values), it reads the form data, checks to
make sure the data is valid, and if so, creates a `Riddle`, commits it to the
database, and then sends a redirect response telling the user to go to `index()` route. 

---

### [Expand the app]

Now that you have a brief overview of the components of a Flask app, you will delve deeper by following along with the worksheet.

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

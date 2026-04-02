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


### [Routes]


```python{linenos=table}
@app.route("/")
def index():
    color = get_one_color(5)

    name = "stranger"

    return render_template(
            'index.html', 
            color=color, 
            name = name)

```
> - `line 1` - defines the Route and url path
> - `line 2` - defines a simple function to receive a `request`, builds a `response`, and returns it
> - `line 3` - calls a helper function to retrieve information from the database
> - `line 7` - returns an HTML file and sends data to the file

--- 

### [Templates]

***Templates* are pieces of HTML code that can be used to build a webpage.** The
call to `render_template()` on line 21 requests the template `templates/index.html`.
(Every app in the project has a folder called `templates`; when you ask for a
template, Flask searches the folder for a match). 

{{< code-action >}} **Find this template `templates/index.html` and open it.**

```html {linenos=table}
{% extends 'base.html' %}

{% block content %}

  <h1> Hello {{name}}</h1>
  {% include "swatch.html" %}
  <a href="{{ url_for('color_random') }}">How about a random color?</a>.
  
{% endblock %}
```
There's a lot here, so we'll just take a quick tour. This template is made up of
HTML tags like `<h1>...</h1>` and template commands like `{% ... %}` and `{{ ...
}}`. The HTML tags will be read by the client's browser as it presents the webpage; the template
commands tell Flask what to do. 
- `extends` (line 1) means this template extends another template (in this
  case, `base.html`, which you can find in `templates/base.html`.
  Extending another template works by overriding particular *blocks*. Here, we
  are overriding the block called `content` (lines 3-15).
- `{{name}}` (line 5) is a placeholder which will be replaced with the variable called `name` given to the
  template by the function `index()` (`app.py`, lines 24). 
- `include` (line 6) means include another template. Colorama needs to show
  color swatches all over the place, so we have a special template just for the
  color swatch circle. 
- `url_for` (line 9) means look up a url by name (`app`, line 26). Why not
  just type in the url? If you change it later, you might forget to fix it here,
  especially after you have a few dozen templates. And you might want to deploy
  this site to multiple hosts, like `http://127.0.0.1:5000` while you're developing it
  and `colorama.com` when you're ready to go public. 


---

### [Forms]

**Now we're going to extend the app to let users create their own colors.** For this we use [wtfforms](https://wtforms.readthedocs.io/en/3.2.x/) and [flask-wtf](https://flask-wtf.readthedocs.io/en/1.2.x/) libraries. 

{{< code-action >}} **Open `forms.py` and add the following class**

```python {linenos=table}
class ColorForm(FlaskForm):
    name = StringField('Color Name',validators=[DataRequired()])
    red = IntegerRangeField('Red Value', validators=[NumberRange(min=0, max=100)], default=0)
    green = IntegerRangeField('Green Value', validators=[NumberRange(min=0, max=100)], default=0)
    blue = IntegerRangeField('Blue Value', validators=[NumberRange(min=0, max=100)],  default=0)

    submit = SubmitField('Submit')
```
> - `ColorForm` sets up a form that defines which fields are necessary and what data type the field should accept. We use `wtfforms` and `flask-wtf` to easily manage things like validators and default values. 

{{< code-action >}} **Open `app.py` and add the following function**

```python {linenos=table}

@app.route("/new", methods=['GET', 'POST'])
def color_new():
    form = ColorForm()

    if request.method == 'POST':
        if form.validate_on_submit():
            data = form.data 
            new_color(data)

            return redirect(url_for('color_all'))

    return render_template('color_form.html', form=form, heading="Add a new color!")
```
> - `color_new()`, creates an empty `NewColorForm` (e.g.
the name isn't filled in and the colors aren't set) and gives it to the
template, which renders a response. The user sees a page with sliders and a
text field to name the color. 
>   - When the user submits the form (this is a `POST`
request because it's making a change; all the previous requests have been `GET`
requests), `color_new()` again receives the request. This time, since it's a
`POST` with form data (name, color values), it creates a `ColorForm`, checks to
make sure the data is valid, and if so, creates a `Color`, saves it to the
database, and then sends a redirect response telling the user to go to
`/colors`. 
> - `heading="Add a new color!"` is helpful so we can use the same form for multiple use cases, while being able to customize the heading text

{{< code-action >}} **Now go to [`/new`](http://127.0.0.1:5000/new) and add a few color.** Then, go to the [`/all`](http://127.0.0.1:5000/all) page to view your newly added color with all the other colors in the database.




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

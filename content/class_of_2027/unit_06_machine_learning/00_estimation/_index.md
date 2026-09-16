---
title: "00. Estimation" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

See [this lab](https://isf.makingwithcode.org/courses/dp/labs/estimation/)
<!-- 
+++
title = "Estimation"
template = "module.html"
weight = 1
[extra]
standards.nycsdf = ["9-12.CT.1", "9-12.IC.3", "9-12.IC.4"]
standards.csta2026 = ["HS-ALG-ML-08", "HS-DAT-DC-22", "HS-DAT-DI-26", "HS-ALG-IM-10", "HS-SOC-HU-43"]
slug = "lab_estimation"
repo_url = "https://git.makingwithcode.org/mwc/lab_estimation.git"
duration = 8
+++

{% teaching_note() %}

**Standards.** This satisfies nycsdf 9-12.CT.1 and csta2026 HS-ALG-ML-08 by having
students fit a model that predicts outcomes from data (by hand, then with
`LinearRegression`); HS-DAT-DC-22 via the BRFSS column-reference table; HS-DAT-DI-26
via the RMSE/overfitting discussion of how well the model actually fits; and 9-12.IC.3,
9-12.IC.4, HS-ALG-IM-10, and HS-SOC-HU-43 via the ethics woven through every section and
the closing debate about commercial use of health survey data.

{% end %}

{% teaching_note() %}

This lab uses Jupyter notebooks to explore how data can be used to fit simple 
regression models. If students previously worked with the Pokemon lab in the 
MWC1 data science unit, the interface and the dataset will be familiar, and the 
questions we explore here may have come up earlier (though students didn't yet have
the tools to address them.)

**Same datasets as the Pokémon lab.** This lab's notebook reuses both
`pokemon.csv` and `brfss_2020.csv` from the MWC1 Pokémon lab, and the same
demo/your-turn structure that lab's notebook used: each technique is
demonstrated on Pokémon stats, then practiced and extended on BRFSS. If your
students took MWC1, it's worth contrasting the two labs explicitly: there,
students mostly asked descriptive questions about *one variable at a time*
(what fraction exercise? what's the average income?). Here, students ask
questions about *relationships between variables*—does education predict
income? does exercise predict income?—which is the shift from descriptive
statistics to modeling.

**How this lab meets the learning objectives.** This is the first lab in the
unit, and it introduces the vocabulary—model, parameters, loss, training—that
every later lab builds on. The first half uses an interactive toy with no
dataset at all, so students can build intuition for what "fitting a model"
means before they meet a real (and messy) dataset. The second half grounds
those same ideas in the BRFSS public health survey, which raises genuine
ethical questions.

**Linear regression** (Fitting a model, Estimating income): Students
first fit a line to data by hand—adjusting slope and intercept to minimize
total squared error, optionally guided by gradient arrows—then fit a
`LinearRegression` model to BRFSS data using the same `fit`/`predict` pattern
they'll use throughout the course. They interpret slope and intercept, and
measure model quality with RMSE—the same total squared error from the toy,
averaged and square-rooted back into the original units—rather than r².
This keeps a single throughline (parameters, loss, training) running from the
toy through every dataset in the lab, instead of introducing a second,
statistics-flavored vocabulary (r², "variance explained") alongside it.

**Ethical considerations:** The ethical
discussion is woven into the regression sections themselves, rather than
collected into a separate section at the end. Each "your turn" exercise pairs
a technical question with an interpretive one—causation vs. correlation,
self-report bias, predictive misuse—recorded in `questions.md` so the ethical
stakes show up attached to the specific model that raises them, not as a
separate writing exercise at the end.

{% end %}

## Fitting a model

{% teaching_note() %}

We begin our exploration of machine learning with a model which will probably 
already be familiar to students (a "line of best fit"), and which they will likely
not recognize as machine learning. Although this model is much simpler than those
we will encounter in later labs, but it fits perfectly into the machine learning 
paradigm we will use consistently through these labs. 

{% end %}

The scatter plot below has a blue line which tries to estimate the relationship 
between x and y in the plot. This line allows you to quickly summarize the plot, and 
it allows you to estimate the y-value for new x-values. 

Unfortunately, the line doesn't fit the data very well yet. The yellow squares 
represent **error**: the distance from each point to the line forms one side of a 
square. The total squared error, or **loss**, is shown at the bottom of the plot. 
Click on the plot, then use the arrow keys to improve the line's fit by reducing the 
loss as much as possible. 

{{ regression_toy() }}

### Searching systematically

So far you've been adjusting the slope and intercept by feel. There's a more
systematic way: at any point, you can ask "if I nudge the intercept up a
little, does the total squared error go up or down? What about the slope?" The
answer to those two questions is the **gradient**, and repeatedly moving in the
direction that decreases the loss is called **gradient descent**.

Turn on "Show gradient hints." Two arrows appear:

- A vertical arrow near the left edge of the plot shows which way to nudge the
  intercept.
- A vertical arrow near the right edge of the plot shows which way to nudge the
  slope—since changing the slope moves the right end of the line the most.

Each arrow points in the direction that decreases total squared error, and its
length shows by how much—a long arrow means there's a lot of room for
improvement; a short arrow means you're close to the bottom.

{% teaching_note() %}

**Linear regression.** This section deliberately separates two ideas
that are usually taught together: *what* a good fit looks like (low total
squared error) and *how* you find it (gradient descent). The gradient hints
demonstrate a search procedure students will see again—with more parameters and
no visualization—in every later lab.

For a single straight line, there's actually a closed-form solution 
that computes the best-fitting slope
and intercept directly, in one step, with no nudging at all. `scikit-learn`'s
`LinearRegression`, which students will use later in this lab, uses this
closed-form solution, not gradient descent.

So why have students do gradient descent by hand at all? Because it's the
pattern that scales. A formula exists for ordinary least squares because the loss
(mean squared error) is a smooth bowl-shaped function (convex) of just two parameters. Once
a model has many parameters, or a loss that isn't a smooth bowl, no such formula
exists—gradient descent (or a variant of it) is the only practical option. The toy
in this lab is the simplest possible instance of a pattern that recurs throughout
the course: start with random parameters, measure the loss, follow the gradient,
repeat.

**Interdependent parameters.** Make sure students notice that the optimal slope
depends on the current intercept, and vice versa: the gradient arrows shift as
soon as either parameter changes. There's no fixed "best slope" to find and then
a separate "best intercept"—students have to search iteratively, nudging one
parameter, watching how the other's arrow responds, and going back and forth
until both arrows shrink to nothing together.

{% end %}

{% checkpoint() %}

For each seed below, type the seed into the field and click "Use seed," then
find the line that makes the total squared error as small as you can:

- Seed `0`
- Seed `1`
- Seed `2`

For each seed, record the slope and intercept you ended up with and the lowest
total squared error you reached. Then, for $x = 2$, $x = 5$, and $x = 8$, hover
over the plot and record the model's estimate for $y$.

With your group, discuss:

- Walk through your process for finding the minimum loss. Did you adjust the
  slope and intercept by feel, or did you turn on the gradient hints? Did the
  hints help?
- Compare your final slope and intercept for seed `0` with someone else's in
  your group. Are they similar? Are your total squared errors similar?
- Could two *different* lines—one steeper, one flatter—have a similar total
  squared error on the same dataset? Try to find two such lines for seed `0`
  and compare their losses.

{% end %}

## Two datasets, revisited

This lab uses Jupyter notebooks—an interactive environment for writing and
running code. The notebook works through four short sections. Each one
**demos** a technique on the **Pokémon** dataset from the Pokémon lab, then
asks you to repeat it (and push further) on **BRFSS**, the health survey
dataset from that same lab.

Your written answers go in `questions.md`, not the notebook—each checkpoint
below tells you exactly what to answer and where.

{{ code_action() }} Start the notebook:

```bash
$ jupyter lab
```

Open `lab_estimation.ipynb`. A column reference for both datasets is near the
top.

{{ code_action() }} Run the first few cells to load both datasets.

The BRFSS dataset has one row per survey respondent and includes:

| Column | Description |
|--------|-------------|
| `age` | Age band (18, 25, 35, 45, 55, or 65 meaning 65+) |
| `sex` | `male` or `female` |
| `income` | Annual income band, 1 (under $10k) to 8 (over $75k) |
| `education` | Highest education level, 1 (did not graduate high school) to 4 (college graduate) |
| `sexual_orientation` | `heterosexual`, `homosexual`, `bisexual`, or `other` |
| `health` | Self-reported general health, 1 (poor) to 5 (excellent) |
| `no_doctor` | Couldn't afford to see a doctor in the last year (True/False) |
| `exercise` | Did any exercise in the last 30 days (True/False) |
| `sleep` | Average hours of sleep per night |

## Estimating income

In the toy, you adjusted two parameters by hand (slope and intercept), 
to fit a line to 24 points. BRFSS has over 160,000 respondents and
many possible predictors, so we let `scikit-learn` do the fitting. The pattern
is the same one you'll use for every model in this course:

```python,linenos
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

df = pd.read_csv("brfss_2020.csv")
X = df[["education"]]
y = df["income"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
```

Lines 5–6 set up `X` and `y`. Notice the *type* of each: `X` is a
**DataFrame**—a table, even though it only has one column here. `X` could
just as easily hold five columns, one per predictor, and the rest of this
code wouldn't change. `y` is a **Series**: a single value per example, which
is why it's lowercase—unlike `X`, it's never a table with more than one
column.

Line 8 divides the data into a **training set** and a **test set**, using
`train_test_split`. This is the same idea you'll meet in every later lab: a
model evaluated on the data it was trained on can look better than it really
is, simply by memorizing quirks of that particular data. A test set the model
never saw during training gives an honest measurement of how well it
generalizes to new examples.

Lines 10–12 are the `fit`/`predict` pattern itself. `fit` is the
gradient-descent-or-closed-form step: it searches for the parameters (slope
and intercept, or one coefficient per predictor) that minimize the loss on the
*training* data from line 8. `predict` is what you did by hovering over the
toy—given new input, it returns the model's estimate; here it's applied to
the *test* data, the half of line 8's split the model never trained on.

### How well does the model fit?

The toy measured loss as **total squared error**. **RMSE** (root mean squared
error) is the same idea, reported in a way you can actually interpret: it ends
up in the same units as `y`, instead of squared units. Here's a function that
computes it:

```python,linenos
def root_mean_squared_error(y_true, y_pred):
    errors = y_true - y_pred
    squared_errors = errors ** 2
    mean_squared_error = squared_errors.mean()
    return mean_squared_error ** 0.5
```

Line 2 finds every error at once: `y_true` and `y_pred` are the same
length (one actual value and one prediction per example), so `errors` ends up
holding one actual-minus-predicted difference per example. Line 3 squares
each of those, elementwise—same as the yellow squares in the toy. That
squaring is also why total squared error isn't directly interpretable on its
own: squaring a value in, say, dollars gives you a number in *squared*
dollars, which isn't a unit anyone can picture. Line 4 averages all the
squared errors into a single number (and, as a side effect, makes RMSE
comparable across datasets of different sizes, unlike a running *total*).
Line 5 takes the square root, which undoes the squaring from line 3 and lands
the result back in the original, interpretable units of `y`.

A model predicting income (banded 1–8) with RMSE = 2 is, roughly, "typically
off by about 2 income bands." Always ask whether that's good or bad relative
to the range and spread of $y$ itself—an RMSE of 2 is unremarkable if $y$
ranges from 1 to 8, but would be a near-perfect fit if $y$ ranges from 1 to
1000.

{{ code_action() }} Work through sections 1–3 of the notebook: a single
continuous-ish predictor, a binary predictor, and an ordinal predictor.

{% teaching_note() %}

**Linear regression.** This section emphasizes the relationship
between predictor and response, the significance of slope and intercept, and
how well the model fits. Encourage students to interpret the slope as a rate
of change: "For each unit increase in [predictor], the predicted [response]
changes by [slope]." Real numbers from this dataset, for calibration:

| Predictor | Test RMSE | Baseline (guess the mean) |
|---|---|---|
| `education` alone | 1.84 | 2.02 |
| `health` alone | 1.91 | 2.02 |
| `age` alone | 2.02 | 2.02 |
| all five predictors together | 1.75 | 2.02 |

`education` is the strongest single predictor; `age` is essentially flat (a
good choice if you want students to see what "no relationship" looks like in
RMSE terms—the model's RMSE barely beats just guessing the mean every time).

Section 2 introduces a new and important reading of a coefficient: for a
**binary** predictor, the "slope" isn't a rate of change, it's the predicted
*difference between the two groups*. Section 3 names an assumption students are
already making without noticing: treating an **ordinal** category
(`education`, `health`) as if its levels are evenly spaced. Both ideas are
demonstrated on Pokémon's `legendary` and `generation` columns first, where the
stakes are low, before being applied to BRFSS.

{% end %}

{% checkpoint() %}

Complete sections 1–3 of the notebook: fit single-predictor models for
`education`, `health`, and a predictor of your choice; fit a binary-predictor
model.

In `questions.md` (Checkpoint 1), answer:
- What does the slope mean in plain language for each single-predictor model?
- Is a test RMSE of, say, 1.5 good or bad for predicting `income` (which
  ranges from 1 to 8)? Which predictor gave you the lowest test RMSE?
- How might self-report bias in `health` affect a model trained on it?
- What's the model's predicted income difference between the two groups, for
  your binary predictor?
- If you used `exercise`: could the causation run the other way?
- Is the evenly-spaced assumption more or less reasonable for `education` and
  `health` than it was for Pokémon's `generation`?

Run `mwc submit` when you finish.

{% end %}

### Multiple regression and overfitting

You can include more than one predictor:

```python
from sklearn.linear_model import LinearRegression

X = df[["education", "income", "exercise", "age", "no_doctor"]]
y = df["health"]
model = LinearRegression()
model.fit(X, y)
```

{{ code_action() }} Work through section 4 of the notebook: multiple
regression.

{% aside(title="Adding more predictors always lowers training RMSE—but does that mean a better model?") %}

On a training set, adding predictors never increases RMSE. The model can
always fit the training data at least as well by using more information. But a
model that fits too many variables may be **overfitting**—it captures noise
specific to the training data and generalizes poorly.

To check for overfitting, compare training RMSE with test RMSE. If training
RMSE is much lower, the model is overfitting.

{% end %}

{% teaching_note() %}

**Statistics vs. machine learning.** Linear regression is often introduced
through the lens of statistical inference: each coefficient comes with a
**p-value**, answering "if there were truly no relationship, how likely would I
be to see an association this strong by chance?" An association with $p < 0.05$
is called "statistically significant."

This lab never computes a p-value. Framed as a simple case of machine learning,
the question shifts from *is this association real?* to *how much does this
predictor reduce prediction error, and does that hold up on new data?*—answered
with RMSE and the train/test comparison above, rather than significance tests.
Both framings describe the same fitted line; they just ask different questions
of it. Students who go on to study statistics will recognize this connection.
Worth naming explicitly if it comes up: neither framing is "more correct"—
inference asks whether an effect is distinguishable from noise, while the ML
framing asks whether the model is useful.

This same distinction—inference questions vs. prediction questions—is why this
lab measures fit with RMSE rather than r². r² answers a statistical-inference
question (what proportion of variance is explained?), the same family of
question a p-value answers. RMSE answers the ML question this lab is actually
built around (how far off is a typical prediction, in units you can interpret
directly?) and ties back to the toy's loss with no new vocabulary required. Using
r² here would quietly reintroduce the inference framing this lab is trying to
keep separate from the algorithmic-modeling one.

{% end %}

{% checkpoint() %}

Complete section 4 of the notebook: fit a multiple regression model and
compare its train/test RMSE to your single-predictor models.

In `questions.md` (Checkpoint 2), answer:
- How does test RMSE compare to your single-predictor models? Does train RMSE
  diverge from test RMSE, or do they stay close together?
- The insurance scenario and right-to-explanation questions.

Run `mwc submit` when you finish.

{% end %}

## Closing discussion

{% checkpoint() %}

In `questions.md` (Checkpoint 3), write your answer to the closing position
question. Then push your work:

```bash
$ mwc submit
```

Be prepared to share your position with the class.

{% end %}

{% teaching_note() %}

**Ethical implications, and working from students' own writing.**
Rather than treating ethics as a separate unit, this lab attaches an
interpretive or ethical question to almost every technical result: causation
vs. correlation (section 2), self-report bias (section 1), predictive misuse
and the right to an explanation (section 4)—recorded as they go in
`questions.md`, Checkpoints 1 and 2. By the time students reach the closing
question, they've already written several short claims about what a model
"shows."

For the closing discussion, pull from that writing directly rather than
posing new hypotheticals. Ask a few students to read a sentence they wrote
earlier in `questions.md`—"people who exercise have higher predicted income,"
"education predicts income"—and ask the class two questions about it: **Is
this true?**
(Probably—it's what the model found.) **Could it still give someone a
misleading picture of reality?** (Also probably—it elides confounders, implies
a causal story the data can't support, or invites a reader to draw a
conclusion the original survey respondents never consented to.)

This is the heart of the closing discussion: a claim can be true and
misleading at the same time, and most of the genuinely hard ethical questions
around data and models live in that gap, not in claims that are simply false.
Asking students to confront their *own* sentences—which they already believe
and have to defend—makes this more concrete than evaluating someone else's
claim in the abstract. Give 10–15 minutes for students to revisit and qualify
one of their own claims before opening the whole-class discussion.

The closing "Your position" question (under what conditions, if any, it's
appropriate to use health survey data for commercial predictive models) is
meant to be argued, not answered correctly. Give students time to commit to a
position in writing before discussing as a class.

{% end %} -->

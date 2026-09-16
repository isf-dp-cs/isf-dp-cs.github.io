---
title: "01. Classification Features" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Classification Features
 
In this lab, you will build a machine learning system that classifies text
messages as either spam or as legitimate (called **ham**, since spam is fake ham—a
corny joke that became the industry standard term). You will progress through three
approaches: hand-written rules, hand-designed features with machine-learned weights,
and finally a bag-of-words model that treats every word in the vocabulary as a
feature. Along the way you will discover why each step improves on the last.

<!-- 
---
## Syllabus Topics [SL]
- A3.1.1 Explain the features, benefits and limitations of a relational database.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Entity** | anything that can have data stored about it that can be described  | -->

---

## [0] Setup

{{< code-action "Go to your" >}} `dpcs` **folder** and, if you haven't already, create a new folder for this unit.

```shell
cd ~/desktop/dpcs/
mkdir unit06_machine_learning
cd unit06_machine_learning
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
git clone https://github.com/isf-dp-cs/lab_classification_features_yourgithubusername
```


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_classification_features_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} 

```shell
poetry shell
```

{{< code-action "Install required packages." >}} 

```shell
poetry install
```

{{< code-action "Install the command-line tool for the lab." >}} 

```shell
pipx install .
```

--- 


## [1] How classifiers are evaluated

Your lab already contains a naive classifier that predicts every message is ham.
On our dataset that turns out to be 86% accurate—because 86% of messages *are*
ham. But this accuracy is hollow: not a single spam message is caught. We need
better ways to measure what a classifier is actually doing.

{{< code-action "Evaluate the naive classifier:" >}} 

```bash
spam models.manual.ManualClassifier
```

```bash
 1  ============================================================
 2  DATASET
 3  ============================================================
 4
 5    Total messages: 5572
 6    ham :  4825  (86.6%)
 7    spam:   747  (13.4%)
 8
 9    train: 3900  (70%)   test: 1672  (30%)
10
11  ============================================================
12  RESULTS: ManualClassifier
13  ============================================================
14
15                precision     recall         f1
16    ham             0.866      1.000      0.928
17    spam            0.000      0.000      0.000
18
19    average f1                            0.464
20
21  Confusion matrix:
22                     pred ham  pred spam
23  actual ham               1448          0
24  actual spam               224          0
```


{{< expand "Train/test split" >}} 

Line 9 shows that the script randomly splits the dataset into a **training set**
(70%) and a **test set** (30%). The classifier is trained on the training set and
evaluated on the test set—data it has never seen during training. This matters
because a classifier could simply memorize the training examples without learning
any general pattern. Evaluating on held-out data gives an honest picture of how
it will perform on new messages.

{{< /expand >}}


{{< expand "Precision, recall, and F1" >}} 


Lines 15–19 show the metrics we will use throughout this lab. To understand them
we first need names for the four possible outcomes of any prediction. Call spam
the **positive** class (the thing we are trying to detect):

| Outcome | Abbreviation | Meaning |
|---------|-------------|---------|
| True Positive | **TP** | Message is spam, predicted spam ✓ |
| False Positive | **FP** | Message is ham, predicted spam ✗ |
| True Negative | **TN** | Message is ham, predicted ham ✓ |
| False Negative | **FN** | Message is spam, predicted ham ✗ |

With those four counts we can define metrics that capture different kinds of correctness:

| Metric | Question | Formula |
|--------|----------|---------|
| **Precision** | Of all messages flagged as spam, what fraction actually were? | $\dfrac{TP}{TP + FP}$ |
| **Recall** | Of all actual spam messages, how many did we catch? | $\dfrac{TP}{TP + FN}$ |
| **F1** | Harmonic mean of precision and recall | $\dfrac{2 \cdot P \cdot R}{P + R}$ |

A high-precision filter almost never marks legitimate mail as spam. A high-recall
filter catches almost all spam. These goals are in tension: a more aggressive filter
catches more spam (higher recall) but also flags more ham (lower precision). F1
balances them into a single score—it is the metric we will optimise in this lab.

{{< aside "Why the harmonic mean?" >}}

F1 uses the *harmonic mean* rather than the arithmetic average. The harmonic mean
is low whenever *either* input is low. A classifier with precision 1.0 and recall
0.01 averages to 0.505, but its F1 is only 0.02—correctly reflecting that a
classifier catching almost nothing is nearly useless.

{{< /aside >}}

{{< /expand >}}


{{< expand "Confusion matrix" >}}

Lines 21–24 show a **confusion matrix** with the raw counts behind the metrics:

```
                     pred ham              pred spam
actual ham               1448 (TN)         0 (FP)
actual spam               224 (FN)         0 (TP)
```

In this output, all 224 spam messages sit in the FN cell and TP is 0: the
classifier catches *no spam at all*. You will fix that in the next section.

{{< /expand >}}


---


## [2] Writing rules by hand


Now look at what the classifier actually does.

💻 **Open `models/manual.py` and find the `predict_one` method:**

<!-- ```python, linenos, linenostart=11 -->

```python
def predict_one(self, message):
    return "ham"
```

This always returns `"ham"`—which is why spam recall is 0.000 and spam F1 is 0.000
in the output you just ran.

<!-- The other two methods are already complete. `fit` does nothing at all—there is
nothing to learn from examples when you are writing rules by hand, so it just
returns `self`, as scikit-learn expects. `predict` calls your `predict_one` method
on each message in the test set—the name is meant to remind you of this
relationship: `predict_one` classifies a single message, and `predict` applies it
to every message in an array. -->

💻 **Rewrite `predict_one` to return `"spam"` when a message looks
like spam and `"ham"` otherwise**

<!-- Use `spam -e` to look at real messages
for inspiration. -->

<!-- Some ideas:

- Does the message contain words associated with prizes or money?
- Is the message unusually short or unusually long?
- Does it use a lot of punctuation or uppercase letters? -->

After each change, re-run the script and watch the spam precision, recall, and
F1 score change:

```bash
$ spam models.manual.ManualClassifier
```

Use the error analysis flag to see which messages your classifier gets wrong:

```bash
$ spam models.manual.ManualClassifier -a
```

💻 **Keep refining your rules until your classifier achieves a spam F1 score above `0.70` on the test set.**

---

## [3] Feature engineering 

<!-- Writing classification rules works for obvious rules, but there are more subtle clues of spamminess which 
would be difficult to capture in hand-written rules. For example, spam messages tend
to be longer (averaging 139 characters) than ham (averaging 71 characters). Therefore
the message length is a clue about whether it is spam, but how would you combine this 
with other clues?

The approach we will take is to extract **features** from each message, and then figure 
out how much each feature contributes to the spam classification.  -->

Each feature is 
a number extracted from the message. For example: 

- Does the message contain the word "free"? (0 or 1)
- How many exclamation marks does it have? (0, 1, 2, …)
- How long is the message in characters?

Using these features, the message `"Free entry!! Call now!"` would be converted into:

```python
{
    "contains_free": 1,
    "num_exclamations": 3,
    "length": 22,
}
```

{{< expand "Mathematical Explanation" >}}

Converting a raw message into features makes the classification problem much simpler.
Line up the three feature values in order and you get a feature vector:
$x = (1, 3, 22)$. Now pair each feature with a weight—a number saying how
strongly that feature should count toward the prediction—to get a matching
weight vector $w = (w_1, w_2, w_3)$, plus one more number, a bias $b$,
that applies no matter what the message contains.

To turn a feature vector into a single prediction, multiply each feature by its
paired weight, add up the results, and add the bias. If the result is positive, 
we classify the message as spam. For example, if we choose weights $(3, 1, -0.05)$ 
and bias $-2$, then our prediction is:

$$
\begin{aligned}
  & (w_1 \cdot x_1) + (w_2 \cdot x_2) + (w_3 \cdot x_3) + b\\\\
= & (3 \cdot 1) + (1 \cdot 3) + (-0.05 \cdot 22) + (-2)\\\\
= & 2.9
\end{aligned}
$$

2.9 is positive, so we (correctly) classify this as spam. 

Of course, this is only going to give good results if you define meaningful features, 
and if you choose weights and bias which classify features correctly. Defining features
will be your job. Our model will automatically learn the best values for weights and bias 
from training data using logistic regression.
{{< /expand  >}}


{{< expand "Logistic regression" >}} 


Our model has access to the training data before we start evaluation with the test data, 
providing the opportunity to train the model (or fit it to the training data) by choosing 
the weights (including the bias). The algorithm we will use is called logistic regression. We won't 
go deep into the math, but here's conceptually how it works:

> 1️⃣ Start by choosing random numbers for the weights. <br>   
> 2️⃣ Measure how bad the model is. Take each message in the training set, extract its features, and calculate its spam score. A positive score predicts spam, a negative score predicts ham. For each incorrect prediction, we apply a penalty based on how confidently wrong the model was. Add up all the penalties from each wrong prediction. This is the ***loss***.    
<br> 
> 3️⃣ Use calculus to determine which direction each weight could be shifted to reduce the total loss. Nudge each weight in that direction.     
<br> 
> 4️⃣ Repeat steps 2 and 3 for a long time. The algorithm can be tuned to stop after a certain number of iterations, or it can stop when the loss stops going down.     

After training, you can inspect the weights to see what the model discovered.
Features with large weights (positive or negative) were the most useful; features
with weights near zero contributed almost nothing.

{{< /expand  >}} 

### Walking through the code

💻 **Open `models/features.py` and read through it.**

`FeatureExtractor` is a small adapter between your messages and the model. Its
`extract_features` method returns a dictionary mapping feature names to numbers:

<!-- ```python, linenos, linenostart=14 -->
```python
def extract_features(self, message):
    return {
        "contains_free": int("free" in message.lower()),
        "num_exclamations": message.count("!"),
        "length": len(message),
    }
```

Its `transform` method calls `extract_features` on every message, producing a
list of these dictionaries—one per message:

<!-- ```python, linenos, linenostart=11 -->
```python
def transform(self, X):
    return [self.extract_features(msg) for msg in X]
```

`FeatureClassifier.fit` plugs `FeatureExtractor` into a pipeline:

<!-- ```python, linenos, linenostart=24 -->
```python
self._pipeline = Pipeline([
    ("features", FeatureExtractor()),
    ("vectorizer", DictVectorizer()),
    ("classifier", LogisticRegression(max_iter=1000)),
])
```

`DictVectorizer` converts each dictionary into a list of values in a consistent 
order (so the weights can be applied correctly). `LogisticRegression` then trains on that matrix.


{{< expand "Pipelines" >}} 


`FeatureExtractor` is your first example of a **transformer**—a different kind
of building block than the **estimators** (`ManualClassifier` and friends) you've
written so far. Both kinds of object have a `fit` method that learns whatever it
can from the data. But where an estimator's `predict` turns data into *labels*, a
transformer's `transform` turns data into *new data*: `FeatureExtractor.transform`
takes an array of messages and returns a list of feature dictionaries, ready for
`DictVectorizer` to turn into numbers.

A **Pipeline** chains a series of transformers together, ending in an estimator,
so that each one receives the output of the one before it. `self._pipeline` above
is exactly this: messages go in, `FeatureExtractor` turns them into dictionaries,
`DictVectorizer` turns those into lists of numbers, and `LogisticRegression` turns
those lists into predictions.

{{< /expand >}}

💻 **Run the default `FeatureClassifier`:**

```bash
spam models.features.FeatureClassifier
```


You should see the spam F1 score rise significantly, and the output will now
include a feature weights table:

```shell
============================================================
TOP 3 FEATURES BY WEIGHT
============================================================
  contains_free                +2.746  → spam  +++++++++++++
  num_exclamations             +0.521  → spam  ++
  length                       +0.014  → spam  
```

A positive weight means the feature pushes toward spam; a negative weight means
it pushes toward ham. The bar gives a rough sense of magnitude.

---

### Add Features 

💻 **Add at least three features of your own to `extract_features`. After each addition, re-run the script and compare spam F1 before and after.**

<!-- Some ideas:
- Does the message mention money, prizes, or urgent action?
- How many words are in all capitals?
- Does the message contain a phone number or URL?
- What fraction of characters are digits? -->

```bash
spam models.features.FeatureClassifier -a
```

💻 **Keep adding features until you achieve a spam F1 score above 0.85**

---

## [4] Bag of Words

So far you have designed every feature yourself. But
what if you stopped guessing, and let *every word* be a feature instead?

This is the idea behind a **bag of words** model: represent each message as an
unordered collection ("bag") of its words, and use the words themselves as the evidence for classification.

<!-- `BagOfWordsClassifier` has the *exact* same structure as `FeatureClassifier`—
extract a dictionary of features from each message, hand it to `DictVectorizer`,
and let `LogisticRegression` learn a weight for each one.  -->

The ***only thing*** that changes in this model is what `extract_features` returns: instead of three hand-picked
measurements, it returns one entry per distinct word in the message. 

{{< expand "Thousands of features" >}} 

With thousands of distinct words across the dataset, that means thousands of features—
and thousands of learned weights to inspect. Logistic regression has no trouble 
tuning all their weights. When words show up the same amount in spam and ham, 
their weights will end up near zero, because their presence has no predictive value. 

{{< /expand >}} 


---

### Data cleaning

<!-- This is also the point where data cleaning starts to matter a lot. Your
hand-designed features barely cared about case or punctuation—`length` and
`num_exclamations` ignore them entirely, and `contains_free` needed only a single
`.lower()` call to handle them.  -->

Now that every distinct word is its own feature,
"free", "Free", "FREE", and "free!" become four *different* features. Cleaning the text
combines these together into one feature. This reduces the number of features, and gives each feature more examples to learn from.

**Open `models/cleaning.py` and look at `LowercaseTransformer`:**

<!-- ```python, linenos, linenostart=16 -->
```python
class LowercaseTransformer:
    def fit(self, X, y=None):
        return self

    def transform(self, X):
        return np.array([msg.lower() for msg in X])
```

This is another transformer, built the same way as `FeatureExtractor`.

 <!-- `fit`
has nothing to *learn* from the data here, so it just returns `self`, and
`transform` does the real work—turning an array of messages into an array of
lowercased messages.  -->

The file also contains `StopwordRemover` (removes common
words like "the", "a", "is") and `PunctuationRemover` (replaces punctuation
with spaces).

---

### Every word is a feature

💻 **Open `models/bow.py` and look at `FeatureExtractor`'s `extract_features` method:**

<!-- ```python, linenos, linenostart=18 -->
```python
def extract_features(self, message):
    return dict(Counter(message.split()))
```

<!-- This looks nothing like `contains_free`, `num_exclamations`, and `length`—but it
returns exactly the same *kind* of thing: a dictionary mapping feature names to
numbers. The difference is where the feature names come from. Before, you wrote
each one by hand. Here, `Counter(message.split())` counts how many times each
word appears in the message, and every distinct word becomes its own feature,
with its count as the value.  -->

A message like `"free entry to win a prize, text
WIN to 80086"` becomes a dictionary like:

```python
{
    "free": 1,
    "entry": 1,
    "to": 2,
    "win": 2,
    "a": 1,
    "prize": 1,
    "text": 1,
    "80086": 1,
}
```

Now look at `fit`:

<!-- ```python, linenos, linenostart=23 -->
```python
def fit(self, X, y):
    self._pipeline = Pipeline([
        ("lowercase", LowercaseTransformer()),
        ("punctuation", PunctuationRemover()),
        ("features", FeatureExtractor()),
        ("vectorizer", DictVectorizer()),
        ("classifier", LogisticRegression(max_iter=1000)),
    ])
    y_binary = (np.array(y) == "spam").astype(int)
    self._pipeline.fit(X, y_binary)
    return self
```
{{< expand "Pipeline" >}} 

This `Pipeline` has more steps than `FeatureClassifier`'s, but it's built
exactly the same way: a list of named steps, each one handing its output to the
next. `LowercaseTransformer` and `PunctuationRemover` clean each message
first—so "FREE!!!" and "free" both become the plain word `"free"`—and only then
does `FeatureExtractor` see it and count its words into a dictionary.
`DictVectorizer` turns that dictionary into a list of numbers, and
`LogisticRegression` learns a weight for each feature and the bias.

{{< /expand >}} 

---

### Interpreting the model

💻 **Run the bag-of-words classifier:**

```bash
spam models.bow.BagOfWordsClassifier
```

<!-- Because this pipeline ends in a `LogisticRegression`, just like `FeatureClassifier`
did, you can ask it the same question: which features got the strongest weights?
Only now, instead of three features, there are thousands—one per word the model
encountered during training.  -->

{{< aside "Why the harmonic mean?" >}}

You can use the `-f` flag to choose how many features you see:

```bash
spam models.bow.BagOfWordsClassifier -f 25
```
{{< /aside  >}}


Compare this model's spam F1 score to your best hand-designed-features classifier. Then
open `bow.py` and experiment with the cleaning steps at the start of
`self._pipeline`: try adding `StopwordRemover`, removing `PunctuationRemover`,
or reordering the steps. Re-run the classifier after each change and watch how
both the spam F1 score and the feature weights table respond.

---

## [5] Deliverables


{{< deliverables "If you finish the lab, complete these two steps:" >}}

**📋 Update Syllabus Checklist:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.


{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}}



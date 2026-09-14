---
title: "01. Parallel Lists" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
# draft: true
---

# Parallel Lists

This lab introduces parallel lists.

---
## Syllabus Topics [SL]
- **B2.2.2** Construct programs that apply arrays and Lists.
- **B2.4.2** Construct and trace algorithms to implement a linear search ~and a binary search~ for data retrieval.

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Parallel Lists** | When multiple lists store related data, with the elements at the same index across the lists holding matching information |

--- 

## What are parallel lists? 

📖 **Here is an example of parallel lists.** Notice how information at the same index, across both lists, are associated. 

```python
cities = ['Beijing', 'Tokyo', 'Seoul', 'Busan']
country = ['China', 'Japan', 'South Korea', 'South Korea']

print(f"{cities[0]} is in {country[0]}") # Beijing is in China
```

---

# [0] Set up

{{< code-action "Go into your unit folder and clone your repo." >}} Be sure to replace `yourGithubUsername` with your actual username. 
```shell
cd ~/desktop/dpcs/unit02_data_structures
git clone https://github.com/isf-dp-cs/lab_parallel_lists_yourGithubUsername
```

{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_parallel_lists_yourGithubUsername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

# [1] Song Query

👀 **First, take a look at `song_data.py` and notice the parallel arrays with song metadata.**  

💻 **Then, in `query.py` write 4 functions to easily query the `titles_list` and `artists_list`.** 
- `format_song(title, artist)`
- `get_unique_artists(artists)`
- `get_artist_by_title(titles, artists, search_title)`
- `get_titles_by_artist(titles, artists, search_artist)`

💻 **Use the functions to answer the questions at the bottom of the file.** 

✅ **Check your answers with a peer**

---

# [2] Deliverables


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Tracker:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m "describe your code here"   
- git push
- remote

{{< /deliverables >}}

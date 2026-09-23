---
title: "01. Binary Search Trees"
bookFlatSection: false
weight: 2
# bookCollapseSection: true
# draft: true
---

# Binary Search Trees (BST)

In this lab we are going to experience using BSTs. As a reminder, you are not expected to construct a BST.

---
## Syllabus Topics [HL]
- **B4.1.4** Explain the structures and properties of BSTs. (HL only)

## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Binary Search Tree** | A binary tree where for each node there are only two children and all values on the left subtree are smaller than the node and all values on the right subtree are larger than the node. |
| **Nodes** | Hold a value |
| **Edges** | Connect nodes |
| **Root** | Top of tree |
| **Parent** | Node connected to node below |
| **Child** | Node connected to node above |
| **Leaf** | Node with no children |
| **Subtree** | Portion that is a complete tree |

---

## [0] Set up


{{< code-action "Go to your" >}} `dpcs` **folder and create a `unit_adt` folder.** You may want to move your `lab_sets` directory into this folder.

```shell
cd ~/desktop/dpcs
mkdir unit_adt
```

{{< code-action "Clone your repo. This will copy it onto your computer." >}} Be sure to replace `yourgithubusername`, to your actual username.
```shell
git clone https://github.com/isf-dp-cs/lab_binary_search_tree_yourgithubusername
```


{{< code-action "In the Terminal, type the following command to open the lab folder." >}}
```shell
cd lab_binary_search_tree_yourgithubusername
```

{{< code-action "Enter the Poetry Shell to start the lab." >}} As a reminder, we will run this command at the start of each lab, but only when we are inside a lab folder.
```shell
poetry shell
```

{{< aside "Exiting the poetry shell" >}}
When you want to exit the shell, you can type `exit` or `^D`
{{< /aside >}}

---

## [1] BST 

💻 **Open `binary_search_tree.py` and take a look at how the BST is constructed**  

💻 **At the bottom of the file in `if __name__ ==" __main__":` insert items into the tree and test the `inorder_traversal()`.** 

💻 **Construct the recursive methods for `preorder_traversal()` and `postorder_traversal()`.** Test them at the bottom of the file.
- `preorder` - is `visit, left, right`
- `postorder` - is `left, right, visit`

---


## [2] Search

💻 **Use the existing functions and run tests and ensure you can answer these questions.**  Use the `words100k.txt ` file as data.
- When does the search perform faster in a list than a binary search tree?
- When does the search perform faster in a binary search tree than a list?
- How does a balanced v unbalanced BST affect the search speed? 

You can remove the `E` in a float using this syntax
```python
num = 9.77e-05
print(f"{num:.10f}")
```


---

## [3] Deliverables


{{< deliverables "Once you complete the lab, be sure to complete these two steps:" >}}

**📋 Update Syllabus Tracker:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< code-action "Push your work to Github" >}}
- git status
- git add -A
- git status
- git commit -m \"describe your code here\"   
- git push
- remote

{{< /deliverables >}}

---

## [3] Deletion

💻 **Code a method for `deletion(value)`.**  It should find the node with the given value and delete it. You can reference the three cases of deletion [here](https://www.geeksforgeeks.org/dsa/deletion-in-binary-search-tree/).
---
layout: default
title: Books Manager Exercise
parent: CS12
# nav_order: 0
# published: false
---

# Intro Exercises
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Overview
The Book Manager lets users create digital bookshelves and sort books onto them, sort of like [Goodreads](https://www.goodreads.com/)

![Diagram](https://lucid.app/publicSegments/view/dda5e171-8e0a-48df-8f64-34fa944a9a49/image.png)


## UML

Here is the UML for this assignnment. If you would like to view it on its own, [click here](https://lucid.app/publicSegments/view/33ba1431-02d7-4cbe-87a7-4cc7c1597547/image.png)

![this stuff](https://lucid.app/publicSegments/view/33ba1431-02d7-4cbe-87a7-4cc7c1597547/image.png)

## Details about some Classes

### User 

#### printUserInfo()
This method should print out the username and the labels of all of their bookshelves.

### Bookshelf

#### addBooks()
When a book is added to the bookshelf, this method should ***also*** add the shelf's label into the Book's `bookshelves` list.

#### printBooks()
This method should print out all the titles of the books on the bookshelf.

### Book

#### bookshelves
A book can be on multiple bookshelves at once (for example, it might be on your `Horror bookshelf`, your `Stephen King Bookshelf` and your `Want to Read` bookshelf). The bookshelves attribute shouls store the `labels` of the bookshelves it's on.

#### rating
The rating should be an integer. The default rating should be -1.


#### printInfo()
This method should print out the title, author, and rating for the book. If a rating is -1, print that the book has not yet been rated.

## Extensions

### Validation: Username restrictions
A username must be between at least 4-15 characters long. 

If a user tries to make an account with an invalid username, they should instead get some default username.
If a user tries to change their username with an invalid username, the username should stay the same

### Validation: No duplicates 
If a user tries to add in a bookshelf that already exists, they should receive an error message and the new bookshelf should not be created.

If a user tries to add a book to the same bookshelf twice, they should receive an error message and the book should not be added.

### Validation: Valid ratings
If a user wants to set the rating to something negative, or something over 5, you should not let them.

### Remove books from bookshelves
If you want to remove a book from a bookshelf, consider all the places that must be updated.

### Delete bookshelves
If you want to delete bookshelves, first make sure that they are empty.

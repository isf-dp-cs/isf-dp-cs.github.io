---
title: "1. Book Manager Part 1"
weight: 20
draft: true
---
# Book Manager

{{< expand "Skills Covered in this Exercise" "click to expand ⬇️" >}}
- OOP
- One-to-many relationships with Objects
- Arrays
- Error handling
{{< /expand >}}

The Book Manager lets users create digital bookshelves and store books in them, sort of like [Goodreads](https://www.goodreads.com/)

![Diagram](https://lucid.app/publicSegments/view/dda5e171-8e0a-48df-8f64-34fa944a9a49/image.png)




<!-- ## UML -->

<!-- Here is the UML for this assignnment. If you would like to view it on its own, [click here](https://lucid.app/publicSegments/view/33ba1431-02d7-4cbe-87a7-4cc7c1597547/image.png) -->

<!-- ![this stuff](https://lucid.app/publicSegments/view/33ba1431-02d7-4cbe-87a7-4cc7c1597547/image.png) -->

## [0] Create the Book class

![this stuff](https://lucid.app/publicSegments/view/2d178057-6f38-4ebe-aa5d-ae29cca5ca47/image.png)

## [1] Test your Book Class
💻 Create a `main()` method and do the following:

  1. Create the book **Joyland** by **Emily Schultz**
  2. Updat the author to **Stephen King**
  3. Update the title to **It**
  4. Print the updated information using `printInfo()`
  5. Give the book 3 different ratings
  6. Attempt to rate the book using 0 and 6 and verify that the rating was not added
  7. Get the average rating and ensure it is correct
  8. Add the book to the bookshelves **Horror**, **Stephen King**, and **Want to Read**
  9. Attempt to add the bookshelf **Want to Read** a second time and verify that the bookshelf was not added
  10. Delete a bookshelf and then add a new one
  11. Print the updated information using `printInfo()`

----

## [3] Create the BookShelf class

![this stuff](https://lucid.app/publicSegments/view/9f98044e-119d-4224-a6eb-a674f6b99e6a/image.png)

## [4] Test your BookShelf Class
💻 Create a `main()` method and do the following:

  1. Create the shelves **Horror**, **Stephen King**, and **Want to Read**
  2. Create a book and add it to all the shelves
  3. Use `printInfo()` and `printBooks()` to be sure the book has been added to every shelf
  4. Add so many books to a BookShelf that it is forced to copy its data to a new larger array, and verify that it was successful 
  5. Remove some books from some shelves
  6. Use `printInfo()` and `printBooks()`to be sure the bookshelf has been removed from the book and the book has been removed from each shelf
  7. Get the average rating and ensure it is correct



<!-- 

### Bookshelf



#### printBooks()


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
If you want to delete bookshelves, first make sure that they are empty. -->

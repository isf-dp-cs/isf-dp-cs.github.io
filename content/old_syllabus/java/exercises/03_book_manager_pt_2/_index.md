---
title: "2. Book Manager Part 2"
weight: 30
draft: true
---
# Book Manager Part 2

The Book Manager lets users create digital bookshelves and store books in them, sort of like [Goodreads](https://www.goodreads.com/)

Only begin Part 2 if you have finished and tested Part 1

{{< expand "Skills Covered in this Exercise" "click to expand ⬇️" >}}
- OOP
- One-to-many relationships with Objects
- Error handling
{{< /expand >}}

![Diagram](https://lucid.app/publicSegments/view/dda5e171-8e0a-48df-8f64-34fa944a9a49/image.png)


<!-- ## UML -->

<!-- Here is the UML for this assignnment. If you would like to view it on its own, [click here](https://lucid.app/publicSegments/view/33ba1431-02d7-4cbe-87a7-4cc7c1597547/image.png) -->

<!-- ![this stuff](https://lucid.app/publicSegments/view/33ba1431-02d7-4cbe-87a7-4cc7c1597547/image.png) -->

## [0] Create the User class

A user is someone who will be using your book manager to keep track of their reading.
They will create bookshelves and put books on them.

![this stuff](https://lucid.app/publicSegments/view/d30301df-11b7-47f6-b7db-d34262d3de67/image.png)

## [1] Test your User Class
💻 Create a `main()` method and do the following:

  1. Create a User with an invalid name. Attempt to rename it with invalid names (get creative, try many things)
  2. Give the User a working name
  3. Add multiple shelves
  4. Test each method to make sure it is fully functioning
  5. Use `printUserInfo()` and make sure it is correct
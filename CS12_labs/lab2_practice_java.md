---
layout: default
title: Streaming Service Exercise
parent: CS12
# nav_order: 0
# published: false
---

# Streaming Service
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
A streaming service maintains an unsorted database of movies and tv shows for people to watch

## UML

The folowing UML diagram describes the objects in the current system. If you would like to view it on its own, [click here](https://lucid.app/publicSegments/view/f1bf88d1-0042-4679-af20-52acae135395/image.png)

![this stuff](https://lucid.app/publicSegments/view/f1bf88d1-0042-4679-af20-52acae135395/image.png)

## Questions

### (a)
The object-oriented software solution that implements this system for the streaming service allows a user to favorite a maximum of 10 movies that they are interested in. These houses are stored in an array `favoritesList` of type `Movie`. 

{: .task }
Construct the code needed to instantiate an array `favoritesList` that can store a maximum of 10 `Movie` objects.

### (b)
All the unsorted `Movie` objects in the database have been copied to a sufficiently large array `allMovies`. This array is not completely filled with `Movie` objects.

The array `allMovies` and all methods in this question are declared in the main program class. All methods can access the array `allMovies` directly.


{: .task }
Construct the code for the method `movieSort()` that will sort the array `allMovies` in ascending order by rating.

### (c)
A method is needed to select from the original unsorted array `allMovies` the three highest rated movies from any genre.

{: .task }
>Construct the code for the method `topThree` that will take an integer parameter `chosenGenre`. It must return a sorted array of size 3 that contains the three highest rated `Movie` objects (in ascending order of price) with the correct genre.
>
>You may assume that `allMovies` contains at least three `Movie` objects within the `chosenGenre`. As part of your answer you should use the method `movieSort()` as developed in part (b).

## Additional Questions (HL)

### (a)
Imagine that the tv shows are stored in a `LinkedList` 
{: .task }
>Construct the code for the method `topThree` that will take an integer parameter `chosenGenre`. It must return a sorted array of size 3 that contains the three highest rated `Movie` objects (in ascending order of price) with the correct genre.
>
>You may assume that `allMovies` contains at least three `Movie` objects within the `chosenGenre`. As part of your answer you should use the method `movieSort()` as developed in part (b).
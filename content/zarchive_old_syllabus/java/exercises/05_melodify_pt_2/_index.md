---
title: "4. Melodify Part 2"
weight: 50
draft: true
---
<!-- Ideas for more parts: 

Binary search for a particular tempo to make a playlist for a certain bpm

Top tracks from each genre

Make a user. the user can make playlists and has a list of 10 "favorited" songs

Recommendations: Get playlists/tracks from user. get average tempo/valence/etc (genre?) of all songs. then try to recommend similar songs to them (like "discover weekly") -->

# Melodify Part 2

{{< expand "Skills Covered in this Exercise" "click to expand ⬇️" >}}
- OOP
- Binary Search
- Recursive Binary Search
{{< /expand >}}

This is a continuation of  Melodify Part 1. Only continue if you have completed Part 1.

## 🔎 Search for Mellow songs
> Note: Use Binary Search for this method 
> Alternately, try the Recursive Binary Search! It works the same way, but you cannot use a loop. Instead, use recursion!

Imagine that the user wants to create a mellow playlist that only contains songs that aren't super happy. To do this, the user wants only songs that are between  0.30 - 0.60 valence level.

💻 Write a new method `makeMellowPlaylist`. This method uses binary search to find all the songs that have a valence between 0.30 - 0.60 (inclusive). Remember that in order for binary search to work, the array must first be sorted. Utlilize `sortValence` from the previous exercise.

💻 All the mellow songs should be added to a new array, `mellowPlaylist`, which should be returned.

---


## 🫧 Search for Popular songs
> Note: Use Binary Search for this method 
> Alternately, try the Recursive Binary Search! It works the same way, but you cannot use a loop. Instead, use recursion!

This user found that she likes to listen to popular songs, but avoid **extremely** popular songs. If the popularity score is above 89, it is on the radio too much and she is sick of it, but if it is below 60, she doesn't know it. 

Also, she doesn't like to listen to explicit music, so make sure if the song is explicit that you don't put it on her playlist.

💻 Write a new method `makePopularPlaylist`. This method uses binary search to find all the songs that have a popularity between 60 - 89 (inclusive). Remember that in order for binary search to work, the array must first be sorted. Utlilize `sortPopularity` from the previous exercise.

💻 All the non-explicit songs that match her critieria should be added to a new array, `popularPlaylist`, which should be returned.


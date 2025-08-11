---
title: "3. Melodify Part 1"
weight: 40
draft: true
---
# Melodify Part 1
{{< expand "Skills Covered in this Exercise" "click to expand ⬇️" >}}
- OOP
- Arrays of objects
- Sequential Search
- Bubble Sort
- Selection Sort
{{< /expand >}}

Melodify mimics a service that stores a huge database of songs.


## [0] Setup

### Project Melodify
💻 Create a new Java project called Melodify

### Song Class
💻  Add a new class called Song to your project, and paste in the code below:

```java
package model;

public class Song {
    private String title;
    private String artist;
    private String album;
    private int popularity;
    private boolean isExplicit;
    private String genre;
    private double length;
    private double energy;
    private double loudness;
    private double valence;

    public Song(String title, String artist, String album, int popularity, boolean isExplicit,
                String genre, double length, double energy, double loudness, double valence) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.popularity = popularity;
        this.isExplicit = isExplicit;
        this.genre = genre;
        this.length = length;
        this.energy = energy;
        this.loudness = loudness;
        this.valence = valence;
    }

    // Getters and Setters for all properties

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public int getPopularity() {
        return popularity;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

    public boolean isExplicit() {
        return isExplicit;
    }

    public void setExplicit(boolean explicit) {
        isExplicit = explicit;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getEnergy() {
        return energy;
    }

    public void setEnergy(double energy) {
        this.energy = energy;
    }

    public double getLoudness() {
        return loudness;
    }

    public void setLoudness(double loudness) {
        this.loudness = loudness;
    }

    public double getValence() {
        return valence;
    }

    public void setValence(double valence) {
        this.valence = valence;
    }

    // toString() method to represent the Song object as a string

    @Override
    public String toString() {
        return "Song{" +
                "title='" + title + '\'' +
                ", artist='" + artist + '\'' +
                ", album='" + album + '\'' +
                ", popularity=" + popularity +
                ", isExplicit=" + isExplicit +
                ", genre='" + genre + '\'' +
                ", length=" + length +
                ", energy=" + energy +
                ", loudness=" + loudness +
                ", valence=" + valence +
                '}';
    }
}
```
### Melodify Class
💻 Add a new class called Melodify to your peojct and paste in the code below:

```java
package model;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;


public class Melodify {
    private Song[] allSongs;

    public void readCSV(String filePath) {
        allSongs = new Song[200];

        try (BufferedReader br = new BufferedReader(new FileReader(filePath)))  {
            // Skip the header line
            br.readLine();

            // Read the song data and populate the array
            for (int index = 0; index < 200; index++) {
                String line = br.readLine();
                String[] data = line.split(",");

                // Assuming the CSV file format is: title, artist, album, popularity, explicit, genre, length, energy, loudness, valence

                String title = data[0];
                String artist = data[1];
                String album = data[2];
                int popularity = Integer.parseInt(data[3]);
                boolean isExplicit = Boolean.parseBoolean(data[4]);
                String genre = data[5];
                double length = Double.parseDouble(data[6]);
                double energy = Double.parseDouble(data[7]);
                double loudness = Double.parseDouble(data[8]);
                double valence = Double.parseDouble(data[9]);

                Song song = new Song(title, artist, album, popularity, isExplicit, genre, length, energy, loudness, valence);
                allSongs[index] = song;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    // Getters and Setters for allSongs

    public Song[] getAllSongs() {
        return allSongs;
    }

    public void setAllSongs(Song[] allSongs) {
        this.allSongs = allSongs;
    }
    
    // Main function
    public static void main(String[] args) {
        Melodify melodify = new Melodify();
        melodify.readCSV("melodify.csv");

        Song[] songs = melodify.getAllSongs();
        for (Song song : songs) {
            System.out.println(song);
        }
    }
}
```
### Song Data
Go to this link and download [this file](https://github.com/isf-dp-cs/song_data/blob/main/melodify.csv). It contains the data for 200 songs.

💻 Drag it into eclipse to your Melodify project. You should see the file show up in the project. 


## [1] Melodify Features

Right now, the Melodify class has an array called `allSongs` that contains all the songs. However, we have no features to interact with the songs. Add the features below to the `Melodify` class:

### 🔎 Search for a Song
> Note: Use Sequential Search for this method 

💻 Write a new method `findSong` that can search for a particular song (or songs!) within `allSongs`. It should return a single list of song objects. The list should be empty if the song cannot be found, contain a single song if there is only one, or contain multiple songs if there are many songs by that name.

### 🫧 Sort by Popularity
> Note: Use Bubble Sort for this method 

💻 Write a new method `sortPopularity` that sorts `allSongs` by popularity score in descending order (most popular first). This method has access to `allSongs` so it does not need any parameters or to return anything.

### ⤵️ Sort by Valence
> Note: Use Selection Sort for this method  

Valence is a measure of how "happy" a song sounds. 

💻 Write a new method `sortValence` that sorts `allSongs` by the valence of the songs in ascending order (lowest values first). It should take one parameter, a string, the title of the song. It should print out all the details of the song, or print an appropriate error message.
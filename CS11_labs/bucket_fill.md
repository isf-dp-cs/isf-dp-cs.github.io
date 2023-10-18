---
layout: default
title: Bucket Fill 
parent: CS11
nav_order: 10
# published: false
---

# Bucket Fill Challenges
{: .no_toc }


<details open markdown="block">
  <summary>
    ☑️ Tasks
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Setup

To keep your workspace clean, start by creating a new java project in Eclipse called "Bucket Fill". You will put the methods you write in this project.

## Square
This one should be quick and easy. You are given the coordinates of the 4 corners of the square.You are also given the coordinates of one pixel. Tell the user whether the pixel is *inside* the square or not.

{: .task }
Write the method `insideSquare()`
Parameters: `xPt1`, `yPt1`, `xPt2`, `yPt2`, `xPt3`, `yPt3`, `xPt4`, `yPt4`, `xPixel`, `yPixel`
Return: `True` or `False`


## Circle
It only takes 3 points to define a circle. Your task will be to determine if the pixel is *inside* the circle or not.

{: .task }
Write the method `insideCircle()`
Parameters: `xPt1`, `yPt1`, `xPt2`, `yPt2`, `xPt3`, `yPt3`, `xPixel`, `yPixel`
Return: `True` or `False`

## Convex Polygon
This time all you get is a list of vertices. You don't know how many there will be. All you know is that the polygon is convex (luckily). Your task will be to determine if the pixel is *inside* the circle or not.

{: .task }
Write the method `insideConvexPolygon()`
Parameters: `array of points` , `xPixel`, `yPixel`
Return: `True` or `False`


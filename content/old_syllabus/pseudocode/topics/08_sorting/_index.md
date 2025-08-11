---
title: Sorting
weight: 9
# draft: true
---

# Sorting

This page contains information and coding exercises for `sorting`, using both `Bubble sort` and `Selection Sort`.

Open up the [pseudocode compiler](http://ibcomp.fis.edu/pseudocode/pcode.html) in a new tab. You will be using this website to complete the exercises below.


### Starter Code
{{< code-action "Copy/paste this starter code into your compiler" >}}

```java
//------ Sorting Algorithm -----------------------
NUMS = [15,30,85,25,40,90,50,65,20,60]
output "------Before sorting------"
loop C from 0 to 9
 output NUMS[C]
end loop
output "------Before sorting------"
output
//-----------------------


// YOUR CODE GOES HERE 



//-----------------------
output
output "------After sorting------"
loop C from 0 to 9
 output NUMS[C]
end loop
output "------After sorting------"
```

## Bubble Sort

{{< code-action "Using the example code, write the  `bubbleSort`" >}}

Using the example code, use the `Bubble Sort` algorithm to sort the array. If you are unsure how to begin, use the **provided  checklist** to help.

{{< expand "Answer" >}}
```java
loop I from 0 to NUMS.length-1
    loop J from 0 to NUMS.length-2
      if NUMS[J]>NUMS[J+1] then
        TEMP = NUMS[J]
        NUMS[J] = NUMS[J+1]
        NUMS[J+1] = TEMP
      end if
    end loop
end loop
```
{{< /expand >}}

## Improving your Bubble Sort

{{< code-action "Create a method called `swap()` that can swap two numbers in an array" >}}     

**Parameters:** `position1`, `position2`, `array`        
**Return:** updated `array`
 
1. Swap the items at position1 and position2
2. Return the updated array

{{< expand "Answer" >}}
```java
method swap(position1, position2, array)
    TEMP = array[position2]
    array[position2] = array[position1]
    array[position1] = TEMP
    return array
end method
```
{{< /expand >}}

**Now use your `swap` to improve your sorting**

{{< code-action "Convert your bubble sort code into a method called `bubbleSort`" >}}     

**Parameter:** an array of numbers          
**Return:** a sorted array of numbers    
1. Sorts the array
2. Everytime a swap is required, it should use `swap()` 

{{< expand "Answer" >}}
```java
method bubbleSort(ARRAY)
  loop I from 0 to ARRAY.length-1
      loop J from 0 to ARRAY.length-2
        if ARRAY[J]>ARRAY[J+1] then
          ARRAY = swap(J, J+1, ARRAY)
        end if
      end loop
  end loop
  return ARRAY
end method
```
{{< /expand >}}

## Selection Sort
Now you will move on to the next sorting algorithm.

{{< code-action "Create a method called `selectionSort`" >}}   

**Parameter:** an array of numbers          
**Return:** a sorted array of numbers    
1. Sorts the array
2. Everytime a swap is required, it should use `swap()` 

You should be able to use the same starter code to test your `selectionSort`

{{< expand "Answer using swap()" >}}
```java
method selectionSort(ARRAY)
  loop I from 0 to ARRAY.length-1
     MIN = ARRAY[I] 
     MIN_INDEX = I
     loop J from I to ARRAY.length-1 
       if ARRAY[J]<MIN then
          MIN = ARRAY[J]
          MIN_INDEX = J
       end if
     end loop
     ARRAY = swap(I, MIN_INDEX, ARRAY)
  end loop
  return ARRAY
end method
```
{{< /expand >}}

{{< expand "Answer without swap()" >}}
```java
method selectionSort(ARRAY)
  loop I from 0 to ARRAY.length-1
     MIN = ARRAY[I] 
     MIN_INDEX = I
     loop J from I to ARRAY.length-1 
       if ARRAY[J]<MIN then
          MIN = ARRAY[J]
          MIN_INDEX = J
       end if
     end loop
     TEMP = ARRAY[I]
     ARRAY[I] = ARRAY[MIN_INDEX]
     ARRAY[MIN_INDEX] = TEMP
  end loop
  return ARRAY
end method
```
{{< /expand >}}
## Deliverables

{{< deliverables >}}
Paste your code in your Exercises lab log
<!-- 
Complete the [Exit Ticket](https://docs.google.com/forms/d/e/1FAIpQLScgcYSCyOc-9A60yAu78deLLUhKunf9wPlE_D1hJHy12Hzq1Q/viewform?usp=sf_link) -->

{{< /deliverables >}}

## Extensions

### Sort by Alphabetical Order

{{< code-action >}} **Create a helper method that can tell which word should come first alphabetically, and returns `true`/`false`. Then adapt one of your sorting algorithms to use this helper method**

### Sort by Textbook ordering 
Textbooks are ordered in a strange way. The numbers in a textbook chapter might be numbered like this:

```shell
[1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14]
```

{{< code-action >}} **Create a helper method that can tell which number is higher and return `true`/`false`. Then adapt one of your sorting algorithms to use this helper method.**

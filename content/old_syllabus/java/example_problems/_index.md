---
title: "Example Problems"
weight: 40
bookFlatSection: false #this makes it so this page isn't seen
# bookCollapseSection: true
# draft: true
---
# Example Problems

### Rental/Car Class [14]

A car rental company has offices in cities in Spain and Portugal. It manages its cars as a large, unsorted collection of rental objects that is accessed by a Java program.

The following UML diagram describes the current main Rental class. Fuel type and transmission type were chosen to be Boolean because they have two choices: petrol or diesel for fuel type, and manual or automatic for transmission type.

The brand and the model of the car are stored together as one string brandModel. Typically the company has many cars of the same brand and model.

{{< figure src="images/courses/java/rental_class_uml.png" width="70%">}}


**(a) Outline the general nature of an object. [2]**

---

{{< expand "Answer" >}}
Award [2 max].
* an object is an abstract entity;
* consists of data/attributes/properties;
* has methods/behaviour/actions on (that data/attributes/properties);
* An object occupies memory / has a lifecycle;
* An object is an instance of a class;
{{< /expand >}}


---

**(b) State one mutator method to be included in the class Rental. [1]**

{{< expand "Answer" >}}
Award [1 max].
Any instance variable with the prefix 'set' and ( ) such as:
* setNumberPlate(String numberPlate);
* setPricePerDay(double pricePerDay);
* setRentalClass(char rentalClass);
* setYear(int year);
* SetBrandModel(String brandModel);
* SetFuelType(boolean fuelType);
* SetTransmissionType(boolean transmissionType);

Note: Ignore the parameter and semi colon.
{{< /expand >}}

---


**(c) Construct the code for the accessor method getBrandModel(). [3]**

{{< expand "Answer" >}}
Award [3 max].
* public method;
* return type;
* correct return;  // keyword 'this' is not required
Example answer:
```java
public String getBrandModel()
{
    return this.brandModel;
}
```
{{< /expand >}}

---

**(d) Outline one purpose of a default constructor. [2]**

{{< expand "Answer" >}}
Award [2 max].

* A default constructor instantiates an object of a class;
* with null or default values (for the instance variables/attributes);
* without using any parameter;
{{< /expand >}}

---

**(e) Outline one change that needs to be made to class Rental due to this development. [2]**

{{< expand "Answer" >}}
Award [2 max].

* fuelType can no longer be boolean;
* but could be another datatype such as int/char/String (or similar) to represent the distinct values;
* for 4 different types of fuel;
{{< /expand >}}

---

**(f) State the relationship between Rental and Car. [1]**

{{< expand "Answer" >}}
Award [1 max].

* Car inherits Rental (allow Car 'is a' Rental or Car extends Rental or Car is a subclass of Rental.);
* Note: Accept 'inheritance'.
{{< /expand >}}

---

**(g) Construct the code for the class Car without having to duplicate all the attributes and methods from the class Rental. The default constructor of the class Rental should be overridden to also assign the value 4 to numberOfDoors. No other constructors are required. [3]**

{{< expand "Answer" >}}
Award [3 max].

* Award [1] for (public) class Car extends Rental;
* Award [1] for declaring numberOfDoors;
* Award [1] for numberOfDoors being set to 4 within the constructor;
* Award [1] for correct getter / setter method; // keyword 'this' is not required

Example answer:

```Java
public class Car extends Rental
{
    private int numberOfDoors;
    public Car()
    {
        super();
        this.numberOfDoors = 4;
    }
    public int getNumberOfDoors()
    {
        return this.numberOfDoors;    // ‘this’ not required
    }
    public void setNumberOfDoors (int n)
    {
        this.numberOfDoors = n;      // accept without ‘this’ also
    }
}
```
{{< /expand >}}


---


### Cars array [15]

**(a) Define the term parameter variable. [2]**

{{< expand "Answer" >}}
Award [2 max].

* the value/variable passed when the function/method is called;
* passed as a value or as a reference;
* is found in the parameter list of the method definition/signature;
{{< /expand >}}

---

**(b) Construct the code for the method `findBrandModels()` that will take the array `allCars` as a parameter. It must return a `Car` array that contains every `brandModel` that is available without duplication. [8]**

{{< expand "Answer" >}}
Award [8 max].

* Award [1] for correct method signature (excluding the return type);
* Award [1] for instantiating a `Car` array (`result`) of size 100;
* Award [1] for loop through `allCars` with length condition;
* Award [1] for setting and resetting a variable (`found` or similar), inside the outer loop;
* Award [1] for the loop that checks the uniqueness;
* Award [1] for checking for a null pointer exception in at least one loop;
* Award [1] for correct test (use of `equals()` and `==`);
* Award [1] for correctly adding the `Car` when not found in `result`;
* Award [1] for returning the correct result - correct array of objects of `Car`;

Note: Do not accept `ArrayList` but allow FT for MP 5 and 7. The question specifically asks for an array.

Example answer 1:

```java
public Car[] findBrandModels(Car[] allCars)
{
  Car[] result = new Car[100];
  int i = 0;
  while ((i < allCars.length) && (allCars[i] != null))
  {
     int j = 0;
     boolean found = false;
     while ((j < 100) && (result[j] != null) && (!found))
     {
        if (result[j].getBrandModel().equals(allCars[i].getBrandModel()))
        {
            found = true;
        }
        j++;
     }
     if (!found)
     {
         result[j] = allCars[i];
     }
     i++;
   }
  return result;
}
```

Example answer 2:

```java
public Car[] findBrandModels(Car[] allCars)
{
   int count = 0;
   Car[] result = new Car[100];
   for (int i = 0; i < allCars.length && allCars[i] != null; i++)
   {
       boolean found = false;
       for (int j = 0; j < i; j++)
       {
           if (allCars[i].getBrandModel().equals(allCars[j].getBrandModel()))
           {
                found = true;
           }
       }
       if (!found)
       {
          result[count++] = allCars[i];
       }
   }
   return result;
}
```

Example answer 3:

```java
public Car[] findBrandModels(Car[] allCars)
{
    Car[] brand = new Car[100];
    int index = 0;
    for (int i = 0; i < allCars.length && allCars[i] != null; i++)
    {
        boolean found = false;
        String bm = allCars[i].getBrandModel();
        for (int j = 0; j < index; j++)
        {
           if (brand[j] != null)
           {
               if (brand[j].getBrandModel().equals(bm))
                   found = true;
           }
        }
        if (!found)
        {
            brand[index++] = allCars[i];
        }
    }
    return brand;
}
```
{{< /expand >}}

---

A customer wants to see which different types of cars are available. The criteria are it must be a petrol car with automatic transmission and cost less than 35 euros per day.

**(c) Without writing code, outline the steps needed for a method to perform this query and present the results to the customer. [5]**

{{< expand "Answer" >}}
Award [5 max].

Example answer 1:
* create a result array to store the return value of `findBrandModels()`;
* iterate through the result array to check individual `Car` object;
* if the `Car` object does not fulfil all three criteria then remove this `Car` object from result / make this `Car` object null;
* iterate (or sort/search) through the result array;
* to output the `Car` objects that are not null / return the result array;

Example answer 2:
* create a result array to store the return value of `findBrandModels()`;
* iterate through the result array to check individual `Car` object;
* if an object fulfils the three conditions then copy the car object in another array (`desiredCars`);
* iterate (or sort/search) through the other array (`desiredCars`);
* to output / return the (`desiredCars`) array;

Example answer 3:
* create a modified version of `findBrandModels()`;
* that takes additional parameters that specify desired features;
* a car would only be added to the result array if the three tests were met;
* create a result array to store the return value of modified `findBrandModels()`;
* iterate through the result array to output the cars / return the result array;

Example answer 4:
* create a result array to store the return value of `findBrandModels()`;
* iterate through the result array to check individual `Car` object;
* if the `Car` object does not fulfil all three criteria, then skip this `Car` object;
* if the `Car` object meets the three criteria, then output the `Car` object;

Example answer 5:
* create `desiredCars` array;
* iterate through the result of all `findBrandModels()`;
* if an object fulfils the three conditions;
* copy the car object in the array `desiredCars`;
* to output / return the (`desiredCars`) array;

Note:
* Award [3 max] - If the response doesn’t use the `findBrandModels()`. For example, if the response only focuses on using `if` conditions to check three specific requirements for `Car` objects and present (either output or return) them (including duplicates) to the customer.
{{< /expand >}}




---
title: "OOP Review" 
bookFlatSection: false
weight: 9
# bookCollapseSection: true
# draft: true
---

# OOP Review

---

## BankAccount

**Refer to the following class to answer the questions on your worksheet.**

{{< expand "Worksheet Questions" >}}

1. 
> a) Explain why the modifier `static` is used in the declaration for `interestRate` and `nextAccountNumber` in the `BankAccount` class.     
> b) Outline why a `static` method cannot modify `instance variables`.

2. 
> a) Outline how *access modifiers* and other strategies have been used to ensure that accounts cannot be overdrawn *(have a negative balance)*.     
> b) Identify the OOP principle that was used to ensure this safety.

3. Construct code to:
> a) Create two new bank accounts, A and B    
> b) Deposit money into A      
> c) Transfer some of the money from A to B     

4. All Java objects inherit default functionality for `toString(). This default behavior prints out the *class name @ hash code* for the object, for example:
```java
System.out.println(myBankAccount)
>>> BankAccount@214c265e
```
However, this is not what happens when one of our BankAccounts is printed.
> a) State what the output will be when you run this code.

*Assume B is your bank account from the previous question*   
```java
System.out.println(B)
```

> b) Identify the OOP principle and the specific process used to create this behavior.


{{< /expand >}}

```java
import java.io.*;
import java.util.*;

public class BankAccount {
    private static double interestRate = 5.00; // Static variable
    private static int nextAccountNumber = 1001; // Static variable
    private String name;
    private double balance;
    private int accountNumber;

    public BankAccount(String name) {
        this.name = name;
        this.balance = 0;
        // Use the class name as a prefix to access the static variables
        this.accountNumber = BankAccount.nextAccountNumber;
        BankAccount.nextAccountNumber++;
    }

    public void deposit(double amount) {
        this.balance += amount;
    }

    public boolean withdraw(double amount) {
        if (this.balance < amount) {
            return false;
        }
        this.balance -= amount;
        return true;
    }

    public boolean transfer(double amount, BankAccount recipient) {
        if (this.withdraw(amount)) {
            recipient.deposit(amount);
            return true;
        }
        return false;
    }

    public void applyInterest() {
        // balance is an instance variable, interestRate is a static variable
        this.balance += this.balance * (BankAccount.interestRate / 100);
    }

    public double getBalance() {
        return this.balance;
    }

    public String getName() {
        return this.name;
    }

    public String toString() {
        return "Account " + this.accountNumber + ": " + this.name + " has balance $" + this.balance);
    }

    public static BankAccount find(BankAccount[] accounts, String name) {
        BankAccount foundAccount = null;
        boolean found = false;
        for (int i = 0; i < accounts.length && !found; i++) {    
            if (accounts[i].getName().equals(name)) {
                foundAccount = accounts[i];
                found = true;
            }
        }
        return foundAccount; // returns the account if found, otherwise null
    }
}
```

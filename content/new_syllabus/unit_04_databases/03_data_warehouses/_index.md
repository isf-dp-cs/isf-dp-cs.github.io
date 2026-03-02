---
title: "03. Data Warehouses" 
bookFlatSection: false
weight: 1
# bookCollapseSection: true
draft: true
---

# Data Warehouses

In this lab we will do a practical exercises to illustrate the 6 principles of Data Warehouses.

---
## Syllabus Topics [HL]
- **A3.4.2** Explain the primary objectives of data warehouses in data management and business intelligence. (HL only)

<!-- ## Key Vocabulary

| Word | Definition |
| :--- | :--- |
| **Normalization** | XX  |
| **First Form (1NF)** | - has a primary key - includes no duplicate attributes   |
| **Second Form (2NF)** | XX  |
| **Second Form (3NF)** | XX  |
| **Atomic** | XX  |
| **Unique Identification** | XX  |
| **Functional Dependencies** | XX  |
| **Partial-key Dependencies** | XX  |
| **Non-key/transitive Dependencies** | XX  | -->


---

## [0] Setup

{{< code-action "Go to your" >}} `dpcs/unit04_databases` **folder**.

```shell
cd ~/desktop/dpcs/unit04_databases
```

{{< code-action "Create a new folder for today's lab." >}} Be sure to replace `yourgithubusername` with your actual username. 
```shell
mkdir lab_data_warehouses
```

```shell
cd lab_data_warehouses
```

--- 


## [1] Append-Only Data 

{{< code-action "Run the following SQL to create a table, insert a sale with an error (amount entered as 100, but should be 120), and then append a correction" >}}


```sql
CREATE TABLE dw_sales_log (
    transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT,
    sale_date DATE,
    amount REAL,
    entry_type TEXT
);
```

```sql
-- Original incorrect entry
INSERT INTO dw_sales_log (product, sale_date, amount, entry_type)
VALUES ('Headphones', '2024-03-01', 100.00, 'Original');
```

**The Fix:** Instead of an `UPDATE`, we append corrections:
```sql
-- Reverse the error (Negative entry)
INSERT INTO dw_sales_log (product, sale_date, amount, entry_type)
VALUES ('Headphones', '2024-03-01', -100.00, 'Correction');
```

```sql
-- Insert the correct value
INSERT INTO dw_sales_log (product, sale_date, amount, entry_type)
VALUES ('Headphones', '2024-03-01', 120.00, 'Correction');
``` 

**Verify the Audit Trail:** 
```sql
SELECT * FROM dw_sales_log;
SELECT SUM(amount) as final_correct_total FROM dw_sales_log WHERE product = 'Headphones';
```


> **✏️Why is it safer to add corrections rather than overwriting the original data when analysing financial history?** 

---

## [2] Subject-Oriented Data
**Concept:** Operational databases are organised by **process** (e.g., "Shipping System"), whereas Data Warehouses are organised by **subject** (e.g., "Customer", "Sales"). We ignore operational details like `shipping_truck_id` that aren't useful for high-level analysis.

Create a clean Subject-Oriented table focusing only on the "Customer" subject:

```sql
CREATE TABLE subject_customer_analysis (
    customer_id INTEGER,
    customer_name TEXT,
    total_lifetime_spend REAL,
    customer_segment TEXT
);

-- Insert aggregated data simulating loading from an operational system
INSERT INTO subject_customer_analysis VALUES (101, 'Alice Smith', 5000.00, 'VIP');
INSERT INTO subject_customer_analysis VALUES (102, 'Bob Jones', 150.00, 'Standard');
``` 

**Analysis:** Run a query to analyse "Customer Segments":
```sql
SELECT customer_segment, COUNT(*) as count, AVG(total_lifetime_spend) as avg_spend
FROM subject_customer_analysis
GROUP BY customer_segment;
```

> **Reflection:** How does stripping away "operational" data (like tracking numbers or truck IDs) make business intelligence easier?

---

## [3] Integrated Data 
**Concept:** Data often comes from multiple sources with different formats (e.g., Dollars vs Pounds). A Data Warehouse integrates this into a consistent format.

Simulate two different sources:
* **Source 1 (US Store):** Uses Dollars.
* **Source 2 (UK Store):** Uses Pounds.

```sql
CREATE TABLE source_us_store (id INTEGER, item TEXT, cost_usd REAL);
INSERT INTO source_us_store VALUES (1, 'Keyboard', 50.00);

CREATE TABLE source_uk_store (id INTEGER, item TEXT, cost_gbp REAL);
INSERT INTO source_uk_store VALUES (99, 'Keyboard', 40.00);
``` 

**The Integration Query:** Use `UNION` to standardise to USD (assuming 1.25 exchange rate).

```sql
SELECT item, cost_usd, 'US_Store' as source FROM source_us_store
UNION ALL
SELECT item, (cost_gbp * 1.25) as cost_usd, 'UK_Store' as source FROM source_uk_store;
``` 

> **Reflection:** If you didn't "Integrate" currency before saving it, what would happen to your "Total Global Revenue" report? 

---

## [4] Time-Variant Data
**Concept:** Operational DBs show the "Current State," while Data Warehouses store historical data to analyse trends over time.

Create a historical sales table:

```sql
CREATE TABLE time_variant_sales (
    id INTEGER PRIMARY KEY,
    product TEXT,
    sale_date DATE,
    revenue REAL
);

INSERT INTO time_variant_sales VALUES (1, 'Laptop', '2023-12-01', 1000);
INSERT INTO time_variant_sales VALUES (2, 'Laptop', '2024-01-01', 1200);
INSERT INTO time_variant_sales VALUES (3, 'Laptop', '2024-02-01', 1100);
``` 

**Analyse the Trend:** 
```sql
SELECT strftime('%Y-%m', sale_date) as sales_period, SUM(revenue) as total
FROM time_variant_sales
GROUP BY sales_period
ORDER BY sales_period;
``` 

> **Reflection:** Why is the `sale_date` column the most critical column in a Data Warehouse compared to a standard database? 

---

## [5] Non-Volatile Data
**Concept:** In operational databases, data is "volatile" (changeable). In a Data Warehouse, it is **Non-Volatile**; once loaded, it is a snapshot of history that does not change.

**Scenario:** A customer moved from London to Paris. Overwriting the city (operational approach) creates false historical facts. The Data Warehouse keeps the old record.

```sql
CREATE TABLE customer_history (
    customer_name TEXT,
    city TEXT,
    active_start_date DATE,
    active_end_date DATE -- NULL means currently active
);

-- Original Record (kept even after move)
INSERT INTO customer_history VALUES ('John Doe', 'London', '2023-01-01', '2023-12-31');
-- New Record (the move)
INSERT INTO customer_history VALUES ('John Doe', 'Paris', '2024-01-01', NULL);
```

**Query History:** Check where John lived in June 2023:
```sql
SELECT * FROM customer_history
WHERE customer_name = 'John Doe'
AND '2023-06-01' BETWEEN active_start_date AND active_end_date;
```

> **Reflection:** Why is it important to know a sale happened in London, even though the customer now lives in Paris?

---

## [6] Optimised for Query Performance 
**Concept:** Data Warehouses are massive. We use **Summary Tables** (aggregations) to speed up reading instead of scanning millions of rows repeatedly.

Create a table for fast reporting:

```sql
CREATE TABLE fast_monthly_summary (
    month TEXT PRIMARY KEY,
    total_revenue REAL
);

-- Populate once (the "heavy lifting" during nightly load)
INSERT INTO fast_monthly_summary (month, total_revenue)
SELECT strftime('%Y-%m', sale_date), SUM(revenue)
FROM time_variant_sales
GROUP BY strftime('%Y-%m', sale_date);
``` 

**The Fast Query:** 
```sql
SELECT * FROM fast_monthly_summary;
``` 

---

## [7] Deliverables


{{< deliverables "Once you finish the lab, be sure to complete this step:" >}}

**📋 Update Syllabus Checklist:** Go to your **Syllabus Content Checklist** in your Google Drive and update it accordingly.

{{< /deliverables >}}


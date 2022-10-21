# MySQL - Basics

- [MySQL - Basics](#mysql---basics)
  - [1. Download MySQL and PopSQL](#1-download-mysql-and-popsql)
  - [2. MySQL Data Types](#2-mysql-data-types)
  - [3. Tables](#3-tables)
    - [3.1 Create and Drop a Table](#31-create-and-drop-a-table)
    - [3.2 Insertion](#32-insertion)
    - [3.3 Update](#33-update)
    - [3.4 Delete](#34-delete)
    - [3.5 Query](#35-query)

## 1. Download MySQL and PopSQL

- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- 用 PopSQL 控制 database → [PopSQL](https://popsql.com/)
- macOS 登入 → [【DB.MySQL】在 Mac 如何啟動 MySQL](https://www.itread01.com/p/1194830.html)

## 2. MySQL Data Types

- Common Data types
  ```sql
  -- common SQL data types
  INT
  DECIMAL(p, s) -- p: total digits, s: digits after the dot
  VARCHAR(size) -- characters
  DATE -- 'YYYY-MM-DD'
  ```
- Other MySQL Data Types → [W3C SQL Datatypes](https://www.w3schools.com/sql/sql_datatypes.asp)

## 3. Tables

### 3.1 Create and Drop a Table

新增與刪除 table

**Syntax**

| name             |
| ---------------- |
| `create table`   |
| `DROP`           |
| `DESCRIBE`       |
| `DEFAULT`        |
| `AUTO_INCREMENT` |

**Example**

```sql
create table employees(
    employeeID int PRIMARY key AUTO_INCREMENT,
    employeeName varchar(25) NOT NULL,
    age int,
    salary int DEFAULT(1500)
);

-- 刪除表格
-- DROP TABLE employees;

DESCRIBE employees;
```

### 3.2 Insertion

將資料插入原有 table

**Syntax**

| name          |
| ------------- |
| `INSERT INTO` |
| `VALUES`      |

**Example**

兩種 insert 方式

```sql
-- 1
INSERT INTO employees VALUES(100, "Josh", 35, 3500);
-- 2
INSERT INTO employees(employeeName, age, salary) VALUES ("Mike", 40, 4000);
```

看 insertion table 的方式

```sql
SELECT * FROM employees;
```

### 3.3 Update

更新 table 中的資料

**Syntax**

| name     |
| -------- |
| `UPDATE` |
| `SET`    |
| `WHERE`  |

**Example**

兩種 update 的方式

```sql
-- 1
UPDATE employees  SET employeeID = 107 WHERE employeeName = "Oliver Perez"
-- 2
UPDATE employees SET salary = 2000 WHERE salary = 1500
```

### 3.4 Delete

刪除特定資料

```sql
DELETE FROM employeses WHERE employID = 107;
```

刪除全部資料

```sql
DELETE FROM employees;
```

### 3.5 Query

查詢特定資料

**Syntax**

| name     |
| -------- |
| SELECT   |
| FROM     |
| WHERE    |
| LIMIT    |
| ORDER BY |
| DESC     |

**Example**

```sql
SELECT *
FROM employees
ORDER BY age DESC, salary;
LIMIT 3;

SELECT *
FROM employees
WHERE salary >= 1500 AND age < 35;
```

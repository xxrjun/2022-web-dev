# MySQL - Basics

# 1. Download MySQL and PopSQL

- MySQL Community Server → [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
- 用 PopSQL 控制 database → [https://popsql.com/](https://popsql.com/)
- macOS 登入 → [https://www.itread01.com/p/1194830.html](https://www.itread01.com/p/1194830.html)

# 2. MySQL Data Types

- Common Data types
  ```sql
  -- common SQL data types
  INT
  DECIMAL(p, s) -- p: total digits, s: digits after the dot
  VARCHAR(size) -- characters
  DATE -- 'YYYY-MM-DD'
  ```
- Other MySQL Data Types → [https://www.w3schools.com/sql/sql_datatypes.asp](https://www.w3schools.com/sql/sql_datatypes.asp)

# 3. Tables

### 3.1 Create and Drop a Table

| create table   |
| -------------- |
| DROP           |
| DESCRIBE       |
| DEFAULT        |
| AUTO_INCREMENT |

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

| INSERT INTO |
| ----------- |
| VALUES      |

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

| UPDATE |
| ------ |
| SET    |
| WHERE  |

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

| SELECT   |
| -------- |
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

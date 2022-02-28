# Databases

* [**MySQL**](https://github.com/xxrjun/2022-Web-Develop/blob/main/notes/database/database/MySQL.md)
* [**MongoDB**](https://github.com/xxrjun/2022-Web-Develop/blob/main/notes/database/database/MongoDB.md)
* [**Mongoose**](https://github.com/xxrjun/2022-Web-Develop/blob/main/notes/database/database/Mongoose.md)

# What is DBMS ?

- Stands for Database Management System.
- It helps us manage our database.

# C.R.U.D

Create, Read, Update, Delete

# Databases in the world

- There are many different popular databases in the world.
- Which one is the best? It depends.

### What is Relational Databases ?

- A relational database organizes data into tables which can be **linked**—**or *related**—*
based on data common to each.
- More → [https://www.ibm.com/cloud/learn/relational-databases](https://www.ibm.com/cloud/learn/relational-databases)

### SQL and NoSQL

- Databases in the world can be split into two parts
- SQL is a relational database.
- NoSQL is not a relational database.

### SQL vs NoSQL

- **SQL** 都是使用 **Table** 儲存資料的 Relational DB.
    - 高穩定性、高連結性
    - 搜尋法: Sequential search (Time Complexity: O(n))
- **NoSQL** 則是使用 **Object Data Type** 儲存資料.
    - 高伸縮性、高自由度
    - 搜尋法: Hash Function (Time Complexity: O(1))
- Sheet

![sql_vs_nosql.png](https://github.com/xxrjun/2022-Web-Develop/blob/main/notes/database/database/sql_vs_nosql.png)

# Keys

| Primary Key | 每個表格一定要有一個 primary key，定義了表格的獨特性 |
| --- | --- |
| Foreign Key | 對應到外部的 primary key |
| Natural Key | a primary key that has meaning outside the DB |
| Surrogate Key | a primary key that has no meaning outside the DB |
| Composite Key | 有時需要多項合在一起才能稱作 key |

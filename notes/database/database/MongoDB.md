# MongoDB

M001: MongoDB Basics [https://university.mongodb.com/courses/M001/about](https://university.mongodb.com/courses/M001/about)

# 1. MongoDB Intro

---

- **MongoDB is NoSQL DB.**
- Mongo DB Community Server Download → [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- MongoDB docs → [https://docs.mongodb.com/manual/](https://docs.mongodb.com/manual/)
- MacOS → [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- **MongoDB 使用 BSON 儲存資料** (link → [https://www.mongodb.com/json-and-bson](https://www.mongodb.com/json-and-bson))
- JSON vs BSON
    
    
    |  | JSON | BSON |
    | --- | --- | --- |
    | Encoding | UTF-8 String |  |
    | Data Support | String, Boolean, Number, Array | String, Boolean, Number (Integer, Float, Long, Decimal128...), Array, Date, Raw Binary |
    | Readability | Human and Machine | Machine Only |

# 2. Document versus Collection

---

## 2.1  Document

A way to organize and store data as set field-value pairs

## 2.2  Collection

An organized store of documents in MongoDB, usually with common fields between documents.

# 3. MongoDB Atlas

---

- ***Replica Set*** - a few connected machines that store the same data to ensure that if something happens to one of the machines the data will remain intact. Comes from the word replicate - to copy something.
- ***Instance*** - a single machine locally or in the cloud, running a certain software, in our case it is the MongoDB database.
- ***Cluster*** - group of servers that store your data.

# 4. MongoDB CRUD (v4.2)

---

**[MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/#mongodb-crud-operations)**

## 4.1  Insertion

- `**insertOne()**` : ****inserts a *single* document into inventory collection.
    
    ```bash
    db.inventory.insertOne(
       { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
    )
    ```
    
- `**insertMany()**` : can insert *multiple*  documents into a collection. Pass an array of documents to the method.
    
    ```bash
    db.inventory.insertMany([
       { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
       { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
       { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
    ])
    ```
    

## 4.2  Find

- Select All Documents in inventory collection
    
    ```bash
    db.inventory.find( {} )
    ```
    
- This operation corresponds to the following SQL statement
    
    ```sql
    SELECT * FROM inventory
    ```
    
- `**find()`** 找尋特定
    
    ```bash
    db.inventory.find( { status: "D" } )
    ```
    

## 4.3  Update

- `**updateOne()**` : 只更新 inventory collection 裡第一個符合條件的
    
    ```bash
    db.inventory.updateOne(
       { item: "paper" },
       {
         $set: { "size.uom": "cm", status: "P" },
         $currentDate: { lastModified: true }
       }
    )
    ```
    
- `**updateMany()**` : 更新所有 inventory collection 裡符合條件的
    
    ```bash
    db.inventory.updateMany(
       { "qty": { $lt: 50 } },
       {
         $set: { "size.uom": "in", status: "P" },
         $currentDate: { lastModified: true }
       }
    )
    ```
    

## 4.4  Delete

- Delete All Documents in inventory collection
    
    ```bash
    db.inventory.deleteMany({})
    ```
    
- `**updateOne()**` : 只刪除 inventory collection 裡第一個符合條件的
    
    ```bash
    db.inventory.deleteOne( { status: "D" } )
    ```
    
- `**updateMany()**` : 刪除所有 inventory collection 裡符合條件的
    
    ```bash
    db.inventory.deleteMany({ status : "A" })
    ```
    

# 5. **Comparison Query Operators**

---

| Name | Description |
| --- | --- |
| $eq | Matches values that are equal to a specified value. |
| $gt | Matches values that are greater than a specified value. |
| $gte | Matches values that are greater than or equal to a specified value. |
| $in | Matches any of the values specified in an array. |
| $lt | Matches values that are less than a specified value. |
| lte | Matches values that are less than or equal to a specified value. |
| ne | Matches all values that are not equal to a specified value. |
| nin | Matches none of the values specified in an array |
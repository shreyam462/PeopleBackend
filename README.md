# Node.js Project with MongoDB Atlas Integration

This project demonstrates a Node.js application integrated with MongoDB Atlas. Follow the steps below to set up the database, populate it with initial data, and run the server.

---

## **Prerequisites**
1. [Node.js](https://nodejs.org/) installed on your machine.
2. A MongoDB Atlas account and a database cluster.
3. The `dbURI` variable in `server.js` and `populate.js` set to your MongoDB Atlas connection string.

---

## **Setup Instructions**

### 1. **Install Dependencies**
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

---

### 2. **Configure MongoDB Atlas**
   Ensure the `dbURI` variable in `server.js` and `populate.js` set to your MongoDB Atlas connection string.
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```
   Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB credentials.

---

### 3. **Populate the Database**
   Use `populate.js` to initialize the database with sample data:
   ```bash
   node populate.js
   ```
   This script connects to MongoDB, clears existing data, and populates it with initial entries.

---

### 4. **Run the Server**
   Start the server using `server.js`:
   ```bash
   node server.js
   ```
   By default, the server listens on `http://localhost:3000`.

---

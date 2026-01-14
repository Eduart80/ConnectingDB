require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
const { MongoClient } = require('mongodb');

app.use(express.json())

// DB connection start
const uri = process.env.MONGO_DB
const client = new MongoClient(uri);

async function runGetStarted() {
  try {
    // Connect the client to the server
    await client.connect()
    // Establish and verify connection
    await client.db('wine').command({ ping: 1 })
    console.log("Connected successfully to MongoDB!")
  
  } catch (error) {
    res.send(500).json({ message: "Failed to connect to the database." })
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}
runGetStarted().catch(console.dir)


app.get('/',(req,res)=>{
    res.send("DB and API is working, connection established!")
})




app.listen(PORT,()=>{console.log(`Server Up and running on http://localhost:${PORT}`);
})
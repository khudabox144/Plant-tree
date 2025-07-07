const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//plant-tree-server
//FoGlr0tWiOpcCbap

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cnyluzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    // await client.connect();

    //creating database and collection

    const myDB = client.db("myDB");
    const myCollection = myDB.collection("plants");

    app.get("/", (req, res) => {
      res.send("hey nigga");
    });

    app.get("/plants", async (req, res) => {
      const doc = await myCollection.find().toArray();
      res.send(doc);
    });

    app.post("/plants", async (req, res) => {
      const doc = req.body;
      const result = await myCollection.insertOne(doc);
      res.send(result);
    });

    app.delete("/plants/:id", async (req, res) => {
      const result = await myCollection.deleteOne({
        _id: new ObjectId(req.params.id), // Fix: Object → ObjectId
      });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("server is running on port ", port);
});




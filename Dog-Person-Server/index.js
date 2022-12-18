const express = require('express')
const cors = require('cors') // cross origin resource sharing
const mongodb = require('mongodb') // mongo db
const { MongoClient } = mongodb // to connect mongodb
const app = express() // backend in a variable
app.use(cors()) // using cors
require('dotenv').config() // configuring dot env
app.use(express.json())
const port = 4000;

const url = "mongodb+srv://WEBTOON:NTDNTDNTD@cluster0.wxtmufn.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const objectId = mongodb.ObjectId;

async function server() {
    try {
        await client.connect()
        const database = client.db('DogPerson')
        const productCollection = database.collection('product');
        const reviewCollection = database.collection('review');
        const users = database.collection('users');

        //crud
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({})
            const result = await cursor.toArray();
            res.json(result)
        })
        app.get('/reviews/:id', async (req, res) => {
            const id = req.params.id;
            const filter = {
                productID: objectId(id)
            }
            const cursor = reviewCollection.find(filter);
            const result = await cursor.toArray();
            res.json(result)
        })
        app.get('/login', async (req, res) => {
            const { email, password } = req.query;
            const filter = { email, password };
            const result = await users.findOne(filter);
            res.json(result ? true : false);

        })
        app.get('/users/:email', async (req, res) => {
            const { email } = req.params;
            const result = await users.findOne({ email: email })
            console.log(result);
            res.json(result._id ? false : true);
        })
        app.post('/users', async (req, res) => {
            const data = req.body;
            const result = await users.insertOne(data)
            res.json(result)
        })
    }
    finally {

    }

}
server().catch(console.dir);

app.get('/', (req, res) => {
    res.json('Hello world')
})
app.listen(port, () => {
    console.log(port);
})
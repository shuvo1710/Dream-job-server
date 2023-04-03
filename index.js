const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
require('dotenv').config();


const port = process.env.PORT || 5000;

const app = express();


// middleware
app.use(cors());
app.use(express.json());

// dreamJob
// 2tam8A8ylRgOy8o6



const uri = `mongodb+srv://dreamJob:2tam8A8ylRgOy8o6@cluster0.vhfoyp8.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try {
        // await client.connect();

        const categoryCollection = client.db('dreamJob').collection('category');

        app.get('/category', async (req, res) => {

                const query = {};
                const result = await categoryCollection.find(query).toArray();
                res.send(result);
        });

        app.get('/category/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const booking = await categoryCollection.findOne(query);
            res.send(booking);
        });


    } 
    finally {

    }
}
run().catch(console.log);



app.get('/', async (req, res) => {
    res.send('dream job server is running');
})

app.listen(port, () => console.log(`dream job running on ${port}`))
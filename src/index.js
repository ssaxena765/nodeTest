const express = require("express");
const app = express(); 
const quotes = require('./quotes.json');
const userRouter = require("./routes/userRoute");
const mongoose = require("mongoose");

app.use('/users', userRouter);

//const uri = "mongodb+srv://admin:admin@shashank0.0d3xg.mongodb.net/?retryWrites=true&w=majority&appName=Shashank0";

mongoose.connect('mongodb+srv://admin:admin@shashank0.0d3xg.mongodb.net/?retryWrites=true&w=majority&appName=Shashank0').then(()=>{
    console.log("Connected to MongoDB");
    app.listen(5000, () =>{
        console.log("Server is running on port 5000");
    });
}).catch((error)=>{
    console.log(error);
});

// const uri = "mongodb+srv://admin:admin@shashank0.0d3xg.mongodb.net/?retryWrites=true&w=majority&appName=Shashank0";
// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);
 





app.get('/', (req,res)=>{
    res.send('Hello World!');
});

// app.get('/quote', (req,res)=>{
//     res.status(200).json(quotes);
// });

// app.get('/random', (req,res)=>{
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     res.status(200).json(quotes[randomIndex]);
// });



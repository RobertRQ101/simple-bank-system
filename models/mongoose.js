const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { 'useNewUrlParser': true, 'useFindAndModify': false, 'useUnifiedTopology': true, 'useCreateIndex': true }, (err) => {
    if (err) return console.log(err)
    console.log('[mongoose service ... OK]')
})

// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("Account").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err)
     {
       return console.log('Not able to connect');
     }
      console.log('connected to MongoDb');


      // db.collection('Todos').find({
      //    _id : new ObjectID('5b97bd02f0e26a0e2cc73687')
      //   }).toArray().then((docs) => {
      //     console.log(JSON.stringify(docs, undefined, 2));
      // }, (err) => {
      //   console.log('Error');
      // });

    //   db.collection('Todos').find().count().then((count) => {
    //         console.log('Count = ' + count);
    //   },(err) =>
    //    {
    //       console.log('Error');
    // });

    db.collection('Users').find({name : 'niti'}).toArray().then((docs) => {
          console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
      console.log('Error');
    });

      db.close();
});

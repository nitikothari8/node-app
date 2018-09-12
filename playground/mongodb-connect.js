const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err)
     {
       return console.log('Not able to connect');
     }
      console.log('connected to MongoDb');


      db.collection('Users').insertOne({
          name : 'niti',
          age : 20,
          location : 'rajkot'
      }, (err, result) => {
        if(err)
        {
          return console.log('Not Able to Insert ',err);
        }
        console.log(JSON.stringify(result.ops, undefined , 2));
      });

      db.close();
});

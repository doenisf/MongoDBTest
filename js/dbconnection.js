var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
var url = "mongodb+srv://test:Test123@cluster0.c8yqk.mongodb.net/<dbname>?retryWrites=true&w=majority"

/**
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Test 123", address: "Deine Mutter Strasse 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// Select one object attribute from the DB
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});

// Select one object from the DB
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { address: "Deine Mutter Strasse 37" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// Delete one object from the DB
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Deine Mutter Strasse 37" };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
}); 
*/

// Insert one object into the DB
MongoClient.connect(url, function(err, db) {
    if (err) {
        throw err;
    } else {
        var dbo = db.db("mydb");
        var myobj = {
            name: "Ion",
            geburtsdatum: "01.01.1997",
            username: "tabascoel"
        };
        dbo.collection("person").insertOne(myobj, function(err, res) {
            if(err) {
                throw err;
            } else {
                console.log(myobj.name + " insertet into person.")
                db.close();
            }
        });
    }

})
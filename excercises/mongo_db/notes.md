two types of database

        Relational        and       Non-Relational
      postgres, mySql                   mongoDb


{relational dataBase} 
_______________________________________________________
                    |          |         |          |
database breakdown =( database -> table => enteries )

enteries are seperated into rows on a table
with the colums as params {id, username, email}


{non-relational database}
takes a table structure and breaks them into objects 
you can think of collections as arrays 
and documents you can think of as objects
_____________________________________________________
database breakdown = ( database -> collections => documents )

so you can see non-relational database as series of "json files",
or a series of arrays containing a series of objects.

this is great to add flexability to your database.




{Installation}
do this from a Osx Terminal => {
check if brew is installed  $ brew -v
once checked install mongo  $ brew install mongodb
}
do this from a browser page => {
    install mongodb compass from ("https://www.mongodb.com/download-center/compass?jmp=hero")
}

{Add a single Document}
run in terminal after you already running mongo (brew services start mongodb, mongo) =>{
    to add a single document to  a collection first get into the root folder of the database you are working on  ||  create said database by the same method
    run the command         $ use {DATABASE_NAME}  <when you use this command fill in the {DATABASE_NAME} with the database name you are either rooting into or creating >
    then you want to create the collection and entery by  running this command $ db.candies.insertOne({name: "Snickers"})
    you will get an acknowledgement similair to this
        > db.candies.insertOne({name: "Snickers"})
                {
                    "acknowledged" : true,
                    "insertedId" : ObjectId("5bcdfd78ace170493ee24da4")
                }
        >


}
{Add many Documents}
db.collection.insertMany() {https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/#db.collection.insertMany}
    > db.candies.insertMany([{name: "twix"},{name: "reeses"},{name: "moon pies" }])
        {
            "acknowledged" : true,
            "insertedIds" : [
                ObjectId("5bce033aace170493ee24da5"),
                ObjectId("5bce033aace170493ee24da6"),
                ObjectId("5bce033aace170493ee24da7")
            ]
        }
    >

{get all docs from a collection}
db.collection.find() {https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find}
    > db.candies.find()
        { "_id" : ObjectId("5bcdfd78ace170493ee24da4"), "name" : "Snickers" }
        { "_id" : ObjectId("5bce033aace170493ee24da5"), "name" : "twix" }
        { "_id" : ObjectId("5bce033aace170493ee24da6"), "name" : "reeses" }
        { "_id" : ObjectId("5bce033aace170493ee24da7"), "name" : "moon pies" }
    > 


{get some docs}



{get one doc by id}



{update doc}
db.collection.update() {https://docs.mongodb.com/manual/reference/method/db.collection.update/} 


db.collection.updateOne() {https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#db.collection.updateOne}
    > db.candies.updateOne( {name: "Snickers"}, { $set: { type: "chocolate"} } ) 
        { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
    >
    > db.candies.find()
        { "_id" : ObjectId("5bcdfd78ace170493ee24da4"), "name" : "Snickers", "type" : "chocolate" }
        { "_id" : ObjectId("5bce033aace170493ee24da5"), "name" : "twix" }
        { "_id" : ObjectId("5bce033aace170493ee24da6"), "name" : "reeses" }
        { "_id" : ObjectId("5bce033aace170493ee24da7"), "name" : "moon pies" }
    >  
{update doc update many}
db.collection.updateMany()  {https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/}
      db.candies.updateMany( {}, { $set: {type: "chocolate"} } )
      



{delete document}
db.collection.delete()   {https://docs.mongodb.com/manual/reference/command/delete/index.html}
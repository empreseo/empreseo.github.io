const MongoClient = require("mongodb").MongoClient;
 
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://heroku_hrbmb9cs:Alex19052506@ds051893.mlab.com:51893/heroku_hrbmb9cs", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    console.log('success');
    client.close();
});
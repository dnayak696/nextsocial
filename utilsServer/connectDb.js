const mongoose = require('mongoose');

async function connectDb(){
    try{
       await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
       })

       console.log("MongoDb Connected")
    }catch(err){
            console.log(err);
            process.exit(1);
    }
}

module.exports = connectDb;
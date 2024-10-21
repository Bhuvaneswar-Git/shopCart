const mongoose = require('mongoose')

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('MangoDB connect to the host:'+con.connection.host)
    })
};

module.exports = connectDatabase;
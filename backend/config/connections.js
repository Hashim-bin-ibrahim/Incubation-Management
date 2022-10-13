const mongoos = require("mongoose");

const connect = async() => {
    mongoos.connect("mongodb+srv://hashim:CeePee1323@cluster0.ti0bbt4.mongodb.net/IncuManage?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }, function(err, res) {
      
        if (err) {
          return console.error('Error connecting to "%s":', err);
        }
        console.log('Connected successfully to port');
      });
};

module.exports = connect

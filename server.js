const mongoose = require('mongoose');
const app = require('./app.js');
const dbDataUpload = require('./configs/db_data.js')

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.dpithd6.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUser = 'likhileshexplorin';
const databasePassword = 'abcd1234';
const databaseName = 'Amazon-Backend';

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink).then(() => {
  console.log('-------- Database Connected --------');
//   dbDataUpload();
});

app.listen(1400,() => {
    console.log('----------- App Started -----------')
});
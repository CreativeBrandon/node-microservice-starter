const dotenv = require('dotenv').config()
const config = require('./config')
const app = require('./app')
const port = config.port;

app.listen(port, function(err){
    if(err){
        throw err;
    }
    console.log(`server is running on ${port}`);
})

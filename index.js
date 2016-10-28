const app = require('./app');
const port = process.env.Port || 3000;

app.listen(port, function(err){
    if(err){
        throw err;
    }
    console.log(`server is running on ${port}`);
})

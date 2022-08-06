const express  = require("express");
const app=express();//Creating instance for express app()
const dbConnect = require('./connectors/dbconnection');//Importing Database connecting function 

//Helping app (understand/)deal with json
app.use(express.json());

//Routing
app.use('/authors',require('./router/AuthorsRouter'));
app.use('/api',require('./router/NewsRouter'));

//Database connection
dbConnect();

//Listening to the port
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}!`);
})
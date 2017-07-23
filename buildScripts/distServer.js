/*eslint-disable no-console */
import express from 'express';
import path  from 'path';
import open  from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
//Hard coded
app.get('/users',function(req,res){
res.json([
        {"id": 1,"firstName":"bob", "lastName":"Smith","email":"bob@gmail.com"},
        {"id": 2,"firstName":"candy", "lastName":"Taylor","email":"candy@gmail.com"},
        {"id": 3,"firstName":"bill", "lastName":"Rock","email":"bill@gmail.com"}
    ]);
});
app.listen(port, function(err){
    if(err){
        console.log(err);
            }
            else{
                open('http://localhost:' + port);
            }
})

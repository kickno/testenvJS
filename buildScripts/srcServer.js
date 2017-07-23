import express from 'express';
import path  from 'path';
import open  from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
const port = 3000;
const app = express();
const compiler = webpack(config);
/*eslint-disable no-console */
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});
console.log('from sourceserver');
app.get('/users',function(req,res){
res.json([
        {"id": 1, "firstName":"bob", "lastName":"Smith","email":"bob@gmail.com"},
        {"id": 2, "firstName":"candy", "lastName":"Taylor","email":"candy@gmail.com"},
        {"id": 3, "firstName":"bill", "lastName":"Rock","email":"bill@gmail.com"}
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

express = require('express')
var app = express();
app.set('view engine','jade');
app.get('/',function(req,res)
{
                res.render('index');
});
app.get('/food',function(req,res)
{
        res.render('restaurant.jade');
})
var server = app.listen(3000,function(){});


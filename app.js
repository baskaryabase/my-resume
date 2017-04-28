var express = require("express"),
    app     = express();

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 2000

app.get("/", function(req, res){
    
    res.dend(__dirname+"/public/index.html");
    
});

app.listen(port, function(){
    console.log("started");
    
});

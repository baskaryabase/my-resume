var express = require("express"),
    app     = express();

app.use(express.static('/Public'));

var port = process.env.PORT || 2000

app.get("/", function(req, res){
    
   res.sendFile(__dirname+'/Public/index.html');
});

app.listen(port, function(){
    console.log("started");
    
});

var express         =require("express"),
    port            =process.env.PORT || 8000;
    var app   =express();

app.use(express.static(__dirname + "/public"));
app.set("view engine","hbs");
app.listen(port,function()
{
    console.log("http://localhost:"+port+"/");
});
app.all('*',function(req,res,next){
console.log(req.url);
})
//HOME
app.get("/",function(req,res)
{   
    console.log(process.domain)
});

app.get("/user",function(req,res)
{   
    process.domain.user = "harsh";
   res.redirect('/')
});
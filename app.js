var express         =require("express"),
    port            =process.env.PORT || 8000,
    app             =express(),
    domain          =require('domain'),
    mongoose        =require('mongoose');

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

//Offline MONGO
mongoose.connect("mongodb://localhost:27017/testchannel").then( () => console.log("success")).catch((err)=>console.log(err));   

app.use(require("express-session")({
    secret:"Session",
    resave:false,
    saveUninitialized:false
}));

app.use(function(req,res,next){
    var serverDomain = domain.create();
    serverDomain.add(req);
    serverDomain.add(res);
    serverDomain.user = "test user";
    serverDomain.on('error',next);
    serverDomain.run(next);
})

app.get("/",function(req,res){   
    //console.log(process.domain)
});

app.get("/user",function(req,res){   
   res.redirect('/')
});
app.use(function(req,res,next){
console.log(req.url)
})
app.get("/users",function(req,res){   
    res.redirect('/')
 });
app.listen(port,function()
{
    console.log("http://localhost:"+port+"/");
});
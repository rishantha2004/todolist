const express = require("express")
const bodyParser = require("body-parser");
const app = express()
var items = ["Food", "Hello"]
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
   var today = new Date();
   var currentDay = today.getDay();
   var day = "";

   switch(currentDay){
    case 0:
    day = "Sunday";
        break;
    case 1:
    day = "Monday";
        break;
    case 2:
        day = "Tuseday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day="Saturday";
        break;
    default:
        console.log("error")
   }

   res.render("list", {kindOfDays: day, New:items})
})

app.post("/", function(request, response){



    var item = request.body.newItem;
    items.push(item);
    response.redirect("/");

})

app.listen(3000, function(){
    console.log("Server is alive!")
})
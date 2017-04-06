var express = require("express")
var path = require("path")

var app = express()

var PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", function(request, response){
	console.log("Inside get request")
	var user = {
		name: "Jack",
		age: 31,
		color: "red",
		numbers: [2,3,98,12]
	}
	response.render("index", user)
})

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
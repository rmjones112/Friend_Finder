//setting dependencies
//express is required what else is?
var express = require("express");
//
const PORT = process.env.PORT || 4000;
const app = express();

var htmlRouter = require('./app/routing/htmlRoutes')

app.use(express.json());
app.use(htmlRouter);

    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);

  });

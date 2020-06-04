const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./controllers/project2_controller");
const exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
const TodoTask = require("./models/TodoTask");

const express = require('express');

const app = express();

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const router = express.Router();






dotenv.config();

app.use("/static", express.static("public"));
app.use(express.urlencoded({extended:true}));

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true
}, () => {
  console.log("connected to db!");
  app.listen(3000, () => console.log("server up and running"));
  var dbo = db.db("todo");
  var mysort = {date:1};
  dbo.collection("todotasks").find().sort(mysort).toArray(function(err, result)
{
  if (err) throw (err);
  console.log(result);
  db.close();
});
});

app.set("view engine", "ejs");


//POST METHOD
app.post('/', async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content
  });
  try {
    await todoTask.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
});

// GET METHOD
app.get("/", (req, res) => {
  TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", {
      todoTasks: tasks
    });
  });
});

//SORT METHOD
// mongoose.conenct(url, function(err, db){
//   if (err) throw err;
//   var dbo = db.db("todo");
//   var mysort = {date:1};
//   dbo.collection("todotasks").find().sort(mysort).toArray(function(err, result)
// {
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });
// });
//

//TESTING
async function hello() { return "Hello, is this working?" };
hello().then((value) => console.log(value));

//UPDATE
app
  .route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    const date = req.params.date;
    TodoTask.find({}, (err, tasks) => {
      res.render("todoEdit.ejs", {
        todoTasks: tasks,
        idTask: id
      });
    });
  })
  .post((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, {
      content: req.body.content
    }, err => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  });
//DELETE
app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndRemove(id, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
  });
});
// app.listen(3000, () => console.log("server up and running"));

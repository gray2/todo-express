const TodoTask = require("./models/TodoTask");

const express = require('express');

const app = express();

const dotenv = require("dotenv");

const mongoose = require("mongoose");



dotenv.config();

app.use("/static", express.static("public"));
app.use(express.urlencoded({extended:true}));

mongoose.set("useFindAndModify",false);
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true}, () =>{
  console.log("connected to db!");
  app.listen(3000, ()=>console.log("server up and running"));
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

//UPDATE
app
  .route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
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

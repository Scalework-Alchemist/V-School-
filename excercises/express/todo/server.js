const express = require("express");
const bodyParser = require('body-parser')
const uuid = require("uuid");
const app = express();
const port = 6969;
const todoTasks = require("./todo.json")


app.use(bodyParser.json())

app
    .route('/api/todoTasks')
    .get( (req, res) => {
        res.status(200).send(todoTasks);
    })
    .post((req, res) => {
        req.body.id = uuid();
        todoTasks.push(req.body);
        res.status(201).send(req.body);
    })

app
    .route('/api/todoTasks/:id')
    .get((req, res) => {
        const foundTask = todoTasks.find(task => task.id === req.params.id);
        res
            .status(200)
            .send(
                foundTask || { message: `no task with that id`}
            )
    })
    .delete((req, res) => {
        todoTasks.splice(req.params.id, 1).length;
        res.status(204).send();
    })
    .put((req, res) => {
        const foundTask = todoTasks.find(task => task.id === req.params.id);
        const editedTask = {...foundTask, ...req.body };
        todoTasks.splice(todoTasks.indexOf(foundTask), 1,editedTask);
        res.status(200).send(editedTask);
    })



app.listen(port, () => {
  console.log(`hi im running on local-port ${port}`);
});

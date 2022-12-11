const ToDoModel = require("../models/Modal");

const get = async (req,res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

const create = (req,res) => {
    const { text } = req.body;

    ToDoModel
        .create({text})
        .then(() => res.set(201).send("feched data"))
        .catch((error) => console.log(error));
}

const deleteReq = (req,res) => {
    const {_id} = req.body;
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("deleted"))
        .catch((error) => console.log(error));
}

const update = (req,res) => {
    const { _id, text } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() =>res.set(201).send("updated"))
        .catch((error) => console.log(error));
}

module.exports={deleteReq,get,update,create}
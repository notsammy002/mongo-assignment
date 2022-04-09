const router = require("./section.controller");

//create
const CreateOne = (model) => async(req, res) => {
    const item = await model.create(req.body);
    res.status(201).json(item)
};

//read
const getAll = (model) => async (req, res) => {
    const items = await model.find();
    res.status(200).json(items)
};

//read one
const getOne = (model) => async(req, res) => {
    const item = await model.findById(req.params.id);
    res.status(200).json(item);
};

//update
const updateOne = (model) => async(req, res) => {
    const updateItem = await model.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updateItem)
};


//delete
const deleteOne = (model) => async(req, res) => {
    const deletedItem = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem)
};

//pagination 

// router.get("/", async (req, res) => {
//     const {page = 1, pageSize = 3} = req.query;
//     let offeset = (page -1) * pageSize;
//     let users = await User.find().skip(offeset).limit(pageSize);
//     let totalPages = Math.ceil((await User.find().countDocuments()) / 3);
//     res.status(200).json(data: users, totalPages)
// })

module.exports = (model) => ({
    post: CreateOne(model),
    getOne: getOne(model),
    getAll: getAll(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model),
});
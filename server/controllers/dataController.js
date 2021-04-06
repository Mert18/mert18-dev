import Data from '../models/dataModel.js';
import asyncHandler from 'express-async-handler';

// @desc Fetch all data
// @route GET /api/data
// @access Public
const getAllData = asyncHandler(async (req, res) => {
    const datas = await Data.find({});
    res.json(datas);
})

// @desc create single data
// @route POST /api/products/
// @access Private/Admin
const createData = asyncHandler(async (req, res) => {
    const data = new Data(req.body);
    const createdData = await data.save();
    res.status(201).json(createdData);
})

export {
    getAllData,
    createData
}
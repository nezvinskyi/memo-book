const asyncHandler = require('express-async-handler');
const { Memo } = require('../models/');

const getMemos = asyncHandler(async (req, res) => {
  const memos = await Memo.find({ user: req.user._id });
  res.status(200).json({
    status: 'Success',
    code: 200,
    data: memos,
  });
});

const addMemo = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error('Please fill all the fields');
  } else {
    const memo = new Memo({ user: req.user._id, title, content, category });

    const createdMemo = await memo.save();

    res.status(201).json({
      status: 'Success',
      code: 201,
      data: createdMemo,
    });
  }
});

const getMemoById = asyncHandler(async (req, res) => {
  const memo = await Memo.findById(req.params.id);

  if (memo) {
    res.status(200).json({
      status: 'Success',
      code: 200,
      data: memo,
    });
  } else {
    res.status(404).json({
      status: 'Error',
      code: 404,
      message: 'Memo not found',
    });
  }
});

const updateMemo = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const memo = await Memo.findById(req.params.id);

  if (memo.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('You can not perform this action');
  }

  if (memo) {
    memo.title = title;
    memo.content = content;
    memo.category = category;

    const updatedMemo = await memo.save();

    res.status(200).json({
      status: 'Success',
      code: 200,
      data: updatedMemo,
    });
  } else {
    res.status(404);
    throw new Error('Memo not found');
  }
});

const deleteMemo = asyncHandler(async (req, res) => {
  const memo = await Memo.findById(req.params.id);

  if (memo.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('You can not perform this action');
  }

  if (memo) {
    await memo.remove();

    res.status(200).json({
      status: 'Success',
      code: 200,
      message: 'Memo deleted',
    });
  } else {
    res.status(404);
    throw new Error('Memo not found');
  }
});

module.exports = { getMemos, addMemo, getMemoById, updateMemo, deleteMemo };

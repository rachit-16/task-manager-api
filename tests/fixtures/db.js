const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user.js')
const Task = require('../../src/models/task.js')

const _id1 = new mongoose.Types.ObjectId()
const userOne = {
    _id: _id1,
    name: "Tester One",
    email: "tester@example.com",
    password: "tester@123",
    tokens: [{
        token: jwt.sign({ _id: _id1 }, process.env.JWT_SECRET)
    }]
}

const _id2 = new mongoose.Types.ObjectId()
const userTwo = {
    _id: _id2,
    name: "Tester Two",
    email: "tester2@example.com",
    password: "tester2@123",
    tokens: [{
        token: jwt.sign({ _id: _id2 }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First test task',
    completed: false,
    owner: _id1
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second test task',
    completed: true,
    owner: _id1
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third test task',
    completed: true,
    owner: _id2
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    _id1,
    userOne,
    _id2,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}
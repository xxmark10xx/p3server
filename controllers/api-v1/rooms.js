const router = require("express").Router()
const db = require('../../models')

//GET /rooms - view all rooms
router.get('/',(req,res)=>{
    res.send(`trying to get all rooms`)
})
//POST /rooms - create a new rooms
router.post('/',(req,res)=>{
    res.send(`trying to create a room`)
})
//GET /rooms/:roomId - view specific room
router.get('/:roomId',(req,res)=>{
    res.send(`trying to get a specific room: ${req.params.roomId}`)
})
//DELETE /rooms/:roomId - delete specific room
router.delete('/:roomId',(req,res)=>{
    res.send(`trying to delete a specific room: ${req.params.roomId}`)
})
//PUT /rooms/:roomId - update a specific room
router.put('/:roomId',(req,res)=>{
    res.send(`trying to update a room: ${req.params.roomId}`)
})
//POST /rooms/:roomId - add message to room
router.post('/:roomId',(req,res)=>{
    res.send(`trying to add message to a room ${req.params.roomId}`)
})
//DELETE /rooms/:roomId/:messageId - delete a specific message from a specific room
router.delete('/:roomId/:messageId',(req,res)=>{
    res.send(`trying to delete a message: ${req.params.messageId}, from a room: ${req.params.roomId}`)
})
//PUT /rooms/:roomId/:messageId - edit an already-posted message in a specific room
router.put('/:roomId/:messageId',(req,res)=>{
    res.send(`trying to edit a message: ${req.params.messageId} within room: ${req.params.roomId}`)
})

module.exports = router
const router = require("express").Router()
const db = require("../../models")
const user = require("../../models/user")

// GET -- /profile display user profile
router.get("/", async (req, res) => {
    // we are going to have to display the avatar, the username, the name, and the bio of the users
    // try{
    //     // find user by id 
    //     const foundUser = await db.User.findById({
    //         _id: req.params.id 
    //     })
    //     if(foundUser){
    //         await db.User.find({
                
    //         })
    //     }
    // }catch(err) {
    //     console.log(err)
    // }
})

// GET -- /profile/:id displays specific user 
router.get("/:id", async (req, res) => {
    try{
        // get he id from the request params
        const userId = req.params.id
        console.log(userId)

        // look up the id in the db
        const userInfo = await db.User.findById(userId)
        console.log(userInfo.name)
        res.json(userInfo)
        
    }catch(err) {
        // handle any error that may happen
        console.log(err)
        res.status(503).json({ message: "The database or server room is on fire 🔥" })
    }
})

// PUT -- /profile/:id update personal
router.put("/:id", async (req, res) => {
    try{
        // get the id from the req params
        const userId = req.params.id 
        console.log(userId)
        // get some options
        const options = {
            new: true
        }
        //find the user in the db and update it.
        const updatedUser = await db.User.findByIdAndUpdate({
            _id: userId
        }, 
            req.body, 
            options
        )
        if (!updatedUser) return res.status(404).json({ meesage: "User Not Found 👀 "})
        res.json(updatedUser)
    }catch(err) {
        console.log(err)
        res.status(503).json({ message: "The database or server room is on fire 🔥" })
    }
})

// DELETE -- /profile/:id
router.delete("/:id", (req, res) => {
    // find the user by id and delete them
    db.User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).json({ message: "it worked it! the bounty is deleted"})
        })
        .catch (err => {
            console.log(err)
            res.status(503).json({ message: "The database or server room is on fire 🔥" })
        })
})

module.exports = router

const router = require("express").Router()
const db = require("../../models")

// GET -- /profile display user profile
router.get("/", async (req, res) => {
    // we are going to have to display the avatar, the username, the name, and the bio of the users
    try{
        // find user by id 
        const foundUser = await db.User.findById({
            _id: req.params.id 
        })
        if(foundUser){
            await db.User.find({
                name: 
            })
        }
    }catch(err) {
        console.log(err)
    }
})

// GET -- /profile/:id displays specific user 
router.get("/:id", (req, res) => {
    res.send("Specific User")
})

// PUT -- /profile/:id update personal
router.put("/:id", (req, res) => {
    res.send("Updating the user")
})

// DELETE -- /profile/:id
router.delete("/:id", (req, res) => {
    res.send("Deleting the user")
})

module.exports = router

const router = require("express").Router()
const db = require("../../models")

// GET -- /profile display user profile
router.get("/", (req, res) => {
    res.send("Hello from profile")
})

// GET -- /profile/:id displays specific user 
router.get("/:id", (req, res) => {
    res.send("Specific User")
})

// PUT -- /profile/:id update personal
router.get("/:id", (req, res) => {
    res.send("Updating the user")
})

// DELETE -- /profile/:id
router.get("/:id", (req, res) => {
    res.send("Deleting the user")
})

module.exports = router

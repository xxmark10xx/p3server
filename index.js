require('./models')
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

// middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the user app 👋' })
})

app.listen(PORT, () => console.log(`listening to the smooth sounds of port ${PORT} in the morning 🌊`))
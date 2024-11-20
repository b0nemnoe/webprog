import express from 'express'

const greetingRoutes = express.Router();

greetingRoutes.use("/greeting", (req, res) => {
    res.send("Hello, Németh Noel")
})

export default greetingRoutes
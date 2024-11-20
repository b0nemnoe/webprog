import express, { Router } from 'express';

const nodejsRoutes = express.Router();

nodejsRoutes.use("/nodejs", (req, res) => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

export default nodejsRoutes
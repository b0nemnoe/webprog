import express from 'express'

const router = express.Router()

router.get('/add-product', (req, res) => {
    res.send('Admin oldal GET metódus /add-product endpoint')
})

export {router as adminRoutes, products}
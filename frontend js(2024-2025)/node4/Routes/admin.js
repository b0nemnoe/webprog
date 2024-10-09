import express from 'express'
import path from 'path'
import __dirname from '../util/rootpath.js'

const router = express.Router()

const products = []

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle : 'Add product',
        path: '/admin/add-product'
    })
})

router.post('/add-product', (req, res) => {
    const title = req.body.title
    console.log(title)
    res.redirect('/')
})


export {router as adminRoutes, products}
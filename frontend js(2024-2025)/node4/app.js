import express from 'express'
import bodyParser from 'body-parser'

import adminRoutes from './Routes/admin.js'
import shopRoutes from './Routes/shop.js'
import __dirname__ from './utils/rootpath.js'

const app = express()
const PORT = 3000


app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes)
app.use('/', shopRoutes)

app.listen(PORT, () => console.log(`server runs on port https://localhost/${PORT}`))
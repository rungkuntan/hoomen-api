require('dotenv').config();
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const authRoute = require('./routes/auth-route')
const notFound = require('./middlewares/notfound')
const errorMdw = require('./middlewares/error')
const app = express();



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    
}


app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100,
    message: {msg: 'too many request'}

}))
app.use(helmet())
app.use(cors())
app.use(express.json());
app.use('/auth',authRoute)
app.use(notFound)
app.use(errorMdw)

const port = process.env.port || 8888
app.listen(port, () => console.log('server run on port ' + port))
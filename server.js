const express = require('express')

const app = express();
const cors = require ('cors')
const morgan = require('morgan')


require('dotenv').config({
    path:"./config/config.env"
})

app.use(express.json())



if (process.env.NODE_ENV === 'development') {

    // client frontend
    app.use(cors({
        origin: process.env.CLIENT_URL
     }))

    //middleware
    app.use(morgan('dev'))
}

//database
const connectdb = require('./db')

connectdb();

//load routes
app.use("/api/post/",require('./loadroute'))

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT =process.env.PORT || 1234;

app.listen(PORT,(req,res)=>{
    console.log(`server started ${PORT}`)
})
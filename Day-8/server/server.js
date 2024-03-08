import express from 'express'
import mongoose from 'mongoose'
require('dotenv').config()

const server = express()

//Middleware
server.use(express.json())

//Connect to MOngoDB
mongoose.connect()

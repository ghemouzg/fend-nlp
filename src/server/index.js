const PORT = 8080
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1'


const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const express = require('express')

const bodyParser = require('body-parser')

const cors = require('cors')
const fetch = require('node-fetch');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/',  (req, res) => {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/add-url', async (req, res) =>{
    const {articleURL} = req.body
    try {
        const response = await fetch(`${BASE_URL}?key=${process.env.API_KEY}&url=${articleURL}&lang=en`)
        const MeaningCloudData = await response.json()
        const data = {
            score_tag : MeaningCloudData.score_tag,
            agreement : MeaningCloudData.agreement,
            subjectivity : MeaningCloudData.subjectivity,
            confidence : MeaningCloudData.confidence,
            irony : MeaningCloudData.irony
        }
        res.send(data)
        
    } catch (err) {
        console.log(err)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Server is lisining on Port ${PORT}`)
})


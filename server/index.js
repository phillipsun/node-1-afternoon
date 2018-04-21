const express = require('express')
const bodyParser = require('body-parser')
//require the messages controller
const messagesController = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use(bodyParser.json())

const messagesBaseUrl = "/api/messages"

// post, get, put, delete endpoints using methods from the messageController
app.post(messagesBaseUrl, messagesController.create)
app.get(messagesBaseUrl, messagesController.read)
app.put(`${messagesBaseUrl}/:id`, messagesController.update)
app.delete(`${messagesBaseUrl}/:id`, messagesController.delete)



//const port = 3000
app.listen(3000 /*port*/, () => {
    console.log('Listening on 3000')
})

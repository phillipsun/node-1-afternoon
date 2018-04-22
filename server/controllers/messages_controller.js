// array to hold all messages
let messages = []
// unique id for each message
let id = 0;

module.exports = {

    // read
    read: (req, res) => {
        // send back status code 200 and messages array
        res.status(200).send(messages)
    },

    // create
    create: (req, res) => {
        // create a variable to store the text and time values from request body 
        const { text, time } = req.body

        // create a 'message' object using that text and time from request body
        let message = {
            id: id,
            text: text,
            time: time
        }

        // message object to 'messages' array
        messages.push(message)

        // increment the 'id' variable that we're using for each messages unique id
        id++

        // send back a response with the status and messages array
        res.status(201).send(messages)
    },

    // update
    update: ( req, res ) => {
        // get the new text from the request body
        const { text } = req.body

        // create a variable equal to the request 'id'
        const updateID = req.params.id

        // create a variable equal to the index of the message that matches updateID
        const messageIndex = messages.findIndex( message => message.id == updateID )

        // create a variable and set it to 'messageIndex' of 'messages' array
        let message = messages[ messageIndex ]
    
        // update 'message' properties
        messages[ messageIndex ] = {
          id: message.id,
          text: text || message.text,
          time: message.time
        };

        // return success status and send 'messages' array
        res.status(200).send( messages );
      },

    // delete
    delete: (req, res) => {
        // create a variable to set the index to when found
        let index = null

        // loop through the 'messages' array
        messages.forEach((message, i) => {
            // if the message id equals the id from the request
            if(message.id === Number(req.params.id))
                // set the index variable created earlier equal to matching id message
                index = i;
        })

        // remove the message from the array
        messages.splice(index, 1)
        
        // return success status and send 'messages' array
        res.status(200).send(messages)
    }

}
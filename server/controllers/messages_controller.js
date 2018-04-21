let messages = []
let id = 0;

module.exports = {

    // read
    read: (req, res) => {
        res.status(200).send(messages)
    },

    // create
    create: (req, res) => {
        // create a message using text 
        // and time off of the request body
        // assign a unique id to the message
        const {
            text,
            time
        } = req.body
        let message = {
            id: id,
            text: text,
            time: time
        }
        messages.push(message)
        id++
        res.status(201).send(messages)
    },

    // update
    update: ( req, res ) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];
    
        messages[ messageIndex ] = {
          id: message.id,
          text: text || message.text,
          time: message.time
        };
    
        res.status(200).send( messages );
      },

    // delete
    delete: (req, res) => {
        let index = null
        messages.forEach((message, i) => {
            if(message.id === Number(req.params.id)) index = i;
        })
        messages.splice(index, 1)
        res.status(200).send(messages)
    }

}
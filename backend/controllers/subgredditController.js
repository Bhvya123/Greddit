const asyncHandler = require('express-async-handler')
const subg = require('../models/subgredditModel')

const createsubg = asyncHandler(async (req, res) => {
    try {
        const {name, description, tags, bannedwords, creator} = req.body
        
        if(!name) 
        {
            res.status(400).send("Please add all fields")
        }

        const subgreddit = await subg.find({ 'name': name })

        // if(subgreddit) {
        //     res.status(400).send("Subgreddit already exists");
        // }

        const subgred = await subg.create({
            name,
            description,
            tags,
            bannedwords,
            creator
        })

        if(subgred) {
            return res.status(201).json({
                name: subgred.name,
                message: "Created new subgreddit"
            })
        }
        else {
            res.status(400).send('Invalid Data')
        }
    }
    catch (e) {
        console.log(e);
    }
})

const showmygreddits = asyncHandler(
    async (req,res) => {
        try{
            const {creator} = req.body
            const sub = await subg.find({'creator': creator});

            res.status(201).json( sub );
        }
        catch (e) {
            console.log(e)
        }
    }
)

module.exports = {createsubg, showmygreddits}
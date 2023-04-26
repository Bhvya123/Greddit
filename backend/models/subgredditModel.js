const mongoose = require('mongoose')

const subgredditSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name of subgreddit"]
    },
    description: {
        type: String,
        required: [false]
    },
    tags: {
        type: Array,
        required: [false]
    },
    bannedwords: {
        type: Array,
        required: [false]
    },
    creator: {
        type: String,
        required: [true, "Creator of subgreddit is needed bruh -_-"]
    }
},
{
    timeStamps: true
})

module.exports = mongoose.model('subg', subgredditSchema)

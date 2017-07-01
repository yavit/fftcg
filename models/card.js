var mongoose = require('mongoose');

var Card = mongoose.model('card', {
    serial:{
        type:String,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    job:{
        type:String,
        required: true
    },
    actions:{
        type:String,
        required: true
    },
    cost:{
        type: String,
        required: true
    },
    element:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

module.exports = Card;
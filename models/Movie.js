const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type : String
    },
    year_released : {
        type : String
    },
    rating : {
        type : Number
    }
})

const Movie = mongoose.model('movie', movieSchema);

module.exports=Movie;
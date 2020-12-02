const Movie = require('../models/Movie');
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://rep_appmob:tubesappmob@cluster0.0e29e.mongodb.net/appmob_api?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((result) => console.log("Database Connected, Preparing for Seeding!"))
    .catch((err) => console.log(err));

const movieToSeed = [
    {
        name : "Holidate",
        year_released : "2020",
        rating : 6.1
    },
    {
        name : "Once Upon a Time in Hollywood",
        year_released : "2019",
        rating : 7.6
    },
    {
        name : "Swordfish",
        year_released : "2001",
        rating : 6.5
    }
]


movieToSeed.forEach((movie) => {
    Movie.create(movie).then((res) => {console.log(res)}).catch((err)=>{console.log(err)});
})
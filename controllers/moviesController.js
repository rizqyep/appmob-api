const Movie = require('../models/Movie');

const getAll = async (req, res) => {
    const movies = await Movie.find();

    res.status(200).json({status : 'success', data : movies});
}

const getById = async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    res.status(200).json({status : 'success', data : movie});
}

const store  = async (req, res) => {
    const {name , year_released, rating} = req.body;

    const newMovie = await Movie.create({name, year_released, rating});

    res.status(200).json({status : 'Successfully added movie', data : newMovie});

}

const deleteMovie = (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).json({status : 'Movie sucessfully deleted!'})
    })
    .catch((err) => {
        res.status(400).json({status : 'Error', message : err.message});
    })
}

module.exports = {
    getAll,
    getById,
    store, 
    deleteMovie
}
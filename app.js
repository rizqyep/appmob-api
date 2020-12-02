const express = require('express');

const mongoose = require('mongoose');

const app = express();

const cors = require('cors');

const PORT = process.env.PORT || 3000;

const moviesRouter = require('./routes/movies');

const dbURI = 'mongodb+srv://rep_appmob:tubesappmob@cluster0.0e29e.mongodb.net/appmob_api?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then((result) => {app.listen(PORT)})
   .catch((err) => console.log(err));


app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({status : 'success', message : 'AppMob Api Connected'});
})

app.use('/movies', moviesRouter);
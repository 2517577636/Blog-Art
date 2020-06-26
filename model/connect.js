const mongoose = require('mongoose');

mongoose.connect('mongodb://itcast:itcast@localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("db connect successfully ...");
    })
    .catch(()=>{
        console.log("db connect failly ...");
    })
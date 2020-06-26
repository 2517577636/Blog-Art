const express = require('express')
const path = require('path')
const home = require('./route/home');
const admin = require('./route/admin');
const session = require('express-session');
const template = require('art-template');
const dateformat = require('dateformat');

// Create server
const app = express();

// db connection
require('./model/connect')

// Set the location of template
app.set('views', path.join(__dirname, 'views'));
// Set the template extname 
app.set('view engine', 'art');
// Set the engine
app.engine('art', require('express-art-template'));
// import the dateformat to template
template.defaults.imports.dateFormat = dateformat;

// Set the static resource
app.use(express.static(path.join(__dirname, 'public')));
// Set the req body
app.use(express.urlencoded({extended: false}));
// Set the session
app.use(session({secret: 'secret key'}));

// Set Intercept
app.use('/admin', require('./middleware/loginGuart'));

app.use('/home',home);
app.use('/admin', admin); 

// console.log(process.env.NODE_ENV);

// Handler Error
app.use((err, req, res, next)=>{
    // Parse the JSON
    const result = JSON.parse(err);

    // Concatenate all strings after path
    let params = []
    for(let attr in result){
        if(attr !== 'path'){
            params.push(attr + '=' + result[attr])
        }
    }

    res.redirect(`${result.path}?${params.join('&')}`)
})

// PORT
const PORT = process.env.PORT || 3500;

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})
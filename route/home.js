const express = require('express');

// Create the router
const home = express.Router();

// Get  index
home.get('/', require('./home/index'));

// Login Page GET
home.get('/login', require('./admin/loginPage'));

// Get logout
home.get('/logout', require('./admin/logout'));

// Get article
home.get('/article', require('./home/article'));

// Get personal
home.get('/user', require('./home/userPage'));

// 
// home.get('/share', require('./home/share'));

// 
// home.get('/diary', require('./home/diary'));

// Delete comment
// home.post('/commentDelete', require('./home/commentDelete'))

// Create counts of the likes article
home.post('/count', require('./home/count'));

// Search article
home.post('/search', require('./admin/articleSearch'));

// Create comment
home.post('/comment', require('./home/comment'));


// export the router
module.exports = home;
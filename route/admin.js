const express = require('express');
// require User
const {User} = require('../model/user');
// Create the router
const admin = express.Router();
// require bcrypt
const bcrypt = require('bcrypt');

// require('./model/user')

// Login Page GET
admin.get('/login', require('./admin/loginPage'));

// Login POST
admin.post('/login', require('./admin/login'));

// Logout GET
admin.get('/logout', require('./admin/logout'));

// User Page
admin.get('/user',require('./admin/userPage'));

// User Search Post
admin.post('/user', require('./admin/userSearch'));

//User Edit Page
admin.get('/user-edit', require('./admin/user-edit')); 

// User-Edit
admin.post('/user-edit', require('./admin/user-edit-fn'));

// User-Modify
admin.post('/user-modify', require('./admin/user-modify'));

// Delete User
admin.get('/delete', require('./admin/user-delete'));

// Delete Article
admin.get('/artdelete', require('./admin/article-delete'));

// Article List
admin.get('/article', require('./admin/article'));

// Article Edit
admin.get('/article-edit', require('./admin/article-edit'));

// Article Modify
admin.post('/article-modify', require('./admin/article-modify'));

// Article Add
admin.post('/article-add', require('./admin/article-add'));

// Article Search
admin.post('/article', require('./admin/articleSearch'));

// Comment Get
admin.get('/comment', require('./admin/commentPage'));

// export the router
module.exports = admin;
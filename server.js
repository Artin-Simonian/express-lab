// Load express 
const express = require('express');
const path = require('path');
 
// Require to do "database"

const todoDB = require('./data/todo-db');
const studentsDb = require('./date/student-db')


// Create our express application
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes



// Define a "root" route directly on app
// Next lesson we'll use better practice routing

app.get('/', function(req, res){
    res.send('<h1>Hello EEExpress</h1>');
});

app.get('/home', function(req, res){
    res.render('home');
});

app.get('/todos', function(req, res){
    res.render('todos/index', {
        todos: todoDB.getAll()
    });
});

app.get('/students', function(){
    res.render('students/index', {
        students: studentsDb.getAll()
    })
})


app.listen(3000, function(){
    console.log('Listening on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dummy_db'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

app.post('/signup', (req, res) => {
  const { username, password, role } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error hashing password: ', err);
      res.status(500).send('Internal server error');
      return;
    }
   
    const user = { username, password: hash, role };
  
    connection.query('INSERT INTO users SET ?', user, (err, result) => {
      if (err) {
        console.error('Error inserting user into database: ', err);
        res.status(500).send('Internal server error');
        return;
      }
      console.log('User signed up successfully!');
      res.status(201).send('User signed up successfully!');
    });
  });
});


app.post('/signin', (req, res) => {

  const { username, password } = req.body;
 
  connection.query('SELECT * FROM users WHERE username = ?', username, (err, results) => {
    if (err) {
      console.error('Error selecting user from database: ', err);
      res.status(500).send('Internal server error');
      return;
    }
    
    if (results.length === 0) {
      console.log('User not found!');
      res.status(401).send('Invalid username or password');
      return;
    }
    
    const user = results[0];
    
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords: ', err);
        res.status(500).send('Internal server error');
        return;
      }
      
      if (!result) {
        console.log('Invalid password!');
        res.status(401).send('Invalid username or password');
        return;
      }
      
      const token = jwt.sign({ username, role: user.role }, 'secret');
      console.log('User signed in successfully!');
   
      res.status(200).json({ token });
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

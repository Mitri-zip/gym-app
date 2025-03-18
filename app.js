// Importing required modules
const express = require('express');
const path = require('path');
const morgan= require('morgan');
const mongoose= require('mongoose');

// Importing models
const User= require('./models/user');
const Vibe= require('./models/vibe');
const Member= require('./models/member');

// Creating an express application
const app = express();

// Middleware to log the request method and path
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// MongoDB connection string
const dbURI= 'mongodb+srv://netninja:test12345@nodetuts.8a1yc7r.mongodb.net/Kb-cust?retryWrites=true&w=majority&appName=NodeTUTS';
// Connecting to MongoDB
mongoose.connect(dbURI)
  .then((result) => app.listen(5175)) // Listening to the server on successful connection
  .catch((err) => console.log(err)); // Logging error if connection fails

// Using morgan for logging
app.use(morgan('dev'));

// Middleware for serving static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Route for serving the main index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Route for creating a new user
app.post('/users', (req,res)=> {
  const user= new User({...req.body, pass:1});

  user.save()
    .then((result)=> {
      console.log('User created successfully!', result);
      res.json({ message: 'User created successfully!', user: result });
    })
    .catch((err)=> {
      console.error('An error occurred while saving the user:', err); 
      res.status(500).json({ message: 'An error occurred.' });
    });
});

// Route for creating a new member
app.post('/members', (req,res)=> {
  const member= new Member({...req.body});

  member.save()
    .then((result)=> {
      console.log('Member created successfully!', result);
      res.json({ message: 'Member created successfully!', member: result });
    })
    .catch((err)=> {
      console.error('An error occurred while saving the member:', err); 
      res.status(500).json({ message: 'An error occurred.' });
    });
});

// Route for creating a new vibe
app.post('/vibes', (req,res)=> {
  console.log('POST vibes', req.body);
  const vibe= new Vibe(req.body);

  vibe.save()
    .then((result)=> {
      console.log('vibe created successfully!', result);
      res.json({ message: 'User created successfully!', vibe: result });
    })
    .catch((err)=> {
      console.error('An error occurred while saving the user:', err); 
      res.status(500).json({ message: 'An error occurred.' });
    });
});

// Route for booking a class
app.post('/bookclass', async (req, res) => {
  const { email, className } = req.body;

  try {
    const user = await User.findOne({ email: email });
    const member = await Member.findOne({ email: email });

    if (user && user.pass > 0 && user.role === 'user') {
      user.pass--;
      await user.save();
      return res.status(200).send(`Booked ${className} for ${email}`);
    } else if (member && member.pass > 0 && member.role === 'member') {
      member.pass--;
      await member.save();
      return res.status(200).send(`Booked ${className} for ${email}`);
    } else {
      return res.status(400).send('Cannot book, please purchase a pass');
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
});

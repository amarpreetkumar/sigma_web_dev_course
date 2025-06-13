const express = require('express');
const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Sample data
const users = [
  { name: 'Amarpreet', age: 21 },
  { name: 'Ravi', age: 23 },
  { name: 'Simran', age: 20 }
];

// Route
app.get('/', (req, res) => {

  // data: { users } – This is an object passed to the view/template. In this case, 
  // you're passing a variable users to be used in the EJS file
  res.render('index', { users });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 3002;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789', // Your MySQL password
    database: 'politics',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});

// Search endpoint
app.get('/search', (req, res) => {
    const { title } = req.query;  // Destructure the title query parameter
  
    // Log the search query to verify that the request is received
    console.log('Search request received for title:', title);

    // Query to find constitutions where the title matches the provided value
    let query = 'SELECT * FROM constitutions'; // Default query to fetch all records
    let queryParams = [];

    if (title) {
        // If a title is provided, filter results by title
        query += ' WHERE title LIKE ?';
        queryParams = [`%${title}%`];  // Wildcard search for partial matches
    }

    // Execute the query
    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error querying database:', err.message);
            return res.status(500).send('Server error');
        }

        // Log the results to check titles and contents
        if (results.length > 0) {
            console.log('Found titles:', results.map((item) => item.title));
        } else {
            console.log('No titles found for the search query.');
        }

        // Send the results back to the client
        res.json(results);  // Return results as a JSON response
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

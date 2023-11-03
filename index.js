const express = require("express");
const app = express();

app.use(express.static(__dirname + '/client'))

const port = process.env.PORT || 3000
app.get('/test', function(request, response) {
	response.type('text/plain')
	response.send('Node.js and Express running on port='+port)
})
// Load your JSON data
const favoritePlaces = require('./FavoritePlaces.json');

// Create a route that serves the JSON data
app.get('/api/favorite-places', (req, res) => {
  res.json(favoritePlaces);
});

app.listen(port, function() {
	console.log("Server is running at http://localhost:3000/")
})

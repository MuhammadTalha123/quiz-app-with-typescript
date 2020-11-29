const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../build')));

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, function () {
    console.error(`Node listening on port ${PORT}`);
});
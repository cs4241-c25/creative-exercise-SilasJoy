const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "node_modules" directory
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the audio file
app.get('/middleC.mp3', (req, res) => {
    res.sendFile(path.join(__dirname, 'middleC.mp3'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
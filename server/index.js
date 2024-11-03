const express = require('express');
const fetch = require('node-fetch'); // or you can use Axios

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await fetch('http://localhost:5000/data');
        const data = await response.json();
        res.send(`
            <h1>Node.js Frontend</h1>
            <p>Message: ${data.message}</p>
            <p>Value: ${data.value}</p>
        `);
    } catch (error) {
        res.status(500).send('Error fetching data from Python backend.');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});
const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
res.send('Hello from my first docker project!');
});

app.listen(PORT, '0.0.0.0', () => {
console.log(`Server is running on port ${PORT}`);
});

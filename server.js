import express from 'express';

const PORT = 3004;
const app = express();

app.listen(PORT, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }

    console.log(`Server is listening on ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello Ninja! Created a express server');
});
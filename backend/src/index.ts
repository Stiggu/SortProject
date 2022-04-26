import express from "express";
import { bubble } from './sorter';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('AHA');
});

// Swap to post and make it accept an array from the front end
app.get('/sort/bubble', (req, res) => {
    const result: number[][] = bubble([9,8,7,5,6,4,1,2,3]);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
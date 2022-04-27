import express from "express";
import { bubble, quick, counting } from './sorter';
import { performance } from 'perf_hooks';
import bodyparser from "body-parser";

const app = express();
const port = 3000;

let startTime = 0;
let endTime = 0;
let totalTime = 0;

app.use(bodyparser.json());

app.post('/sort/bubble', (req, res) => {
    startTime = performance.now();

    const result: number[][] = bubble(req.body.array);

    endTime = performance.now();

    totalTime = endTime - startTime;

    res.status(200).send({result,totalTime: totalTime+' ms'});
});

app.post('/sort/quick', (req, res) => {
    startTime = performance.now();
    
    const result: number[][] = quick(req.body.array);
    
    endTime = performance.now();

    totalTime = endTime - startTime;

    res.status(200).send({result, totalTime: totalTime+' ms'});
});

app.post('/sort/counting', (req, res) => {
    startTime = performance.now();

    const result: number[][] = counting(req.body.array);

    endTime = performance.now();

    totalTime = endTime - startTime;

    res.status(200).send({result, totalTime: totalTime+' ms'});
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
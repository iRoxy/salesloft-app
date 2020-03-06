const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3001

var router = express.Router();
router.get('/', (req, res) => res.send('Hello World!'));

router.get('/list-people', async (req, res) => {
    console.log('Did this even run');
    const baseUrl = 'https://api.salesloft.com/v2/people.json';
    const API_KEY = process.env.API_KEY;
    const auth = `Bearer ${API_KEY}`;
    console.log('THE AUTH: ', auth);
    let headers = {
        "Authorization": auth
    };

     // Fetch a list of people
     let peopleData = await fetch(baseUrl, { method: "GET", headers });
     let peopleJson = await peopleData.json();
     let peopleArr = peopleJson.data;
     return peopleArr;
});

// Register all the routers
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

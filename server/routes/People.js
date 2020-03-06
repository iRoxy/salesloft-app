const fetch = require('node-fetch')

module.exports = (app) => {
    app.get('/list-people', async (req, res) => {
        const baseUrl = 'https://api.salesloft.com/v2/people.json';
        const API_KEY = process.env.API_KEY;
        let headers = {
            "Authorization": "Bearer" + API_KEY
        };

         // Fetch a list of people
         let peopleData = await fetch(baseUrl, { method: "GET", headers });
         if (peopleData) {
             console.log('yay, data came back');
             console.log(peopleData);
         }
    });
}

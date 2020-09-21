const express = require('express')
const app = express();
const axios = require('axios');
const Sorter = require('./utils/BusinessesSorter');
const cors = require('cors');

const PORT = 4000;

app.use(cors());

app.get('/', cors(), (req, res) => {
    axios.get('https://data.lacity.org/resource/6rrh-rzua.json')
        .then(api_response => {
            res.send(api_response.data);
        })
        .catch(error => {
            console.log(error);
        });
})

app.get('/sort/:sortParameter', cors(), (req, res) => {
    axios.get('https://data.lacity.org/resource/6rrh-rzua.json')
        .then(api_response => {
            var result = [];
            console.log(req.params.sortParameter)
            if (req.params.sortParameter == "most-locations")
                result = new Sorter().mostLocations(api_response.data).sort(GetSortOrder("unit_length")).reverse();
            if (req.params.sortParameter == "oldest")
                result = new Sorter().oldest(api_response.data).sort(GetSortOrder("location_start_date"));
            res.send(result);
        })
        .catch(error => {
            console.log(error);
        });
});

function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
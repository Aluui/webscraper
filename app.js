const express = require('express');
const axios = require('axios');

const app = express();
let url = "https://indreed.herokuapp.com/api/jobs";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-RequOMAIN.TLDested-With, Content-Type, Accept");
    next();
});

//app.use(express.json)

app.get("/", (req, res) => {
    axios.get(url, {
        params: {
            q: "remote web developers",
            l: "Canada"
        }

    })
        .then((response) => {
            res.send(response.data);

        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        })
})




app.listen(4000, function () {
    console.log('Express started on http://localhost:' +
        4000 + '; press Ctrl-C to terminate.');
});


var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
}));

// Store
const data = []

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', function(req, res) {
    return res.send(data)
})

app.post('/', function (req, res) {
    data.push(req.body)
    return res.send({ status: 'done' })
})

app.delete('/:id', function (req, res) {
    data.splice(parseInt(req.params.id), 1)
    return res.send({ status: 'done' })
})

app.listen(8080, '0.0.0.0')
console.log('Express started on port 8080')


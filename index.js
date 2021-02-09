const express = require('express');

const app = express();

const router = express.Router();

app.use(express.static(__dirname + '/public/', {
    index: 'test.js'
}));

app.use(express.json());

router.get('/', (req, res) => {
    res.send('this is home page for get request.')
});

app.post('/', (req, res) => {
    console.log('req body:', req.body);
    res.send('post request!');
});

app.listen(3000, () => {
    console.log('listening port: 3000');
});
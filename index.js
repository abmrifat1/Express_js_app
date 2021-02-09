const express = require('express');
const handle = require('./handle');

const app = express();
const admin = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public/', {
    index: 'test.js'
}));

app.use(express.json());

app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: "abm"
    };
    req.user = user;
    next();
})

app.get('/user/:id', handle);

app.post('/', (req, res) => {
    console.log('req body:', req.body);
    res.send('post request!');
});

admin.get('/login', (req, res) => {
    console.log(admin.mountpath);
    res.send('admin request!');
});

app.use('/admin', admin);

app.listen(3000, () => {
    console.log('listening port: 3000');
});
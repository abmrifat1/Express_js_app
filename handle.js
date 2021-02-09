const handle = (req, res) => {
    console.log('user info==>', req.user)
    res.send('this is for get request.')
};

module.exports = handle;

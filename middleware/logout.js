
module.exports = (req, res, next) => {
    res.clearCookie('user');
    res.clearCookie('loggedIn');
    res.clearCookie('token');

    res.redirect('/');
};
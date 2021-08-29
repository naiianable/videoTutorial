

module.exports = (req, res, next) => {

    res.clearCookie('course');

    next();

};


exports.getGuestHome = function(req, res) {
    res.render('guest-home');
};

//<========================================================================>

exports.getUserHome = function(req, res) {
    res.render('user-home');
};

//<========================================================================>

exports.getCreateCourse = function(req, res) {
    res.render('create-course');
};

//<========================================================================>

exports.getCourseDetails = function(req, res) {
    //UPDATE ROUTE FOR COURSE IN DB
    //let courseId = req.params.id;
    //console.log(req)
    res.render('course-details');
};

//<========================================================================>

exports.getEditCourse = function(req, res) {
    //UPDATE ROUTE FOR COURSE IN DB

    res.render('edit-course');
};

//<========================================================================>

exports.getRegister = function(req, res) {
    res.render('register');
};

//<========================================================================>

exports.getLogin = function(req, res) {
    res.render('login');
};

//<========================================================================>
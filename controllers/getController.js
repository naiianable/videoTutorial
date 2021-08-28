const Course = require('../Models/Course');

exports.getGuestHome = function(req, res) {
    res.render('guestHome');
};

//<========================================================================>

exports.getUserHome = function(req, res) {

    Course.find((err, courses) => {
        let loggedIn = req.cookies.loggedIn;
        let user = req.cookies.user;
        console.log(courses)
        res.render('home', { courses, loggedIn, user });
    }).lean();
    
};

//<========================================================================>

exports.getCreateCourse = function(req, res) {
    let user = req.cookies.user;
    res.render('createCourse', { user });
};

//<========================================================================>

exports.getCourseDetails = async function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let user = req.cookies.user;
    let courseId = req.params.id;
    let courseData = await Course.findById(courseId).lean();

    console.log(courseData)
    res.render('courseDetails', { courseData, loggedIn, user });
};

//<========================================================================>

exports.getEditCourse = async function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let user = req.cookies.user;
    let courseId = req.params.id;
    let courseData = await Course.findById(courseId).lean();

    res.render('editCourse', { courseData, loggedIn, user });
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
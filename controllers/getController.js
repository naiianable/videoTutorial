const Course = require('../Models/Course');

exports.getGuestHome = function(req, res) {
    res.render('guestHome');
};

//<========================================================================>

exports.getUserHome = function(req, res) {

    Course.find((err, courses) => {
        let loggedIn = req.cookies.loggedIn;
        let user = req.cookies.user;
        res.render('userHome', { courses, loggedIn, user });
    }).lean();
    
};

//<========================================================================>

exports.getCreateCourse = function(req, res) {
    res.render('createCourse');
};

//<========================================================================>

exports.getCourseDetails = async function(req, res) {
    // UPDATE ROUTE FOR COURSE IN DB
    let courseId = req.params.id;
    let courseData = await Course.findById(courseId).lean();

    console.log(courseData)
    res.render('courseDetails', { courseData });
};

//<========================================================================>

exports.getEditCourse = async function(req, res) {
    //UPDATE ROUTE FOR COURSE IN DB
    let courseId = req.params.id;
    let courseData = await Course.findById(courseId).lean();
    console.log(courseData)

    res.render('editCourse', { courseData });
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
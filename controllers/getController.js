const Course = require('../Models/Course');

exports.getGuestHome = function(req, res) {
    res.render('guest-home');
};

//<========================================================================>

exports.getUserHome = function(req, res) {

    Course.find((err, courses) => {
        console.log(courses);
        res.render('user-home', { courses })
    }).lean();
    
};

//<========================================================================>

exports.getCreateCourse = function(req, res) {
    res.render('create-course');
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
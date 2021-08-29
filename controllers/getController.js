const Course = require('../Models/Course');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');


exports.getHome = function(req, res) {

    Course.find((err, courses) => {
        let loggedIn = req.cookies.loggedIn;
        let user = req.cookies.user;
        //console.log(courses)
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

    let token = req.cookies.token;
    var decoded = jwt.verify(token, process.env.SECRET);
    let userData = await User.findById(decoded.userId);
    let courses = userData.courses;
    let registered = courses.includes(courseId);

    if(!courses.includes(courseId)) {
        console.log('not signed up');
    } else {
        console.log('signed up already')
    }

    console.log(registered)
    res.cookie('course', courseId);
    res.render('courseDetails', { courseData, loggedIn, user, registered });
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
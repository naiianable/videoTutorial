const Course = require('../Models/Course');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');


exports.getHome = async function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let user = req.cookies.user;
    
    let courses = await Course.find().lean();
    let topCourses = [];

    //sorting for top 3 courses
    let sortedFaveCourses = courses.sort((a,b) => {
        return b.users.length - a.users.length;
    });
    //pushing top 3 into array
    for(let i = 0; i < 3; i++) {
        topCourses.push(sortedFaveCourses[i]);
    }
    //sorting for most recent to least recent
    let sortedCreatedCourses = courses.sort((a,b) => {
        return b.created - a.created;        
    });

    //console.log(sortedCreatedCourses);
    //  console.log('TOP 3 COURSES', topCourses);
    
    
    res.render('home', { sortedCreatedCourses, topCourses, loggedIn, user });
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
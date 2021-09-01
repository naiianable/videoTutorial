const Course = require('../Models/Course');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');


exports.getHome = async function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let user = req.cookies.user;
    
    let courses = await Course.find().lean();

    //array of most popular courses
    let sortedTop = [];

    //array of public courses
    let isPublic = [];
    // console.log(courses);

    for(let i = 0; i < courses.length; i++) {
        if(courses[i].isPublic == true) {
            isPublic.push(courses[i]);
        }
    }

    //sorting for top 3 courses
    let sortedFaveCourses = isPublic.sort((a,b) => {
        return b.users.length - a.users.length;
    });

    //pushing top 3 into array
    for(let i = 0; i < 3; i++) {
        sortedTop.push(sortedFaveCourses[i]);
    }

    //top 3 courses, if there are less, undefined is removed
    let topCourses = sortedTop.filter(temp => temp != undefined);
    let noTopCourses = topCourses.includes();
    
    //sorting for most recent to least recent
    let sortedCreatedCourses = isPublic.sort((a,b) => {
        return b.created - a.created;        
    });
    



    //console.log('THIS IS COURSES', courses);
    // console.log('THIS IS SORTED TOP', topCourses);
    //console.log('THIS IS SORTED CREATED', sortedCreatedCourses)
    //console.log('THIS IS ISPUBLIC', isPublic);
    // console.log(noTopCourses)
    
    
    res.render('home', { courses, sortedCreatedCourses, topCourses, loggedIn, user, noTopCourses });
};

//<========================================================================>

exports.getCreateCourse = function(req, res) {
    res.clearCookie('error');
    let error = req.cookies.error;
    let user = req.cookies.user;

    if(!error) {
        res.render('createCourse', { user });

    } else {
        let errorMsg = error.errors[0].msg;
        res.render('createCourse', { user , errorMsg });
    }
    
};

//<========================================================================>

exports.getCourseDetails = async function(req, res) {
    let loggedIn = req.cookies.loggedIn;
    let user = req.cookies.user;
    let courseId = req.params.id;
    let courseData = await Course.findById(courseId).lean();
    console.log('THIS IS COURSE DATA', courseData)

    let token = req.cookies.token;
    var decoded = jwt.verify(token, process.env.SECRET);

    let userData = await User.findById(decoded.userId);
    let courses = userData.courses;
    let registered = courses.includes(courseId);
    console.log('THIS IS USER DATA', userData)


    let createdBy;
    if((userData._id).toString() == (courseData.creator).toString()) {
        createdBy = true;
    } else {
        createdBy = false;
    }
    // console.log((userData._id).toString(), (courseData.creator).toString())
        //console.log(createdBy)
    res.cookie('course', courseId);
    res.render('courseDetails', { createdBy, courseData, loggedIn, user, registered });
};

//<========================================================================>

exports.getEditCourse = async function(req, res) {
    res.clearCookie('error');
    let loggedIn = req.cookies.loggedIn;
    let error = req.cookies.error;
    console.log(error)

    let user = req.cookies.user;
    let courseId = req.params.id;
    let courseData = await Course.findById(courseId).lean();

    if(!error) {
        res.render('editCourse', { courseData, loggedIn, user });
    } else {
        let errorMsg = error.errors[0].msg;
        res.render('editCourse', { courseData, loggedIn, user, errorMsg });
    }

    
    

    
};

//<========================================================================>

exports.getRegister = function(req, res) {
    res.clearCookie('error')
    let error = req.cookies.error;
    
    if(!error) {
        res.render('register');
    } else {
        let errorMsg = error.errors[0].msg;
        console.log(error);
        res.render('register', { errorMsg });
   }
    
};

//<========================================================================>

exports.getLogin = function(req, res) {
    res.clearCookie('error');
    let error = req.cookies.error;
    if(!error) {
       res.render('login'); 
    } else {
        let errorMsg = error.errors[0].msg;
        res.render('login', { errorMsg });
    }
    
};

//<========================================================================>

exports.getSearch = function(req, res) {
    console.log('SEARCH')
    res.redirect('/')
};
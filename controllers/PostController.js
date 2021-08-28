const User = require('../Models/User');
const Course = require('../Models/Course');
const bcrypt = require('bcrypt');

exports.postRegister = function(req, res) {

    let userData = req.body;
    let newUser = new User(userData);

    const saltRounds = 9;
    const myPlainTextPass = userData.password;
    console.log(newUser);

    bcrypt.hash(myPlainTextPass, saltRounds, function(err, hash) {
        newUser.password = hash;
        newUser.save((err, user) => {
            if(err) return console.error(err);
        });
        console.log(hash);
    });
    res.redirect('user-home');
};


exports.postLogin = function(req, res) {

    //ADD IN FUNCTIONALITY AFTER DB IS CONNECTED
    console.log('LOGIN POST');
    res.redirect('userHome');
};
//<========================================================================>



exports.postCreateCourse = function(req, res) {
    
    let newCourseData = req.body;
    let newCourse = new Course(newCourseData);

    newCourse.save((err, course) => {
        if(err) return console.error(err);
    });

    console.log(newCourse);
    res.redirect('/user-home');
};



//<========================================================================>




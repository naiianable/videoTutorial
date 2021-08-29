const User = require('../Models/User');
const Course = require('../Models/Course');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.postRegister = function(req, res) {

    let userData = req.body;
    let newUser = new User(userData);

    const saltRounds = 9;
    const myPlainTextPass = userData.password;


    if(myPlainTextPass == userData.repeatPassword) {
       bcrypt.hash(myPlainTextPass, saltRounds, function(err, hash) {
        newUser.password = hash;
        newUser.save((err, user) => {
            if(err) return console.error(err);
        });
        console.log(newUser);
    });
    res.redirect('/'); 
    } else {
        console.log('TRY AGAIN');
        res.redirect('register');
    }
    
};


//<========================================================================>



exports.postLogin = async function(req, res) {

    let userInput = req.body;
    let userData = await User.findOne({ username: userInput.username });
    let textPass = userInput.password;
    let hashPass = userData.password;

    bcrypt.compare(textPass, hashPass).then((result) => {
        let userId = userData._id;
        let userName = userData.username;
        let userPass = userData.password;
        if(result) {
            let payload = ({ userId, userPass });
            let secretKey = process.env.SECRET;
            let options = { expiresIn: '1hr' };

            let token = jwt.sign(payload, secretKey, options);

            res.cookie('token', token);
            res.cookie('loggedIn', true);
            res.cookie('user', userName);

            res.redirect('/');
        }
    }).catch((err) => {
        console.log(err);
    });
    
};


//<========================================================================>



exports.postCreateCourse = function(req, res) {
    
    let newCourseData = req.body;
    let newCourse = new Course(newCourseData);

    newCourse.save((err, course) => {
        if(err) return console.error(err);
    });

    console.log(newCourse);
    res.redirect('/');
};



//<========================================================================>




exports.postEditCourse = async function(req, res) {

    let courseId = req.params.id;
    let courseData = req.body;

    let editThisCourse = await Course.findById(courseId);
    console.log('ORIGINAL COURSE', editThisCourse);
    if(courseData.title !== '') {
        editThisCourse.title = courseData.title;
    }
    if(courseData.description !== '') {
        editThisCourse.description = courseData.description;
    }
    if(courseData.imageUrl !== '') {
        editThisCourse.imageUrl = courseData.imageUrl;
    }

    editThisCourse.save((err, course) => {
        if(err) return console.error(err);
    });
    
    console.log('UPDATED COUSE', editThisCourse);
    res.redirect('/');
};



//<========================================================================>



const Course = require('../Models/Course');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    
    let courseId = req.cookies.course;
    let token = req.cookies.token;
    let courseData = await Course.findById(courseId);
    // console.log('FIRST COURSE DATA', courseData);

    var decoded = jwt.verify(token, process.env.SECRET);
    let userId = decoded.userId;

    let userData = await User.findById(userId);
    // console.log('FIRST USER DATA', userData);
    
    userData.courses.push(courseId);
    courseData.users.push(userId);

    courseData.save((err, course) => {
        if(err) return console.error(err);
    });

    userData.save((err, user) => {
        if(err) return console.error(err);
    });
    // console.log('SECOND COURSE DATA', courseData);
    // console.log('SECOND USER DATA', userData);
    res.redirect('/');
};

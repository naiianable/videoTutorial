const Course = require('../Models/Course');

module.exports = async (req, res) => {
    
    let courseId = req.cookies.course;
    await Course.deleteOne({ _id: courseId });

    console.log(req.cookies.course);

    res.redirect('/');
};
const getController = require('../controllers/getController');
const postController = require('../controllers/postController');
const logout = require('../controllers/logout');
const enroll = require('../controllers/enroll');

const clearCookie = require('../middleware/clearCookie');
const registerValidator = require('../middleware/registerValidator');
const createCourseValidator = require('../middleware/createCourseValidator');
const loginValidator = require('../middleware/loginValidator');


module.exports = (app) => {

    app.get('/', clearCookie, getController.getHome);

    app.get('/login', getController.getLogin);

    app.get('/register', getController.getRegister);

    //add id to href
    app.get('/courseDetails/:id', getController.getCourseDetails);

    app.get('/course/create', getController.getCreateCourse);

    app.get('/course/edit/:id', getController.getEditCourse);

    app.get('/logout', logout);

    app.get('/enroll', enroll);


    app.post('/register', registerValidator, postController.postRegister);

    app.post('/login', postController.postLogin);

    app.post('/course/create', createCourseValidator, postController.postCreateCourse);

    app.post('/course/edit/:id', postController.postEditCourse);

};
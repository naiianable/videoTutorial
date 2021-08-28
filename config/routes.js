const getController = require('../controllers/getController');
const postController = require('../controllers/postController');

const logout = require('../middleware/logout');

module.exports = (app) => {

    app.get('/', getController.getUserHome);

    app.get('/login', getController.getLogin);

    app.get('/register', getController.getRegister);

    //add id to href
    app.get('/courseDetails/:id', getController.getCourseDetails);

    app.get('/course/create', getController.getCreateCourse);

    app.get('/course/edit/:id', getController.getEditCourse);

    app.get('/logout', logout);


    app.post('/register', postController.postRegister);

    app.post('/login', postController.postLogin);

    app.post('/course/create', postController.postCreateCourse);

    app.post('/course/edit/:id', postController.postEditCourse);

};
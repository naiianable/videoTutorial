const getController = require('../controllers/getController');
const postController = require('../controllers/postController');



module.exports = (app) => {

    app.get('/', getController.getGuestHome);

    app.get('/userHome', getController.getUserHome);

    app.get('/login', getController.getLogin);

    app.get('/register', getController.getRegister);

    //add id to href
    app.get('/courseDetails/:id', getController.getCourseDetails);

    app.get('/course/create', getController.getCreateCourse);

    app.get('/course/edit', getController.getEditCourse);


    app.post('/register', postController.postRegister);

    app.post('/login', postController.postLogin);

    app.post('/course/create', postController.postCreateCourse);

};
const renderHome = require('../controllers/renderControllers/renderHome');
const userHome = require('../controllers/renderControllers/renderUserHome');
const renderLogin = require('../controllers/renderControllers/renderLogin.js');
const renderRegister = require('../controllers/renderControllers/renderRegister');
const renderDetails = require('../controllers/renderControllers/renderDetails');
const renderCreateCourse = require('../controllers/renderControllers/renderCreateCourse');
const renderEditCourse = require('../controllers/renderControllers/renderEditCourse');


const postRegister = require('../controllers/postControllers/postRegister');
const postLogin = require('../controllers/postControllers/postLogin');

module.exports = (app) => {

    app.get('/', renderHome);

    app.get('/userHome', userHome);

    app.get('/login', renderLogin);

    app.get('/register', renderRegister);

    //add id to href
    app.get('/courseDetails', renderDetails);

    app.get('/course/create', renderCreateCourse);

    app.get('/course/edit', renderEditCourse);


    app.post('/register', postRegister);

    app.post('/login', postLogin);

};


exports.postRegister = function(req, res) {

    //ADD IN FUNCTIONALITY AFTER DB IS CONNECTED
    console.log('REGISTER POST');
    res.redirect('login');
};

//<---------------------------------------------------------------------->
exports.postLogin = function(req, res) {

    //ADD IN FUNCTIONALITY AFTER DB IS CONNECTED
    console.log('LOGIN POST');
    res.redirect('userHome');
};
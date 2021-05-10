const database = require('../config/mysql')

exports.register = (req, res, next) =>{

    const connect = database.con

    const username = req.body.username
    const password = req.body.encrypted_password
    const email = req.body.email
    const phone = req.body.phone
    const country = req.body.country
    const city = req.body.city
    const postcode = req.body.postcode
    const name = req.body.name
    const address = req.body.address

    // console.log(req.body);

    connect.connect(function (err) {
        if (err) throw err;
        // return console.log("Mysql Connected!")
        const sql = "INSERT INTO user (id, username, password, email, phone, country, city, postcode, name, address) VALUES (NULL, '"+username+"', '"+password+"', '"+email+"', '"+phone+"', '"+country+"', '"+city+"', '"+postcode+"', '"+name+"', '"+address+"');"
        connect.query(sql, function (err, result) {
            if (err) throw err
            console.log("1 record inserted")
        });
    });



    const result = {
        message: "Register Success!", 
        data: {
            email,
            "token" : "-",
            username

        }
    }

    res.status(200).json(result)
    next()
}

exports.login = (req, res, next) =>{
    const connect = database.con

    const username = req.body.username
    const password = req.body.password
    const result = [];

    // console.log(req.body);

    connect.connect(function (err) {
        if (err) throw err;
        // return console.log("Mysql Connected!")
        const sql = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}' `
        connect.query(sql, function (err, respon) {
            if (err) throw err
            // console.log(respon);
            if (respon.length === 0) {
                // result = {
                //     message: "Login Fail", 
                //     data: {}
                // }
                console.log('fail');
            }else{
                // result = {
                //     message: "Login success!!!", 
                //     data: {}
                // }
                console.log('success');
            }
        });
    });


    res.status(200).json(result)
    next()
}
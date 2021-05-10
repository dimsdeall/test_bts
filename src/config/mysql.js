const mysql = require('mysql');

exports.con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoppingdb"
});

exports.connectDB = () => {

    con.connect(function (err) {
        if (err) throw err;
        return console.log("Mysql Connected!");
    });
}


exports.registerUser = () => {
    con.connect(function (err) {
        if (err) throw err;
        const sql = "INSERT INTO `user` (`id`, `username`, `password`, `email`, `phone`, `country`, `city`, `postcode`, `name`, `address`) VALUES (NULL, '123', '123', '123', '123', '123', '123', '123', '123', '123');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

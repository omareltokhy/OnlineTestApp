//Omar El Tokhy, 1300207

var userHandler = {

    //Add the username and password in database

    addUser: function (username, password) {

        let userid = "" + username + password
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into user(_id, username, password) values(?, ?, ?)",
                    [userid, username, password],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add user error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },

    // Get the information of user searched for

    getUser: function (userid) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "SELECT * from user WHERE _id = ?",
                    [userid],
                    function (tx, results) {
                        if (results.rows.length === 1) {

                            // Set user as logged in

                            console.log(results);
                            window.localStorage.setItem("user", results.rows[0].username);
                            openPage('home')
                        }
                    },
                    function (tx, error) {
                        console.log("get user error:", error)
                    }
                );
            },
            function (error) { },
            function () { }
        )
    }
}
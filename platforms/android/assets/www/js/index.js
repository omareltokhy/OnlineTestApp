//Omar El Tokhy, 1300207

// Create database and direct to right page

$(document).on("ready", function () {
    databaseHandler.createDatabase();
    
    var user = window.localStorage.getItem("user");
    if (user) {
        openPage('home')
    } else {
        openPage('index')
        
    }
});

// Adds user when they click sign in button

function addUser() {
    var email = $("#signinEmail").val();
    var password = $("#signinPassword").val();

    // Alerts if email is missing else its adds user

    if (!email) {
        alert("Email is required");
    } else {
        var r = confirm("Register?" + "\n" + "Email: " + email + "\n" + "Password: ")
        if (r == true) {
            userHandler.addUser(email, password);
            $("signinEmail").val("");
            $("signinPassword").val("");
        }

    }
}

// Login button

function login() {
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    var userid = "" + email + password

    // call getUser in userHandler

    userHandler.getUser(userid)
}

// Log user out and open login page

function logout() {
    window.localStorage.removeItem("user");
    openPage('login')
}



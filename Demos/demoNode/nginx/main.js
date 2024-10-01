window.onload = function() {
    alert("Hi!!!");
}

function login() {
    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;

    if (Username == "ben" && Password == 123){
        alert("Successfully logged in");
    } else {
        alert("Failed to login")
    }

}

function numbers() {
    const Numbers = document.getElementById('numbers').value;

    getResponse('http://localhost:82/', 1, 5000)

    alert(Numbers)
}

function getResponse(url, Id, timeout){
    const req = new XMLHttpRequest();
    req.open("GET", url, true)

    req.timeout = timeout;

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                alert("Response: " + req.responseText);
            } else {
                alert("Error: " + req.status);
            }
        }
    };

    req.ontimeout = function() {
        alert("Request timed out after " + timeout + "ms");
    };

    req.send();

}

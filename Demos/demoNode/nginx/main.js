window.onload = function() {
    alert("Hi!!!");
}

function login() {
    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;

    if (Username == "ben" & Password == 123){
        alert("Successfully logged in");
    } else {
        alert("Failed to login")
    }

}

function numbers() {
    const Numbers = document.getElementById('numbers').value;
    alert(Numbers)
}

function getResponse(url, Id, timeout){
    const req = new XMLHttpRequest();
    req.open("GET", url, true)




}
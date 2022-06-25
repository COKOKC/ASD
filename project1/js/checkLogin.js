checkLogin();
function checkLogin() {
    let login = getCookie("login");
    if (login != 1) {
        window.alert("先登录!");
        location.href = "../html/login.html"
        return;
    }
}
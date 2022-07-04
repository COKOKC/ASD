check();
function check() {
  //发送ajax请求,获取验证码
  Ajax({
    url: "http://localhost/project/server/check.php",
    success(res) {
      console.log(res);
      const checkCode = document.getElementById("checkCode");
      checkCode.innerHTML = res;
      /* 使用sessionStorage存储的验证码 */
      sessionStorage.setItem("checkCode", res);
    },
  });
}

// /* 登录的实现 */
login();
function login() {
  //获取form表单
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    //处理兼容
    e = e || window.event;
    //阻止表单提交
    e.preventDefault();

    console.log("1235456");
    /* 获取用户输入的账号 */
    const username = document.getElementById("username").value;
    /* 获取用户输入的密码 */
    const password = document.getElementById("password").value;
    /* 获取用户输入的验证码 */
    const inpCheckCode = document.getElementById("inpCheckCode").value;

    /* 
            开始登录
            获取stroage当中验证码,进行校验
        */
    const checkCode = sessionStorage.getItem("checkCode");
    //校验登录
    if (inpCheckCode.trim() != checkCode.trim())
      return window.alert("验证码错误!");

    /* 发送Ajax请求 */
    Ajax({
      url: "http://localhost/project/server/login.php",
      data: { username, password },
      success(res) {
        if (res.trim() === "账号密码错误".trim()) {
          alert(res);
        } else {
          /* 账号密码 正确,存储用户登录的信息 */
          sessionStorage.setItem("loginUserInfo", res);
          // 封装了cookie.js里面的setCookie方法
          setCookie("login", 1);
          /* 跳转到home页面 */
          location.href = "../html/home.html";
          console.log("123");
        }
      },
    });
  });
}

check();
function check() {
    // 发送ajax请求，获取验证码
    Ajax({
        url: "http://localhost/day26/project/server/check.php",
        success(res) {
            const checkCode = document.getElementById("checkCode")
            checkCode.innerHTML = res;
            // 使用sessionStorage存储的验证码
            sessionStorage.setItem('checkCode', res);
        }
    })
}

// 登录实现
login()
function login() {
    // 获取form表单
    const loginForm = document.getElementById("loginForm")
    loginForm.addEventListener("submit", (e) => {
        // 处理兼容
        e = e || window.event;
        // 阻止表单的提交
        e.preventDefault();
        // 获取用户输入的账号,获取用户输入的密码，获取用户输入的验证码
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const inpCheckCode = document.getElementById("inpCheckCode").value
        // console.log(username,password,inpCheckCode);

        // 开始登录，先获取checkCode
        const checkCode = sessionStorage.getItem("checkCode")
        if(inpCheckCode.trim() != checkCode.trim())return window.alert("验证码错误");
        // 发送Ajax请求
        Ajax({
            url:"http://localhost/day26/project/LOGIN.php",
            data:{username,password},
            success(res){
                if(res.trim() === "账号密码错误".trim()){
                    alert(res);
                }else{
                    // 账号密码 正确，存储用户登录信息
                    sessionStorage.setItem("loginUserInfo",res)
                    setCookie('login',1)
                    // 跳转到home页面
                    location.href = 'http://localhost/day26/project/HOME.html'
                }
                
            }
        })
    })
}
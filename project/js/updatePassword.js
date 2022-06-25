function updatePasswordDo(){
    //获取用户信息
    //获取password1
    //获取password2
    //获取password3
    let userInfo = sessionStorage.getItem("loginUserInfo");
    userInfo = JSON.parse(userInfo)
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const password3 = document.getElementById("password3").value
    /* 判断输入的密码是否与登录时的密码是否一致 */
    if(password1 != userInfo.m_password)return window.alert("输入的原密码错误!");
    /* 判断两次输入的新密码是否一样 */
    if(password2 !== password3) return window.alert("两次确认密码不一样!");
    /* 处理发送请求的数据 */
    let password = password2
    let id = userInfo.m_id;
    Ajax({
        url: "http://localhost/project/server/updatePassword.php",
        data:{password,id},
        success(res){
            document.getElementById("password1").value = ""
            document.getElementById("password2").value = ""
            document.getElementById("password3").value = ""
            /* 修改sessionStorage里面的密码 */
            userInfo.m_password = password
            //将对象修改JSON,再存储到sessionStorage
            sessionStorage.setItem("loginUserInfo",JSON.stringify(userInfo))

            location.href = '../html/home.html';
        }
    })
}
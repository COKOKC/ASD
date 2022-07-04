/* 渲染头部的三个
        1. 时间
        2. 名字
*/
renderHeader();
function renderHeader(){
    /* 渲染欢迎谁登录 */
    let span = document.querySelector(".header .right span")
    //渲染名字
    let userInfo = JSON.parse(sessionStorage.getItem("loginUserInfo"));
    span.innerHTML = `欢迎你!${userInfo.m_name}`

    /* 时间 */
    /* 创建一个时间对象 */

    const time = document.querySelector(".header .left")
    const d = new Date();//获取到的就是当前时间
    time.innerHTML = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分${d.getSeconds()}秒`
    setInterval(() => {
        const d = new Date();//获取到的就是当前时间
        time.innerHTML = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分${d.getSeconds()}秒`
    }, 1000);
    
    
   
    
    
    
   
}

function logout(){
    //清除登录
    delCookie("login");
    sessionStorage.removeItem("loginUserInfo")
    //退出到登录页面
    location.href = '../html/login.html'
}
/* 
    根据key获取cookie value值
*/
function getCookie(key){
    //获取所有顶点cookie
    let cookie = document.cookie
    //对cookie进行切割
    let arr = cookie.split("; ")

    //定义一个变量,用来接收cookie对应key的value值
    let val = ''
    arr.forEach(item=>{
        let k = item.split('=')[0]
        let v = item.split('=')[1]
        // console.log(k,v);
        //如果传入进行的key = k // cookie 当中 key
        if(k === key){
            //cookie当中的value值
            val = v;
        }
    })
    return val;
}
/* 
    设置cookie
        key,value   => 他要设置的会话cookie
        key,value,expires => 持久化cookie
        过期时间的单位是 秒
*/
function setCookie(key,value,expires){
    //获取当前时间的时间戳
    let date = +new Date();
    //计算过期时间的毫秒值
    let dd = date - 8 * 60 * 60 * 1000 + expires * 1000
    //将时间戳转换成时间
    let time = new Date(dd)

    // document.cookie = "c=30;expires="+time
    document.cookie = `${key}=${value};expires=${expires?time:''}`
}

/* 删除cookie
*/
function delCookie(key){
    //设置cookie过期时间为-1,表示过期
    console.log("删除cookie");
    setCookie(key,'',-1)
}
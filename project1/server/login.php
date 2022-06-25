<?php
header("content-type:text/html;charset=utf-8");
mysql_connect("127.0.0.1","root","root");
mysql_select_db("student");

$username = $_GET["username"];
$password = $_GET["password"];
$sql = "select * from manager where m_username = '$username' and m_password = '$password'";
$res = mysql_query($sql);//执行SQL => 结果
$row = mysql_fetch_assoc($res);
if(!$row){
    print_r ("账号密码错误");
}else{
    /* 账号登录成功 */
    print_r (json_encode($row));
}
?>
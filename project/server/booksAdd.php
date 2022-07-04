<?php
include './base.php';

$card = $_POST['card'];
$bookname = $_POST['bookname'];
$adminname = $_POST['adminname'];
$username = $_POST['username'];
$begintime = $_POST['begintime'];
$sql = "insert into history value (null,'$card','$bookname','$adminname','$username','$begintime','请及时归还')";
$res = mysql_query($sql);//执行SQL => 结果

print_r("添加成功完毕!");
?>
<?php
include './base.php';

$username = $_POST['username'];
$password = $_POST['password'];
$name = $_POST['name'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$classId = $_POST['classId'];
$sql = "insert into student value (null,'$username','$password','$name','$gender',$age,$classId)";
$res = mysql_query($sql);//执行SQL => 结果

print_r("添加成功完毕!");
?>
<?php
include './base.php';

$username = $_POST['username'];
$password = $_POST['password'];
$name = $_POST['name'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$classId = $_POST['classId'];
$id = $_POST['id'];

$sql = "update student set s_username = '$username',s_password='$password',s_name = '$name',s_gender = '$gender',s_age = $age,s_classId = $classId where s_id = $id";
$res = mysql_query($sql);//执行SQL => 结果

print_r("修改成功!");
?>
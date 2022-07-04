<?php
include './base.php';

$card = $_POST['card'];
$bookname = $_POST['bookname'];
$adminname = $_POST['adminname'];
$username = $_POST['username'];
$begintime = $_POST['begintime'];
$endtime=$_POST['endtime'];
$id = $_POST['id'];

$sql = "update history set card = '$card',bookname='$bookname',adminname = '$adminname',username = '$username',begintime = '$begintime',endtime= '$endtime' where hid = $id";
$res = mysql_query($sql);//执行SQL => 结果

print_r("修改成功!");
?>
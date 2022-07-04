<?php
include 'base.php';
$addName = $_POST['addName'];
$addBid = $_POST['addBid'];
$addCard = $_POST['addCard'];
$addAutho = $_POST['addAutho'];
$addPress = $_POST['addPress'];
$addType = $_POST['addType'];
$sql = "insert into book value(null,'$addName','$addCard','$addAutho','$addPress','$addType')";
$res = mysql_query($sql);
print_r("添加成功完毕!");
?>
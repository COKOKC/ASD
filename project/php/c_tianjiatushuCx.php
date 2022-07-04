<?php
include '../php/base.php';
$addName = $_POST['addName'];
$addCard = $_POST['addCard'];
$addAutho = $_POST['addAutho'];
$addPress = $_POST['addPress'];
$addType = $_POST['addType'];

$sql = "INSERT INTO book VALUE(null,'$addName','$addCard','$addAutho','$addPress','$addType')";
$res = mysql_query($sql);
print_r("添加成功完毕!");
?>

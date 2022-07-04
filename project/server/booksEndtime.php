<?php
include './base.php';

$endtime = $_GET['endtime'];
$id = $_GET['id'];


$sql = "update history set endtime= '$endtime' where hid = $id";
$res = mysql_query($sql);//执行SQL => 结果

print_r("谢谢归还！！");
?>
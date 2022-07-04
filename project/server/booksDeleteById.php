<?php
include './base.php';
$id = $_GET['id'];
$sql = "delete from history where hid = ${id}";
$res = mysql_query($sql);//执行SQL => 结果

print_r("删除完毕!")
?>
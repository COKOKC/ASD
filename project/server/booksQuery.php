<?php
include './base.php';
$id = $_GET["id"];
$sql = "select * from history where hid = $id";
$res = mysql_query($sql);//执行SQL => 结果
$row = mysql_fetch_assoc($res);
print_r(json_encode($row));
?>
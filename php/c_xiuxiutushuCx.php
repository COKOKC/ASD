<?php
include '../php/base.php';
$id = $_GET["id"];
$sql = "select * from book where bid = $id";
$res = mysql_query($sql);//执行SQL => 结果
$row = mysql_fetch_assoc($res);
print_r(json_encode($row));
?>
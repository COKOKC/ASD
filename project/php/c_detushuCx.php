<?php
include 'base.php';
$id=$_GET['id'];
$sql = "delete from book where bid = ${id}";
$res = mysql_query($sql);
print_r('删除完毕！')
?>
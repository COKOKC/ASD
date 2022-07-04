<?php
include './base.php';
$sql = "select * from class";
$res = mysql_query($sql);//执行SQL => 结果
// var_dump($res);
$row = mysql_fetch_assoc($res);
var_dump($row);
$arr = array();
// while($row = mysql_fetch_assoc($res)){
//     array_push($arr,$row);
// }

print_r(json_encode($arr))
?>
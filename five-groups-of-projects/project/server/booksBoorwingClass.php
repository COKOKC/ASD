<?php
include './base.php';

$sql = "select * from history";
$res = mysql_query($sql);//执行SQL => 结果

$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}

print_r(json_encode($arr))
?>
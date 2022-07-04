<?php
include './base.php';

$name = $_GET["name"];

// 多表联查
// $sql = "select * from history inner Join book where history.bid = book.bid and book.name like '%红楼梦%'";
$sql = "select * from history where username like '%$name%'";
$res = mysql_query($sql);//执行SQL => 结果

$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}

print_r(json_encode($arr))
?>
<?php
include 'base.php';
$sql = 'select * from booktype';
$res = mysql_query($sql);
$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
print_r(json_encode($arr));
?>
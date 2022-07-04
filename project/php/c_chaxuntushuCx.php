<?php
include '../php/base.php';
$name = $_GET['name'];
$sql = "select * from  book inner join booktype where book.type = booktype.tid and name like '%$name%'";
$res = mysql_query($sql);
$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
print_r(json_encode($arr));
?>
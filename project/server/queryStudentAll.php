<?php
include './base.php';
$sql = "select * from class inner join student where class.`c_id` = student.s_classid";
$res = mysql_query($sql);//执行SQL => 结果

$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}

print_r(json_encode($arr))
?>
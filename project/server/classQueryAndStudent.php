<?php
include './base.php';
$id = $_GET["id"];//班级ID
$sql = "select * from class inner join student where class.c_id = student.s_classId and class.c_id = $id";
$res = mysql_query($sql);//执行SQL => 结果
$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
print_r(json_encode($arr))
?>
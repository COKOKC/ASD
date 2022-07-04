<?php
include './base.php';
$gender = $_GET["gender"];
$sql = "select * from student inner Join class where class.c_id = student.s_classId and s_gender = '$gender'";
$res = mysql_query($sql);//执行SQL => 结果
$arr = array();
while($row = mysql_fetch_assoc($res)){
    array_push($arr,$row);
}
print_r(json_encode($arr));
?>
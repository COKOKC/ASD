<?php
include '../php/base.php';

$username = $_POST['username'];
$Card = $_POST['Card'];
$Autho = $_POST['Autho'];
$Press = $_POST['Press'];
$Type = $_POST['Type'];
$Bid = $_POST['Bid'];
$sql = "update book set name = '$username',card='$Card',autho = '$Autho',press = '$Press',type = '$Type' where bid = $Bid";
$res = mysql_query($sql);
print_r('修改成功！');
var_dump($res);
?>
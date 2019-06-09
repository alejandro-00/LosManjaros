<?php 
include 'connection.php';

$stbi=$conn->prepare("SELECT GENDER, count(NICK_NAME) AS total from users GROUP BY GENDER;");
$stbi->setFetchMode(PDO::FETCH_ASSOC);
$stbi->execute();
$res=$stbi->fetch();

echo json_encode($res);

$conn=null;

?>
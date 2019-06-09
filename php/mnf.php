<?php
include 'connection.php';

$stbi = $conn->prepare("SELECT TYPE_ID,TITLE,SUBTITLE,AUTOR,SOURCE,IMG,TXT,LINK,DAT FROM news where 'TYPE_ID' = 0");
$stbi->setFetchMode(PDO::FETCH_ASSOC);
$stbi->execute();
$data=$stbi->fetchAll();
print_r($data);
echo json_encode($data);

$conn = null;
?>
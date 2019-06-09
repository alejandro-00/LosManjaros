<?php
include 'connection.php';
$stbi = $conn->prepare("INSERT  INTO news(TYPE_ID,TITLE,SUBTITLE,AUTOR,SOURCE,IMG,TXT,LINK,DAT) 
VALUES (?,?,?,?,?,?,?)");

$conn = null;
?>

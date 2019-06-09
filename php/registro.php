<?php 
include 'connection.php';

$user=json_decode($_POST[""]);

try{
    $stbj=$conn->prepare("INSERT INTO users VALUES ('?,?,?,?,?,?')");
    $stbj->bindParam(1,$user['NICK_NAME']);
    $stbj->bindParam(2,$user['FNAME']);
    $stbj->bindParam(3,$user['LNAME']);
    $stbj->bindParam(4,$user['E_MAIL']);
    $stbj->bindParam(5,$user['PSWD']);
    $stbj->bindParam(6,$user['GENDER']);
    $stbj->bindParam(6,$user['ID_PERFIL']);
    $stbj->execute();
}catch(PDOException $e){
    echo 'Message: '.$e->getMessage();
}

$conn=null;

?>
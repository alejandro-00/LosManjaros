<?php

$user=json_decode($_POST["user"]);

include 'connection.php';
$stbi=$conn->prepare("SELECT NICK_NAME, E_MAIL FROM users where NICK_NAME = $user->name or E_MAIL = $user->email");
$stbi->setFetchMode(PDO::FETCH_ASSOC);
$stbi->execute();
$res=$stbi->fetch();
if($user->name==$res['NICK_NAME']){
    echo 1;
}
elseif($user->email==$res['E_MAIL']){
    echo 2;
}else echo 3;
?>
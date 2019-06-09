<?php
include 'connection.php';
session_start();

$data = json_decode($_GET["x"]);
$user=[];
$user[0]=filter_var($data->name,FILTER_SANITIZE_SPECIAL_CHARS);
$user[1]=filter_var($data->pswd,FILTER_SANITIZE_SPECIAL_CHARS);
try {
    $stbi = $conn->prepare("SELECT * FROM users WHERE NICK_NAME='$user[0]' AND PSWD='$user[1]';");
    $stbi->setFetchMode(PDO::FETCH_ASSOC);
    $stbi->execute();
    $res = $stbi->fetch();
    //print_r($res);
    if($res['NICK_NAME']!=null){
        $_SESSION['userid']=$res['ID_PERFIL'];
        $_SESSION['pswd']=$res['PSWD'];
        echo $res['ID_PERFIL'];
    }
    else {echo "3";}
}
catch (PDOException $e) {
    echo 'Message: '.$e->getMessage();
}

$conn = null;

?>
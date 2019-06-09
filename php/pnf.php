<?php
error_reporting(0);
header('Content-type: application/json; charset=utf-8');

$conexion = new mysqli('localhost', 'root', '', 'concurso');
if($conexion->connect_errno){
	$respuesta = [
		'error'=> true];
}else{
$prueba = $conexion->prepare
("
SELECT
	TYPE_ID,
	TITULO,
	SUBTITLE,
	AUTOR,
	SOURCE,
	IMG,
	TXT,
	LINK,
	DAT
FROM
	news
ORDER BY
	NEW_ID DESC
LIMIT 8 ");
$prueba->execute();
$resultados = $prueba->get_result();

	$respuesta = [];
	while ($fila = $resultados->fetch_assoc()) {
		$resultadoQue = [
			'LINK' => $fila['LINK'],
			'IMG' => $fila['IMG']
		];
		array_push($respuesta, $resultadoQue);
		}
	}
	//print_r($respuesta);
	echo json_encode($respuesta);
?>

<?php 
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE `profesores` SET 
    `pCodigo`='$params->pCodigo',
    `pNombre`='$params->pNombre', 
    `pDetalles`='$params->pDetalles'
    WHERE `pId` ='$params->pId' LIMIT 1");
    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'EL PROFESOR SE ACTUALIZO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
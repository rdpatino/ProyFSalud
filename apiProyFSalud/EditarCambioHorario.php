<?php 
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  //UPDATE `materias` SET `matHorarios` = 'Horario 7' WHERE `materias`.`matId` = 6;
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE `materias` SET `matHorarios`='$params->matHorarios' WHERE `matId` ='$params->matId' LIMIT 1");
    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'LA MATERIA SE ACTUALIZO EXITOSAMENTE';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>
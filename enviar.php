<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$quien_contacta = $_POST['quien_contacta'];
$comentario = $_POST['comentario'];

$header = 'From: ' . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su e-mail es: " . $correo . " \r\n";
$message .= "Tipo de organización: " . $quien_contacta . " \r\n";
$message .= "Mensaje: " . $_POST['comentario'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = '122bd08@gmail.com';
$asunto = 'Página web propia';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
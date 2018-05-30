<?php

$name = $_POST['name'];
$phonenumber = $_POST['phonenumber'];
$helmet = $_POST['helmet'];
$moto = $_POST['moto'];

$to = "sayfullin97@gmail.com";
$subject = "Заявка с сайта";

$message =  "Имя пользователя: ".htmlspecialchars($name)."<br />";
$message .= "Мотоцикл: ".htmlspecialchars($moto)."<br />";
$message .= "Количество шлемов: ".htmlspecialchars($helmet)."<br />";
$message .= "Телефон: <a href='tel:$phonenumber'>".htmlspecialchars($phonenumber)."</a>";

$headers = "From: rentbikes.ru <mail@stastroi.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
header('Location: index.html');

exit();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Создание формы обратной связи</title>
<meta http-equiv="Refresh" content="4; URL=index.html"> 
</head>
<body>

<?php 

$sendto   = "sayfullin97@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name1'];   // сохраняем в переменную данные полученные из поля c именем
$username1 = $_POST['name2']; 
$usertel = $_POST['telephone1']; // сохраняем в переменную данные полученные из поля c телефонным номером
usertel1 = $_POST['telephone2'];
$usersumma = $_POST['summa']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Кому:</strong> ".$username1."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Телефон получателя:</strong> ".$usertel1."</p>\r\n";
$msg .= "<p><strong>Сумма:</strong> ".$usersumma."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<center><p style='font-size:34px;font-weight:bold;'>Спасибо за заявку</p></center>";
} else {
	echo "<center><img src='img/ne-otpravleno.png'></center>";
}

?>

</body>
</html>
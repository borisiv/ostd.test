<?php
sleep(2);
$firstname = trim($_POST['firstname']);
$lastname = trim($_POST['lastname']);
$dob = trim($_POST['dob']);
$iban = trim($_POST['iban']);
$bic = trim($_POST['bic']);
$dt = date('Y-m-d H:i:s');

if($firstname == '' || $lastname == '' || $dob == '' || $iban == '' || $bic == ''){
    echo 'Please fill out fields';
}
else{
    file_put_contents('mock.txt', "$dt $firstname $lastname $dob $iban $bic \n", FILE_APPEND);
    echo '1';
}
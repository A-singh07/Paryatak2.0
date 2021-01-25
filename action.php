<?php


// Database Creddentials
$db_host = 'localhost';
$db_databse = 'paryatak_db';
$db_username = 'root';
$db_password = '';

// form variables
// $email_login = $_POST["login-email"];
// $pwd = $_POST["loginPassword"];
$name = $_POST["name"];
$email = $_POST["regis-email"];
$pwd = $_POST["regis-pass"];
$pwd_conf = $_POST["conf-pass"];

$con = mysqli_connect($db_host, $db_username, $db_password, $db_databse);

$sql = "INSERT INTO 'user' ('id', 'name', 'email', 'password') VALUES ('1', '$name', '$email', '$pwd');";

$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "user Registered";
}

<?php
//var_dump($_GET); //either or

//var_dump($_POST['name']); // this case, we use post

if(empty($_POST)) {
    echo 'NOOOO!';
    exit;
} //ensuring that the form is not empty

$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'csyrrel@gmail.com'; // can be anything

//some validations bc forms are open to the public
if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}
if(isset($_POST['email'])){
    $email = str_replace(array("\r", "\n", "%0a","%0d"), '', $_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL); //this checks if email is valid
}
if(isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}
if(isset($_POST['message'])){
    $message = $_POST['message'];
}

$headers = [
    'From'=>'noreply@syrrel.ca',
    'Reply-To'=>$name.'<'.$email.'>'
];

if(mail($recipient, $subject, $message, $headers)){
    echo '<p>Thank you for contacting me, '.$name.'. You will get a reply within 24 hours</p>';
}else{
    echo '<p>We are sorry but the email did not go through</p>';
}
?>
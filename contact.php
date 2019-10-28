<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['mail'];
    $organization = $_POST['organization'];
    $message = $_POST['message'];

    $email_from = "latsadavanh@gmail.com"
    $email_subject =" New form Submission";
    $email_body = "User Name: $name.\n"."User Email: $visitor_email.\n"."User Message: $message.\n";

    $to = "latsadavanh@gmail.com"
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: contact.html");

?>
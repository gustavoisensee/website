<?php
	if($_POST){
		$to = 'gustavo.isensee@gmail.com';
	    $name = $_POST['name'];
	    $email = $_POST['email'];
	    $subject = $_POST['subject'];
	    $message = "Name: " . $name . "\n" .
	    		   "From: " . $email . "\n" .
	    		   "Subject: " . $subject . "\n" .
	    		   "Message: " . $_POST['message'];

		//send email
	    mail($to, $subject, $message);
	}
?>
<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
 	$from_name = $request->name;
 	$from_surname = $request->surname;
 	$from_email = $request->email;
 	$from_checkindate = $request->checkindate;
	$from_checkoutdate = $request->checkoutdate;
	$from_room_selector = $request->room_selector;
	$comments = $request->comments;
 
	$to_email = "info@casaxaime.com";
 
	$contact = "<p><strong>Nombre:</strong> $from_name</p>
				<p><strong>Apellidos:</strong> $from_surname</p>
				<p><strong>Email:</strong> $from_email</p>
				<p><strong>Fecha de entrada:</strong> $from_checkindate</p>
				<p><strong>Fecha de salida:</strong> $from_checkoutdate</p>
				<p><strong>Nº habitaciones:</strong> $from_room_selector</p>";
	$content = "<p><strong>Comentarios adicionales:</strong> </p><p>$comments</p>";
 
	$website = '[CasaXaime.com]';
	$email_subject = "$website: Nueva reserva en www.casaxaime.com";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
 
	mail($to_email,$email_subject,$email_body,$headers);
 
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
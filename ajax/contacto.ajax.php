<?php

require_once "../controllers/contact.controller.php";
require_once "../models/contact.model.php";
class AjaxContact{

	public $name;
	public $last;
	public $email;
	public $it;
	public $web;
	public $social;
	public $net;
	public $message;
	private $data;

	public function ajaxSaveContact(){

		$data = array (
			'name' =>$this->name,
			'last' =>$this->last,
			'email' =>$this->email,
			'it' =>$this->it,
			'web' =>$this->web,
			'social' =>$this->social,
			'net' =>$this->net,
			'message' =>$this->message

		 );

		$response =  ContactController::ctrSaveContact($data);

		echo $response;

	}

}


/*=============================================
               SAVE CONTACT
=============================================*/
if (isset($_POST["message"])) {
	
	$contacto = new AjaxContact();
	$contacto -> name = $_POST["name"];
	$contacto -> last = $_POST["last"];
	$contacto -> email = $_POST["email"];
	$contacto -> it = $_POST["it"];
	$contacto -> web = $_POST["web"];
	$contacto -> social = $_POST["social"];
	$contacto -> net = $_POST["net"];
	$contacto -> message = $_POST["message"];
    $contacto -> ajaxSaveContact();


}
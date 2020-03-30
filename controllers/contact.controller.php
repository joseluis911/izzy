<?php


class ContactController{



	static public function ctrSaveContact($data){

		$table = "contact";

		$response = ModelContact::mdlSaveContact($data, $table);

		return $response;

	}
}
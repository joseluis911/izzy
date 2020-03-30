<?php

require_once "conection.php";
class ModelContact{

	static public function mdlSaveContact($data, $table){

		$stmt = Conection::conect()->prepare("INSERT INTO $table(name, last, email, it, web, social, net, message) VALUES (:name, :last, :email, :it, :web, :social, :net, :message)");

		$stmt->bindParam(":name", $data["name"], PDO::PARAM_STR);
		$stmt->bindParam(":last", $data["last"], PDO::PARAM_STR);
		$stmt->bindParam(":email", $data["email"], PDO::PARAM_STR);
		$stmt->bindParam(":it", $data["it"], PDO::PARAM_STR);
		$stmt->bindParam(":web", $data["web"], PDO::PARAM_STR);
		$stmt->bindParam(":social", $data["social"], PDO::PARAM_STR);
		$stmt->bindParam(":net", $data["net"], PDO::PARAM_STR);
		$stmt->bindParam(":message", $data["message"], PDO::PARAM_STR);

		if ($stmt->execute()) {
			return "ok";
		}else{
			return "error";
		}
	}
}


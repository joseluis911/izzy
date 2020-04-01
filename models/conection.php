<?php


class Conection{

	public function conect(){

		$link = new PDO("mysql:host=localhost:3306;dbname=izzy",
						"izzy_sql_user",
						"gbACM7gH]G@Y",
						array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		                      PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
						);

		return $link;

	}


}
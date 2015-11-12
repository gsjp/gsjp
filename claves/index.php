<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, height=device-height, minimum-scale=1.0, maximum-scale=1.0" />
	<title>Traductor de Claves Scouts</title>
	<link type="text/css" href="TraduClaves.css" rel="Stylesheet" />
	<script src="TraduClaves.js"></script>
	<?php $claves = simplexml_load_file("claves.xml"); ?>
</head>
<body id="main_body" >
	<div id="form_container">
		<h1>
			<a>Traductor de Claves Scouts</a>
		</h1>
		<form name="form1" >
			<label class="description" for="element_3">Clave</label>
			<div>
				<select name="clave" onchange="execTraduc()">
					<?php foreach ($claves->children() as $clave) {
						echo "<option value=\"".$clave['id']."|".$clave->nombre."|".$clave->origen."|".$clave->destino."\">".$clave->nombre."</option>\n\t\t\t\t\t" ;
					}
					?>
					<option value="90" >Morse</option>
				</select>
			</div>
			<label class="description" for="entrada">Texto a traducir</label>
			<div>
				<textarea name="entrada" class="ui_txtarea_in" _rows="6" _cols="60"></textarea>
			</div>
			<label class="description" for="salida">Resultado</label>
			<div>
				<textarea name="salida" class="ui_txtarea_out" _rows="6" _cols="60"></textarea>
			</div>
			<input type="button" name="button" onclick="execTraduc()"  value="Traducir" />
		</form>
	</div>
</body>
</html>
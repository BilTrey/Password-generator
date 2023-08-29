<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>password generator</title>
	<link rel="stylesheet" type="text/css" href="password.css">
	<!-- <link rel="stylesheet" type="text/css" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"> -->
</head>
<body>
	<div class="main_container">
			
	<div class="login_form">
			<h1 style="font-family: sans-serif; font-size: 3vw; color: darkred;">Enter your login details</h1>
			<form>
				<label>Email</label>
				<input type="email" name="email" placeholder="enter your email" id="set_email"><br>
				<label>password</label>
				<input type="password" name="password" placeholder="enter your password" id="set_pass"><br>
				<button id="btn2" onclick="setup_login()">Log in</button>
			</form>
		</div>
	</div>
	
</body>
<script src="password.js"></script>
</html>






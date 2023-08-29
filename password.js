function check(){
		let email=document.getElementsByClassName('emaill')[0].value;
		let pass=document.getElementsByClassName('passs')[0].value;
		if(email.split('@').length-1 == 1){
			if (email.split('gmail.com').length-1==1) {
				localStorage.setItem('email',email);
				document.getElementsByClassName('emaill')[0].value="";
		}
		else{
			document.getElementsByClassName('emaill')[0].value="not valid email";
		}
		}else{
			document.getElementsByClassName('emaill')[0].value="not valid email";
		}

		

		let count=0;
		for (var i = 0; i<pass.length; i++) {
			if (pass[i].toUpperCase()===pass[i]){
				count+=1;
			}
		}

		if(count < 1){
			document.getElementsByClassName('passs')[0].value="1 uppercase is required";
		}

		if(pass.length < 7){
			console.log("not valid password");
			document.getElementsByClassName('passs')[0].value="password must be greater than 10";
		}

		if (count >= 1 && pass.length > 7) {
			localStorage.setItem('password',pass)
			document.getElementsByClassName('passs')[0].value="";
		}

		if (email.split('@').length-1 == 1 && email.split('gmail.com').length-1==1 && count >= 1 && pass.length > 7) {
			document.getElementsByClassName('login_form')[0].style.display='block';
			document.getElementsByClassName('pass_gen')[0].style.display='none';
		}
}

function setup_login(){
	let set_email=document.getElementById('set_email').value;
	let set_pass=document.getElementById('set_pass');
	if(set_email != localStorage.getItem('email')){
		document.getElementById('set_email').value="wrong email";
	}

	if(set_pass.value != localStorage.getItem('password')){
		document.getElementById('set_pass').value="wrong password";
		window.prompt("wrong password")
	}

	if(set_email == localStorage.getItem('email') && set_pass.value == localStorage.getItem('password')){
		window.location.href="home.html";
	}
}










